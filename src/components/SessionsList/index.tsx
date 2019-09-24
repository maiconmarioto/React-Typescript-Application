import React, { PureComponent } from "react";
import moment from "moment";
import ClipLoader from "react-spinners/ClipLoader";

import { Sessions, Session } from "../../store/ducks/sessions/types";
import {
  BoldTextClickable,
  Table,
  Thead,
  Tbody,
  TR,
  TD,
  TH,
} from "../shared/styles";

interface Props {
  sessions: Sessions;
  loading: boolean;
  error: boolean;
}

interface State {
  selectedSessions: number[];
}

class SessionsList extends PureComponent<Props, State> {
  state = {
    selectedSessions: [],
  };

  handleRowClick = (session: Session) => {
    const selectedSessions: number[] = this.state.selectedSessions;

    if (selectedSessions.includes(session.sessionId)) {
      const newList = selectedSessions.filter(
        selected => selected !== session.sessionId,
      );

      return this.setState({
        selectedSessions: [...newList],
      });
    }

    return this.setState({
      selectedSessions: [...selectedSessions, session.sessionId],
    });
  };

  handleEndSession = () => {
    console.log("Botão clicado");
  };

  normalizeDate(date: Date) {
    return moment(date).format("DD/MM/YYYY (HH:mm)");
  }

  renderClosingSession = (session: Session) => {
    const selectedSessions: number[] = this.state.selectedSessions;

    if (selectedSessions.includes(session.sessionId)) {
      return (
        <TD>
          <BoldTextClickable onClick={this.handleEndSession}>
            Encerrar Sessão
          </BoldTextClickable>
        </TD>
      );
    }

    return <TD>{this.normalizeDate(session.endDateTime)}</TD>;
  };

  render() {
    const { loading, error, sessions } = this.props;
    const selectedSessions: number[] = this.state.selectedSessions;

    return (
      <>
        <Table>
          <Thead>
            <TR>
              <TH>Operador</TH>
              <TH>Abertura da sessão</TH>
              <TH>Fechamento da Sessão</TH>
            </TR>
          </Thead>
          <Tbody>
            {loading && (
              <div className="loader-container">
                <ClipLoader
                  sizeUnit={"px"}
                  size={150}
                  color={"#1e5168"}
                  loading={loading}
                />
              </div>
            )}
            {error && <div>Ops, estamos com problemas nos servidores</div>}
            {!!sessions.content.length &&
              sessions.content.map((session, index) => (
                <TR
                  key={index}
                  selected={selectedSessions.includes(session.sessionId)}
                  onClick={() => this.handleRowClick(session)}
                >
                  <TD>{session.userName}</TD>
                  <TD>{this.normalizeDate(session.startDateTime)}</TD>
                  {this.renderClosingSession(session)}
                </TR>
              ))}
          </Tbody>
        </Table>
      </>
    );
  }
}

export default SessionsList;

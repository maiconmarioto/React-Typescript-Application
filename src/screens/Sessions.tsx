import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SessionsList from "../components/SessionsList";
import * as SessionsAction from "../store/ducks/sessions/actions";
import { ApplicationState } from "../store";
import Footer from "../components/Footer";
import {
  Container,
  SearchInput,
  SearchButton,
  InputBox,
  Header,
} from "../components/shared/styles";
import { DropDownButton } from "../components/shared/Buttons";

const Sessions: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SessionsAction.loadRequest());
  }, [dispatch]);

  const { sessions, loading, error } = useSelector(
    (state: ApplicationState) => state.sessions,
  );

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      console.log(e.currentTarget.value);
    }
  };

  const exportActions = [
    { name: "CSV", action: () => console.log("Exportar para CSV") },
    { name: "Excel", action: () => console.log("Exportar para Excel") },
  ];

  return (
    <>
      <Container>
        <Header>
          <DropDownButton name="Exportar" actions={exportActions} />
          <InputBox>
            <SearchInput
              onKeyDown={handleEnterPress}
              type="text"
              placeholder="Pesquise &#xF002;"
              style={{ fontFamily: "Arial, FontAwesome" }}
            />
            <SearchButton />
          </InputBox>
        </Header>
        <SessionsList sessions={sessions} error={error} loading={loading} />
      </Container>
      <Footer />
    </>
  );
};

export default Sessions;

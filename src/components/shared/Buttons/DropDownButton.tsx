import React from "react";
import { Dropdown } from "../styles/ButtonStyle";

interface Action {
  name: string;
  action: Function;
}

interface Props {
  name: string;
  actions: Action[];
}

export default function DropDownButton({ name, actions }: Props) {
  return (
    <Dropdown>
      <label className="dropdown">
        <div className="button">{name}</div>

        <input type="checkbox" className="input" id="test" />

        <ul className="menu">
          {actions.map((action: Action, index: number) => (
            <li key={index} onClick={() => action.action()}>
              {action.name}
            </li>
          ))}
        </ul>
      </label>
    </Dropdown>
  );
}

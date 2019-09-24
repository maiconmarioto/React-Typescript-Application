import styled from "styled-components";

export const Dropdown = styled.div`
  background-color: #52bc76;
  color: white;
  border-radius: 4px;
  height: 35px;

  label {
    display: inline-block;
    position: relative;
  }

  .button {
    height: 35px;
    font-weight: bold;
    background-color: #52bc76;
    cursor: pointer;
    white-space: nowrap;
    display: inline-block;
    border-radius: 8px;
    padding: 10px 40px 20px 20px;
  }

  .button:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
  }

  .button:hover {
    background-color: #52bc76;
    border-radius: 4px;
  }

  .input {
    display: none;
  }

  .menu {
    position: absolute;
    top: 100%;
    border-radius: 8px;
    padding: 0;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #52bc76;
    list-style-type: none;
  }

  .input + .menu {
    display: none;
  }

  .input:checked + .menu {
    display: block;
    margin-top: -6px;
  }

  .menu li {
    padding: 10px 20px;
    cursor: pointer;
    white-space: nowrap;
  }

  .menu li:hover {
    background-color: #31a95a;
    border-radius: 4px;
  }

  .menu li a {
    display: block;
    margin: -10px -20px;
    padding: 10px 20px;
  }

  .menu li.divider {
    padding: 0;
    border-bottom: 1px solid #cccccc;
  }
`;

import styled from "styled-components";

export const SearchInput = styled.input`
  border: 2px solid #1e5168;
  border-radius: 5px;
  width: 260px;
  height: 35px;
  text-align: center;
  margin-right: -5px;

  ::placeholder {
    color: #dde1e6;
    font-style: italic;
  }
`;

export const SearchButton = styled.div`
  height: 35px;
  width: 40px;
  font-weight: bold;
  background-color: #1e5168;
  cursor: pointer;
  white-space: nowrap;
  display: inline-block;
  border-radius: 4px;
  padding: 20px 15px 0px 15px;

  ::after {
    content: "";
    margin-top: 2px;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

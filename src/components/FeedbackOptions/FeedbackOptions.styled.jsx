import styled from '@emotion/styled';

export const BtnWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

export const Button = styled.button`
  margin: 0;
  padding: 4px 7px;
  min-width: 60px;
  cursor: pointer;

  text-transform: capitalize;

  border-color: yellowgreen;
  border-radius: 5px;
  background-image: linear-gradient(45deg, yellowgreen 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;

  :nth-of-type(2) {
    border-color: orange;
    background-image: linear-gradient(45deg, orange 50%, transparent 50%);
  }

  :nth-of-type(3) {
    border-color: red;
    background-image: linear-gradient(45deg, red 50%, transparent 50%);
  }

  transition: background-image 300ms ease-in-out,
    background-position 300ms ease-in-out, background-size 300ms ease-in-out;

  :hover {
    background-position: 0;
  }
`;

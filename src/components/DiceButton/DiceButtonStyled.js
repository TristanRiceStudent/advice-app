import styled from "styled-components";

export const DiceButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.primary.neonGreen};
  padding: 1.5em;
  border: none;
  border-radius: 50%;
  display: grid;
  transition: box-shadow 0.1s linear;

  :hover {
    cursor: pointer;
  }

  @media (hover: hover) and (pointer: fine) {
    :hover,
    :focus-visible {
      outline: none;
      box-shadow: 0px 0px 19px 5px
        ${(props) => props.theme.colors.primary.neonGreen};
    }
  }
`;

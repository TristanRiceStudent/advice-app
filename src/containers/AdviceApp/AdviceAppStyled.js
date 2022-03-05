import styled from "styled-components";

export const AdviceAppStyled = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.colors.secondary.darkBlue};

  .dice-btn {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

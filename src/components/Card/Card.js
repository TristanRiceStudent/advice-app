import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  padding: 2.5em min(4em, 10%) 3.5em;
  background: ${(props) => props.theme.colors.secondary.darkGrayishBlue};
  width: min(90%, 550px);
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

export default Card;

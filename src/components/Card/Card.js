import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  padding: 2em min(4em, 8%) 3em;
  background: ${(props) => props.theme.colors.secondary.darkGrayishBlue};
  width: min(90%, 550px);
  display: flex;
  gap: 1.5em;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

export default Card;

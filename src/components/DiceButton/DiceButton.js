import { IC_DICE } from "../../assets";
import { DiceButtonStyled } from "./DiceButtonStyled";

const DiceButton = ({ onClick, className, ...rest }) => {
  return (
    <DiceButtonStyled onClick={onClick} className={className} {...rest}>
      <img src={IC_DICE} alt="dice icon" />
    </DiceButtonStyled>
  );
};

export default DiceButton;

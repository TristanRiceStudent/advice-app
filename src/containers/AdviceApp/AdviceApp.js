import AdviceId from "../../components/AdviceId/AdviceId";
import AdviceText from "../../components/AdviceText/AdviceText";
import Card from "../../components/Card/Card";
import DiceButton from "../../components/DiceButton/DiceButton";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import Separator from "../../components/Separator/Separator";
import { useAdvice } from "../../hooks/useAdvice";
import { AdviceAppStyled } from "./AdviceAppStyled";

const AdviceApp = ({ role }) => {
  const { advice, isLoading, handleGetAdvice } = useAdvice();

  return (
    <AdviceAppStyled role={role}>
      <Card>
        {isLoading ? (
          <LoadingIcon />
        ) : (
          <>
            <AdviceId adviceId={advice.id} />
            <AdviceText content={advice.advice} />
          </>
        )}
        <Separator />
        <DiceButton className="dice-btn" onClick={handleGetAdvice} />
      </Card>
    </AdviceAppStyled>
  );
};

export default AdviceApp;

import { useState, useEffect } from "react";
import getAdvice from "../api/advice/get-advice";

const ADVICE_DEFAULT = {
  id: 117,
  advice: "Gratitude is said to be the secret to happiness.",
};

export const useAdvice = () => {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cacheEnd, setCacheEnd] = useState(null);

  const handleGetAdvice = () => {
    setIsLoading(true);
    if (cacheEnd && cacheEnd > Date.now()) {
      setTimeout(() => {
        fetchAdviceSlip();
      }, cacheEnd - Date.now());
    } else {
      fetchAdviceSlip();
    }
  };

  const fetchAdviceSlip = () => {
    getAdvice()
      .then((res) => setAdvice(res.data.slip ?? ADVICE_DEFAULT))
      .catch(() => setAdvice(ADVICE_DEFAULT))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchAdviceSlip();
  }, []);

  useEffect(() => {
    setCacheEnd(Date.now() + 2000);
  }, [advice]);

  return {
    advice,
    isLoading,
    handleGetAdvice,
  };
};

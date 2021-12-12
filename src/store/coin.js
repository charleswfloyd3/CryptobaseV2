import { createContext, useContext, useState } from "react";

const CoinContext = createContext({
  data: null,
  setValue: (value) => {}
});

export const useCoin = () => useContext(CoinContext);

function SendCoin({ children }) {
  const [coin, setCoin] = useState();

  const setCoinEvent = (data) => {
    setCoin(data);
    localStorage.setItem("coinselected", JSON.stringify(data))
  };

  const value = { coin, setCoinEvent };

  return (
    <CoinContext.Provider value={value}>{children}</CoinContext.Provider>
  );
  }
export default  SendCoin;


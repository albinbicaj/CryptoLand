import { useEffect, useState } from "react";
import "../../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function MainRoute() {
  const [cryptoList, setCryptoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=1000").then(
      (response) => {
        setCryptoList(response.data["data"]);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <>
      <div className="header">
        <h1>CryptoLand</h1>
      </div>
      <div className="cryptoList">
        {isLoading ? (
          <div className="loadingIndicator">Loading...</div>
        ) : (
          cryptoList.map((coin) => {
            return (
              <div
                className="cryptoItem"
                key={coin.id}
                onClick={() => {
                  navigate(`/currency/${coin.id}`);
                }}
              >
                <h1 className="cryptoSymbol">{coin.symbol}</h1>
                <h2 className="cryptoPrice">${coin.price_usd}</h2>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default MainRoute;

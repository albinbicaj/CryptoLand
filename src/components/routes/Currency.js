import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import Axios from "axios";
import "./Currency.css";
function Currency() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState({
    name: "",
    symbol: "",
    price_btc: "",
    price_usd: "",
    volume24: 0,
  });

  useEffect(() => {
    Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then(
      (response) => {
        setCoin({
          name: response.data[0].name,
          symbol: response.data[0].symbol,
          price_btc: response.data[0].price_btc,
          price_usd: response.data[0].price_usd,
          volume24: response.data[0].volume24,
        });
      }
    );
  }, [id]);

  return (
    <div className="currency-container">
      <h1 className="currency-name">Name: {coin.name}</h1>
      <h2 className="currency-symbol">Symbol: {coin.symbol}</h2>
      <h3 className="currency-price-btc">Price: {coin.price_btc}</h3>
      <h3 className="currency-price-usd">Price in USD: {coin.price_usd}</h3>
      <h3 className="currency-volume">Volume: {coin.volume24}</h3>
      <button
        className="currency-back-button"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Currency;

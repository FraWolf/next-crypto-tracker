import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/stat";
import { useEffect, useState } from "react";
import { getPrice } from "../../utils/apis";

export default function CryptoTicker({ cryptoId }) {
  const [name, setName] = useState("loading");
  const [price, setPrice] = useState(0);
  const [arrowType, setArrowType] = useState("increase");
  const [arrowValue, setArrowValue] = useState(0);

  async function updatePrice() {
    const fetched = await getPrice(cryptoId);
    const data = fetched[0] || {
      name: "Not found",
      current_price: 0,
      price_change_percentage_24h: -1,
    };

    setName(data.name);
    setPrice(data.current_price);
    setArrowValue(Math.abs(data.price_change_percentage_24h));
    setArrowType(
      data.price_change_percentage_24h.toString().startsWith("-")
        ? "decrease"
        : "increase"
    );
  }

  useEffect(async () => {
    const updater = setInterval(await updatePrice.bind(this), 5000);
    return () => clearInterval(updater);
  }, []);

  return (
    <Stat>
      <StatLabel>{name}</StatLabel>
      <StatNumber>{price}</StatNumber>
      <StatHelpText>
        <StatArrow type={arrowType} />
        {arrowValue}%
      </StatHelpText>
    </Stat>
  );
}

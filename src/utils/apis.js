export async function getPrice(id) {
  return await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${id}`
  )
    .then((res) => res.json())
    .then((res) => res[0])
    .catch((error) => null);
}

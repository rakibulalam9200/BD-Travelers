import { useEffect, useState } from "react";
// create useServices hook
const useOffers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/offers";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);
  return [offers, setOffers];
};

export default useOffers;

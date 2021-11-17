import { useEffect, useState } from "react";
// create useServices hook
const useOffers = () => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const url = "https://dry-gorge-55109.herokuapp.com/offers";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setIsLoading(false);
      });
  }, []);
  return [isLoading,offers, setOffers];
};

export default useOffers;

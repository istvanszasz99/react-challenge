import { useState, useEffect } from "react";
import { callApi } from "./call-api";

export const HeroesListFetch = () => {
  const [heroes, setHeroes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const data = await callApi<any[]>("heroes");
        setHeroes(data);
      } catch (error) {
        setError("Failed to fetch heroes.");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  const toggleHeroAvailability = (id: number) => {
    setHeroes((fetchedHeroes) =>
      fetchedHeroes.map((hero) =>
        hero.id === id ? { ...hero, available: !hero.available } : hero
      )
    );
  };
  
  return { heroes, loading, error, toggleHeroAvailability };
};
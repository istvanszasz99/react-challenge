import { HeroesListFetch } from "./heroes-list-fetch";
import HeroListItem from "./heroes-list-item";

function HeroesList() {
  const { heroes, loading, error, toggleHeroAvailability } = HeroesListFetch();

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Heroes</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
        }}
      >
        {heroes.map((hero, index) => (
          <HeroListItem
            key={hero.id}
            hero={hero}
            index={index}
            onToggle={toggleHeroAvailability}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroesList;
type HeroListItemProps = {
  hero: { id: number; name: string; available: boolean };
  index: number;
  onToggle: (id: number) => void;
};

function HeroListItem({ hero, index, onToggle }: HeroListItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
        color: hero.available ? "#328B1D" : "#F60102", // Colors from the source img based on availability 
      }}
      onClick={() => onToggle(hero.id)}
    >
      <span>
        {index + 1}. {hero.name}
      </span>
      {hero.available && <span style={{ marginLeft: "5px" }}>"Available"</span>}
    </div>
  );
}

export default HeroListItem;
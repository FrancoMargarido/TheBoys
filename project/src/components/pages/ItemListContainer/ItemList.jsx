import ProductCard from "../../common/ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;

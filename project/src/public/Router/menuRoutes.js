import Cart from "../../components/pages/cart/Cart";
import ItemDetailContainer from "../../components/pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../../components/common/ItemListContainer/ItemListContainer";
import The7 from "../../components/pages/The7/The7";
import Home from "../../components/pages/home/Home";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "the7",
    path: "/The7:the7",
    Element: The7,
  },
];

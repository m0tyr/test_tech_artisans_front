import { Container } from "@mui/material";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <Container className=" grid gap-5 grid-cols-3">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />

    </Container>
  );
}

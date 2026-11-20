import { Hero } from "./components/Hero/Hero";
import { Story } from "./components/Story/Story";
import { Values } from "./components/Values/Values";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Values />
    </>
  );
};

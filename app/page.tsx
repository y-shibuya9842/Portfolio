import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default Home;
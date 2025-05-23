import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skill from "@/src/components/Skill";
import Work from "@/src/components/Work";
import { fetchAbout } from "./lib/fetchAbout";
import { fetchSkill } from "./lib/fetchSkill";
import { fetchWork } from "./lib/fetchWork";

const Page = async () => {
  const about = await fetchAbout();
  const skills = await fetchSkill();
  const works = await fetchWork();

  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <About id="about" about={about} />
      <Skill id="skill"skills={skills}/>
      <Work id="work" works={works}/>
    </div>
  );
};

export default Page;
import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { cards } from "../../data.js";
import { projects } from "../../data.js";
import MainFeatures from "../../components/mainFeatures/MainFeatures";
import SubFeatures from "../../components/subFeatures/SubFeatures";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <h1 className="slide-heading">Popular services</h1>
      <Slide
        slidesToShow={4}
        arrowsScroll={1}
        centerMode={true}
        autoplay={true}
      >
        {cards.map((card) => (
          <CategoryCard card={card} key={card.id} />
        ))}
      </Slide>
      <MainFeatures />
      <SubFeatures />
      <h1 className="slide-heading">Inspiring work made on Fiverr</h1>
      <Slide
        slidesToShow={3}
        arrowsScroll={1}
        centerMode={true}
        autoplay={true}
      >
        {projects.map((card) => (
          <ProjectCard card={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;

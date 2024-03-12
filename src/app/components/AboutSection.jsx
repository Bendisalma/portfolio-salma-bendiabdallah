"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Node.js, ReactJS, Next.js</li>
        <li>API REST</li>
        <li>Vue.js, HTML, CSS</li>
        <li>AWS, Amazon S3</li>
        <li>MongoDB, SQL et NoSQL</li>
        <li>GitHub</li>
        <li>Java, C#, PHP</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>AEC en Développement de sites web (formtion intensive : 975 heures) - Collège Ahuntsic</li>
        <li>Maîtrise en Ingénierie de la création multimédia et direction artistique - Université Nice Sophia Antipolis</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Création de sites web dynamiques.</li>
        <li>Gestion complète de projets web.</li>
        <li>Résolution de problèmes de développement avec efficacité.</li>
        <li>Habileté au travail en équipe et collaboration interdisciplinaire.</li>
        <li>Disposition à travailler de manière autonome et à prendre des initiatives.</li>
        <li>Analyse pointue des besoins clients et aptitude à établir des relations de confiance avec les clients.</li>
        <li>Utilisation d'outils de versionnement comme Git.</li>
        <li>Sens aigu de l'organisation.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <p className="text-base lg:text-lg text-justify">
            Je suis une développeuse web full-stack avec une passion pour la création d'applications web interactives et réactives. J'ai de l'expérience avec JavaScript, React, Vue.js, Next.js, Node.js, API REST, MongoDB, SQL, HTML, CSS et Git. Une bonne connaissance en C# et Java. J'apprends rapidement et je suis toujours à la recherche d'élargir mes connaissances et compétences. Je suis une joueuse d'équipe et je suis enthousiaste à l'idée de travailler avec d'autres pour créer des applications exceptionnelles.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Éducation{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

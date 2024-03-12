"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const projectsData = [
  {
    id: 1,
    title: "muzea",
    description: "Projet de fin d'étude.",
    image: "/images/projects/muzea/acceuil-magasin.png",
    tag: ["Tout", "muzea"],
    gitUrl: "https://github.com/Bendisalma/muzea.git",
    previewUrl: "https://muzea-magasin.vercel.app/",
    details: {
      screenshots: [
        "/images/projects/muzea/acceuil-magasin.png",
        "/images/projects/muzea/oeuvres-magasin.png",
        "/images/projects/muzea/categories-magazin.png",
        "/images/projects/muzea/compte-magasin.png",
        "/images/projects/muzea/panier-magasin.png",
        "/images/projects/muzea/tableauDeBord-admin.png",
        "/images/projects/muzea/Oeuvres-admin.png",
        "/images/projects/muzea/categorie-admin.png",
        "/images/projects/muzea/commande-admin.png",
        "/images/projects/muzea/administrateurs-admin.png",
        "/images/projects/muzea/ajouterOeuvre-admin.png",
        "/images/projects/muzea/modifieroeuvre-admin.png",
        
      ],
      presentation: "Ce projet de fin d'études consiste en une plateforme e-commerce dédiée à la vente d'œuvres d'art, avec une architecture Full Stack comprenant deux parties distinctes : l'interface d'administration (Admin) et la plateforme de magasin (Magasin). Ce projet offre une expérience complète d'e-commerce d'œuvres d'art, de la gestion administrative à la navigation et l'achat pour les clients.",
      technologiesUsed: ["React", "Next.js", "Next.Auth", "Tailwind", "CSS", "MongoDB", "Amazon S3", "Google Cloud Console", "DialogFlow", "Stripe", "Vercel."],
    },
  },
  {
    id: 2,
    title: "TortuePedia",
    description: "Laboratoire Vuetify",
    image: "/images/projects/TortuePedia/home.png",
    tag: ["Tout", "TortuePedia"],
    gitUrl: "https://github.com/Bendisalma/TortuePedia.git",
    
    details: {
      screenshots: [
        "/images/projects/TortuePedia/home.png",
        "/images/projects/TortuePedia/login.png",
        "/images/projects/TortuePedia/signup.png",
        "/images/projects/TortuePedia/tortue.png",
        "/images/projects/TortuePedia/editTortue.png",
        "/images/projects/TortuePedia/addTortue.png",
        "/images/projects/TortuePedia/users.png"
        
       
      ],
      presentation: "Ce projet laboratoire est une application web développée avec Vue.js, mettant en vedette des tortues d'une façon très ironique. Les utilisateurs peuvent naviguer, créer, modifier et supprimer des tortues, ainsi que découvrir d'autres utilisateurs de la plateforme.",
      technologiesUsed: ["vue.js", "Vue Router", "Vuetify", "Axios"],
    },
  },
  {
    id: 3,
    title: "Wanted Robots",
    description: "Laboratoire C#",
    image: "/images/projects/WantedRobot/home.png",
    tag: ["Tout", "WantedRobot"],
    gitUrl: "https://github.com/Bendisalma/Robots.git",
    details: {
      screenshots: [
        "/images/projects/WantedRobot/home.png",
        "/images/projects/WantedRobot/details.png",
        "/images/projects/WantedRobot/mettreajour.png",
        "/images/projects/WantedRobot/ajouterRobot.png",
        "/images/projects/WantedRobot/supprimer.png",
      ],
      presentation: "Wanted Robots est une application web développée en utilisant le langage C# dans le cadre d'un projet de laboratoire. L'application permet de répertorier des robots recherchés, fournissant des informations telles que leur nom, leur taille, leur poids et leur pays d'origine. Les utilisateurs peuvent accéder aux détails des robots en utilisant leur identifiant, ainsi que réaliser des actions telles que l'ajout, la mise à jour et la suppression de robots par son identifiant. De plus, il est possible de rechercher un robot spécifique par son pays. Ce projet vise à fournir une interface conviviale pour gérer les robots recherchés et à démontrer les compétences en développement web avec C# et les technologies associées.",
      technologiesUsed: ["C#"," ASP.NET Core", "SQL Server"],
    },
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Tout");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mes Projets
      </h2>
      <div className="text-white flex flex-col md:flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tout"
          isSelected={tag === "Tout"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="muzea"
          isSelected={tag === "muzea"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="TortuePedia"
          isSelected={tag === "TortuePedia"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WantedRobot"
          isSelected={tag === "WantedRobot"}
        />
      </div>
      <ul
        ref={ref}
        className={`${
          tag === "Tout" ? "grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12" : ""
        }`}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            {tag === "Tout" ? (
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            ) : (
              <ProjectDetails
                title={project.title}
                screenshots={project.details.screenshots}
                presentation={project.details.presentation}
                technologiesUsed={project.details.technologiesUsed}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

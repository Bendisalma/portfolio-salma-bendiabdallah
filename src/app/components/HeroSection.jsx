"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const handleDownload = () => {
    
    window.open("/CV/BENDIABDALLAH-Salma-CV.pdf", "_blank");
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 col-span-12 place-self-center text-center md:text-left justify-self-start"
        >
          <h1 className="text-white mb-4  text-5xl lg:leading-normal font-extrabold">
            <span className="lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Bonjour, je m'appelle Bendiabdallah Salma, je suis{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "développeuse web",
                1000,
                "problème solver",
                1000,
                "passionnée par l'UX",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base md:text-lg mb-6 md:mr-20 text-justify">
            Exploratrice du code, tout juste diplômée et avide de découvertes.
            Créative dans l'art du développement et prête à explorer, à coder et
            à découvrir l'infini monde des possibles.
          </p>
          <div className="mb-40">
            <Link
              href="/#contact"
              className="text-lg px-6 inline-block py-3 w-full md:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Recrutez-moi
            </Link>
            <a
              href="/CV/BENDIABDALLAH-Salma-CV.pdf"
              className="text-lg px-1 inline-block py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              onClick={handleDownload}
              download="BENDIABDALLAH-Salma-CV.pdf"
              
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Télécharger CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center md:mt-8 lg:mt-0 order-first md:order-last"
        >
          <div className="rounded-full bg-gradient-to-r from-primary-400 to-secondary-600 sm:w-[500px] sm:h-[500px] relative overflow-hidden mb-8 md:mb-0">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="relative transform -translate-x-1 -translate-y-1 "
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

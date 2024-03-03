import React from "react";
import { motion } from "framer-motion";

const ProjectDetails = ({ screenshots, presentation, technologiesUsed }) => {
  const screenshotVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className=" text-white rounded-t-xl mt-3 bg-[#181818] py-6 px-4 ">
        <p className="mx-8 text-sm text-[#ADB7BE] text-justify mb-4"> {presentation}</p>
        <h6 className="mx-8 mb-2">Technologies :</h6>
        <p className="mx-8 text-[#ADB7BE]">{technologiesUsed.join(", ")}</p>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.3 }}
        className="grid md:grid-cols-3 gap-8 grid-cols-1 "
      >
        {screenshots.map((screenshot, index) => (
          <motion.img
            key={index}
            src={screenshot}
            className="h-60  w-full rounded-t-xl relative group"
            alt={`Screenshot ${index + 1}`}
            variants={screenshotVariants}
          />
        ))}
      </motion.div>

      
    </div>
  );
};

export default ProjectDetails;

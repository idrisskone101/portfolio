import { motion } from "framer-motion";

const HamburgerMenu = ({ isOpen }) => {
  const lineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
      opacity: 1,
    },
    open: (custom) => ({
      rotate: custom === "middle" ? 0 : custom === "top" ? 45 : -45,
      translateY: custom === "middle" ? 0 : custom === "top" ? 8 : -8,
      opacity: custom === "middle" ? 0 : 1,
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center w-6 h-6 cursor-pointer">
      <motion.span
        custom="top"
        variants={lineVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-0.5 bg-white mb-1.5 origin-center"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        custom="middle"
        variants={lineVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-0.5 bg-white mb-1.5"
        transition={{ duration: 0.3 }}
      />
      <motion.span
        custom="bottom"
        variants={lineVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-6 h-0.5 bg-white"
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default HamburgerMenu; 
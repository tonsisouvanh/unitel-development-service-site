import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const pressData = [
  "Partners",
  "Affiliates",
  "Investors",
  "Terms of Use",
  "Privacy Policy",
];

const PressList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-4"
    >
      <h3 className="text-lg font-bold text-color-1 dark:text-[#F5F5F5]">
        Press
      </h3>
      <ul className="space-y-2">
        {pressData.map((item, index) => (
          <li key={index}>
            <Link
              to="/"
              hash="#press"
              className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PressList;

import { motion } from "framer-motion";

const Test = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 1,
      scale: 1,
      borderRadius: "0%", // Set the border radius to 0% for square corners
      border: "200px solid pink",
    }}
    transition={{ duration: 0.5 }}
  >
    
  </motion.div>
);

export default Test;

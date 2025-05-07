import { motion } from "framer-motion";
import { Certificates } from "./Components/Certificates";

export const Certifications = () => {
  return (
    <motion.div
      className="sm:p-4  flex flex-col items-center justify-start text-white w-full rounded-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="rounded-md  py-2 px-2 md:py-6 md:px-8 z-20 relative min-h-full  flex flex-col gap-5 w-full">
        <div className="certificate-list">
          <Certificates />
        </div>
      </div>
    </motion.div>
  );
};

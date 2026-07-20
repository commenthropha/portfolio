import { motion } from "framer-motion";

interface CareerSectionProps {
  eyebrow: string;
  heading: string;
  align?: "left" | "right";
  className?: string;
}

const CareerSection = ({
  eyebrow,
  heading,
  align = "left",
  className = "",
}: CareerSectionProps) => {
  const isRight = align === "right";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      transition={{ duration: 0.5, easeOut: true }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      <h6
        className={`font-mono text-lg text-stone-800 dark:text-stone-500 tracking-widest ${isRight ? "text-right" : ""}`}
      >
        {eyebrow}
      </h6>
      <h1
        className={`text-4xl font-sans font-bold mt-2 mb-5 text-stone-900 dark:text-stone-100 ${isRight ? "text-right" : ""}`}
      >
        {heading}
      </h1>
    </motion.div>
  );
};

export default CareerSection;

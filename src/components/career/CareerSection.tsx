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
      <p
        className={`font-mono text-sm tracking-widest text-stone-500 uppercase ${
          isRight ? "text-right" : "text-left"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-4xl lg:text-5xl font-sans mt-2 mb-5 font-bold tracking-tight text-stone-900 dark:text-stone-100 ${
          isRight ? "text-right" : "text-left"
        }`}
      >
        {heading}
      </h2>
    </motion.div>
  );
};

export default CareerSection;

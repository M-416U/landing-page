import { motion } from "framer-motion";
export default function Card({ title, text, delay }) {
  return (
    <motion.div
      className="mb-6 md:w-[350px] rounded-[2.37rem] md:rounded-t-[2.37rem] bg-[#e9decc70] text-center px-2 flex flex-col gap-5"
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: delay + 0.5, duration: 0.5 }}
    >
      <h1 className="text-4xl font-semibold border-b py-1">{title}</h1>
      <p className="text-2xl">{text}</p>
    </motion.div>
  );
}

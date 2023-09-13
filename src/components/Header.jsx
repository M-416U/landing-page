import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Links } from "./utilis/Lis";
import { liVarints } from "./utilis/varints";
export default function Header() {
  return (
    <motion.div
      className="py-12 flex justify-between items-center gap-8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.25, duration: 0.75 }}
    >
      <motion.div
        className="flex gap-2 items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.75 }}
      >
        <img src="../../public/images/icon.png" alt="icon" className="w-10" />
        <h1
          className="font-bold text-3xl xlg:text-5xl"
          style={{ fontFamily: "'Rubik'" }}
        >
          Homey
        </h1>
      </motion.div>
      <div className="flex gap-4 items-center">
        <ul className="hidden lg:flex gap-8 text-lg xlg:text-[24px] font-semibold">
          {Links.map((link, index) => (
            <motion.li
              key={index}
              variants={liVarints(index + 1)}
              initial={"hidden"}
              animate={"show"}
              transition={{ delay: 1.3 + index, duration: 0.6 }}
            >
              <a href="#">{link}</a>
            </motion.li>
          ))}
        </ul>
        <div className="flex lg:gap-8 items-center">
          <div className="hidden md:block relative bg-[#000000c5] px-2 py-1 rounded-3xl">
            <input
              type="text"
              className="px-4 bg-transparent outline-none border-none text-white md:w-full w-4"
            />
            <Icon
              icon="arcticons:xiaoyuan-search"
              className="text-white absolute right-2 top-1/2 -translate-y-1/2"
            />
          </div>
          <Icon icon="gg:profile" fontSize={"30"} />
        </div>
      </div>
    </motion.div>
  );
}

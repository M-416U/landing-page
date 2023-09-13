import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="flex gap-6 flex-col justify-start items-start pt-0 lg:pt-14">
      <div className="w-full lg:w-1/3 flex flex-col gap-2 lg:gap-8">
        <motion.h2
          className="font-bold text-3xl xlg:text-5xl xlg:leading-[4.5rem]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          Your Home owner ship <br /> Journey Starts <br /> Here.
        </motion.h2>
        <motion.p
          className="font-semibold xl:text-[25px] xl:leading-10	"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1 }}
        >
          Find your dream home with us. We have a wide selection of properties
          for sale and rent, all in one convenient location.
        </motion.p>
      </div>
      <motion.button
        className="py-2 px-2 md:px-7 block text-center font-semibold text-white bg-black rounded-full border-none text-2xl"
        initial={{ x: "80vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1.7,
          type: "spring",
          mass: 1,
          bounce: 0.6,
        }}
      >
        Book Your Now
      </motion.button>
    </div>
  );
}

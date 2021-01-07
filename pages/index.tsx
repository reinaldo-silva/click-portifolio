import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div className="mt-24 grid w-full grid-cols-1 grid-rows-2 gap-4">
        <motion.div className="relative flex justify-center transition">
          <motion.img
            src="/me.jpg"
            alt="Picture of the author"
            className="h-40 w-40 rounded-xl"
          />
        </motion.div>

        <motion.div className="flex justify-center items-center flex-col">
          <motion.p>Reinaldo Luiz da SIlva Junior</motion.p>
          <motion.p>reinaldo.silva.jr@outlook.com</motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;

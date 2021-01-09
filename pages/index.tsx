import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId, name }) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={variants}
        className="h-20 p-3 border-2 border-light-blue-500 border-opacity-100 grid grid-cols-2 grid-rows-1 cursor-pointer transition"
      >
        <motion.img
          src={imgSrc}
          className="h-full w-full"
          layoutId={layoutId}
        />
        <motion.span className="w-full flex items-center text-xl uppercase">
          {name}
        </motion.span>
      </motion.div>
    </Link>
  );
};

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.7,
    },
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  return (
    <>
      <motion.div
        className="mt-32 grid w-full grid-cols-1 grid-rows-2 gap-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="relative flex justify-center transition">
          <motion.img
            variants={item}
            src="/me.jpg"
            alt="Picture of the author"
            className="h-40 w-40 rounded-xl"
          />
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          variants={item}
        >
          <motion.p className="font-semibold text-2xl">
            Reinaldo Luiz da Silva Junior
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 grid w-full grid-cols-1 grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-1"
        /*         transition={{
          delay: 2,
        }}
        variants={variants}
        initial="hidden"
        animate="visible" */
      >
        <Card
          imgSrc={"/img/dev.svg"}
          href={"/projects"}
          layoutId={"projetos-logo"}
          name={"Projetos"}
        />
        <Card
          imgSrc={"/img/info.svg"}
          href={"/about"}
          layoutId={"sobre-logo"}
          name={"Sobre"}
        />
        <Card
          imgSrc={"/img/contact.svg"}
          href={"/contact"}
          layoutId={"contato-logo"}
          name={"Contato"}
        />
      </motion.div>
    </>
  );
};

export default Home;

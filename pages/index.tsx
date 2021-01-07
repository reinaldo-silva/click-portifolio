import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <motion.div
        variants={variants}
        className="relative h-20 h-40 bg-gray-300 p-4  rounded-xl cursor-pointer hover:bg-gray-100 transition"
      >
        <motion.img
          src={imgSrc}
          className="w-full h-full"
          layoutId={layoutId}
        />
        {/* <motion.span>Texto</motion.span> */}
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

const Home = () => {
  return (
    <>
      <motion.div className="mt-32 grid w-full grid-cols-1 grid-rows-2 gap-4">
        <motion.div className="relative flex justify-center transition">
          <motion.img
            src="/me.jpg"
            alt="Picture of the author"
            className="h-40 w-40 rounded-xl"
          />
        </motion.div>

        <motion.div className="flex justify-center items-center flex-col">
          <motion.p className="mb-4 font-semibold text-2xl">
            Reinaldo Luiz da Silva Junior
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1"
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
        />
        <Card
          imgSrc={"/img/info.svg"}
          href={"/about"}
          layoutId={"sobre-logo"}
        />
        <Card
          imgSrc={"/img/contact.svg"}
          href={"/contact"}
          layoutId={"contato-logo"}
        />
      </motion.div>
    </>
  );
};

export default Home;

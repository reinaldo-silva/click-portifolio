import { motion } from "framer-motion";

interface BodyProps {
  imgSrc: string;
  layoutId: string;
  title: string;
}

const Body: React.FC<BodyProps> = ({ children, imgSrc, layoutId, title }) => {
  return (
    <>
      <motion.div className="my-16 grid grid-cols-4 w-full gap-5">
        <motion.img
          className="px-12 col-span-2 md:col-start-2 md:col-span-1 md:p-12"
          src={imgSrc}
          layoutId={layoutId}
          transition={{ duration: 0.5 }}
        />

        <motion.h1 className="col-span-2 text-4xl md:text-5xl flex items-center">
          {title}
        </motion.h1>
      </motion.div>
      {children}
    </>
  );
};

export default Body;

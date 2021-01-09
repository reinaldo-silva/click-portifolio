import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Body from "../components/Body";

const Teste: React.FC = () => {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  /*   const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]); */

  const { scrollYProgress } = useViewportScroll();

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <>
      <motion.div className="grid grid-cols-1 grid-rows-5">
        <motion.div
          animate={{ x: 100 }}
          className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center"
        >
          teste
        </motion.div>
        <motion.div
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center"
        >
          teste
        </motion.div>
        <motion.div className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center">
          <motion.ul animate="hidden" variants={list}>
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
          </motion.ul>
        </motion.div>
        <motion.div
          initial={false}
          animate={{ x: 100 }}
          className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center"
        >
          teste
        </motion.div>
        <motion.div
          drag="x"
          style={{ x, opacity }}
          className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center"
        >
          teste
        </motion.div>
        <motion.div className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center">
          <motion.path style={{ pathLength: scrollYProgress }} />
        </motion.div>
        <motion.div
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center"
        >
          teste
        </motion.div>
        <motion.div
          drag="y"
          style={{ x, opacity }}
          className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center"
        >
          teste
        </motion.div>
        <motion.div
          animate={{ stdDeviation: [0, 5, 0] }}
          className="w-full mb-5 h-10 rounded-xl bg-gray-300 flex justify-center items-center"
        />
        <motion.circle
          cx={500}
          animate={{ cx: [null, 100] }}
          className=" mb-5 h-10 w-30 bg-gray-300"
        />
      </motion.div>
    </>
  );
};
export default Teste;

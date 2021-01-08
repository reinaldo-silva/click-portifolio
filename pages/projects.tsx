import { motion } from "framer-motion";
import Body from "../components/Body";

const Card: React.FC = () => {
  return (
    <motion.div className="w-full h-32 rounded-xl bg-gray-300 flex justify-center items-center">
      teste
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <Body imgSrc={"/img/dev.svg"} title={"Projetos"} layoutId={"projetos-logo"}>
      <motion.div className="w-full grid grid-cols-4 grid-rows-2 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </Body>
  );
};

export default Projects;

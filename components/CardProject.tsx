import { motion } from "framer-motion";

interface ProjectProps {
  id: string;
  title: string;
  subtitle: string;
  // setSelectedIdFunc: any function();
}

const CardProject: React.FC<ProjectProps> = (
  props,
  { children, id, title, subtitle, setSelectedIdFunc }
) => {
  return (
    <>
      <motion.div
        key={id}
        className="w-full relative h-40 bg-gray-900 flex flex-1 items-center justify-center rounded-md"
        layoutId={id}
        onClick={() => setSelectedIdFunc(id)}
      >
        <motion.h5>{subtitle}</motion.h5>
        <motion.h2>{title}</motion.h2>
      </motion.div>
    </>
  );
};

export default CardProject;

import { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Body from "../components/Body";

const Projects: React.FC = () => {
  const items = [
    { id: "1", subtitle: "subititle", title: "title" },
    { id: "2", subtitle: "subititle", title: "title" },
    { id: "3", subtitle: "subititle", title: "title" },
  ];

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);
  return (
    <Body imgSrc={"/img/dev.svg"} title={"Projetos"} layoutId={"projetos-logo"}>
      <motion.div className="grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-6">
        <AnimateSharedLayout type="crossfade">
          {items.map((item) => (
            <>
              <motion.div
                key={item.id}
                className="w-full h-40 bg-gray-900 flex flex-1 items-center justify-center rounded-md"
                layoutId={item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
              </motion.div>

              <AnimatePresence>
                {selectedId == item.id && (
                  <motion.div
                    layoutId={item.id}
                    className="relative w-full h-40 bg-green-300"
                  >
                    <motion.h5>Subtitle</motion.h5>
                    <motion.h2>Title</motion.h2>
                    <motion.button
                      className="w-20 h-20 bg-gray-300"
                      value={"Back"}
                      onClick={() => setSelectedId(null)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ))}
        </AnimateSharedLayout>
      </motion.div>
    </Body>
  );
};

export default Projects;

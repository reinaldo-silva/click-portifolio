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

  const hidden = "hidden";
  const show =
    "absolute w-full h-full flex items-center top-0 max-w-5xl box-border pl-8 pr-24 bg-black bg-opacity-20";

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);
  return (
    <Body imgSrc={"/img/dev.svg"} title={"Projetos"} layoutId={"projetos-logo"}>
      <AnimateSharedLayout type="crossfade">
        <motion.div className="grid w-full relative grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="text-black w-full relative h-40 bg-gray-200 flex flex-1 items-center justify-center rounded-2xl"
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.img src="/img/bgImg.jpg" className="h-full" />
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={selectedId ? show : hidden}>
          {items.map((item) => (
            <AnimatePresence>
              {selectedId == item.id && (
                <motion.div
                  layoutId={item.id}
                  className="relative w-full h-40 bg-green-300"
                >
                  <motion.header className="flex justify-between p-4">
                    <motion.h2>Title</motion.h2>
                    <motion.button
                      className="w-10 h-10 bg-gray-300 text-black rounded-3xl"
                      value={"Back"}
                      onClick={() => setSelectedId(null)}
                    >
                      X
                    </motion.button>
                  </motion.header>

                  <motion.h5>Subtitle</motion.h5>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </Body>
  );
};

export default Projects;

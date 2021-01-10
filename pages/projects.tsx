import { useEffect, useState } from "react";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants,
} from "framer-motion";
import Body from "../components/Body";

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

const Projects: React.FC = () => {
  const items = [
    {
      id: "1",
      subtitle: "subititle",
      title: "title",
      box: 1,
      img: "/img/dev1.jpg",
    },
    {
      id: "2",
      subtitle: "subititle",
      title: "title",
      box: 3,
      img: "/img/dev2.jpg",
    },
    {
      id: "3",
      subtitle: "subititle",
      title: "title",
      box: 3,
      img: "/img/dev3.jpg",
    },
    {
      id: "4",
      subtitle: "subititle",
      title: "title",
      box: 1,
      img: "/img/dev4.jpg",
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const hidden = "hidden";
  const show =
    "absolute w-screen h-full flex items-center top-0 max-w-5xl box-border pl-8 pr-24 z-20";

  const box3 =
    "md:col-span-7 text-black w-full relative h-80 bg-gray-200 flex flex-col items-start justify-center rounded-2xl overflow-hidden";
  const box1 =
    "md:col-span-5 text-black w-full relative h-80 bg-gray-200 flex flex-col items-start justify-center rounded-2xl overflow-hidden";

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);
  return (
    <Body imgSrc={"/img/dev.svg"} title={"Projetos"} layoutId={"projetos-logo"}>
      <AnimateSharedLayout type="crossfade">
        <motion.div className="grid w-full relative grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-12 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={item.box == 1 ? box1 : box3}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={variants}
            >
              <motion.img src={item.img} className="w-full absolute" />
              <section className="w-full h-full flex items-center justify-center flex-col bg-black z-10 bg-opacity-40">
                <motion.h2 className="z-10 text-white w-full ml-4 font-bold text-3xl ">
                  {item.title}
                </motion.h2>
                <motion.h5 className="z-10 text-white w-full ml-4 font-medium">
                  {item.subtitle}
                </motion.h5>
              </section>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={selectedId ? show : hidden}
          onClick={() => setSelectedId(null)}
        >
          {items.map((item) => (
            <AnimatePresence>
              {selectedId == item.id && (
                <motion.div
                  layoutId={item.id}
                  className="relative w-full h-auto min-h-100 overflow-hidden rounded-2xl"
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.header className="flex h-96 justify-start">
                    <motion.img src={item.img} className="w-full absolute" />
                    <motion.div className="z-10 p-10">
                      <motion.h2 className="text-white w-full font-bold text-3xl ">
                        {item.title}
                      </motion.h2>
                      <motion.h5 className="text-white w-full font-medium">
                        {item.subtitle}
                      </motion.h5>
                    </motion.div>
                  </motion.header>
                  <motion.section className="relative w-full h-auto p-10 bg-gray-900 bg-opacity-90 z-40">
                    <motion.p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ullam praesentium libero, tempora quam dicta, deserunt non
                      odio quisquam voluptates rerum necessitatibus neque unde
                      vero id soluta quas pariatur nostrum nemo iusto!
                      Necessitatibus numquam nesciunt, deleniti aliquam
                      voluptatum, eos, beatae sed repudiandae laborum rem eaque
                      alias? Delectus placeat quibusdam impedit voluptate, aut
                      ex dolores ab quam ratione sapiente rerum necessitatibus
                      dolore ipsum, eaque natus tenetur illum corporis animi
                      tempora perspiciatis autem cupiditate cumque magnam!
                      Reiciendis adipisci nisi magnam voluptatum culpa? Nihil,
                      ducimus sint, temporibus sequi velit veniam rem adipisci
                      repudiandae dolore veritatis facilis modi corrupti porro
                      animi aperiam enim iure hic cumque incidunt doloribus
                      sapiente consequatur accusantium! Perspiciatis illo
                      excepturi maxime nisi a exercitationem aliquam vitae
                      nesciunt ducimus non saepe similique debitis dignissimos
                      quisquam et quo, modi vero cum assumenda inventore?
                      Deleniti necessitatibus totam ea dignissimos, consequatur
                      mollitia inventore facere rerum quia atque voluptatum hic
                      culpa voluptates non? Dolore at, veniam maxime nisi
                      suscipit laborum nostrum vero fugit magni placeat beatae
                      repellat sunt quaerat ullam nemo voluptatem neque
                      assumenda? Iusto repellat deleniti quam laborum non
                      doloribus aspernatur est id sit nobis ipsum voluptatum hic
                      molestiae necessitatibus dolore nam aliquam suscipit,
                      laudantium obcaecati, possimus ullam sunt et vitae! Saepe
                      eos quae soluta?
                    </motion.p>
                  </motion.section>
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

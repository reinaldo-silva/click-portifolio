import { motion } from "framer-motion";

import Body from "../components/Body";

const About: React.FC = () => {
  return (
    <Body imgSrc={"/img/info.svg"} title={"Sobre"} layoutId={"sobre-logo"}>
      <motion.p className="text-2xl mb-8">
        Uma mente em constante desenvolvimento
      </motion.p>
      <motion.p className="text-2xl">
        Um jovem estudante de 23 anos apaixonado por todo tipo de tecnologia que
        pulou de cabeça no mundo do TI. Graduando em Sistemas da Informação no
        UNIFAFIBE, procuro aprender e estar por dentro de todas tecnologias de
        desenvolvimento. Atualmente trabalho como Desenvolvedor Front-End na
        ImobPower, um local onde tenho muito a aprender e crescer
        profissionalmente. Com essa experiencia, pretendo me tornar um
        desenvolvedor Full-Stack muito em breve.
      </motion.p>
    </Body>
  );
};

export default About;

import { motion } from "framer-motion";
import Body from "../components/Body";

const Contact: React.FC = () => {
  return (
    <Body
      imgSrc={"/img/contact.svg"}
      title={"Contato"}
      layoutId={"contato-logo"}
    >
      <motion.div className="flex items-center content-around flex-col md:flex-row h-full w-full text-2xl">
        <motion.p className="w-full md:w-1/2 flex justify-center">
          Telefone: (17) 99111-5889
        </motion.p>
        <motion.p className="w-full md:w-1/2 flex justify-center">
          Email: reinaldo.silva.jr@outlook.com
        </motion.p>
      </motion.div>
    </Body>
  );
};

export default Contact;

import { motion } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <Link href="/">
        <a>
          <motion.h1
            whileTap={{ scale: 0.9 }}
            className="font-bold text-3xl cursor- "
          >
            Developer web
          </motion.h1>
        </a>
      </Link>

      <nav className="hidden md:block space-x-8">
        <Link href="/projects">
          <a className="tracking-wide hover:text-green-500">Projetos</a>
        </Link>
        <Link href="/about">
          <a className="tracking-wide hover:text-green-500">Sobre</a>
        </Link>
        <Link href="/contact">
          <a className="tracking-wide hover:text-green-500">Contato</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

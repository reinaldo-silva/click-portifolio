import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
      <motion.h1 className="">Developer web</motion.h1>

      <nav className="hidden md:block space-x-8">
        <Link href="/projetos">
          <a className="tracking-wide hover:text-gray-300">Projetos</a>
        </Link>
        <Link href="/sobre">
          <a className="tracking-wide hover:text-gray-300">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="tracking-wide hover:text-gray-300">Contato</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

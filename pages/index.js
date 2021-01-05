import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Página Home</h1>
      <Link href="/sobre">
        <a>Acessar Sobre</a>
      </Link>
    </div>
  );
};

export default Home;

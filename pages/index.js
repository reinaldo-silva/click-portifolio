import Link from "next/link";
import { GlobalStyles } from "../styles/global.js";
import { Container, Title, Text } from "../styles/index.js";
import GoogleFonts from "next-google-fonts";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Container>
        <Image
          src="/me.jpg"
          alt="Picture of the author"
          width={180}
          height={180}
        />
        <Title>Developer Web</Title>
        <Text>Reinaldo Luiz da SIlva Junior</Text>
        <Text>reinaldo.silva.jr@outlook.com</Text>
      </Container>
    </>
  );
};

export default Home;

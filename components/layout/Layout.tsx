import { FC } from "react";
import Head from "next/head";
import Navbar from "@components/Navbar";

interface Props {
  children: JSX.Element;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="author" content="Fl0rchus" />
        <meta name="description" content="Pokedex app created with NextJS" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main style={{ paddingLeft: 20, paddingRight: 20 }}>{children}</main>
    </>
  );
};

export default Layout;

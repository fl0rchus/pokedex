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
        <meta name="author" content="Florencia" />
        <meta name="description" content="Pokedex app created with NextJS" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

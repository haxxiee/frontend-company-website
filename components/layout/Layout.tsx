import { useRouter } from "next/router";
import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const location = useRouter();
  return (
    <div>
      {location.pathname !== "/news/[slug]" ? <Header /> : ""}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

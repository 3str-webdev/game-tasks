import { FC } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="react-layout">
      <Header />
      <Content footer={<Footer />}>{children}</Content>
    </div>
  );
};

export default Layout;

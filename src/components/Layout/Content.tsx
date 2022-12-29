import { FC, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

interface ContentProps {
  children: React.ReactNode;
  footer?: boolean;
}

const Content: FC<ContentProps> = ({ children, footer = false }) => {
  const topRef = useRef<HTMLDivElement>(null);
  const location = useLocation().pathname;

  const scrollToTop = () => {
    if (topRef.current) topRef.current.scroll({ top: 0 });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <section className="react-content">
      <div className="wrapper" ref={topRef}>
        <>
          <div className="react-content-wrapper">{children}</div>
          {footer && <Footer />}
        </>
      </div>
    </section>
  );
};

export default Content;

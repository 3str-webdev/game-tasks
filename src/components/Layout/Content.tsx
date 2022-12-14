import { FC } from "react";

interface ContentProps {
  children: React.ReactNode;
  footer?: React.FC | React.ReactElement | undefined;
}

const Content: FC<ContentProps> = ({ children, footer = <></> }) => {
  return (
    <section className="react-content">
      <div className="wrapper">
        <>
          <div className="react-content-wrapper">{children}</div>
          {footer}
        </>
      </div>
    </section>
  );
};

export default Content;

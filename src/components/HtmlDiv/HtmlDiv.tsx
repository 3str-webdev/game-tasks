import { CSSProperties, FC } from "react";

interface IHtmlDivProps {
  content?: string;
  className?: string;
  style?: CSSProperties;
}

const HtmlDiv: FC<IHtmlDivProps> = ({ content, className, style }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: content !== undefined ? content : "" }}
      style={style}
    ></div>
  );
};

export default HtmlDiv;

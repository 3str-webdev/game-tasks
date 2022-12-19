import { FC } from "react";
import { IHtmlDivProps } from "./HtmlDiv.props";

const HtmlDiv: FC<IHtmlDivProps> = ({ content, ...props }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content !== undefined ? content : "" }}
      {...props}
    ></div>
  );
};

export default HtmlDiv;

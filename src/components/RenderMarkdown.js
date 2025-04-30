import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";



const RenderMarkdown = ({ content }) => {
  
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeRaw]} // Allows raw HTML to be rendered
      // remarkPlugins={[remarkBreaks]} // Converts \n to <br />
    />
  );
};

export default RenderMarkdown;

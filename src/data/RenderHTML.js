import React from "react";

const RenderHTML = ({ data }) => {

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlContent, 
      }}
    />
  );
};

export default RenderHTML;

import React, { ReactDOM } from "react";

export default function Typography({ type, children, ...props }) {
  const validTypes = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
  const getContent = () => {
    if (type && validTypes.includes(type)) {
      return React.createElement(type, { ...props }, children);
    } else {
      return <p {...props}>{children}</p>;
    }
  };

  return getContent();
}

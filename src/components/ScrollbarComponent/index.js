import React from "react";

const ScrollbarComponent = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ScrollbarComponent;

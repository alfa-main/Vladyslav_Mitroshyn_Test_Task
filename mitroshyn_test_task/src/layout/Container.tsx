import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto mt-[58px] px-8-px md:px-0 xl:mt-[62px] font-montserrat sm:max-w-auto md:max-w-[684px] lg:max-w-[900px] xl:max-w-[1220px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

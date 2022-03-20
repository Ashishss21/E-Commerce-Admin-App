import React from "react";
import Header from "../Header";

const HeaderLayout = (props) => {
  return (
    <>
        <Header/>
        {props.children}
    </>
  );
};

export default HeaderLayout;

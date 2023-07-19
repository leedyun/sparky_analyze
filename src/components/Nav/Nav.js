import React from "react";
import { PrimaryNav, Menu } from "./NavElement";

const Nav = () => {
  return (
    <PrimaryNav>
      <Menu>조회수</Menu>
      <Menu>플레이수</Menu>
      <Menu>리플레이수</Menu>
      <Menu>플레이 시간</Menu>
    </PrimaryNav>
  );
};

export default Nav;

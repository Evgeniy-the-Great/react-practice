import React from "react";
import data from "../../../data/index";
import { HeaderListNav } from "./HeaderListStaled";

const HeaderList = () => {
  return (
    <HeaderListNav>
      <ul className="navList">
        {data.header.map((headerItem) => {
          return (
            <li key={headerItem} className="navListItem">
              {headerItem}
            </li>
          );
        })}
      </ul>
    </HeaderListNav>
  );
};

export default HeaderList;

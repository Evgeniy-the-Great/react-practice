import styled from "styled-components";

export const HeaderListNav = styled.nav`
  .navList {
    display: flex;
    align-items: center;
    list-style: none;
    color: #fff;
  }

  .navListItem {
    text-transform: uppercase;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:hover {
      color: #50f166;
    }
  }
`;

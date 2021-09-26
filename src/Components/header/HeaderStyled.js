import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: #424242;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .headerLogo {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
  }
  .headerLogoImg {
    width: 40px;
    fill: ${(props) => {
      return props.theme.colors.main;
    }};
  }
`;

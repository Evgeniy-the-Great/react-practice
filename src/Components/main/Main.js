import React from "react";
import data from "../../data";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../Section";
import { MainContainer } from "./MailStyled";

const Main = () => {
  return (
    <MainContainer>
      <Section title="Phones">
        <PhoneList phones={data.phones} />
      </Section>

      <Section title="Laptops">
        <LaptopList laptops={data.laptops} />
      </Section>
    </MainContainer>
  );
};

export default Main;

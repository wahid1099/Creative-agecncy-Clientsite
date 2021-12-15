import React from 'react';
import TopBanner from "../Components/TopBanner/TopBanner";
import Company from "../Components/Companys/Company";
import Contactus from "../Components/Contactus/Contactus";
import OurWorks from "../Components/OurWorks/OurWorks";
import ClientFeedback from "../Components/ClienFeedback/ClientFeedback";
import ServicesComponent from "../Components/ServicesComponent/ServicesComponent";

const HomePage = () => {
    return (
        <div>
          <TopBanner></TopBanner>
            <Company></Company>
            <ServicesComponent></ServicesComponent>
            <OurWorks></OurWorks>
            <ClientFeedback></ClientFeedback>
            <Contactus></Contactus>
        </div>
    );
};

export default HomePage;
import React from 'react';
import TopBanner from "../Components/TopBanner/TopBanner";
import Company from "../Components/Companys/Company";
import Contactus from "../Components/Contactus/Contactus";
import OurWorks from "../Components/OurWorks/OurWorks";
import ClientFeedback from "../Components/ClienFeedback/ClientFeedback";
import ServicesComponent from "../Components/ServicesComponent/ServicesComponent";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <div>
          <TopBanner></TopBanner>
            <Company></Company>
            <ServicesComponent></ServicesComponent>
            <OurWorks></OurWorks>
            <ClientFeedback></ClientFeedback>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
import React from 'react';

import Header from '../../components/Header/Header';
import Studying from '../../components/Studying/Studying';
// import MainTypography from '../../components/MainTypography/MainTypography';
// import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
// import ProjectInfoList from '../../components/ProjectInfoList/ProjectInfoList';
// import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Studying />
      {/* <MainTypography />
      <PersonalInfo />
      <ProjectInfoList />
      <Footer /> */}
    </div>
  );
};

export default Main;

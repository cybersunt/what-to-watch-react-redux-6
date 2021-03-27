import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import PageHeader from "../../sections/page-header/page-header";
import {Link} from "react-router-dom";
import {RoutePath} from "../../../constants/constants";
import "./not-found.css";

const NotFound = () => {

  return (
    <MainLayout>
      <InnerLayout className={`page-content`}>
        <PageHeader isLogin={false}/>
        <div className="not-found-page">
          <h1>404. Page not found</h1>
          <h2>
            <Link to={RoutePath.ROOT} className="not-found-page-link">Вернуться на главную</Link>
          </h2>
        </div>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

export default NotFound;

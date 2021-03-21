import React from "react";
import MainLayout from "../../layouts/main-layout/main-layout";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import Catalog from "../../sections/catalog/catalog";
import PageHeader from "../../sections/page-header/page-header";

const MyList = () => {
  return (
    <MainLayout>
      <InnerLayout className={`user-page`}>
        <PageHeader activeLink={true} className={`user-page__head`}/>
        <Catalog favorites={true}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

export default MyList;

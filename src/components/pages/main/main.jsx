import React from 'react';
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import MainLayout from "../../layouts/main-layout/main-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import Catalog from "../../sections/catalog/catalog";
import {connect} from "react-redux";

const MainPage = ({promoMovie}) => {

  return (
    <MainLayout>
      <MovieCard type="short" currentMovie={promoMovie}/>
      <InnerLayout className={`page-content`}>
        <Catalog filter={true}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

MainPage.propTypes = {
  ...Catalog.propTypes,
  ...MovieCard.propTypes
};

const mapStateToProps = (state) => ({
  promoMovie: state.promoMovie
});

export default connect(mapStateToProps)(MainPage);

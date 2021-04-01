import React from 'react';
import MovieCard from "../../sections/movie-card/movie-card";
import InnerLayout from "../../layouts/inner-layout/inner-layout";
import MainLayout from "../../layouts/main-layout/main-layout";
import PageFooter from "../../sections/page-footer/page-footer";
import Catalog from "../../sections/catalog/catalog";
import {useSelector} from "react-redux";
import Loader from "../../blocks/loader/loader";

const MainPage = () => {
  const {promoMovie, isPromoMovieLoaded} = useSelector((state) => state.DATA_ITEM);

  return (
    <MainLayout>
      {isPromoMovieLoaded ? <MovieCard type="short" currentMovie={promoMovie}/> : <Loader/>}
      <InnerLayout className={`page-content`}>
        <Catalog filter={true}/>
        <PageFooter/>
      </InnerLayout>
    </MainLayout>
  );
};

export default MainPage;

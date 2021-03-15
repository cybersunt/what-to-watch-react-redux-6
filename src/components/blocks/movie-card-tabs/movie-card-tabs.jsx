import React, {useState} from "react";
import MovieCardNav from "./movie-card-nav/movie-card-nav";
import {TabsItems} from "../../../constants/tabs";
import MovieCardTabContent from "../../../hocs/movie-card-tab-content";

const MovieCardTabs = ({activeKey, defaultActiveKey = 1, ...currentMovie}) => {

  const [isActiveKey, setActiveKey] = useState(activeKey ? activeKey : defaultActiveKey);

  const onClick = (evt) => {
    evt.preventDefault();
    setActiveKey(Number(evt.target.id));
  };

  return (
    <div className="movie-card__desc">
      <MovieCardNav items={TabsItems} activeKey={isActiveKey} onClick={onClick}/>

      {TabsItems.map(({id, name, component})=> (
        <MovieCardTabContent key={name} tabKey={id} activeKey={isActiveKey} Component={component} {...currentMovie}/>
      ))}
    </div>
  );
};

MovieCardTabs.propTypes = {...MovieCardTabContent.propTypes};

export default MovieCardTabs;

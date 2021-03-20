import React from "react";
import {useParams} from "react-router-dom";
import {MAX_ID_FILM} from "../constants/common";
import NotFound from "../components/pages/not-found/not-found";
import PropTypes from "prop-types";

const ValidateId = ({component: Component}) => {
  const {id} = useParams();
  const itemId = Number(id);
  return itemId <= MAX_ID_FILM ? <Component id={itemId}/> : <NotFound/>;
};

ValidateId.propTypes = {
  component: PropTypes.node.isRequired,
};

export default ValidateId;

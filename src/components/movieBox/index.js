import React, {useState} from 'react';
import styled from "styled-components";
import { updateMovie } from "../../../utils";
import { Redirect } from "react-router-dom";


export const movieBox = ({title, actor, category, watched, rating}) => {


    return (
            <div className="movies">
                <h3>{title}</h3>
                <h5>{actor}{category}</h5>
                <h4>{watched}{rating}</h4>
            </div>
        )

    

}
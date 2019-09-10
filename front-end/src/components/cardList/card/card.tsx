import React from 'react';
import './card.scss';
import { userProps } from '../users';
import {map} from "lodash";

const Card = (props: userProps) => {
    const {id} = props;
    const cardElements = map(props, (value:string, key:any) => {
        if(key === "name") {
            return <h2>{value}</h2>
        }
        if(key === "id") {
            return;
        }
        return <p><strong>{key}: </strong>{value}</p>
      });

    return (
        <div key={`${id}`} className="card">
            <img src={`https://robohash.org/${id}?size=200x200`} alt='card' />
            <div>
                {cardElements}
            </div>
        </div>
    );
}

export default Card;
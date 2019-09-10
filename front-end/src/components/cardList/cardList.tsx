import React from 'react';
import { userProps } from './users';
import Card from './card/card';

const CardList = (robot_list: userProps[]) => {
    const cardComponents = robot_list.map(card_prop => {
        return Card(card_prop);
    });
    return (
        <div id="cardList">
            {cardComponents}
        </div>
    );
}

export default CardList;
import React, { useState } from 'react';
import { userProps } from './users';
import Card from './card/card';
import BigCard, { BigCardProps } from './BigCard/BigCard';

const CardList = (props: { robot_list: userProps[] }) => {
    const { robot_list } = props;
    const [bigCardProps, setBigCardProps] = useState<BigCardProps>({ user: undefined });
    const cardComponents = robot_list.map(card_prop => {
        return Card(card_prop, (_event) => {
            setBigCardProps({ user: card_prop })
        });
    });
    return (
        <div>
            {BigCard(bigCardProps)}
            <div id="cardList">
                {cardComponents}
            </div>
        </div>
    );
}

export default CardList;
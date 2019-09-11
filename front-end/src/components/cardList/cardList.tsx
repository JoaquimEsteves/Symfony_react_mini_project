import React, { useState } from 'react';
import { userProps } from './users';
import Card from './card/card';
import BigCard, { BigCardProps } from './BigCard/BigCard';

const CardList = (props: { user_list: userProps[] }) => {
    const { user_list } = props;
    const [bigCardProps, setBigCardProps] = useState<BigCardProps>({ user: undefined });
    const cardComponents = user_list.map(card_prop => {
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
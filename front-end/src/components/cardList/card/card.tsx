import React from 'react';
import './card.scss';
import { userProps } from '../users';

const Card = (props: userProps, seePosts: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined) => {
    const { id, name, username, email } = props;
    return (
        <div key={`${id}`} className="card" onClick={seePosts}>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='card' />
            <div>
                <h2>{name}</h2>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
import React, { useState, useEffect } from 'react';
import './BigCard.scss';
import { userProps } from '../users';
import { map } from "lodash";

export type BigCardProps = {
    user: userProps | undefined;
}

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

type Posts = Post[];

const BigCard = (props: BigCardProps) => {
    const [posts, setPosts] = useState<Posts>([]);
    useEffect(() => {
        if (!props.user) {
            return;
        }
        fetch(`http://localhost:8005/api/posts/${props.user.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => setPosts(JSON.parse(data)))
    }, [props]);


    if (!props.user) {
        // Nothing todo
        return <div />;
    }

    const BigCardElements = map(props.user, (value, key) => {
        if (key === "id") {
            return;
        }
        return <p key={`${key}`}><strong>{key}:</strong>{value}</p>
    })

    const BigCardPosts = posts.map((post, id) => {
        return <div key={`${id}`} className="card">{
            map(post, (value, key: string) => {
                if (key === "id") {
                    return;
                }
                if (key === "name") {
                    return <h2>{value}</h2>
                }
                return <p key={`${key}`}><strong>{key}:</strong>{value}</p>
            })
        }
        </div>
    });

    //  Get the relevant posts!
    return (
        <div>
            <div className="card">
                <img src={`https://robohash.org/${props.user.id}?size=200x200`} alt='card' />
                <div>
                    {BigCardElements}
                </div>
            </div>
            <br/>
            {BigCardPosts}
        </div>
    );
}

export default BigCard;
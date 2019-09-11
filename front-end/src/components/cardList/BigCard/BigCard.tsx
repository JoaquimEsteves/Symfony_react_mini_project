import React, { useState, useEffect } from 'react';
import './BigCard.scss';
import { userProps } from '../users';
import { map } from "lodash";

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'

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
    const [hidden, setHidden] = useState(false);

    const getPosts = (user: userProps | undefined) => {
        if (!user) {
            // No user selected, nothing todo
            return;
        }
        setHidden(false);
        fetch(`http://localhost:8005/api/posts/${user.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => setPosts(JSON.parse(data)))
            .catch(_error => setPosts([]));
    }

    useEffect(() => {
        getPosts(props.user);
    }, [props]);

    const hide = () => {
        setHidden(true);
    }

    const deletePost = (id: number) => {
        fetch(`http://localhost:8005/api/delete/post/${id}`, {
            method: "POST"
        })
            .then(res => res.text())
            .then((text) => {
                alert(`Here's the response from the server: ${text}`);
                // Refresh the posts!
                getPosts(props.user);
            });
    }

    if (!props.user) {
        // Nothing todo
        // Sadly needs to be declared after useEffect
        return <div />;
    }
    const BigCardElements = map(props.user, (value, key) => {
        if (key === "id") {
            return;
        }
        return <p key={`${key}`}><strong>{key}: </strong>{value}</p>
    })

    const BigCardPosts = posts.map((post, id) => {
        return <div key={`${id}`} className="card" >
            {
                map(post, (value, key: string) => {
                    if (key === "id") {
                        return;
                    }
                    if (key === "name") {
                        return <h2>{value}</h2>
                    }
                    return <p key={`${key}`}><strong>{key}: </strong>{value}</p>
                })
            }
            <button className="f6 link dim ph3 pv2 mb2 dib white bg-black"
                onClick={(_event: React.MouseEvent<HTMLElement>) => {
                    deletePost(post.id)
                }}>Delete me!</button>
        </div>
    });
    //  Get the relevant posts!
    return (
        <div className={hidden ? 'hidden' : ''}>
            <div className="card">
                <img src={`https://robohash.org/${props.user.id}?size=200x200`} alt='card' />
                <div>
                    {BigCardElements}
                </div>
            </div>
            <br />
            <button className="f6 link dim ph3 pv2 mb2 dib white bg-black"
                onClick={(_event: React.MouseEvent<HTMLElement>) => {
                    hide()
                }}>Hide me!</button>
            <br />
            {BigCardPosts}
            <br />
            <Map center={[0, 0]} zoom={1} width={500} height={400}>
                <Marker anchor={[props.user.addressGeoLat, props.user.addressGeoLng]} />
            </Map>
        </div>
    );
}

export default BigCard;
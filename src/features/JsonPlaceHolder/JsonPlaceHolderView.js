import React from 'react';
import useJsonPlaceHolder from "./UseJsonPlaceHolder";

const JsonPlaceHolderView = () => {
    const {isLoading, posts, onCreatePost} = useJsonPlaceHolder();
    return (
        <div>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
            <button disabled={isLoading} onClick={onCreatePost}>Create Post</button>
        </div>
    );
};

export default JsonPlaceHolderView;

import React, {useEffect, useState} from 'react';
import {useDeps} from "../../shared/DepContext";

const useJsonPlaceHolder = () => {
    const {jsonPlaceHolderService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState({});

    useEffect(() => {
        onGetPostById();
    }, []);

    const onGetPostById = async () => {
        setLoading(true);
        try {
            const response = await jsonPlaceHolderService.getPostById('1');
            setPosts(response)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    const onCreatePost = async () => {
        setLoading(true);
        try {
            const response = await jsonPlaceHolderService.createPost({
                title: 'Hii', body: 'Yeayyy'
            });
            setPosts(response);
        } catch (e) {
        } finally {
            setLoading(false);
        }
    }
    return {
        isLoading, posts, onCreatePost
    }
};

export default useJsonPlaceHolder;

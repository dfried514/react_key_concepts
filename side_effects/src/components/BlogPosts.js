import { useState, useEffect } from 'react';

const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts(url) {
    console.log('url', url);
    const response = await fetch(url);
    const blogPosts = await response.json();
    return blogPosts;
}   

const BlogPosts = () => {
    const [postsUrl, setPostsUrl] = useState(DEFAULT_URL);
    const [loadedPosts, setLoadedPosts] = useState([]);

    const adjustUrlHandler = event => setPostsUrl(event.target.value);

    useEffect(function () {
        console.log('hey...');
        fetchPosts(postsUrl).then((fetchedPosts) => {
            console.log('blogPosts', fetchedPosts);
            setLoadedPosts(fetchedPosts);
        })
    }, [postsUrl])

    console.log('render...');


    return (
        <>
            <input type="text" onBlur={adjustUrlHandler} />
            <ul>
                {loadedPosts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default BlogPosts;

import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const postList = data.map(p => new Post(p.id, p.title, p.body));
                this.setState({ posts: postList });
            })
            .catch(error => {
                console.error("Fetch error:", error);
                this.setState({ hasError: true });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred in Posts component.");
        console.error("Caught error:", error, info);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }

        return (
            <div className="App">
                <h1 style={{ color: '#007bff' }}>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} className="post-container">
                        <h3 className="post-title">{post.title}</h3>
                        <p className="post-body">{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }

}

export default Posts;

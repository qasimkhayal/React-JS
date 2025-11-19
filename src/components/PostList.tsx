import { useState } from "react";

type Post={
    userId : number;
    id:number;
    title : string;
    body: string;
};

function PostList(){
const [posts, setPosts] = useState<Post[]>([]);
const fetchPosts= async () => {
    let response = await fetch ("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setPosts (data);

};

    return (
      <div className="container mb-4">
        <h2 className="text-danger my-4">Post List</h2>
<button className="btn btn-success" onClick={fetchPosts}> 
    Fetch Posts
</button>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
                <h4 className="text-primary mb-2">
                    {post.title}
                </h4>
             <p className="text-secondary">
                {post.body}
             </p>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default PostList;
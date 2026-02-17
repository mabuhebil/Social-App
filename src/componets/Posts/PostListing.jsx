import axios from "axios";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";

const BASE_URL = "https://route-posts.routemisr.com";
const POSTS_ENDPOINT = "posts";

export default function PostListing() {
  const [posts, setPosts] = useState(null);
  async function getAllPosts() {
    try {
      const { data } = await axios.request({
        url: `${BASE_URL}/${POSTS_ENDPOINT}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")} `,
        },
        params: {
          sort: "-createAt",
        },
      });

      console.log(data);
      if (data.message == "success") {
        setPosts(data.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPosts();
    console.log(posts);
  }, []);

  return (
    <section className="py-12">
      <div className="w-full max-w-100 md:max-w-1/2 mx-auto space-y-4">
       {posts && posts.map((post)=>  <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}

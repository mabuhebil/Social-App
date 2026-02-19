import axios from "axios";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import Loader from "../Shared/Loader/Loader";
import { Alert } from "@heroui/react";

const BASE_URL = "https://route-posts.routemisr.com";
const POSTS_ENDPOINT = "posts";

export default function PostListing() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getAllPosts() {
    setLoading(true);
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
      setError(error.response? error.response.data.error : error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllPosts();
    console.log(posts);
  }, []);

  if (error) {
    return (
      <section className="py-12">
        <div className="w-full max-w-100 md:max-w-1/2 mx-auto space-y-4">
          <Alert color={"danger"} title={error} />
        </div>
      </section>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="py-12">
      <div className="w-full max-w-100 md:max-w-1/2 mx-auto space-y-4">
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import { getSinglePost } from "../../componets/Services/posts.services";

export default function PostDetails() {
  useEffect(() => {
    getSinglePost();
  }, []);

  return <div>PostDetails</div>;
}

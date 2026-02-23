import axios from "axios";

const BASE_URL = "https://route-posts.routemisr.com/posts";
const ENDPOINT = "comments";

export async function addNewComment(data) {
  return axios.request({
    url: `${BASE_URL}//${ENDPOINT}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user_token")} `,
    },
    data: data,
  });
}

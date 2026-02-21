import axios from "axios";




const BASE_URL = "https://route-posts.routemisr.com";
const POSTS_ENDPOINT = "posts";


export async function getAllPosts() {
    return axios.request({
      url: `${BASE_URL}/${POSTS_ENDPOINT}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")} `,
      },
      params: {
        sort: "-createAt",
      },
    });
  }


  export async function getSinglePost(id) {
    return axios.request({
      url: `${BASE_URL}/${POSTS_ENDPOINT}/${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user_token")} `,
      },
    });
  }

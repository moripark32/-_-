import axios from "axios";

// const searchImages = (term)=>{

// }

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ad5tlP3zZT9jbp5QUOUm7fLkEE4avuhkh7BmJGu_384",
  },
});

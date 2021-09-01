import axios from "axios";
const KEY = "AIzaSyDk693qjsDIevYZW3yRwdZ42Lxm3gR8UrE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

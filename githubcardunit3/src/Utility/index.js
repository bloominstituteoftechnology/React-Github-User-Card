import axios from "axios";
const getGitCard = (user) => {
  return axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Axios error", err.response);
    });
};
export default getGitCard;

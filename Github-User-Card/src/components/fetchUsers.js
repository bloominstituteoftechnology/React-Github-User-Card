import axios from 'axios';

const fetchUsers = (user) => {
    return axios.get(`https://api.github.com/users/${user}`)
        .then((res)=> {
            return (res.data);
        })
        .catch(err=> console.log(err));
}

export default fetchUsers;
import axios from 'axios'

const getUser = (userName) =>{
    return axios.get(`https://api.github.com/users/${userName}`)
    .then((res)=>{
        return (res);
    })
    .catch (err=>{
        console.log(err)
    })
}

export default getUser
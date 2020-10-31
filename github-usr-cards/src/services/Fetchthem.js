export function fetchAppD() {
   
  
    return fetch(
      `https://api.github.com/users/extrude575757`
    )
      .then(res => res.json())
      .catch(err => console.log(err));
  }
  
  export function fetchNewu(newu) {

    return fetch(`https://api.github.com/users/${newu}`)
    .then(res => res.json());
  }
  
export function fetchAppD() {
   
  
    return fetch(
      `https://api.github.com/users/extrude575757`
    )
      .then(res => res.json())
      .catch(err => console.log(err));
  }
  
  export function searchQuakes(event) {
    const magnitude = event.target.magnitude.value;
    const minDate = event.target.min.value;
    const maxDate = event.target.max.value;
    return fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${minDate}&endtime=${maxDate}&minmagnitude=${magnitude}`
    ).then(res => res.json());
  }
  
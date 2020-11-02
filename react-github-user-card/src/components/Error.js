import React from 'react';
import '../App.css';

function Error(props){
  console.log('props in error',props)
return(
    <div className= "error">
       <p>Oops Check error!!!{props.errorInfo}</p>

    </div>

)

}

export default Error;
import React from "react"

 const Following = (props)=> {


        console.log("F PROPS", props)


    return (

           <div className ="Following">
             <h2> {props.following.login}</h2>
         </div>



     )
   




 }



 

export default Following
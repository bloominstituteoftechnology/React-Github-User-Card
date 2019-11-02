import React from "react"

 const Following = (props)=> {


        console.log("F PROPS", props)


    return (

           <div>
          <h2>Following:</h2>

          {props.following.map (f => {
              return (
                <div>
              <h2>{f.login}</h2>
                    </div>


              )
          })}

         




           </div>





     )
   




 }



 

export default Following
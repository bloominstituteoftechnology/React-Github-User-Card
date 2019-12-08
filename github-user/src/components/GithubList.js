import React from 'react';
import axios from 'axios'
import GithubCard from './GithubCard'
class GithubList extends React.Component{
   render(){
      return(
         <>
       {this.props.followers.map((follow)=>(
         <GithubCard key={follow.id} followers={follow}/>// makes a prop that can be used github card
       ))}
       </>
      );
   }
}



export default GithubList;
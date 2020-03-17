import React from 'react';

function createCard(user) {
    //elements
    let newCard = document.createElement('div');
     cardContent = document.createElement('div');
     bio = document.createElement('p');
     newImage = document.createElement('img');
     name = document.createElement('h3');
     userName = document.createElement('p');
     location = document.createElement('p');
     linkContent = document.createElement('p');
     link = document.createElement('a');
     numFollow = document.createElement('p');
     numFollowing = document.createElement('p');
  
    //append
  newCard.append(newImage);
  newCard.append(cardContent);
  cardContent.append(name);
  cardContent.append(userName);
  cardContent.append(location);
  cardContent.append(linkContent);
  linkContent.append(link);
  cardContent.append(numFollow);
  cardContent.append(numFollowing);
  cardContent.append(bio);
  
    //classLists
  newCard.classList.add('card');
  cardContent.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  
  //textContent
  bio.textContent = `Bio ${user.data.bio}`;
  newImage.src = user.data.avatar_url;
  name.textContent = user.data.name;
  userName.textContent = user.data.login;
  location.textContent = user.data.location;
  linkContent.textContent = "profile";
  link.textContent = user.data.html_url;
  link.setAttribute("href", data.html_url);
  numFollow.textContent = `Followers: ${user.data.followers}`;
  numFollowing.textContent = `Followers: ${user.data.following}`;
  
  
  //return
  return newCard;
  
  }
  
  // append new cards to html DOM 
  const entryPoint = document.querySelector('.cards');

 
  const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell',
  ]
  
  axios.get("https://api.github.com/users/dmhabh1992")
    .then(response => {
      // console.log(response.data)
        entryPoint.append(createCard(data));
      })
    .catch(error => {
      console.log("error encountered:", error);
    });


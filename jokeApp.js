"use strict"
const $jokeContainer = $('#joke-container');

async function populateJokes() {
  // pull 10 jokes from API

  const response = await fetch("https://icanhazdadjoke.com/",{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  console.log(response);
  const data = await response.json();

  console.log(data);
  const singleJoke = text.joke;




  // append vote functionality to each joke
  // append 10 jokes to container

}
populateJokes();
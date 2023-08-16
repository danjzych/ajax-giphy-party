'use strict';

console.log("Let's get this party started!");

const $form = $('form');

//when form is submitted, we want to get the value of our input at that moment, and use that as a search term on giphy
//we will then add a gif to the page after getting a response from giphy

async function getMeme(evt) {
  //get the current input value and store in a variable "searchterm"
  //turn that searchterm into a parameter URLSearchParams();
  //get result using await fetch(APIENDPOINT) store in a variable called response
  //from response we get our result .text()/.json(); and grab the first gif in the response
  //put the gif in meme container
  //outside of this function, we will probably wanna have some basic styling for the meme

  evt.preventDefault();

  const gifSearchTerm = $('#gifSearchTerm').val();

  const params = new URLSearchParams({q: gifSearchTerm});
  const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}&api_key=${api_key}`);
  const responseJSON = await response.json(); //why can't we add '.data[0].url' to the end of this?
  const gifURL = responseJSON.data[0].url;

  console.log(responseJSON);

  console.log(gifURL);

  // $('.gifContainer').append($(`<img src='${gifURL}' />`));
  $('.gifContainer').append($(`<img src='https://giphy.com/embed/iNZKRliHP4tI4mALtO' />`));


}

$form.on('submit', getMeme);
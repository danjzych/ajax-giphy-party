'use strict';

console.log("Let's get this party started!");

const $form = $('form');


/**
 * This function gets the users search term, and accesses the giphy API, then
 * returns a random gif from the API results and posts it to the DOM.
 * @param {*} evt
 */
async function getGif(evt) {
  evt.preventDefault();

  const gifSearchTerm = $('#gifSearchTerm').val();
  const params = new URLSearchParams({ q: gifSearchTerm });
  const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

  const response = await fetch(`http://api.giphy.com/v1/gifs/search?${params}&api_key=${api_key}`);
  //TODO:give better name to responseJSON
  const responseJSON = await response.json(); //why can't we add '.data[0].image.original.url' to the end of this?

  const randomIndex = Math.floor(Math.random() * 50);
  const gifURL = responseJSON.data[randomIndex].images.original.url;

  $('.gifContainer').append($(`<img src='${gifURL}' />`));
}

$form.on('submit', getGif);


/**
 * This function removes all gifs from the DOM.
 */
function deleteAllGifs() {
  $('img').remove();
}

$('#deleteAll').on('click', deleteAllGifs);
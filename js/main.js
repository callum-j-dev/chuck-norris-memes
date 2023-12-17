//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.chucknorris.io/jokes/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        let joke = data.value;
        document.querySelector('#joke').innerText = joke;

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
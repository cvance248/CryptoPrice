//API endpoint logic to check the price of whatever coin wants to be checked.

//This is the button that will be used to retrieve data from the API once it is clicked.
document.querySelector('button').addEventListener('click', getPrice)



function getPrice () {

  //Makes variable for the imput value to be passed into the fetch URL
    let cryptoInput = document.querySelector('#cryptoSymbol').value

    //This is the container that result will be passed into
    let cryptoAnswer = document.querySelector('#cryptoPrice')

    //This will format the URL to retrieve the correct data
    let symbol = cryptoInput.toUpperCase() + 'USDT'


    let url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`

fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        //Since the endpoint sends data back with 5 default decimals, I only want to show to decimal points for values that are greater than $1. This formats the returned dollar amount value give it a cleaner look
        Number(data.price) < 1 ? Number(data.price) : Number(data.price).toFixed(2)

        //This is the template for the sentence that will be printed in the DOM to show that value of the selected coin in USD
        cryptoAnswer.textContent = `${data.symbol} is currently worth $ ${Number(data.price)} per coin`
        
       
      })
      //If an error occurs, it will be printed to the console
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
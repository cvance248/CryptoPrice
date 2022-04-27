document.querySelector('button').addEventListener('click', getPrice)



function getPrice () {

    let symbol = document.querySelector('#cryptoSymbol').value.toUpperCase() + 'USDT'


    let url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`

fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('#cryptoPrice').textContent = `${data.symbol} is currently worth $ ${Number(data.price).toFixed(2)} per coin`
        
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
import React from 'react';
import ReactDOM from 'react-dom';

// import * as React from "https://cdn.skypack.dev/react@17.0.1";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function App () {   
   const [quoteData, setQuoteData] = React.useState([]);
   const [activeQuote, setActiveQuote] = React.useState({});
  
   React.useEffect(()=> {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/")
        .then(res => res.json())
        .then(data => {
          setQuoteData(data.quotes)
          setActiveQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)])    
        })
      }, []);
  
  var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
  ];
  
  function randomColors() {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  const backgroundColor = {background: `linear-gradient(0.25turn, ${randomColors()}, ${randomColors()}, ${randomColors()})`}
  const quoteBackground = {background: `linear-gradient(${randomColors()}, ${randomColors()})`}
  
  function randomQuote(){
    if (quoteData.length > 0) {
      let randomNum = Math.floor(Math.random() * quoteData.length);
      setActiveQuote({...quoteData[randomNum]})
    }
  }
  
  function handleTwit(){
    console.log('twit')
  }
  
  function handleTunmb(){
    console.log('tumb')
  }
    
  return (
    <div>
      <h1 className="quote-header"> Random Quote Generator </h1>
      <div id="quote-box" style={quoteBackground}>
        <p id="text"> Quote : </p>
        <div className="quote-text-block">
          "{activeQuote.quote}"
        </div>
        <div id="author">
          Author: {activeQuote.author}
        </div>
        <div className="buttons">
            <a
              href={`https://twitter.com/intent/tweet?text=${activeQuote.quote}-${activeQuote.author}`}
              className="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
              onClick={handleTwit}
            >
            <i className="fa fa-twitter"></i>
            </a>

            <div id="new-quote" onClick={randomQuote}>Next Quote</div>

            <a
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
                    {encodeURIComponent(activeQuote.author)} +
      '&content=' +
                    {encodeURIComponent(activeQuote.quote)} +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
              className="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              onClick={handleTunmb}
            >
            <i className="fa fa-tumblr"></i>
            </a>
        </div>
      </div>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
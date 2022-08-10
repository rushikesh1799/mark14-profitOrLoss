// selecting all the elements using the #id's
let initialPrice = document.querySelector("#initial-price");
let stocksQuantity = document.querySelector("#stocks-quantity");
let currentPrice = document.querySelector("#current-price");
let submitButton = document.querySelector("#submit-btn");
let outputBox = document.querySelector("#output-box");


// Event listeners
submitButton.addEventListener("click", submitHandler);


// Functions - Processing

function submitHandler(event) {
    event.preventDefault();
    let ip = Number(initialPrice.value);
    let qty = Number(stocksQuantity.value);
    let curr = Number(currentPrice.value);
    if(ip<0|| qty<0||curr<0 ) {
        showOutput("Initial value or quantity or curr value can't be negative");  
    }else if (ip == 0 && qty == 00 && curr == 0) {
        showOutput("Please enter all the values correctly");
    } else {
        calculateProfitAndLoss(ip,qty,curr);
    }
}

function calculateProfitAndLoss(initialPrice, stocksQuantity, currentPrice) {
    if (initialPrice > currentPrice) {
        // loss logic
        let loss = -((currentPrice - initialPrice) * stocksQuantity);
        let lossPercentage = (loss / (initialPrice*stocksQuantity))*100;
        showOutput(`Tough luck 😕, your Loss is : ${loss} and your Percentage of loss is : ${lossPercentage}%`);   
    } else if (currentPrice > initialPrice) {
        // profit logic
        let profit = ((currentPrice - initialPrice) * stocksQuantity);
        let profitPercentage = (profit / (initialPrice*stocksQuantity))*100;
        showOutput(`That's Fantastic! 🥳, your Profit is : ${profit} and your Percentage of Profit is : ${profitPercentage}%`); 
        
    } else{
        // no profit no loss logic
        showOutput(`No Pain No Gain AND No Gain No Pain`);  
    } 
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

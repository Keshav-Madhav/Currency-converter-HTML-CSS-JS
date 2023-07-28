const fromCurr = document.getElementById("from-select");
const toCurr = document.getElementById("to-select");

let api= `https://v6.exchangerate-api.com/v6/6265bb6a42d00eac7ed86691/latest/USD`

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = `${currency} - ${currencyNames[currency]}`;
    fromCurr.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = `${currency} - ${currencyNames[currency]}`;
    toCurr.add(option);
});


fromCurr.value="INR";
toCurr.value="USD";

let converCurr= ()=>{
    const amount = document.querySelector("#amount").value;
    const fromCurrency=fromCurr.value;
    const toCurrency=toCurr.value;

    if(amount.length!=0){
        fetch(api).then(resp => resp.json()).then(data=>{
            let fromExchangeRate=data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount/fromExchangeRate)*toExchangeRate;
            result.innerHTML=`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        })
    }
    else{
        return;
    }
}

document.querySelector("#convert").addEventListener("click", converCurr);
window.addEventListener("load", converCurr);
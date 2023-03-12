
const currency_one = document.getElementById("currency-one")
const amount_one = document.getElementById("amount-one");
const currency_two = document.getElementById("currency-two")
const amount_two = document.getElementById("amount-two");
const rates = document.getElementById("rate")
const swap = document.getElementById('swap')

//fetch exchange rates and update the DOM
function calculate() {
    const currency__one = currency_one.value;
    const currency__two = currency_two.value;
    // console.log(currency__one,currency__two);
    fetch(`https://v6.exchangerate-api.com/v6/89fecd45265edcc3245c3181/latest/${currency__one}`).then(res => res.json())
        .then(data => {
            // console.log(data);
            const rate = data.conversion_rates[currency__two]
            // console.log(rates);
            rates.innerText = `1 ${currency__one}= ${rate} ${currency__two}`


            amount_two.value = ((amount_one.value) * rate).toFixed(3);
        });
}

//Event Listners
currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
})

calculate();
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');

const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');
const messageEl = document.getElementById('message');

function calculate() {
    const currency_one = currencyEl_one.value;  
    const currency_two = currencyEl_two.value;  
    const amount_one_value = parseFloat(amountEl_one.value);

    if (amount_one_value < 0) {
        messageEl.innerText = "Amount cannot be negative.";
        return;
    } else {
        messageEl.innerText = ""; // Limpiar cualquier mensaje de error previo
    }

    messageEl.innerText = "Fetching exchange rate, please wait...";

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];

            if (rate) {
                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
                amountEl_two.value = (amount_one_value * rate).toFixed(2);

                // Limpiar el mensaje de espera
                messageEl.innerText = "";
            } else {
                messageEl.innerText = `No exchange rate available for ${currency_two}`;
            }
        })
        .catch(err => {
            // Mostrar mensaje de error si la API falla
            messageEl.innerText = `Error fetching exchange rate: ${err.message}`;
        });
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);

currencyEl_two.addEventListener('change', calculate);        
amountEl_two.addEventListener('input', calculate);

swapEl.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();

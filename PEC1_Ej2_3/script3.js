const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const currencySelect = document.getElementById('currency-one');
const movieSelect = document.getElementById('movie');
const currencySymbolElement = document.getElementById('currency-symbol');

let ticketPrice = +movieSelect.value;
let selectedCurrency = currencySelect.value;
let exchangeRate = 1; 


const movies = [
    { name: "The Last Samurai", price: 10 },
    { name: "Descubriendo a Forrster", price: 12 },
    { name: "Chiken Run: Rebelión en la granja", price: 8 },
    { name: "Seven", price: 9 }
];


function fetchExchangeRate(currency) {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then(res => res.json())
        .then(data => {
            exchangeRate = data.rates[currency];
            updateMoviePrices(); // Actualiza los precios de las películas
            updatePrices(); // Actualiza los precios del total y del ticket
        })
        .catch(err => {
            console.error("Error fetching exchange rate:", err);
        });
}


function updateMoviePrices() {
    const currencySymbol = getCurrencySymbol(selectedCurrency);

    // Iterar sobre las opciones del selector de películas
    movieSelect.querySelectorAll('option').forEach((option, index) => {
        const movie = movies[index];
        const convertedPrice = (movie.price * exchangeRate).toFixed(2); // Precio convertido
        option.textContent = `${movie.name} (${convertedPrice}${currencySymbol})`;
        option.value = convertedPrice; // Cambia el valor del option para reflejar el precio en la divisa seleccionada
    });

    ticketPrice = +movieSelect.value;
}

function getCurrencySymbol(currency) {
    switch (currency) {
        case 'USD': return '$';
        case 'EUR': return '€';
        case 'GBP': return '£';
        default: return '$';
    }
}

function updateCurrencySymbol() {
    const currencySymbol = getCurrencySymbol(selectedCurrency);
    currencySymbolElement.innerText = currencySymbol; // Actualiza el símbolo de la moneda
}

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


function setCurrencyData(currency) {
    localStorage.setItem('selectedCurrency', currency);
}


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

  
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    total.innerText = (ticketPrice * selectedSeatsCount * exchangeRate).toFixed(2);
}


function updatePrices() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    total.innerText = (ticketPrice * selectedSeatsCount * exchangeRate).toFixed(2);

    document.querySelectorAll('.price-individual').forEach(seat => {
        seat.innerText = (ticketPrice * exchangeRate).toFixed(2);
    });

    updateCurrencySymbol(); // Actualiza el símbolo de la divisa en el párrafo
}


function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    const storedCurrency = localStorage.getItem('selectedCurrency');
    if (storedCurrency !== null) {
        selectedCurrency = storedCurrency;
        currencySelect.value = selectedCurrency;
        fetchExchangeRate(selectedCurrency); // Actualiza la tasa de cambio y los precios
    }
}


currencySelect.addEventListener('change', e => {
    selectedCurrency = e.target.value;
    setCurrencyData(selectedCurrency); // Guardar divisa en localStorage
    fetchExchangeRate(selectedCurrency); // Fetch exchange rate and update prices
});


movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});


container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});


populateUI();
updateSelectedCount();

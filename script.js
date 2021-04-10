// TESTING

// Select a single order, display the price
const latte = document.getElementById('latte')
const americano = document.getElementById('americano')
const macchiato = document.getElementById('macchiato')
const cappuccino = document.getElementById('cappuccino')
const frappuccino = document.getElementById('frappuccino')

let drinks = [latte, americano, macchiato, cappuccino, frappuccino];

let prices = new Map();
prices.set('Latte', '3.65')
prices.set('Americano', '2.65')
prices.set('Macchiato', '4.35')
prices.set('Cappuccino', '5.25')
prices.set('Frappuccino', '5.65')

const coffee_price = document.getElementById('coffee-price');
let p1 = document.createElement('p')
coffee_price.appendChild(p1)
// adding a line break each time we add text content to p2
p1.setAttribute('style', 'white-space: pre;')

// loop over the array of drinks 
// if one of the drinks gets clicked
// show the price
var clicked = false;
var sb_price = 0;
drinks.forEach(function(item){
    item.onclick = function() {
        var coffee = item.innerHTML
        clicked = true;
        // clear the last requested information
        p1.innerHTML = '';
        p2.innerHTML = '';
        // show the requested drink's price
        sb_price = prices.get(coffee);
        p1.textContent = 'Your go-to drink is a ' + coffee + '. ' + 'YUM! \r\n'
        p1.textContent += 'The price of a ' + coffee + ' is $'
        p1.textContent += sb_price;
        p1.textContent += '. '

        // add styling to new html conten
        let newStyle = document.querySelector('#savings');
        newStyle.classList.add("output");
    }
});

// prevent the page from refreshing after form submission
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// After the user enter the quantity, display the daily cost of their coffee habit
const daily_cost = document.getElementById('daily-cost');
let p2 = document.createElement('p')
daily_cost.appendChild(p2)
var qty = 0

// adding a line break each time we add text content to p2
p1.setAttribute('style', 'white-space: pre;')

let btn_qty = document.getElementById('qty-submit');
btn_qty.onclick = function() {
    if (clicked == false) {
        alert('please choose a drink first')
    };

    qty = document.getElementById('input-qty').value;
    var daily_cost = sb_price * qty;
    p2.textContent = 'Your coffee habit is costing you $' + daily_cost + ' per day! \r\n'
}


// calculate compound interest 
function calcTotalValue(year, daily_invest){
    var total_value = 0;
    const number_of_days = 365 * year;
    const apr = 0.07;
    const daily_gain = 0.07/365;
    for (let i = 0; i < number_of_days;i++) {
        total_value += daily_invest;
        total_value *= (1 + daily_gain);
    }
    return total_value.toFixed(2);
}

// show the potentional savings
const savings = document.getElementById('savings');
let p3 = document.createElement('p')
savings.appendChild(p3)

// adding a line break each time we add text content to p2
p3.setAttribute('style', 'white-space: pre;')
let show = document.getElementById('button-enter');

// when the user clicks on the "Show me" button
show.onclick = function () {
    if (clicked == false) {
        // erase the last requested information
        savings.innerHTML = '';
        alert('Please choose a drink first. ');
        location.reload();
    } 
    else {
        p3.innerHTML = '';
        p3.textContent += 'If you make coffee at home instead: \r\n'
        p3.textContent += 'Ground Coffee: $12 / 80 cups \r\n'
        p3.textContent += 'Filters: $0.02 \r\n'
        p3.textContent += 'Creamer: $0.03 \r\n'
        p3.textContent += 'Total= $0.20 per cup \r\n'
        p3.textContent += '\r\n'
        // calculate the savings per cup
        const savings_per_cup = (sb_price - 0.20).toFixed(2);
        p3.textContent += 'Having your coffee at home would save you $' + savings_per_cup + ' per cup! \r\n'
        const daily_savings = (qty*savings_per_cup).toFixed(2)
        p3.textContent += '$' + savings_per_cup + ' per cup X ' + qty + ' cups per day = $' + daily_savings + ' saved per day. \r\n'
        p3.textContent += '\r\nIf you instead invested that $' + daily_savings + ' per day:\r\n'
        var total_val = addCommas(calcTotalValue(55, parseInt(daily_savings)));
        p3.textContent += 'After 55 years at a 7% return, \r\n'
        p3.textContent += 'you would have $' + total_val + '!\r\n'
     }
}

// format number 

function addCommas (number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
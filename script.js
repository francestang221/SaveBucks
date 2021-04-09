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

const savings = document.getElementById('savings');
let p1 = document.createElement('p')
savings.appendChild(p1)
// adding a line break each time we add text content to p2
p1.setAttribute('style', 'white-space: pre;')

// loop over the array of drinks 
// if one of the drinks gets clicked
// show the price
var clicked = false;
sb_price = 0;
drinks.forEach(function(item){
    item.onclick = function() {
        var coffee = item.innerHTML
        clicked = true;
        // clear the last requested information
        p1.innerHTML = '';
        p2.innerHTML = '';
        // show the requested drink's price
        sb_price = prices.get(coffee);
        p1.textContent = 'You go-to drink is a ' + coffee + '. ' + 'YUM! \r\n'
        p1.textContent += 'The price of a ' + coffee + 'is $'
        p1.textContent += sb_price;
        p1.textContent += '. '
    }
});

// show the potentional savings
let p2 = document.createElement('p')
savings.appendChild(p2)
// adding a line break each time we add text content to p2
p2.setAttribute('style', 'white-space: pre;')
let show = document.getElementById('button-enter');
show.onclick = function () {
    if (clicked == false) {
        // erase the last requested information
        savings.innerHTML = '';
        alert('Please choose a drink first. ');
        location.reload();
    } 
    else {
        p2.innerHTML = '';
        p2.textContent += 'IF YOU MAKE COFFE AT HOME: \r\n'
        p2.textContent += 'Ground Coffee: $12 = 80 Cups \r\n'
        p2.textContent += 'Filters: $0.02 \r\n'
        p2.textContent += 'Creamer: $0.03 \r\n'
        p2.textContent += 'Total: $10.00 / 50 Cups \r\n'
        p2.textContent += '= $0.20 per Cup \r\n'

        p2.textContent += '\r\n HOW TO BE A MILLIONAIRE: \r\n'
        // calculate the savings per cup
        var savings_per_cup = (sb_price - 0.20).toFixed(2);
        p2.textContent += savings_per_cup + ' Savings per Cup \r\n'
        var daily_savings = (3*savings_per_cup).toFixed(2)
        p2.textContent += savings_per_cup + ' per Cup X 3 = ' + daily_savings + ' per Day \r\n'
        p2.textContent += 'Invest ' + daily_savings + ' per Day Over 55 Years at 7% Return \r\n'
        var total_value = '1,331,086.16'; // WIP: need to calculate using a function
        p2.textContent += '= $' + total_value + ' VALUE\r\n'
     }
    // reset the dropdown menu attribute
    clicked = false;
}

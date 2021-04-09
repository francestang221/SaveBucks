// Select a single order, display the price
const latte = document.getElementById('latte')
const americano = document.getElementById('americano')
const macchiato = document.getElementById('macchiato')
const cappuccino = document.getElementById('cappuccino')
const frappuccino = document.getElementById('frappuccino')

let drinks = [latte, americano, macchiato, cappuccino, frappuccino];

const savings = document.getElementById('savings');
let p1 = document.createElement('p')
savings.appendChild(p1)

// loop over the array of drinks 
// if one of the drinks gets clicked
// show the price
var clicked = false;
drinks.forEach(function(item){
    item.onclick = function() {
        clicked = true;
        // clear the last requested information
        p1.innerHTML = '';
        p2.innerHTML = '';
        // show the requested drink's price
        p1.textContent = "The price of a " + item.innerHTML + " is $"
        p1.textContent += '3.65';
    }
});

// WIP: get the drink price from the json file

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
        p2.textContent += 'Ground Coffee: $8.70 = 66 Cups \r\n'
        p2.textContent += 'Filters: $0.05 \r\n'
        p2.textContent += 'Creamer: $0.25 \r\n'
        p2.textContent += 'Total: $9.00 / 66 Cups \r\n'
        p2.textContent += '\r\n HOW TO BE A MILLIONAIRE: \r\n'
        p2.textContent += '= $2 Savings per Cup \r\n'
        p2.textContent += '= $2 Per Cup X 3 = $6 per Day \r\n'
        p2.textContent += '= Invest $6 Per Day Over 55 Years at 7% Return \r\n'
        p2.textContent += '= $1,331,086.16 VALUE\r\n'
     }
    // reset the dropdown menu attribute
    clicked = false;
}

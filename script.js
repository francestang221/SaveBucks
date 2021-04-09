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
drinks.forEach(function(item){
    item.onclick = function() {
        // clear the last requested information
        p1.innerHTML = '';
        p2.innerHTML = '';
        p1.textContent = "The price of a " + item.innerHTML + " is $"
        p1.textContent += '3.65';
    }
});

// WIP: get the drink price from the json file

// show the potentional savings
let p2 = document.createElement('p')
savings.appendChild(p2)
let show = document.getElementById('button-enter');
show.onclick = function () {
    p2.innerHTML = '';
    p2.textContent += 'You could have saved one million dollars!' 
}

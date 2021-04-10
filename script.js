// Auto-populate form fields based on api 

document.addEventListener('DOMContentLoaded', function () {

    fetch('https://my-coffee-api.herokuapp.com/coffee')
    .then((res) => res.text())
    .then((data) => { 
        data = JSON.parse(data);
        let output = '';
        
        // create button for each coffee option in API
        data.forEach(function(coffees) {
            output += `<option class="dropdown-item">${coffees.name}</option>\r\n`;            
        });
        document.getElementById('dropdown-options').innerHTML += output;
    }) 
    .catch((err) => console.log(err));
})

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

// Take user input, output total savings

document.getElementById('button-enter').onclick = function getSavings() {

    
    // populate coffee choice and quantity based on user input
    let selection = document.getElementById('dropdown-options');
    let coffee_choice = selection.options[selection.selectedIndex].text;
    let qty = 0;
    qty = document.getElementById('input-qty').value;

    // if coffee or amount empty, re-prompt user to choose drink first ---set placeholder and then value == 0 for this to work
    if (coffee_choice == "Choose your coffee order" || qty == 0) { 
        // erase the last requested information
        savings.innerHTML = '';
        alert('Please choose a drink & input-qty first. ');
        location.reload();
    }

    else {
        let sb_price = 0;
        let coffee_name = "";

        // creating elements for outputs
        const coffee_price = document.getElementById('coffee-price');
        let p1 = document.createElement('p')
        coffee_price.appendChild(p1)

        const daily_cost = document.getElementById('daily-cost');
        let p2 = document.createElement('p')
        daily_cost.appendChild(p2)
        
        const savings = document.getElementById('savings');
        let p3 = document.createElement('p')
        savings.appendChild(p3)

        //TO DO WHERE TO PUT THIS
        p1.setAttribute('style', 'white-space: pre;')
        p2.setAttribute('style', 'white-space: pre;')
        p3.setAttribute('style', 'white-space: pre;')

        fetch('https://my-coffee-api.herokuapp.com/coffee')
        .then((res) => res.text())
        .then((data) => { 
            let coffees = JSON.parse(data);

            coffees.forEach(function(coffees) {
                if (coffees.name == coffee_choice) {
                    coffee_name = coffees.name;
                    sb_price = coffees.price; 
                    console.log(sb_price);

                    p1.innerHTML = '';
                    p2.innerHTML = '';

                    // show the requested drink's price
                    p1.textContent = 'Your go-to drink is a ' + coffee_name + '. ' + 'YUM! \r\n'
                    p1.textContent += 'The price of a ' + sb_price + ' is ~$'
                    p1.textContent += sb_price;
                    p1.textContent += '. '

                    // show daily savings
                    var daily_cost = sb_price * qty;
                    p2.textContent = 'Your coffee habit is costing you $' + daily_cost + ' per day! \r\n'
                
            
                    // add styling to new html content
                    let newStyle = document.querySelector('#savings');
                    newStyle.classList.add("output");

                    // show total potential investment 
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
            });
        })
    }   
}

// format output number 

function addCommas (number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

document.getElementById('dropdown-options').addEventListener('click', function () {
    /* I'd like to do access the individual options by looping, just not sure how yet, 
    so this is just a temporary solution to get the other function to work */
    let option = document.getElementById('latte')
    latte.addEventListener('click', GetPrice(option));
})

/* Returns the price for the item that the user has clicked */ 
function GetPrice (option) {
    fetch('drinks.json')
    .then((res) => res.json())
    .then((data) => {
        let drink = toString(option.innerHTML); /* currently undefined */ 
        console.log(option.innerHTML);
        for (drink in data)
        {
            let price = drink.price;
            document.getElementById('savings').innerHTML = `<h2>Price: ${price}</h2>`;
        }

    })
    .catch((err) => console.log(err))
}
        



/* Returns savings based on selected menu item when user clicks */ 
function CalculateSavings (price) {


}


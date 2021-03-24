const tags = {
    rate: document.getElementById("rate"),
    range: document.getElementById("range"),
    result: document.getElementById("result"),
    principal: document.getElementById("principal"),
    rate: document.getElementById("rate"),
    years: document.getElementById("years"),
    highlight: document.createElement("span")
}

tags.rate.addEventListener('change', function() {
    tags.range.innerHTML = `${this.value}%`;
})

function makeHighlight(parent, prefix, value, postfix = '.') {
    parent.innerHTML += prefix;
    const tag = document.createElement("span");
    tag.style.background = 'yellow';
    tag.innerHTML += value;
    parent.appendChild(tag);
    parent.innerHTML += postfix;
    parent.innerHTML += '<br />';
}

function compute()
{
    const { rate, result, principal, years, highlight } = tags;
    result.innerHTML = '';
    const interest =principal.value * years.value * parseFloat(rate.value) / 100;
    console.log(rate.value)
    console.log(typeof(rate.value))
    
    //validation 
    if(Number(principal.value) <= 0) {
        alert('Enter a positive number');
        principal.focus();
        return;
    }
    console.log(principal.value, interest)

    // const total = Number(principal.value) + interest;
    // console.log(Number(principal.value), rateValue, Number(years.value))
    // console.log(typeof(total), total)
    const year = new Date().getFullYear() + Number(years.value);

    makeHighlight(result, "if you deposit ", principal.value, ","); 
    makeHighlight(result, "at an interest rate of ", rate.value, "%.");
    makeHighlight(result, "You will receive an amount of ", interest, ",");
    makeHighlight(result, "in the year", year);
 

    

}


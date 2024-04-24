// fetchind data from the api

async function getQuote() {
    var response = await fetch("https://api.quotable.io/random")
    var data = await response.json();
    console.log(data)

    document.getElementById("random").innerHTML = data.content;
    document.getElementById("author").innerHTML = data.author;
}

getQuote();


// Function to copy quote to clipboard

function copyTextFunc() {
    var copyText = document.getElementById("random");

    // creating textarea of html
    var input = document.createElement("textarea");
    
    //adding SPAN tag text to textarea
    input.value = copyText.textContent;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");

    // removing textarea after copy
    input.remove();
}
copyTextFunc();
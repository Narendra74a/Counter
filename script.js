const body = document.getElementById("B");


body.addEventListener("click", () => {
    let count = parseInt(localStorage.getItem("counter"))||10000000;
    count--;
    localStorage.setItem("counter", count);
    document.getElementById("counter").innerHTML = count;
    console.log(count);
});


// localStorage.clear();

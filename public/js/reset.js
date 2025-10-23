document.getElementById("btn_reset").addEventListener("click", () => {
    // alert("Reset button trykket");
    Secret = makeSecret();
    let result = document.getElementById("results");

    result.innerHTML = "New code generated - start guessing!";
});
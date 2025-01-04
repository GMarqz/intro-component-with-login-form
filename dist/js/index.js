const $formInput = document.querySelectorAll("[required]");
console.log($formInput);
$formInput.forEach((input) => {
    input.addEventListener("blur", () => {
        input.placeholder = "";
        console.log("Required");
    });
});

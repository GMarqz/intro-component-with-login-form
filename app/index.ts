const $formInput = document.querySelectorAll<HTMLInputElement>("[required]");
console.log($formInput);

$formInput.forEach((input) => {
    input.addEventListener("blur", () => {
        console.log("Required");
    })
});

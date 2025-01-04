const $formInput = document.querySelectorAll<HTMLInputElement>("[required]");
console.log($formInput);

$formInput.forEach((input: HTMLInputElement) => {
    input.addEventListener("blur", () => {
        input.placeholder = "";
        console.log("Required");
    });
});


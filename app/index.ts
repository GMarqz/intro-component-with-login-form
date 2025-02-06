const $submitBtn = document.getElementById("submit") as HTMLInputElement;
const $formInput = document.querySelectorAll<HTMLInputElement>("[required]");
console.log($formInput);

$formInput.forEach((input: HTMLInputElement) => {
    input.addEventListener("blur", () => {
        input.placeholder = "";
        console.log("Required");
    });
});

$submitBtn.addEventListener("click", (e: Event) => {
    e.preventDefault();
    console.log("User >>Jiren97<< is already using this password, please enter another password.")
})
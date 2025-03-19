// const $submitBtn = document.getElementById("submit") as HTMLInputElement;
// const $formInput = document.querySelectorAll<HTMLInputElement>("[required]");
// console.log($formInput);
// $formInput.forEach((input: HTMLInputElement) => {
//     input.addEventListener("blur", () => {
//         input.placeholder = "";
//         console.log("Required");
//     });
// });
// $submitBtn.addEventListener("click", (e: Event) => {
//     e.preventDefault();
//     console.log("User >>Jiren97<< is already using this password, please enter another password.")
// })
const $fNameInput = document.getElementById("fname");
const $invalidMessage = document.getElementById("invalid-message");
$fNameInput.addEventListener("blur", () => {
    $fNameInput.reportValidity();
    if ($fNameInput.validity.valid) {
        console.log("VALID NAME PLEASE PROCED");
        $invalidMessage.textContent = "INVALID MESSAGE";
    }
    else {
        console.log("Your name is not valid");
    }
});
const invalidMessages = {
    fname: {
        valueMissing: "First Name cannot be empty"
    },
    lname: {
        valueMissing: "Last Name cannot be empty"
    },
    email: {
        valueMissing: "Email cannot be empty",
        typeMismatch: "Looks like this is not an email"
    },
    password: {
        valueMissing: "Password cannot be empty",
        customError: "This password is already being used by the user PorsheLover64, please enter a different password"
    }
};

//FIRST NAME RELATED CONSTS
const $formFieldFirstName = document.getElementById('form-field-name') as HTMLFormElement;
const $inputFirstName = document.getElementById('fname') as HTMLInputElement;
const $spanFirstName = document.getElementById('invalid-message-fname') as HTMLSpanElement;

// EMAIL RELATED CONSTS

const $formFieldEmail = document.getElementById('form-field-email');
const $inputEmail = document.getElementById('email');
const $spanEmail = document.getElementById('invalid-message-email');

// FORM

const $form = document.getElementById('form') as HTMLFormElement;

// console.log($submitBtn);


//todas as consts acima estão funcionando corretamente

// console.log($spanFirstName);

function isValidName(input: HTMLInputElement) {
    const userName = input.value;
    const patternName = /^(?!(.)\1\1)[A-Za-zÀ-ÿ -]{3,30}$/i.test(userName);
    console.log(patternName);

        if(!patternName) { //Dunno how but this code is working just fine. Gotta find out the reason why its working.
            input.setCustomValidity('This name is invalid');
            console.log(`"${userName}" is not a valid name.`);
            input.addEventListener("change", (e: any) => {
                const target = e.target;
                if(target.validity.patternMismatch) {
                    input.setCustomValidity('Nope');
                } else {
                    input.setCustomValidity('');
                }
            })
        } else {
            input.setCustomValidity('');
        }

// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
 
// https://stackoverflow.com/questions/70514086/why-are-custom-validation-messages-causing-my-html-form-elements-to-stay-invalid


    return userName;
}

// isValidName($inputFirstName);

//ABOVE FUNCTION (isValidName) IS WORKING FINE


$form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    isValidName($inputFirstName);


    // input.setCustomValidity('');
    console.log(`${$inputFirstName.value}`);
    console.log(isValidName($inputFirstName));
    
});

let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let company = document.getElementById("company");
let msg = document.getElementById("msg");

let testFirst = false;
let testLast = false;
let testMail = false;
let testCompany = false;
let testMsg = false;



firstName.addEventListener("blur", () => {
    let str = firstName.value;
    let regex = /^[a-zA-Z0-9 ]{3,15}$/;

    if (regex.test(str)) {
        testFirst = true;
        document.getElementById("isEmptyFirst").innerHTML = "";
    } else {
        testFirst = false;
        document.getElementById("isEmptyFirst").innerHTML = "Started letter must be a Character";
    }
});


lastName.addEventListener("blur", () => {
    let str = lastName.value;
    let regex = /^[a-zA-Z0-9 ]{3,15}$/;

    if (regex.test(str)) {
        testLast = true;
        document.getElementById("isEmptyLast").innerHTML = "";
    } else {
        testLast = false;
        document.getElementById("isEmptyLast").innerHTML = "Started letter must be a Character";
    }
});


email.addEventListener("blur", () => {
    let str = email.value;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(str)) {
        testMail = true;
        document.getElementById("isEmptyMail").innerHTML = "";
    } else {
        testMail = false;
        document.getElementById("isEmptyMail").innerHTML = "Enter a valid email like abc@gmail.com";
    }
});


company.addEventListener("blur", () => {
    let str = company.value;
    let regex = /^[a-zA-Z0-9#-_. ]{5,50}$/;

    if (regex.test(str)) {
        testCompany = true;
        document.getElementById("isEmptyCompany").innerHTML = "";
    } else {
        testCompany = false;
        document.getElementById("isEmptyCompany").innerHTML = "Company name must contain at least 5 characters";
    }
});


msg.addEventListener("blur", () => {
    let str = msg.value;
    let regex = /^[a-zA-Z0-9#-_. ]{4,500}$/;

    if (regex.test(str)) {
        testMsg = true;
        document.getElementById("isEmptyMsg").innerHTML = "";
    } else {
        testMsg = false;
        document.getElementById("isEmptyMsg").innerHTML = "Message must contain at least 4 characters";
    }
});


document.querySelector('form').addEventListener('submit', (e) => {
    if (!testFirst || !testLast || !testMail || !testCompany || !testMsg) {
        e.preventDefault();
        document.getElementById("isEmpty").innerHTML = "Please fill out the form correctly.";
    }
    else {
        document.getElementById("isEmpty").innerHTML = "";
    }
});

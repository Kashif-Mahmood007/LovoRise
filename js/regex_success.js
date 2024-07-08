
let userName = document.getElementById("username");
let partnerName = document.getElementById("partnername");
let msg = document.getElementById("msg");

let testUser = false;
let testPartner = false;
let testMsg = false;



userName.addEventListener("blur", () => {
    let str = userName.value;
    let regex = /^[a-zA-Z0-9 ]{3,15}$/;

    if (regex.test(str)) {
        testUser = true;
        document.getElementById("isEmptyUser").innerHTML = "";
    } else {
        testUser = false;
        document.getElementById("isEmptyUser").innerHTML = "Started letter must be a Character";
    }
});


partnerName.addEventListener("blur", () => {
    let str = partnerName.value;
    let regex = /^[a-zA-Z0-9 ]{3,15}$/;

    if (regex.test(str)) {
        testPartner = true;
        document.getElementById("isEmptyPartner").innerHTML = "";
    } else {
        testPartner = false;
        document.getElementById("isEmptyPartner").innerHTML = "Started letter must be a Character";
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
    if (!testUser || !testPartner || !testMsg) {
        e.preventDefault();
        document.getElementById("isEmpty").innerHTML = "Please fill out the form correctly.";
    }
    else {
        document.getElementById("isEmpty").innerHTML = "";
    }
});

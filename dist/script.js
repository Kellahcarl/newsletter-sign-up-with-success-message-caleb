"use strict";
const regexKey = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let email = document.querySelector(".email-form");
let form = document.querySelector("form");
let error = document.querySelector(".error");
let header = document.querySelector("header");
let formArea = document.querySelector("section");
let success = document.querySelector(".success-section");
let container = document.querySelector(".container");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((email === null || email === void 0 ? void 0 : email.value) !== "") {
        if (regexKey.test(email.value)) {
            formArea.style.display = "none";
            header.style.display = "none";
            if (window.innerWidth >= 769) {
                container.style.maxWidth = "375px";
            }
            else {
                container.style.maxWidth = "505px";
            }
            success.style.display = "block";
        }
        else {
            error.style.display = "block";
            email.style.borderColor = "#ff6257";
            email.style.color = "#ff6257";
            email.style.backgroundColor = "#ff625730";
        }
    }
    else {
        error.style.display = "block";
        container.style.width = "505px";
    }
});

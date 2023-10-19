"use strict";
class FormValidator {
    constructor() {
        var _a;
        this.regexKey = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zAZ0-9]+.)+[a-zA-Z]{2,}))$/;
        this.email = document.querySelector(".email-form");
        this.form = document.querySelector("form");
        this.error = document.querySelector(".error");
        this.header = document.querySelector("header");
        this.formArea = document.querySelector("section");
        this.success = document.querySelector(".success-section");
        this.container = document.querySelector(".container");
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", this.handleSubmit.bind(this));
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.email &&
            this.form &&
            this.error &&
            this.header &&
            this.formArea &&
            this.success &&
            this.container) {
            if (this.email.value) {
                if (this.regexKey.test(this.email.value)) {
                    this.formArea.style.display = "none";
                    this.header.style.display = "none";
                    if (window.innerWidth >= 769) {
                        this.container.style.maxWidth = "375px";
                    }
                    else {
                        this.container.style.maxWidth = "505px";
                    }
                    this.success.style.display = "block";
                }
                else {
                    this.error.style.display = "block";
                    this.email.style.borderColor = "#ff6257";
                    this.email.style.color = "#ff6257";
                    this.email.style.backgroundColor = "#ff625730";
                }
            }
            else {
                this.error.style.display = "block";
                this.container.style.width = "505px";
            }
        }
    }
}
new FormValidator();
class SuccessMessageHandler {
    constructor() {
        this.dismissButton = document.querySelector(".success-section button");
        if (this.dismissButton) {
            this.dismissButton.addEventListener("click", this.handleDismiss.bind(this));
        }
    }
    handleDismiss() {
        window.location.href = "index.html"; // Redirect to index.html
    }
}
new SuccessMessageHandler();

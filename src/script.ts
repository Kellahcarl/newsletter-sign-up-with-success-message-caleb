const regexKey: RegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let email: HTMLInputElement | null = document.querySelector(".email-form");
let form: HTMLFormElement | null = document.querySelector("form");
let error: HTMLElement | null = document.querySelector(".error");
let header: HTMLElement | null = document.querySelector("header");
let formArea: HTMLElement | null = document.querySelector("section");
let success: HTMLElement | null = document.querySelector(".success-section");
let container: HTMLElement | null = document.querySelector(".container");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  if (email?.value !== "") {
    if (regexKey.test(email!.value)) {
      formArea!.style.display = "none";
      header!.style.display = "none";
      if (window.innerWidth >= 769) {
        container!.style.maxWidth = "375px";
      } else {
        container!.style.maxWidth = "505px";
      }
      success!.style.display = "block";
    } else {
      error!.style.display = "block";
      email!.style.borderColor = "#ff6257";
      email!.style.color = "#ff6257";
      email!.style.backgroundColor = "#ff625730";
    }
  } else {
    error!.style.display = "block";
    container!.style.width = "505px";
  }
});

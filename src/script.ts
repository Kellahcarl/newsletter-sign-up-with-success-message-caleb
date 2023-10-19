class FormValidator {
  private regexKey: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zAZ0-9]+.)+[a-zA-Z]{2,}))$/;
  private email: HTMLInputElement | null =
    document.querySelector(".email-form");
  private form: HTMLFormElement | null = document.querySelector("form");
  private error: HTMLElement | null = document.querySelector(".error");
  private header: HTMLElement | null = document.querySelector("header");
  private formArea: HTMLElement | null = document.querySelector("section");
  private success: HTMLElement | null =
    document.querySelector(".success-section");
  private container: HTMLElement | null = document.querySelector(".container");

  constructor() {
    this.form?.addEventListener("submit", this.handleSubmit.bind(this));
  }

  private handleSubmit(e: Event) {
    e.preventDefault();

    if (
      this.email &&
      this.form &&
      this.error &&
      this.header &&
      this.formArea &&
      this.success &&
      this.container
    ) {
      if (this.email.value) {
        if (this.regexKey.test(this.email.value)) {
          this.formArea.style.display = "none";
          this.header.style.display = "none";
          if (window.innerWidth >= 769) {
            this.container.style.maxWidth = "375px";
          } else {
            this.container.style.maxWidth = "505px";
          }
          this.success.style.display = "block";
        } else {
          this.error.style.display = "block";
          this.email.style.borderColor = "#ff6257";
          this.email.style.color = "#ff6257";
          this.email.style.backgroundColor = "#ff625730";
        }
      } else {
        this.error.style.display = "block";
        this.container.style.width = "505px";
      }
    }
  }
}

new FormValidator();

class SuccessMessageHandler {
  private dismissButton: HTMLButtonElement | null;

  constructor() {
    this.dismissButton = document.querySelector(".success-section button");
    if (this.dismissButton) {
      this.dismissButton.addEventListener(
        "click",
        this.handleDismiss.bind(this)
      );
    }
  }

  private handleDismiss() {
    window.location.href = "index.html"; // Redirect to index.html
  }
}

new SuccessMessageHandler();

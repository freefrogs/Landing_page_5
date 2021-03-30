const formValidation = () => {
  const testTextField = (field, min, max) => {
    return field.value.length >= min && field.value.length <= max;
  };

  const toggleErrorField = (field, show) => {
    const errorText = field.nextElementSibling;
    if (errorText !== null) {
        if (errorText.classList.contains("contact__text--error")) {
            errorText.style.display = show ? "block" : "none";
        }
    }
  };

  const markFieldAsError = (field, show) => {
    if (show) {
        field.classList.add("contact__field--error");
    } else {
        field.classList.remove("contact__field--error");
        toggleErrorField(field, false);
    }
  };

  const form = document.querySelector(".contact__form");
  const inputName = form.querySelector("input[name=name]");
  const inputLastName = form.querySelector("input[name=last_name]");
  const inputPhone = form.querySelector("input[name=phone]");
  const selectService = form.querySelector(".contact__option");

  inputName.addEventListener("input", e => markFieldAsError(e.target, !testTextField(e.target, 2, 20)));
  inputLastName.addEventListener("input", e => markFieldAsError(e.target, !testTextField(e.target, 2, 50)));
  inputPhone.addEventListener("input", e => markFieldAsError(e.target, !testTextField(e.target, 2, 22)));
  selectService.addEventListener("input", e => markFieldAsError(e.target, !selectService.value));

  form.addEventListener("submit", e => {
    e.preventDefault();

    let formErrors = false;

    for (const el of [inputName, inputLastName, inputPhone, selectService]) {
        markFieldAsError(el, false);
        toggleErrorField(el, false);
    }

    if (!testTextField(inputName, 2, 20)) {
        markFieldAsError(inputName, true);
        toggleErrorField(inputName, true);
        formErrors = true;
    }

    if (!testTextField(inputLastName, 2, 50)) {
      markFieldAsError(inputLastName, true);
      toggleErrorField(inputLastName, true);
      formErrors = true;
    }

    if (!testTextField(inputPhone, 9, 22)) {
      markFieldAsError(inputPhone, true);
      toggleErrorField(inputPhone, true);
      formErrors = true;
    }

    if (!selectService.value) {
      markFieldAsError(selectService, true);
      toggleErrorField(selectService, true);
      formErrors = true;
    }

    if (!formErrors) {
        e.target.submit();
    }
  });
};

export default formValidation;
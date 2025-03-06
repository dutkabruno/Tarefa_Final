document.getElementById("contato").addEventListener("submit", function(event){
    event.preventDefault();

document.getElementById("success-massage").classList.remove("d-none");

document.getElementById("contact-form").reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.substring(0, 11);

        if (value.length >= 2) {
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        }
        if (value.length >= 10) {
            value = `${value.substring(0, 10)}-${value.substring(10)}`;
        }

        e.target.value = value;
    });
});

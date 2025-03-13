document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("contato").addEventListener("submit", function(event){
        event.preventDefault();

        let formData = new FormData(this);

        emailjs.sendForm('service_9jovhhz', 'template_tbubols', this, 'xcg3Huz81kedomFdM')
            .then(response => {
                console.log('Sucesso:', response);
                document.getElementById("massage").classList.remove("d-none");

                let contato = document.getElementById('contato');
                contato.style.height = '700px';

                document.getElementById("contato").reset();
            })
            .catch(error => {
                console.error('Erro ao enviar:', error);
            });
    });
    
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

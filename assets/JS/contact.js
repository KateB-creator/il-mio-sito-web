(function() {
    emailjs.init("ltJV9RVED6akh19KZ"); 
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // previene il submit standard del form

        
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_xwvkpar', 'template_8mrwhtq', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Il messaggio è stato inviato con successo!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Errore nell\'invio del messaggio. Riprova.');
            });
    });
};

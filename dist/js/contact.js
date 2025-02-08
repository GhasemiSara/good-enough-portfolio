window.onload = function() {
   emailjs.init("2SJyJIlioVy7Ukqh_");

   document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_d7qlbyb", "template_k2mqjei", this)
         .then(() => {
            document.getElementById('form-message').innerText = "Message sent successfully!";
            document.getElementById('form-message').style.color = "green";
            this.reset();
         }, (error) => {
            document.getElementById('form-message').innerText = "Error sending message. Please try again.";
            document.getElementById('form-message').style.color = "red";
         });
   });
};
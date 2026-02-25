document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // FAQ (ACORDEÓN)
    // =========================
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                question.querySelector("span").textContent = "+";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                question.querySelector("span").textContent = "−";
            }

        });
    });


    // =========================
    // TEXTO DINÁMICO
    // =========================
    const textos = [
        "La verdadera fortaleza jurídica no está en litigar, sino en anticipar, proteger y resolver con inteligencia, ética y visión profesional.",
        "La abogacía es el arte de convertir la ley en tranquilidad: donde hay conocimiento, hay seguridad; donde hay estrategia, hay resultados."
    ];

    let index = 0;
    const elemento = document.getElementById("texto-dinamico");

    if (elemento) {
        setInterval(() => {
            elemento.classList.add("fade-out");

            setTimeout(() => {
                index = (index + 1) % textos.length;
                elemento.textContent = textos[index];

                elemento.classList.remove("fade-out");
                elemento.classList.add("fade-in");

                setTimeout(() => {
                    elemento.classList.remove("fade-in");
                }, 600);

            }, 600);

        }, 7000);
    }


    // =========================
    // FORMULARIO EMAILJS
    // =========================
    const form = document.getElementById("form-email");

    if (!form) {
        console.error("No se encontró el formulario");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            nombre: form.nombre.value,
            correo: form.correo.value,
            telefono: form.telefono.value,
            area: form.area.value,
            mensaje: form.mensaje.value
        };

        console.log("Datos enviados:", formData);

        emailjs.send("service_ig51kvr", "template_k7qzdod", formData)
            .then(function () {
                alert("✅ Mensaje enviado correctamente");
                form.reset();
            })
            .catch(function (error) {
                console.error("Error:", error);
                alert("❌ Error al enviar el mensaje");
            });

    });

});
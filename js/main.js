
document.getElementById("arrow-down").addEventListener("click", function () {
    var footer = document.getElementById("footer");
    var span = document.getElementById("arrow-down");

    if (footer.classList.contains("d-none")) {
        footer.classList.remove("d-none");
        footer.style.display = "block";
        span.style.display = "none";
    } else {
        footer.classList.add("d-none");
        footer.style.display = "none";
    }
});

document.getElementById("arrow-up").addEventListener("click", function () {
    var footer = document.getElementById("footer");
    var span = document.getElementById("arrow-down");

    if (footer.classList.contains("d-block")) {
        footer.classList.remove("d-block");
        footer.style.display = "none";
        span.style.display = "inline-block";

    } else {
        footer.classList.add("d-block");
        footer.style.display = "block";

    }
});
// Validation du formulaire
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission

    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    // Validation simple
    if (!email || !validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }

    if (!comment) {
        alert("Veuillez entrer un commentaire.");
        return;
    }

    // Si la validation est correcte
    alert("Formulaire soumis avec succès !");
});

function validateEmail(email) {
    // Regex pour vérifier que l'email est valide
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
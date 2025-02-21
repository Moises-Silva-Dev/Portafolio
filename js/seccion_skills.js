// Filtrado de tarjetas
document.querySelectorAll("#skills .btn").forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        // Ocultar todas las tarjetas primero
        document.querySelectorAll("#skills .card").forEach(card => {
            card.classList.add("hidden");
        });

        // Mostrar las tarjetas correspondientes al filtro
        if (filter === "all") {
            document.querySelectorAll("#skills .card").forEach(card => {
                card.classList.remove("hidden");
            });
        } else {
            document.querySelectorAll(`#skills .card[data-category="${filter}"]`).forEach(card => {
                card.classList.remove("hidden");
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        let color = card.getAttribute("data-color");
        card.style.setProperty("--hover-color", color);
    });
});
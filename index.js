// Esperar a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const result = document.getElementById("calories");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que la página se recargue

        // Obtener valores del formulario
        const age = parseInt(document.getElementById("age").value);
        const gender = document.getElementById("gender").value;
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const activity = parseFloat(document.getElementById("activity").value);

        // Verificaciones de los campos
        if (isNaN(age) || age <= 0) {
            result.textContent = "Please enter a valid age.";
            return;
        }
        if (gender !== "male" && gender !== "female") {
            result.textContent = "Please select your gender.";
            return;
        }
        if (isNaN(weight) || weight <= 0) {
            result.textContent = "Please enter a valid weight (kg).";
            return;
        }
        if (isNaN(height) || height <= 0) {
            result.textContent = "Please enter a valid height (cm).";
            return;
        }
        if (isNaN(activity) || activity <= 0) {
            result.textContent = "Please select your activity level.";
            return;
        }

        // Cálculo del BMR con Mifflin-St Jeor
        let bmr;
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Ajuste según el nivel de actividad → TDEE
        const tdee = Math.round(bmr * activity);

        // Mostrar el resultado
        result.innerHTML = `
            Your estimated daily calorie needs (TDEE) are:
            <strong>${tdee}</strong> calories/day.
        `;
    });
});

document.getElementById("result").classList.add("visible");
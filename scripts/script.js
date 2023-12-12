document.getElementById("calcular").addEventListener("click", function () {
    // Get the input value
    var superficie = parseFloat(document.getElementById("superficie").value);

    // Check if the input is a valid number
    if (!isNaN(superficie) && superficie > 0) {
        // Calculate the material required
        var rendimientoTeorico = 1.5; // Assuming an average value between 1.4 and 1.6
        var materialRequired = (superficie * rendimientoTeorico).toFixed(2);

        // Display the result
        document.getElementById("resultado").innerHTML = "<p class='text-blue-900'>Material requerido: " + materialRequired + " kg</p>";


    } else {
        // Display an error message if the input is not valid
        document.getElementById("resultado").innerHTML = "<p class='text-red-700'>Ingrese una superficie válida.</p>";

        // Clear the error message after 5 seconds
        setTimeout(function () {
            document.getElementById("resultado").innerHTML = "";
        }, 5000);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('mainImage');
    const thumbnailLinks = document.querySelectorAll('.thumbnail-link');

    thumbnailLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const newImageSrc = link.getAttribute('data-src');
            mainImage.src = newImageSrc;
        });
    });
});


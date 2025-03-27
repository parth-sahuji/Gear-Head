document.addEventListener("DOMContentLoaded", function () {
    const carModels = {
        Toyota: ["Land Cruiser", "Fortuner"],
        Honda: ["Civic", "City"],
        BMW: ["X5", "M3"],
        Mercedes: ["C-Class", "E-Class"]
    };

    window.updateModels = function () {
        const brandSelect = document.getElementById("brand");
        const modelSelect = document.getElementById("model");
        const selectedBrand = brandSelect.value;

        // Clear previous options
        modelSelect.innerHTML = '<option value="">--Select Model--</option>';

        if (selectedBrand && carModels[selectedBrand]) {
            carModels[selectedBrand].forEach(model => {
                let option = document.createElement("option");
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    };

    document.getElementById("carForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedModel = document.getElementById("model").value;

        if (selectedModel) {
            window.location.href = `tuning.html?car=${encodeURIComponent(selectedModel)}`;
        } else {
            alert("Please select a car model!");
        }
    });
});

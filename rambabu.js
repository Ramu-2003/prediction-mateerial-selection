// [Material Data unchanged, omitted for brevity]
const materialData = {
    "Steel": {
        su: [450, 620, 780, 860, 950, 1030, 1150, 1240, 1350, 1480], // MPa
        sy: [370, 480, 620, 720, 830, 900, 980, 1050, 1120, 1200], // MPa
        e: [190000, 200000, 205000, 210000, 215000, 220000, 225000, 230000, 235000, 240000], // MPa
        g: [75000, 78000, 80000, 82000, 84000, 86000, 88000, 90000, 92000, 94000], // MPa
        mu: [0.27, 0.28, 0.29, 0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36], // Poisson's ratio
        ro: [7800, 7820, 7850, 7870, 7890, 7910, 7930, 7950, 7970, 8000], // kg/m³
        baseRating: 4
    },
    "Aluminum": {
        su: [120, 150, 180, 210, 250, 290, 320, 350, 380, 410], // MPa
        sy: [60, 80, 100, 130, 160, 190, 220, 250, 280, 310], // MPa
        e: [68000, 69000, 70000, 71000, 72000, 73000, 74000, 75000, 76000, 77000], // MPa
        g: [25000, 25500, 26000, 26500, 27000, 27500, 28000, 28500, 29000, 29500], // MPa
        mu: [0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.40, 0.41], // Poisson's ratio
        ro: [2650, 2670, 2700, 2720, 2740, 2760, 2780, 2800, 2820, 2840], // kg/m³
        baseRating: 3
    },
    "Titanium": {
        su: [900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350], // MPa
        sy: [830, 870, 910, 950, 990, 1030, 1070, 1110, 1150, 1190], // MPa
        e: [100000, 102000, 105000, 107000, 110000, 112000, 115000, 117000, 120000, 122000], // MPa
        g: [42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000], // MPa
        mu: [0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39], // Poisson's ratio
        ro: [4420, 4450, 4480, 4500, 4520, 4550, 4580, 4600, 4620, 4650], // kg/m³
        baseRating: 5
    },
    "Copper": {
        su: [220, 240, 260, 280, 300, 320, 340, 360, 380, 400], // MPa
        sy: [70, 90, 110, 130, 150, 170, 190, 210, 230, 250], // MPa
        e: [105000, 108000, 110000, 112000, 115000, 117000, 120000, 122000, 125000, 127000], // MPa
        g: [40000, 41000, 42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000], // MPa
        mu: [0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.40, 0.41, 0.42], // Poisson's ratio
        ro: [8900, 8920, 8940, 8960, 8980, 9000, 9020, 9040, 9060, 9080], // kg/m³
        baseRating: 2
    },
    "Magnesium": {
        su: [160, 180, 200, 220, 240, 260, 280, 300, 320, 340], // MPa
        sy: [90, 110, 130, 150, 170, 190, 210, 230, 250, 270], // MPa
        e: [42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000], // MPa
        g: [16000, 16500, 17000, 17500, 18000, 18500, 19000, 19500, 20000, 20500], // MPa
        mu: [0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.40, 0.41, 0.42, 0.43], // Poisson's ratio
        ro: [1720, 1740, 1760, 1780, 1800, 1820, 1840, 1860, 1880, 1900], // kg/m³
        baseRating: 1
    },
    "Brass": {
        su: [350, 370, 390, 410, 430, 450, 470, 490, 510, 530], // MPa
        sy: [140, 160, 180, 200, 220, 240, 260, 280, 300, 320], // MPa
        e: [95000, 97000, 99000, 100000, 102000, 104000, 106000, 108000, 110000, 112000], // MPa
        g: [35000, 36000, 37000, 38000, 39000, 40000, 41000, 42000, 43000, 44000], // MPa
        mu: [0.30, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39], // Poisson's ratio
        ro: [8450, 8470, 8490, 8510, 8530, 8550, 8570, 8590, 8610, 8630], // kg/m³
        baseRating: 2
    }
};

let predictionResults = {}; // Store the results globally

// [Mobile Menu Toggle and Carousel Functionality unchanged, omitted for brevity]
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'rambabu.html';
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });

    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const leftButton = document.querySelector('.carousel-button.left');
    const rightButton = document.querySelector('.carousel-button.right');

    if (carousel && carouselItems.length > 0) {
        let currentIndex = 0;

        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                item.classList.toggle('active', index === currentIndex);
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
            updateCarousel();
        });

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        updateCarousel();
    }
});

// [showInterface unchanged, omitted for brevity]
function showInterface(interfaceNum) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('fade-in');
    });
    const targetSection = document.getElementById('interface-' + interfaceNum);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('fade-in');
        if (interfaceNum === 3) {
            displayPredictionResults();
        }
    }
}

// [loadMaterialData unchanged, omitted for brevity]
function loadMaterialData(materialType) {
    if (!materialType || !materialData[materialType]) return;

    const material = materialData[materialType];
    const properties = ['su', 'sy', 'e', 'g', 'mu', 'ro'];

    properties.forEach(prop => {
        const selectElement = document.getElementById(prop);
        selectElement.innerHTML = '';

        const uniqueValues = [...new Set(material[prop])];

        uniqueValues.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            selectElement.appendChild(option);
        });

        if (uniqueValues.length > 0) {
            selectElement.value = uniqueValues[0];
        } else {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'No values available';
            selectElement.appendChild(option);
        }
    });
}

// Updated predict function to pass all data to report.html
function predict() {
    const industry = document.getElementById("industry").value;
    const material = document.getElementById("material").value;
    const su = parseFloat(document.getElementById("su").value);
    const sy = parseFloat(document.getElementById("sy").value);
    const e = parseFloat(document.getElementById("e").value);
    const g = parseFloat(document.getElementById("g").value);
    const mu = parseFloat(document.getElementById("mu").value);
    const ro = parseFloat(document.getElementById("ro").value);
    const customParameter = document.getElementById("custom-parameter").value;

    if (isNaN(su) || isNaN(sy) || isNaN(e) || isNaN(g) || isNaN(mu) || isNaN(ro)) {
        alert("Please select a value for all material properties.");
        return;
    }

    if (materialData.hasOwnProperty(material)) {
        const selectedMaterial = materialData[material];
        const maxValues = {
            su: Math.max(...selectedMaterial.su),
            sy: Math.max(...selectedMaterial.sy),
            e: Math.max(...selectedMaterial.e),
            g: Math.max(...selectedMaterial.g),
            mu: Math.max(...selectedMaterial.mu),
            ro: Math.max(...selectedMaterial.ro)
        };

        const scores = {
            su: (su / maxValues.su) * 30,
            sy: (sy / maxValues.sy) * 25,
            e: (e / maxValues.e) * 20,
            g: (g / maxValues.g) * 15,
            mu: (mu / maxValues.mu) * 5,
            ro: (ro / maxValues.ro) * 5
        };

        const totalScore = scores.su + scores.sy + scores.e + scores.g + scores.mu + scores.ro;
        const rating = Math.min(5, Math.max(1, Math.round(totalScore / 20)));
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "<i class='fas fa-star'></i>";
        }

        predictionResults = {
            industry: industry,
            material: material,
            su: su,
            sy: sy,
            e: e,
            g: g,
            mu: mu,
            ro: ro,
            customParameter: customParameter || 'N/A',
            rating: rating,
            stars: stars
        };

        // Store in localStorage as a fallback
        localStorage.setItem('materialData', JSON.stringify(predictionResults));

        // Pass all data to report.html via URL parameters
        const queryParams = new URLSearchParams({
            industry: predictionResults.industry,
            material: predictionResults.material,
            su: predictionResults.su,
            sy: predictionResults.sy,
            e: predictionResults.e,
            g: predictionResults.g,
            mu: predictionResults.mu,
            ro: predictionResults.ro,
            customParameter: predictionResults.customParameter,
            rating: predictionResults.rating,
            stars: predictionResults.stars
        }).toString();

        window.location.href = `report.html?${queryParams}`;
    } else {
        alert("Please select a valid material.");
    }
}

// [displayPredictionResults unchanged, omitted for brevity]
function displayPredictionResults() {
    if (!predictionResults) {
        alert("Please run a prediction first.");
        return;
    }

    const resultDiv = document.getElementById("result");
    const recommendationDiv = document.getElementById("recommendation");
    const alternativeList = document.getElementById("alternative-list");
    recommendationDiv.textContent = `Recommended Material: ${predictionResults.material}`;
    resultDiv.innerHTML = predictionResults.stars;

    let higherRatedMaterial = null;
    let bestRating = 0;

    for (const materialName in materialData) {
        if (materialName !== predictionResults.material) {
            const materialRating = materialData[materialName].baseRating;
            if (materialRating > predictionResults.rating) {
                let newRating = (materialRating - predictionResults.rating);
                if (newRating > bestRating) {
                    bestRating = newRating;
                    higherRatedMaterial = materialName;
                }
            }
        }
    }

    if (higherRatedMaterial) {
        alternativeList.innerHTML = `
            <h4>Consider the following for greater stability</h4>
            <p>Material: ${higherRatedMaterial} (Rating: ${materialData[higherRatedMaterial].baseRating})</p>
        `;
    } else {
        alternativeList.innerHTML = `<li>No higher-rated material found.</li>`;
    }
}

// [downloadReport unchanged but not used in current flow, omitted for brevity]
function downloadReport() {
    if (!predictionResults) {
        alert("Please run a prediction first.");
        return;
    }

    const queryParams = new URLSearchParams({
        material: predictionResults.material,
        industry: predictionResults.industry,
        su: predictionResults.su,
        sy: predictionResults.sy,
        e: predictionResults.e,
        g: predictionResults.g,
        mu: predictionResults.mu,
        ro: predictionResults.ro,
        stars: predictionResults.stars,
        rating: predictionResults.rating
    }).toString();
    window.location.href = `report.html?${queryParams}`;
}

// [DOMContentLoaded event listener unchanged, omitted for brevity]
document.addEventListener('DOMContentLoaded', (event) => {
    const materialDropdown = document.getElementById("material");
    if (materialDropdown) {
        for (const material in materialData) {
            if (materialData.hasOwnProperty(material)) {
                let option = document.createElement("option");
                option.value = material;
                option.text = material;
                materialDropdown.add(option);
            }
        }
    }
});
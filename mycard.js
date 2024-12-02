const plants = [
    { name: "Tulsi", description: "Known for its medicinal properties, Tulsi is used to treat colds, coughs, and respiratory issues.", image: "Images/tulsi.jpg", learn_more_url: "Learn More/tulsi.html" },
    { name: "Neem", description: "Neem is used for skin care and to improve digestion. Its antibacterial properties are highly valued.", image: "Images/neem.jpg", learn_more_url: "Learn More/neem.html" },
    { name: "Ashwagandha", description: "Ashwagandha is used for its stress-relieving and energy-boosting properties.", image: "Images/ashwagandha.jpg", learn_more_url: "Learn More/ashwagandha.html" },
    { name: "Aloe Vera", description: "Aloe Vera is used in skincare and for treating burns and improving digestion.", image: "Images/aloevera.jpg", learn_more_url: "Learn More/aloevera.html" },
    { name: "Brahmi", description: "Brahmi is known for enhancing memory and cognitive abilities, used in Ayurvedic medicines.", image: "Images/brahmi.jpg", learn_more_url: "Learn More/brahmi.html" },
    { name: "Turmeric", description: "Turmeric is an anti-inflammatory and antioxidant commonly used to improve skin and digestion.", image: "Images/turmeric.jpg", learn_more_url: "Learn More/turmeric.html" },
    { name: "Basil", description: "Used in cooking and has antibacterial properties. Basil is also known for its potential anti-inflammatory effects.", image: "Images/basil.jpg", learn_more_url: "Learn More/basil.html" },
    { name: "Coriander", description: "Used for its antioxidant and digestive benefits. Coriander seeds are used as a spice, and the leaves are used in salads and dishes.", image: "Images/coriander.jpg", learn_more_url: "Learn More/coriander.html" },
    { name: "Ginger", description: "Known for its anti-nausea and anti-inflammatory properties. It is commonly used in cooking and as a remedy for nausea.", image: "Images/ginger.jpg", learn_more_url: "Learn More/ginger.html" },
    { name: "Chamomile", description: "Used to promote relaxation and help with sleep. Chamomile tea is a popular remedy for insomnia and anxiety.", image: "Images/chamomile.jpg", learn_more_url: "Learn More/chamomile.html" },
    { name: "Dandelion", description: "Used as a diuretic and to aid digestion. The leaves, roots, and flowers are used in various herbal remedies.", image: "Images/dandelion.jpg", learn_more_url: "Learn More/dandelion.html" },
    { name: "Echinacea", description: "Boosts the immune system and is used to prevent colds. Echinacea is often used in herbal supplements and teas.", image: "Images/echinacea.jpg", learn_more_url: "Learn More/echinacea.html" },
    { name: "Fennel", description: "Known for its digestive benefits and ability to reduce bloating. Fennel seeds are used in cooking and traditional remedies.", image: "Images/fennel.jpg", learn_more_url: "Learn More/fennel.html" },
    { name: "Hibiscus", description: "Rich in antioxidants and used to lower blood pressure. Hibiscus tea is a popular beverage known for its tart flavor.", image: "Images/hibiscus.jpg", learn_more_url: "Learn More/hibiscus.html" },
    { name: "Jasmine", description: "Used in aromatherapy for its calming effects and to reduce stress. Jasmine flowers are also used in perfumes.", image: "Images/jasmine.jpg", learn_more_url: "Learn More/jasmine.html" },
    { name: "Lavender", description: "Used in aromatherapy for relaxation and sleep improvement. The scent is known for its calming effects.", image: "Images/lavender.jpg", learn_more_url: "Learn More/lavender.html" },
    { name: "Mint", description: "Commonly used to aid digestion and relieve headaches. Mint leaves can be used in teas and culinary dishes.", image: "Images/mint.jpg", learn_more_url: "Learn More/mint.html" },
    { name: "Oregano", description: "Contains antioxidants and is used for its anti-inflammatory effects. Oregano is commonly used in Italian cuisine and traditional medicine.", image: "Images/oregano.jpg", learn_more_url: "Learn More/oregano.html" },
    { name: "Parsley", description: "Rich in vitamins and used for its diuretic properties. Parsley is also a common garnish and has various health benefits.", image: "Images/parsley.jpg", learn_more_url: "Learn More/parsley.html" },
    { name: "Rose", description: "Used for skin care and in cosmetics. The petals have anti-inflammatory properties and are often used in face masks and lotions.", image: "Images/rose.jpg", learn_more_url: "Learn More/rose.html" },
    { name: "Rosemary", description: "Used to improve memory and concentration, and for its antioxidant properties. Rosemary is commonly used in culinary dishes.", image: "Images/rosemary.jpg", learn_more_url: "Learn More/rosemary.html" },
    { name: "Sage", description: "Known for its digestive benefits and antimicrobial properties. Sage is often used in cooking and herbal medicine.", image: "Images/sage.jpg", learn_more_url: "Learn More/sage.html" },
    { name: "Thyme", description: "Has antimicrobial properties and is used in cooking and medicine. Thyme is also used in traditional remedies for respiratory conditions.", image: "Images/thyme.jpg", learn_more_url: "Learn More/thyme.html" },
    { name: "Turmeric (Curcumin)", description: "Contains curcumin, which has anti-inflammatory and antioxidant effects. Often used in cooking and for its health benefits.", image: "Images/turmeric1.jpg", learn_more_url: "Learn More/turmeric1.html" },
    { name: "Ashoka", description: "Ashoka is traditionally used to treat gynecological issues and is known for its anti-inflammatory and analgesic properties.", image: "Images/ashoka.jpg", learn_more_url: "Learn More/ashoka.html" },
    { name: "Shankhpushpi", description: "Shankhpushpi is used to enhance memory, reduce anxiety, and improve mental health. It is considered a brain tonic in Ayurveda.", image: "Images/shankhpushpi.jpg", learn_more_url: "Learn More/shankhpushpi.html" },
    { name: "Guduchi", description: "Guduchi is known for its immune-boosting, anti-inflammatory, and detoxifying properties. It is commonly used in Ayurvedic formulations.", image: "Images/guduchi.jpg", learn_more_url: "Learn More/guduchi.html" },
    { name: "Vacha", description: "Vacha is used to treat respiratory conditions, improve speech, and aid digestion. It is also used to enhance cognitive function.", image: "Images/vacha.jpg", learn_more_url: "Learn More/vacha.html" },
    { name: "Haritaki", description: "Haritaki is known for its detoxifying properties and is used in Ayurveda to support digestion and enhance longevity.", image: "Images/haritaki.jpg", learn_more_url: "Learn More/haritaki.html" },
    { name: "Bael", description: "Bael is used in Ayurveda to treat digestive issues and improve immunity. It is also known for its antibacterial properties.", image: "Images/bael.jpg", learn_more_url: "Learn More/bael.html" },
    { name: "Kalmegh", description: "Kalmegh is known for its immune-boosting properties and is used to treat infections and detoxify the liver.", image: "Images/kalmegh.jpg", learn_more_url: "Learn More/kalmegh.html" },
    { name: "Triphala", description: "Triphala is a combination of three fruits (Amla, Haritaki, and Bibhitaki) used for its digestive and detoxifying properties.", image: "Images/triphala.jpg", learn_more_url: "Learn More/triphala.html" },
    { name: "Sarpagandha", description: "Sarpagandha is traditionally used to treat hypertension and anxiety. It has calming properties.", image: "Images/sarpagandha.jpg", learn_more_url: "Learn More/sarpagandha.html" },
    { name: "Bhringraj", description: "Bhringraj is used in Ayurveda to treat hair loss, improve liver function, and enhance skin health.", image: "Images/bhringraj.jpg", learn_more_url: "Learn More/bhringraj.html" },
    { name: "Yashtimadhu", description: "Yashtimadhu, or Licorice, is used to soothe the throat, improve digestion, and boost immunity.", image: "Images/yashtimadhu.jpg", learn_more_url: "Learn More/yashtimadhu.html" },
    { name: "Moringa", description: "Moringa is known for its high nutritional value and medicinal properties, offering anti-inflammatory, antioxidant, and anti-diabetic effects.", image: "Images/moringa.jpg", learn_more_url: "Learn More/moringa.html" },
    { name: "Giloy", description: "Giloy is an immune-boosting herb used in Ayurveda to treat fever, diabetes, and enhance overall immunity.", image: "Images/giloy.jpg", learn_more_url: "Learn More/giloy.html" },
    { name: "Cinnamon", description: "Cinnamon is widely used for its antioxidant and anti-inflammatory properties, supporting digestive health and reducing blood sugar levels.", image: "Images/cinnamon.jpg", learn_more_url: "Learn More/cinnamon.html" },
    { name: "Sativa", description: "Sativa is used for its calming effects, often used in traditional medicine for stress relief and promoting mental clarity.", image: "Images/sativa.jpg", learn_more_url: "Learn More/sativa.html" }

];

// Function to display 6 random plant cards by default
function displayRandomPlants() {
const shuffledPlants = [...plants]; // Copy the plants array
// Shuffle the plants array randomly
shuffledPlants.sort(() => 0.5 - Math.random());

const randomPlants = shuffledPlants.slice(0, 6); // Get the first 6 after shuffle

// Display filtered plants in the container with existing card format
const resultsContainer = document.getElementById('results');
resultsContainer.innerHTML = ''; // Clear previous results

randomPlants.forEach(plant => {
const card = document.createElement('div');
card.classList.add('card'); // Matches your CSS class for styling
card.innerHTML = `
<img src="${plant.image}" alt="${plant.name}">
<div class="card-content">
    <h3>${plant.name}</h3>
    <p>${plant.description}</p>
    <button class="start-quiz-btn" onclick="window.location.href='${plant.learn_more_url}'">Learn More</button>
</div>
`;
resultsContainer.appendChild(card);
});

}

// Function to filter plants based on the search query
function searchPlants() {
const searchQuery = document.getElementById('search').value.toLowerCase();
const filteredPlants = plants.filter(plant => 
plant.name.toLowerCase().includes(searchQuery) ||
plant.description.toLowerCase().includes(searchQuery)
);

// Display filtered plants in the container with existing card format
const resultsContainer = document.getElementById('results');
resultsContainer.innerHTML = ''; // Clear previous results

if (filteredPlants.length === 0) {
resultsContainer.innerHTML = "<p>No plants found</p>";
} else {
filteredPlants.forEach(plant => {
    const card = document.createElement('div');
    card.classList.add('card'); // Matches your CSS class for styling
    card.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}">
        <div class="card-content">
            <h3>${plant.name}</h3>
            <p>${plant.description}</p>
            <button class="start-quiz-btn" onclick="window.open('Learn More/${plant.name.toLowerCase()}.html', '_self')">Learn More</button>
        </div>
    `;
    resultsContainer.appendChild(card);
});
}
}

displayRandomPlants();
// Call this after generating the cards




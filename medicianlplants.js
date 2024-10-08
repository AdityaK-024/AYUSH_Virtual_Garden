function showPopup(plant) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup-title').innerText = plant;
    // You can customize this part to display plant-specific descriptions
    let description = '';
    switch (plant) {
        case 'Tulsi':
            description = 'Tulsi is revered for its healing properties, used to treat cold, cough, and more.';
            break;
        case 'Neem':
            description = 'Neem is a powerful herb with antibacterial properties, good for skin and digestion.';
            break;
        // Add more cases for other plants
        default:
            description = 'No additional information available.';
    }
    document.getElementById('popup-description').innerText = description;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
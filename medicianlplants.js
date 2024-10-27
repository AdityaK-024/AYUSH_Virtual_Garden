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
        case 'Ashwagandha':
            description = 'Ashwagandha is used for its stress-relieving and energy-boosting properties.';
            break;
        case 'Aloe Vera':
            description = 'Aloe Vera is used in skincare and for treating burns and improving digestion.';
            break;   
         case 'Brahmi':
            description = 'Brahmi is known for enhancing memory and cognitive abilities, used in Ayurvedic medicines';
            break;
        case 'Turmeric':
            description = 'Turmeric is an anti-inflammatory and antioxidant commonly used to improve skin and digestion.';
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
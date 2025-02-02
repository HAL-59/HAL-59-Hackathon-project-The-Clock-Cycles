scriptjs
// Sample Data (Replace with your actual data)
const services = [
    { title: "Space Planning", description: "Optimize your office layout for maximum efficiency." },
    { title: "Seat Assignments", description: "Assign seats based on team needs and preferences." },
    { title: "Collaboration Tools", description: "Integrate with tools for seamless team communication." },
    // ... more services
];

const galleryImages = [
    "image1.jpg", "image2.jpg", "image3.jpg" // ... more image URLs
];

const clients = [
    "client1.png", "client2.png", "client3.png" // ... more logo URLs
];

// Populate Services
const servicesGrid = document.querySelector("#services .service-grid");
services.forEach(service => {
    const serviceDiv = document.createElement("div");
    serviceDiv.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
    servicesGrid.appendChild(serviceDiv);
});

// Populate Gallery
const galleryGrid = document.querySelector("#gallery .image-grid");
galleryImages.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Office Space"; // Add alt text for accessibility
    galleryGrid.appendChild(imgElement);
});

// Populate Clients
const clientsDiv = document.querySelector("#clients .client-logos");
clients.forEach(clientLogo => {
    const logoImg = document.createElement("img");
    logoImg.src = clientLogo;
    logoImg.alt = "Client Logo"; // Add alt text
    clientsDiv.appendChild(logoImg);
});
const travelDestinations = [
    {
        name: "Rome",
        tagline: "The Eternal City",
        country: "Italy",
        continent: "Europe",
        bestTime: "Apr-Jun, Sep-Oct",
        cost: 1200,
        currency: "EUR",
        popularity: 92,
        duration: "4-6 days",
        visa: "Schengen Visa",
        language: "Italian",
        temperature: 25,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5"
    },
    {
        name: "Paris",
        tagline: "City of Light",
        country: "France",
        continent: "Europe",
        bestTime: "Apr-Jun, Sep-Oct",
        cost: 1400,
        currency: "EUR",
        popularity: 95,
        duration: "5-7 days",
        visa: "Schengen Visa",
        language: "French",
        temperature: 22,
        image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Tokyo",
        tagline: "The Capital of Contrast",
        country: "Japan",
        continent: "Asia",
        bestTime: "Mar-May, Sep-Nov",
        cost: 1500,
        currency: "JPY",
        popularity: 88,
        duration: "7-10 days",
        visa: "Tourist Visa Required",
        language: "Japanese",
        temperature: 20,
        image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Bangkok",
        tagline: "City of Angels",
        country: "Thailand",
        continent: "Asia",
        bestTime: "Nov-Feb",
        cost: 600,
        currency: "THB",
        popularity: 85,
        duration: "5-7 days",
        visa: "Visa on Arrival",
        language: "Thai",
        temperature: 32,
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "New York",
        tagline: "The Big Apple",
        country: "USA",
        continent: "North America",
        bestTime: "Apr-Jun, Sep-Oct",
        cost: 1800,
        currency: "USD",
        popularity: 90,
        duration: "5-7 days",
        visa: "ESTA/Visa Required",
        language: "English",
        temperature: 23,
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Dubai",
        tagline: "City of Gold",
        country: "UAE",
        continent: "Asia",
        bestTime: "Nov-Mar",
        cost: 1600,
        currency: "AED",
        popularity: 87,
        duration: "4-6 days",
        visa: "Visa on Arrival",
        language: "Arabic",
        temperature: 35,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Santorini",
        tagline: "Island of Romance",
        country: "Greece",
        continent: "Europe",
        bestTime: "May-Oct",
        cost: 1100,
        currency: "EUR",
        popularity: 89,
        duration: "3-5 days",
        visa: "Schengen Visa",
        language: "Greek",
        temperature: 28,
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Bali",
        tagline: "Island of Gods",
        country: "Indonesia",
        continent: "Asia",
        bestTime: "Apr-Oct",
        cost: 800,
        currency: "USD",
        popularity: 91,
        duration: "5-7 days",
        visa: "Visa on Arrival",
        language: "Indonesian",
        temperature: 30,
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Sydney",
        tagline: "Harbour City",
        country: "Australia",
        continent: "Australia",
        bestTime: "Sep-Nov, Mar-May",
        cost: 1700,
        currency: "AUD",
        popularity: 84,
        duration: "5-7 days",
        visa: "ETA/Visa Required",
        language: "English",
        temperature: 24,
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Barcelona",
        tagline: "City of Gaudi",
        country: "Spain",
        continent: "Europe",
        bestTime: "May-Jun, Sep-Oct",
        cost: 1000,
        currency: "EUR",
        popularity: 86,
        duration: "4-6 days",
        visa: "Schengen Visa",
        language: "Spanish",
        temperature: 26,
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Goa",
        tagline: "Beach Paradise",
        country: "India",
        continent: "Asia",
        bestTime: "Nov-Feb",
        cost: 400,
        currency: "INR",
        popularity: 82,
        duration: "4-6 days",
        visa: "eVisa Available",
        language: "Konkani, Hindi",
        temperature: 29,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Istanbul",
        tagline: "City on Two Continents",
        country: "Turkey",
        continent: "Europe/Asia",
        bestTime: "Apr-May, Sep-Oct",
        cost: 700,
        currency: "TRY",
        popularity: 83,
        duration: "4-5 days",
        visa: "eVisa Available",
        language: "Turkish",
        temperature: 27,
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Rio de Janeiro",
        tagline: "Marvelous City",
        country: "Brazil",
        continent: "South America",
        bestTime: "Dec-Mar",
        cost: 900,
        currency: "BRL",
        popularity: 81,
        duration: "5-7 days",
        visa: "Visa Required",
        language: "Portuguese",
        temperature: 31,
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Cape Town",
        tagline: "Mother City",
        country: "South Africa",
        continent: "Africa",
        bestTime: "Nov-Feb",
        cost: 850,
        currency: "ZAR",
        popularity: 80,
        duration: "5-7 days",
        visa: "Visa on Arrival",
        language: "English, Afrikaans",
        temperature: 26,
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Queenstown",
        tagline: "Adventure Capital",
        country: "New Zealand",
        continent: "Oceania",
        bestTime: "Dec-Feb",
        cost: 1300,
        currency: "NZD",
        popularity: 79,
        duration: "4-6 days",
        visa: "ETA/Visa Required",
        language: "English",
        temperature: 22,
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Vancouver",
        tagline: "Hollywood North",
        country: "Canada",
        continent: "North America",
        bestTime: "Jun-Sep",
        cost: 1200,
        currency: "CAD",
        popularity: 78,
        duration: "4-5 days",
        visa: "ETA/Visa Required",
        language: "English, French",
        temperature: 21,
        image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Reykjavik",
        tagline: "Land of Fire and Ice",
        country: "Iceland",
        continent: "Europe",
        bestTime: "Jun-Aug",
        cost: 1500,
        currency: "ISK",
        popularity: 77,
        duration: "5-7 days",
        visa: "Schengen Visa",
        language: "Icelandic",
        temperature: 15,
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        name: "Singapore",
        tagline: "Lion City",
        country: "Singapore",
        continent: "Asia",
        bestTime: "Feb-Apr",
        cost: 1100,
        currency: "SGD",
        popularity: 86,
        duration: "3-4 days",
        visa: "Visa on Arrival",
        language: "English, Malay",
        temperature: 31,
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Kyoto",
        tagline: "City of Ten Thousand Shrines",
        country: "Japan",
        continent: "Asia",
        bestTime: "Mar-May, Oct-Nov",
        cost: 900,
        currency: "JPY",
        popularity: 84,
        duration: "3-4 days",
        visa: "Tourist Visa Required",
        language: "Japanese",
        temperature: 19,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Venice",
        tagline: "City of Canals",
        country: "Italy",
        continent: "Europe",
        bestTime: "Apr-May, Sep-Oct",
        cost: 1000,
        currency: "EUR",
        popularity: 88,
        duration: "2-3 days",
        visa: "Schengen Visa",
        language: "Italian",
        temperature: 24,
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

let name = document.querySelector(".line-1 h1");

let tagline = document.querySelector(".line-2 h3");

let country = document.querySelector(".line-1 :nth-child(2)");

let continent = document.querySelector(".line-1 :nth-child(3)");

let info = document.querySelector(".line-3 h4");

let popularity = document.querySelector(".line-4 h4");

let button = document.querySelector(".line-5 button");
button.textContent = "🌍 Next Adventure";
let bg = document.querySelector("main");

name.textContent = "🌎 Wanderlust";
country.textContent = "Ready to explore?";
continent.textContent = "Click below to begin";
tagline.textContent = "Discover your next journey";
info.textContent = "Find perfect destinations, best times to visit, and travel tips";
popularity.textContent = "Your adventure starts here!";

button.addEventListener("click", () => {
    let rnum = travelDestinations[Math.floor(Math.random() * travelDestinations.length)];
    document.body.style.backgroundImage = `url(${rnum.image})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    name.textContent = rnum.name;
    country.textContent = rnum.country;
    continent.textContent = rnum.continent;
    tagline.textContent = rnum.tagline;
    // info.textContent = `Best Time: ${rnum.bestTime} | Temp: ${rnum.temperature}°C | Duration: ${rnum.duration} | Cost: $ ${rnum.cost} | Local Currency: ${rnum.currency}`;
    info.innerHTML = `
  <span>Best Time: ${rnum.bestTime}</span>
  <span>Temp: ${rnum.temperature}°C</span>
  <span>Duration: ${rnum.duration}</span>
  <span>Cost: $${rnum.cost}</span>
  <span>Currency: ${rnum.currency}</span>
  <span>Language: ${rnum.language}</span>
`;
    popularity.textContent = `Popularity: ${rnum.popularity}%`;

});
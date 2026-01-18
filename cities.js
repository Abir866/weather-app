// Cities database with countries
const cities = [
    // United States
    { name: "New York", country: "United States", lat: 40.7128, lon: -74.0060 },
    { name: "Los Angeles", country: "United States", lat: 34.0522, lon: -118.2437 },
    { name: "Chicago", country: "United States", lat: 41.8781, lon: -87.6298 },
    { name: "Houston", country: "United States", lat: 29.7604, lon: -95.3698 },
    { name: "Miami", country: "United States", lat: 25.7617, lon: -80.1918 },
    { name: "San Francisco", country: "United States", lat: 37.7749, lon: -122.4194 },
    { name: "Seattle", country: "United States", lat: 47.6062, lon: -122.3321 },
    { name: "Boston", country: "United States", lat: 42.3601, lon: -71.0589 },
    
    // United Kingdom
    { name: "London", country: "United Kingdom", lat: 51.5074, lon: -0.1278 },
    { name: "Manchester", country: "United Kingdom", lat: 53.4808, lon: -2.2426 },
    { name: "Birmingham", country: "United Kingdom", lat: 52.4862, lon: -1.8904 },
    { name: "Edinburgh", country: "United Kingdom", lat: 55.9533, lon: -3.1883 },
    
    // France
    { name: "Paris", country: "France", lat: 48.8566, lon: 2.3522 },
    { name: "Marseille", country: "France", lat: 43.2965, lon: 5.3698 },
    { name: "Lyon", country: "France", lat: 45.7640, lon: 4.8357 },
    { name: "Nice", country: "France", lat: 43.7102, lon: 7.2620 },
    
    // Germany
    { name: "Berlin", country: "Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Munich", country: "Germany", lat: 48.1351, lon: 11.5820 },
    { name: "Hamburg", country: "Germany", lat: 53.5511, lon: 9.9937 },
    { name: "Frankfurt", country: "Germany", lat: 50.1109, lon: 8.6821 },
    
    // Italy
    { name: "Rome", country: "Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Milan", country: "Italy", lat: 45.4642, lon: 9.1900 },
    { name: "Venice", country: "Italy", lat: 45.4408, lon: 12.3155 },
    { name: "Florence", country: "Italy", lat: 43.7696, lon: 11.2558 },
    
    // Spain
    { name: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038 },
    { name: "Barcelona", country: "Spain", lat: 41.3851, lon: 2.1734 },
    { name: "Valencia", country: "Spain", lat: 39.4699, lon: -0.3763 },
    { name: "Seville", country: "Spain", lat: 37.3891, lon: -5.9845 },
    
    // Russia
    { name: "Moscow", country: "Russia", lat: 55.7558, lon: 37.6173 },
    { name: "Saint Petersburg", country: "Russia", lat: 59.9343, lon: 30.3351 },
    { name: "Kazan", country: "Russia", lat: 55.8304, lon: 49.0661 },
    { name: "Sochi", country: "Russia", lat: 43.6028, lon: 39.7342 },
    
    // Japan
    { name: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
    { name: "Osaka", country: "Japan", lat: 34.6937, lon: 135.5023 },
    { name: "Kyoto", country: "Japan", lat: 35.0116, lon: 135.7681 },
    { name: "Yokohama", country: "Japan", lat: 35.4437, lon: 139.6380 },
    
    // China
    { name: "Beijing", country: "China", lat: 39.9042, lon: 116.4074 },
    { name: "Shanghai", country: "China", lat: 31.2304, lon: 121.4737 },
    { name: "Guangzhou", country: "China", lat: 23.1291, lon: 113.2644 },
    { name: "Shenzhen", country: "China", lat: 22.5431, lon: 114.0579 },
    
    // Australia
    { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Melbourne", country: "Australia", lat: -37.8136, lon: 144.9631 },
    { name: "Brisbane", country: "Australia", lat: -27.4698, lon: 153.0251 },
    { name: "Perth", country: "Australia", lat: -31.9505, lon: 115.8605 },
    
    // Canada
    { name: "Toronto", country: "Canada", lat: 43.6532, lon: -79.3832 },
    { name: "Montreal", country: "Canada", lat: 45.5017, lon: -73.5673 },
    { name: "Vancouver", country: "Canada", lat: 49.2827, lon: -123.1207 },
    { name: "Calgary", country: "Canada", lat: 51.0447, lon: -114.0719 },
    
    // Brazil
    { name: "São Paulo", country: "Brazil", lat: -23.5505, lon: -46.6333 },
    { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729 },
    { name: "Brasília", country: "Brazil", lat: -15.8267, lon: -47.9218 },
    { name: "Salvador", country: "Brazil", lat: -12.9714, lon: -38.5014 },
    
    // India
    { name: "Mumbai", country: "India", lat: 19.0760, lon: 72.8777 },
    { name: "Delhi", country: "India", lat: 28.7041, lon: 77.1025 },
    { name: "Bangalore", country: "India", lat: 12.9716, lon: 77.5946 },
    { name: "Kolkata", country: "India", lat: 22.5726, lon: 88.3639 },
    
    // UAE
    { name: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708 },
    { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lon: 54.3773 },
    
    // Singapore
    { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },
    
    // South Korea
    { name: "Seoul", country: "South Korea", lat: 37.5665, lon: 126.9780 },
    { name: "Busan", country: "South Korea", lat: 35.1796, lon: 129.0756 },
    
    // Mexico
    { name: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332 },
    { name: "Guadalajara", country: "Mexico", lat: 20.6597, lon: -103.3496 },
    
    // Argentina
    { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lon: -58.3816 },
    
    // Netherlands
    { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lon: 4.9041 },
    { name: "Rotterdam", country: "Netherlands", lat: 51.9225, lon: 4.4792 },
    
    // Switzerland
    { name: "Zurich", country: "Switzerland", lat: 47.3769, lon: 8.5417 },
    { name: "Geneva", country: "Switzerland", lat: 46.2044, lon: 6.1432 },
    
    // Sweden
    { name: "Stockholm", country: "Sweden", lat: 59.3293, lon: 18.0686 },
    
    // Norway
    { name: "Oslo", country: "Norway", lat: 59.9139, lon: 10.7522 },
    
    // Denmark
    { name: "Copenhagen", country: "Denmark", lat: 55.6761, lon: 12.5683 },
    
    // Austria
    { name: "Vienna", country: "Austria", lat: 48.2082, lon: 16.3738 },
    
    // Poland
    { name: "Warsaw", country: "Poland", lat: 52.2297, lon: 21.0122 },
    { name: "Krakow", country: "Poland", lat: 50.0647, lon: 19.9450 },
    
    // Turkey
    { name: "Istanbul", country: "Turkey", lat: 41.0082, lon: 28.9784 },
    { name: "Ankara", country: "Turkey", lat: 39.9334, lon: 32.8597 },
    
    // Egypt
    { name: "Cairo", country: "Egypt", lat: 30.0444, lon: 31.2357 },
    
    // South Africa
    { name: "Cape Town", country: "South Africa", lat: -33.9249, lon: 18.4241 },
    { name: "Johannesburg", country: "South Africa", lat: -26.2041, lon: 28.0473 },
    
    // Thailand
    { name: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018 },
    
    // Vietnam
    { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lon: 106.6297 },
    { name: "Hanoi", country: "Vietnam", lat: 21.0285, lon: 105.8542 },
    
    // Indonesia
    { name: "Jakarta", country: "Indonesia", lat: -6.2088, lon: 106.8456 },
    { name: "Bali", country: "Indonesia", lat: -8.3405, lon: 115.0920 },
    
    // Malaysia
    { name: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lon: 101.6869 },
    
    // Philippines
    { name: "Manila", country: "Philippines", lat: 14.5995, lon: 120.9842 },
    
    // New Zealand
    { name: "Auckland", country: "New Zealand", lat: -36.8485, lon: 174.7633 },
    { name: "Wellington", country: "New Zealand", lat: -41.2865, lon: 174.7762 }
];

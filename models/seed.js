const teams = [
    {
        teamName: "FC Barcelona",
        teamLogo: { data: Buffer.from(''), contentType: 'image/png' }, // Placeholder for logo
        nickName: "Barça",
        yearFounded: new Date(1899, 0, 1),
        trophies: 26,
        notablePlayers: [
            { 
                name: "Lionel Messi", 
                age: 35, 
                active: true,
                trophies: "List of Messi's trophies", // Example, replace with actual data
                teamName: "FC Barcelona" // Add teamName here
            },
            { 
                name: "Xavi Hernandez", 
                age: 40, 
                active: false,
                trophies: "List of Xavi's trophies", // Example, replace with actual data
                teamName: "FC Barcelona" // Add teamName here
            },
        ]
    },
    {
        teamName: "Real Madrid CF",
        teamLogo: { data: Buffer.from(''), contentType: 'image/png' },
        nickName: "Los Blancos",
        yearFounded: new Date(1902, 0, 1),
        trophies: 34,
        notablePlayers: [
            { 
                name: "Cristiano Ronaldo", 
                age: 37, 
                active: true,
                trophies: "List of Ronaldo's trophies", // Example, replace with actual data
                teamName: "Real Madrid CF" // Add teamName here
            },
            { 
                name: "Karim Benzema", 
                age: 34, 
                active: true,
                trophies: "List of Benzema's trophies", // Example, replace with actual data
                teamName: "Real Madrid CF" // Add teamName here
            },
        ]
    },
]

module.exports = teams;


module.exports = teams

/* 
    teamName: { type: String, required: true },
    teamLogo: { data: Buffer, contentType: String },
    nickName: { type: String },
    yearFounded: { type: Date, required: true },
    trophies: { type: Number, required: true},
    notablePlayers: [playerSchema],
*/
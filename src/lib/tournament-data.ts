export interface Tournament {
    title: string
    game: "valorant" | "bgmi"
    rules: string[]
    schedule: { date: string; events: string[] }[]
    prizes: { position: string; amount: string }[]
}

const tournaments: Record<string, Tournament> = {
    "valorant-championship": {
        title: "Valorant Championship",
        game: "valorant",
        rules: [
            "5v5 Team Format",
            "Double Elimination Bracket",
            "Best of 3 Matches",
            "Standard Competitive Rules",
            "Anti-Cheat Required",
        ],
        schedule: [
            { date: "April 4", events: ["Opening Ceremony", "Group Stage Matches", "Quarter Finals", "Semi Finals"] },
            { date: "April 5", events: ["Finals", "Award Ceremony"] },
        ],
        prizes: [
            { position: "1st Place", amount: "₹5,000" },
            { position: "2nd Place", amount: "₹3,000" },
            { position: "3rd Place", amount: "₹1,000" },
            { position: "MVP", amount: "₹1,000" },
        ],
    },
    "bgmi-pro-league": {
        title: "BGMI Pro League",
        game: "bgmi",
        rules: [
            "4-Man Squad Format",
            "Point System Based",
            "6 Matches Per Day",
            "Device Restrictions Apply",
            "Emulator Players Not Allowed",
        ],
        schedule: [
            { date: "April 4", events: ["Opening Ceremony", "Qualification Rounds", "Semi-Finals"] },
            { date: "April 5", events: ["Finals", "Award Ceremony"] },
        ],
        prizes: [
            { position: "1st Place", amount: "₹5,000" },
            { position: "2nd Place", amount: "₹3,000" },
            { position: "3rd Place", amount: "₹1,000" },
            { position: "MVP", amount: "₹1,000" },
        ],
    },
}

export function getTournamentData(slug: string): Tournament | undefined {
    return tournaments[slug]
}

export function getAllTournamentSlugs(): string[] {
    return Object.keys(tournaments)
}


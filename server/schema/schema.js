const {gql} = require('apollo-server');

module.exports = gql`
type Query {
    tournaments: [Tournament]
    tournament(slug: String, tournamentID: String, eventID: String): Tournament
    tournament_smashgg(slug: String!) : Tournament_SmashGG
    sets: [Set]
    ranking(id: String!) : Ranking
    rankings: [Ranking]
    players(names: [String]): [Player]
    player(name: String!) : Player
    getParticipants(eventID: String!) : [Player]
    entrants_smashgg(eventID: Int!): [Entrant_SmashGG]
    event_seeds(eventID: Int!) : [Phase]
}

type Mutation {
    addTournament(slug: String!, eventID: Int): Tournament
    addSets(eventID: Int!): [Set]
    addRanking(name: String!, startDate: String!, endDate: String!) : Ranking
    registerTournamentEvent(tournamentSlug: String!, eventID: Int!): Tournament
    calculateRanking(id: String!) : Ranking
    seedTournament(phaseID: Int!, seeds: String!) : Message
}

input Seed{
    seedId: Int!
    seedNum: Int!
}

type Message{
    result: String!
}
type Phase {
    id: Int!
    name: String!
    numSeeds: Int
    players: [EventSeed]
}

type EventSeed{
    id: Int!
    seedNum: Int!
    name: String
}

type Tournament {
    tournamentID: ID!
    eventID: ID!
    eventName: String!
    name: String!
    date: Int
    formattedDate: String
    slug: String
    participants: [Placement]
    sets: [Set]
}

type Tournament_SmashGG {
    tournamentID: ID!
    name: String!
    date: Int
    slug: String
    events: [Event_SmashGG]
}

type Event_SmashGG {
    id: ID!
    name: String!
}

type Entrant_SmashGG {
    id: ID!
    name: String!
}

type Placement {
    player: Player!
    name: String!
    placement: Int!
}

type Player {
    name: String!
    name_lower: String!
}

type Ranking {
    id: String!,
    name: String!,
    startDate: Int!
    endDate: Int! 
    formattedStartDate: String!
    formattedEndDate: String!
    players: [Ranked_Players]
}

type Ranked_Players {
    playerID: ID!
    name: String!
    last_tournament: String!
    rating: Float!
    rating_deviation: Float!
    volatility: Float!
    final_ranking: Float!
}

type Set {
    setID: ID!
    eventID: ID!
    winnerID: String!
    loserID: String!
    winnerName: String!
    loserName: String!
    DQ: Boolean
    results: [Result]
}

type Result {
    player: Player!
    name: String!
    score: Int!
}
input PlacementInput {
    player: String!
    name: String!
    placement: Int!
}

input ResultInput {
    player: String!,
    score: Int!
}
`;

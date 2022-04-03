const gameObject = () => {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },

                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }

            }

        },

        away: {
            teamName: 'Charlotte Hornets',
            colors: ['turquoise', 'purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },

                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 4,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }

            }

        }

    }
}


const { home: { players: homePlayers }, away: { players: awayPlayers } } = gameObject()

const { home: { teamName: homeTeamName, colors: homeColors }, away: { teamName: awayTeamName, colors: awayColors } } = gameObject()

const allPlayers = () => {
    const totalPlayers = Object.assign(homePlayers, awayPlayers)
    return totalPlayers
}

const homePlayersPoints = Object.values(homePlayers).map(function (hp) {
    return [hp.points]
}).flat()

const awayPlayersPoints = Object.values(awayPlayers).map(function (ap) {
    return [ap.points]
}).flat()


function totalPointsHome() {
    return homePlayersPoints.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, 0)
}

function totalPointsAway() {
    return awayPlayersPoints.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, 0)
}



function numPointsScored(playersName) {

    for (const player in allPlayers()) {
        if (player === playersName) {

            return allPlayers()[player].points
        }
    }
}

function shoeSize(playersName) {

    for (const player in allPlayers()) {
        if (player === playersName) {

            return allPlayers()[player].shoe
        }
    }
}




function teamColors(teamName) {
    if (awayTeamName === teamName) {
        return awayColors
    }
    else (homeTeamName === teamName)
    return homeColors
}


const teamNames = () => {
    const teamArr = Object.values(gameObject()).map(function (go) {
        return [go.teamName][0]
    });
    return teamArr

}



function playerNumbers(teamName) {
    if (teamName === homeTeamName) {
        const homeNumbers = Object.values(homePlayers).map(function (hp) {
            return [hp.number]
        }).flat()
        return homeNumbers
    }
    else (teamName === awayTeamName)
    const awayNumbers = Object.values(awayPlayers).map(function (ap) {
        return [ap.number]
    }).flat()
    return awayNumbers
}


function playerStats(playerName) {
    for (const player in allPlayers()) {
        if (player === playerName) {
            return allPlayers()[player]
        }
    }

}



function bigShoeRebounds() {
    const allShoeArr = Object.values(allPlayers()).map(function (ap) { return [ap.shoe] }).flat()
    for (const player in allPlayers()) {
        if (allPlayers()[player].shoe === Math.max(...allShoeArr)) {
            return allPlayers()[player].rebounds
        }
    }
}

function mostPointsScored() {
    const pointsArr = Object.values(allPlayers()).map(function (ap) { return [ap.points] }).flat()
    for (const player in allPlayers()) {
        if (allPlayers()[player].points === Math.max(...pointsArr)) {
            return player
        }
    }
}

function winningTeam() {
    if (totalPointsHome() > totalPointsAway()) {
        return homeTeamName
    }
    else return awayTeamName

}


function playerWithLongestName(){
   teamPlayerNameArr = Object.keys(allPlayers()) 
   return teamPlayerNameArr.reduce((a, b) => a.length < b.length ? b : a,"");
}

console.log(playerWithLongestName())

function doesLongNameStealATon(){
    
    const allStealsArr = Object.values(allPlayers()).map(function (ap) { return [ap.steals] }).flat()
    for (let player in allPlayers()) {
        if (allPlayers()[player].steals === Math.max(...allStealsArr)) {
        return player === playerWithLongestName()
        }
    }
}


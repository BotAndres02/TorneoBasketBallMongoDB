const results = db.games.find().map(game => {
  // Obtener detalles del equipo local
  const homeTeamDetails = db.teams.findOne({ _id: game.homeTeam.teamId });
  const awayTeamDetails = db.teams.findOne({ _id: game.awayTeam.teamId });
  
  // Obtener detalles de los árbitros
  const refereeDetails = game.officials.map(official => {
      const referee = db.referees.findOne({ _id: official.refereeId });
      return {
          refereeId: official.refereeId,
          name: `${referee.firstName} ${referee.lastName}`,
          role: official.role
      };
  });
  
  // Obtener jugadores destacados del juego 
  const homeTeamPlayers = db.players.find({"currentTeam.teamId": game.homeTeam.teamId}).toArray();
  const awayTeamPlayers = db.players.find({"currentTeam.teamId": game.awayTeam.teamId}).toArray();
  
  const highlights = [
      ...homeTeamPlayers.slice(0, 2).map(player => ({
          playerId: player._id,
          name: `${player.firstName} ${player.lastName}`,
          points: Math.floor(Math.random() * 35),
          assists: Math.floor(Math.random() * 10),
          rebounds: Math.floor(Math.random() * 12)
      })),
      ...awayTeamPlayers.slice(0, 2).map(player => ({
          playerId: player._id,
          name: `${player.firstName} ${player.lastName}`,
          points: Math.floor(Math.random() * 35),
          assists: Math.floor(Math.random() * 10),
          rebounds: Math.floor(Math.random() * 12)
      }))
  ];
  
  return {
      gameId: game._id,
      season: game.seasonId ? db.seasons.findOne({ _id: game.seasonId }).year : "2023-24",
      date: game.date,
      teams: {
          home: {
              teamId: game.homeTeam.teamId,
              name: homeTeamDetails.name,
              score: game.homeTeam.score,
          },
          away: {
              teamId: game.awayTeam.teamId,
              name: awayTeamDetails.name,
              score: game.awayTeam.score,
          }
      },
      referees: refereeDetails,
      highlights: highlights,
      status: game.status
  };
});

// Insertar resultados en la colección
db.results.insertMany(results);

// Verificar inserción
print("Resultados insertados:", db.results.countDocuments());
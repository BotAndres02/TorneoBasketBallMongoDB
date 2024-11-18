// Crear
db.results.insertOne({
  gameId: ObjectId("64eaf20e8f1b2f001c9f5678"),
  season: "2023-24",
  date: new Date("2023-12-25T20:00:00Z"),
  teams: {
    home: {
      teamId: ObjectId("64eaf20e8f1b2f001c9f1234"),
      name: "Los Angeles Lakers",
      score: 115,
    },
    away: {
      teamId: ObjectId("64eaf20e8f1b2f001c9f1235"),
      name: "Boston Celtics",
      score: 108,
    },
  },
  referees: [
    {
      refereeId: ObjectId("64eaf20e8f1b2f001c9f3456"),
      name: "James Williams",
      role: "HEAD",
    },
  ],
  highlights: [
    {
      playerId: ObjectId("64eaf20e8f1b2f001c9f6789"),
      name: "LeBron James",
      points: 30,
      assists: 8,
    },
  ],
  status: "COMPLETED",
});

// Leer
print("\nTodos los resultados:");
db.results.find().forEach(printjson);

// Actualizar
db.results.updateOne(
  { gameId: ObjectId("64eaf20e8f1b2f001c9f5678") },
  { $set: { "teams.home.score": 120 } }
);

// Verificar actualización
print("\nResultado actualizado:");
db.results
  .find({ gameId: ObjectId("64eaf20e8f1b2f001c9f5678") })
  .forEach(printjson);

// Eliminar
db.results.deleteOne({ gameId: ObjectId("64eaf20e8f1b2f001c9f5678") });

// Verificar eliminación
print("\nDespués de eliminar:");
db.results
  .find({ gameId: ObjectId("64eaf20e8f1b2f001c9f5678") })
  .forEach(printjson);

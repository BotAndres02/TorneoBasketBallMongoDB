/* Verificar estado de la replica Set */
rs.status()


const seasonIds = {
  season2223: ObjectId(),
  season2324: ObjectId()
};

/* Insertar documento para probar la replica */
db.seasons.inserOne({
  _id: seasonIds.season2324,
  year: "2023-24",
  startDate: new Date("2023-10-15"),
  endDate: new Date("2024-06-15"),
  status: "IN_PROGRESS",
  important_dates: [
      { event: "All-Star Game", date: new Date("2024-02-18") }
  ]
});
// Insertamos las temporadas
const seasons = [
  {
      _id: seasonIds.season2223,
      year: "2022-23",
      startDate: new Date("2022-10-15"),
      endDate: new Date("2023-06-15"),
      status: "COMPLETED",
      important_dates: [
          { event: "All-Star Game", date: new Date("2023-02-19") }
      ]
  },
  {
      _id: seasonIds.season2324,
      year: "2023-24",
      startDate: new Date("2023-10-15"),
      endDate: new Date("2024-06-15"),
      status: "IN_PROGRESS",
      important_dates: [
          { event: "All-Star Game", date: new Date("2024-02-18") }
      ]
  }
];

db.seasons.insertMany(seasons);
// Archivo principal para ejecutar todos los scripts en orden

load("db/01_players.js");
load("db/02_teams.js");
load("db/03_seasons.js");
load("db/04_referees.js");
load("db/05_games.js");

print("Todos los datos han sido insertados exitosamente.");
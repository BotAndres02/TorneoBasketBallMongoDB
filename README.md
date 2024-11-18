# MongoDB Torneo de Basquetball

Este proyecto organiza scripts de seed para MongoDB en múltiples archivos, permitiendo insertar datos iniciales de forma ordenada.

## Archivos

- `01_players.js`: Inserta datos de jugadores.
- `02_teams.js`: Inserta datos de equipos.
- `03_seasons.js`: Inserta datos de temporadas.
- `04_referees.js`: Inserta datos de árbitros.
- `05_games.js`: Inserta datos de juegos.
- `main.js`: Ejecuta todos los scripts en orden.

## Ejecución

1. Asegúrate de tener MongoDB instalado.
2. Ejecuta el archivo principal:
   mongo <nombre_de_tu_base_de_datos> main.js
3. Los datos serán insertados en las colecciones correspondientes.

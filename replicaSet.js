/* Replica Set de los 3 nodos */
mongod --replSet basketballTournamentRS --dbpath="C:\data\db\nodo1" --port 27017
mongod --replSet basketballTournamentRS --dbpath="C:\data\db\nodo2" --port 27018
mongod --replSet basketballTournamentRS --dbpath="C:\data\db\nodo3" --port 27019

/* Conectarse al nodo primario */
mongosh --host localhost --port 27017

/* Inicializar replica Set */
rs.initiate({
    _id: "basketballTournamentRS",
    members: [
      {
        _id: 0,
        host: "localhost:27017",
        priority: 3
      },
      {
        _id: 1,
        host: "localhost:27018",
        priority: 2,
      },
      {
        _id: 2,
        host: "localhost:27019",
        priority: 2,
      }
    ],
    settings: {
      heartbeatTimeoutSecs: 10,
      electionTimeoutMillis: 8000,
      catchUpTimeoutMillis: 30000
    }
  })

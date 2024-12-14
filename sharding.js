
// Crear entorno de shdars

mongod --shardsvr --port 27020 --dbpath C:\shard_data\data\shard0 --replSet rs0 --bind_ip localhost;
mongod --shardsvr --port 27021 --dbpath C:\shard_data\data\shard1 --replSet rs1 --bind_ip localhost;
mongod --shardsvr --port 27022 --dbpath C:\shard_data\data\shard2 --replSet rs2 --bind_ip localhost;



mongosh --host localhost --port 27020;
rs.initiate({_id: "rs0",   members: [{ _id: 0, host: "localhost:27020" }]});


mongosh --port 27021;
rs.initiate({_id: "rs1",   members: [{ _id: 0, host: "localhost:27021" }]});


mongosh --port 27022;
rs.initiate({_id: "rs2",   members: [{ _id: 0, host: "localhost:27022" }]});





mongod --configsvr --replSet configReplSet --port 27023 --dbpath C:\shard_data\data\config1 --bind_ip localhost;
mongod --configsvr --replSet configReplSet --port 27024 --dbpath C:\shard_data\data\config2 --bind_ip localhost;
mongod --configsvr --replSet configReplSet --port 27025 --dbpath C:\shard_data\data\config3 --bind_ip localhost;


mongosh --port 27023;


rs.initiate(
  {
    _id: "configReplSet",
    configsvr: true,
    members: [
      {
        _id: 0,
        host: "localhost:27023"
      },
      {
        _id: 1,
        host: "localhost:27024"
      },
      {
        _id: 2,
        host: "localhost:27025"
      }]
  });


rs.status();



mongos --configdb configReplSet/localhost:27023,localhost:27024,localhost:27025 --port 27026 --bind_ip localhost

mongosh --port 27026


sh.addShard("rs0/localhost:27020");
sh.addShard("rs1/localhost:27021");
sh.addShard("rs2/localhost:27022");



// SHARDS

use torneoBasquet

sh.enableSharding("torneoBasquet");


sh.shardCollection("torneoBasquet.referees", { team_id: "hashed" });



// Pruebas


db.referees.insertMany([
  { referee_id: 1, name: "Jame Williams" },
  { referee_id: 2, name: "Sarah Martinez" },
  { referee_id: 3, name: "Michael Johnson" },
]);



for (let i = 0; i < 1000; i++) {
  db.referees.insert({asotiation_id: i, role: "Rol " + i})
}

sh.status();


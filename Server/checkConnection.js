const { Pool } = require('pg')

var query = 'SELECT * FROM empleados'

const connectionData = new Pool({
  user: 'postgres',
  password: 'A123',
  host: 'localhost',
  database: 'prueba_lab_3',
  port: 5432,
})

async function getQuery() {
  try {
    result = await connectionData.query(query);

    console.log(result.rows);
  } catch (err) {
    console.log("****  ERROR ****");
  }
}

getQuery();
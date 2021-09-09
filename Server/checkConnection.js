const oracledb = require('oracledb');
// hr schema password
var password = 'A123' 
// checkConnection asycn function
async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: "hr",
        password: password,
        //connectString: "localhost:1521/xepdb1"
        connectString : "(DESCRIPTION =(ADDRESS = (PROTOCOL = IPC)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SID= PLSExtProc)))"
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();
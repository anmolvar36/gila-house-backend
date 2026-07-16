const pool = require('./src/database/connection');

async function check() {
  const [rows] = await pool.query('DESCRIBE orders');
  console.log(rows);
  process.exit();
}
check();

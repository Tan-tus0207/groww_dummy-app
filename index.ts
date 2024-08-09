import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'groww_db',
  password: '12345', // Replace with your PostgreSQL password
  port: 5432,
});

app.use(express.json());

// API to get stocks
app.get('/stocks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stocks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


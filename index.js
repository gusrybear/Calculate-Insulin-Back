require("dotenv/config");

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

app.get("/insulins", async (req, res) => {
  try {
    const allMenu = await pool.query(`
        SELECT i.id, i.type, i.menu, i.carbohydrate::float, i.quantity::float, i.unit, i.label, i.value
        FROM insulin i
        ORDER BY i.id
        `);
    res.json(allMenu.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// localhost:5001/insulins/:inputType/menu




//Route
app.listen(process.env.API_PORT, () => {
  console.log("Server has started on PORT 5001");
});

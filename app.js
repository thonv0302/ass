const express = require("express");
const app = express();
const port = 3000;

const customerRoutes = require("./routes/customer");
const employeeRoutes = require("./routes/employee");

// Middleware
app.use(express.json()); // parse json bodies in the request object
 
app.use(customerRoutes);
app.use(employeeRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

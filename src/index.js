const app = require("./app.js");
const db = require("../src/models");


async function main() {
  const port = process.env.PORT;
  try {
    app.listen(port);
    // db.sequelize.sync({ force: false }).then(() => {
    //   console.log("Tablas sincronizadas");
    // });
    console.log("Server is listening on port ", port);
    
   
  } catch (error) {
     console.log("Error: ", error);
  }
}

main();

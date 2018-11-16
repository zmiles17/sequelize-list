const express = require("express");
const app = express();
const db = require("./models");
const io = require("socket.io")(server);
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

require("./sockets/checklist-sockets")(io);
require("./routes/api-routes")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });

const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
//big bug here, talked to many askbcs and tutors and they couldn't figure it out, i could not get server to start unless i deleted the process.env.PORT. so its just PORT =3001
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

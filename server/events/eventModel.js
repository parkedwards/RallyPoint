const db = require('../database/database');
const logger = require('../logs/logger');

// check LOCATION data type
// are we going to use PostGIS?  Should the type be:
// "GEOMETRY"
db.query(`CREATE TABLE IF NOT EXISTS "events" (
  _id serial primary key,
  title varchar(256) not null,
  event_desc varchar(256),
  start_date date not null,
  end_date date not null,
  location varchar(256) not null,
  min_age integer,
  category varchar(256)
)`, (err) => {
    if (err) logger.error(err);
  }
);

module.exports = db;
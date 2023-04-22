const { Pool } = require('pg');

const PG_URI =
  'postgres://syzthmxl:93sRWq3RM1d6HIcFdMUPUdZsPqdkHsCs@mahmud.db.elephantsql.com/syzthmxl';

// pool -
const pool = new Pool({
  connectionString: PG_URI,
});

// Notes about database:
// stores user info in table called 'users': userId, username, password, firstName

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

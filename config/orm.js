// methods to retrieve and store data in the database
// selectAll()
// insertOne()
// updateOne()

// import MySQL connection
const connection = require("./connection.js");

// helper function for MySQL syntax
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

// helper function converts object value pairs to SQL syntax
function objToSql(ob) {
  let arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Eenie Minee Mo => 'Eenie Minee Mo')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
};

// Object for all our SQL statement functions.
let orm = {
  selectAll: function(tableInput, cb) {
    // db query to return all
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insert: function(table, cols, vals, cb) {
		// query that inserts a specific row into the target table
		let queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
		// console.log(queryString);

		// run the db query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
  },
  // update single entry
	update: function(table, objColVals, condition, cb) {
		// query string to update a single entry in the target table
		let queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
		// console.log(queryString);

		// run the db query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// export orm object
module.exports = orm;

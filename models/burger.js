// wait to attach handlers until DOM is fully loaded
$(function() {

  let orm = require('../config/orm.js');

  // create a burger object
  let burger = {
    // Select all burger table entries
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res) {
        cb(res);
      });
    },

    insert: function(cols, vals, cb) {
      orm.insert('burgers', cols, vals, function(res) {
        cb(res);
      });
    },

    // objColVals specifies columns as object keys with values
    update: function(objColVals, condition, cb) {
      orm.update('burgers', objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
};

// export for burger_controller.js
module.exports = burger;

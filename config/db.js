var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/patients');

var db = mongoose.connection;

db.on('error', function(error) {
  console.log(error);
});
db.once('open', function() {
  console.log('Connected to MONGO');
});

module.exports = mongoose.model('ptrels', {
  patient: {
    meta: {
      name: {
        first: String,
        middle: String,
        last: String,
        sortable: String
      },
      dob: Date,
      office: {
        name: String
      }
    },
    unumber: String
  },
  referring: {
    provider: {
      name: {
        first: String,
        middle: String,
        last: String
      }
    }
  },
  treating: {
    office: {
      name: String
    }
  },
  treatment: {
    name: String,
    date: String
  },
  outreachData: {
    scheduled: Boolean,
    queueDate: Date,
    lastCall: {
      ts: {
        date: Date
      }
    }
  },
  status: {
    name: String
  },
  history: [{
    ts: Date
  }]
});

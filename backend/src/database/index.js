const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/gobarber',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
).then(() => console.log('connection succesful'))
.catch((err) => console.error(err));
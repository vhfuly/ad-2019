const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://amigo:teste@cluster0.xasho.mongodb.net/Friends?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
).then(() => console.log('connection succesful'))
.catch((err) => console.error(err));
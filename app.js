const express = require('express');
const User = require('./users/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const userDb = new User();

app.post('/reg', async (req, res) => {
  try {
    console.log(req.body);
    const { password, email } = req.body;

    if(!password, !email) {
      return res.send('Invalid registration data');
    }

    const result = await userDb.create(req.body);

    return res.send(result);
  } catch(e) {
    return res.send('Something went wrong');
  }
})

app.listen(3000);


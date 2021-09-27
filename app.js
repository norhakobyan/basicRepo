const express = require('express');
const User = require('./users/index');
const Subscribtion = require('./subscribtion/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const user = new User();
const subscribtion = new Subscribtion();

app.post('/reg', async (req, res) => {
  try {
    console.log(req.body);
    const { password, email } = req.body;

    if(!password, !email) {
      return res.send('Invalid registration data');
    }

    const result = await user.create(req.body);

    return res.send(result);
  } catch(e) {
    return res.send('Something went wrong');
  }
});

app.post('/login', async (req, res) => {

  try {
    const { email, password } = req.body;
    if(!email || !password) {
    return res.send('Invalid login data');
    }

  const result = await user.login(email, password);
  return res.send(result);

  } catch(e) {
    return res.send('Something went wrong');
  }
});

app.post('/logOut', async (req, res) => {

  try {
    const { token } = req.body;
    if(!token) {
    return res.send('Invalid logOut data or token');
    }

  const result = await user.logOut(token);
  return res.send(result);

  } catch(e) {
      return res.send('Something went wrong');
  }
});

app.post('/subcribe/:id', async (req, res) => {
  try {
    console.log('skzbi user', user);
    const { token } = req.body;
    const target = req.params.id;
    const currentUser = await user.checkLogin(token);
    const result = await subscribtion.create(currentUser, target);
    console.log(result);
    return res.send(result);
  } catch(e) {
    return res.send('Something went wrong');
  }
});


app.listen(3000);


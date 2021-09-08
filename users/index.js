const redis = require("redis");
var jwt = require('jsonwebtoken');
const { promisify } = require('util');


const { UserModel } = require('../db/index');

const client = redis.createClient();

class User {
  constructor() {};

  async create(user) {

    const findUser = await UserModel.findOne({ email: user.email });
    if(findUser) {
      throw new Error('This email is already exists');
    }
    const result = await UserModel.create(user);
    return result;
  }

  async login(email, password) {

    const user = await UserModel.findOne({ email, password });
    if(!user) {
      throw new Error('User not found!');
    }
    const token = jwt.sign({ userId: user.id }, 'basicItCenter');
    console.log(token);
    await promisify(client.set).bind(client)(user.id, token);
    return { token };
  }

  async logOut(token) {

    const { userId } = jwt.verify(token, 'basicItCenter');
    const user = await UserModel.findOne({ id: userId });
    if(!user) {
      throw new Error('Sonething went wrong');
    }
    await promisify(client.del).bind(client)(user.id);
    return 'success'
  }
}

module.exports = User;

const { UserModel } = require('../db/index');

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
}

module.exports = User;

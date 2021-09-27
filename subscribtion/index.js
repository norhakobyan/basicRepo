const { SubscribtionModel } = require('../db/index');
const User = require('../users/index');

const user = new User();

class Subscribtion {
  constructor() {}

  async create(source, target) {
    const findTarget = await user.find({ _id: target });
    if(!findTarget) {
      throw new Error('Target not found!');
    }
    console.log(findTarget, source, target);
    const result = await SubscribtionModel.create({ source, target, state: 'panding' });
    return result;
  }
}

module.exports = Subscribtion;
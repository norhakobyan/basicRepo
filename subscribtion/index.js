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

  async getPnadingSubscriptions(id) {
    console.log(id);
    const currentUser = await user.find({ _id: id });
    console.log(currentUser);
    if(!currentUser) {
      throw new Error('User not found!');
    }
    const subcribtions = await SubscribtionModel.find({ target: id, state: 'panding'}).exec();
    
    return subcribtions;
  }
}

module.exports = Subscribtion;
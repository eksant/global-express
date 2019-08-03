const BaseService = require('./BaseService');
const { Example } = require('../../models');
const config = require('../../config/config');

module.exports = class ExampleService extends BaseService {
  constructor() {
    super(Example);
  }

  async paginate(page = 1, limit = config.app.pageLimit) {
    try {
      const responses = await this.model.products;
      if (responses) {
        const count = responses.length;
        const paginate = {
          page: parseInt(page),
          count: parseInt(count),
          total: parseInt(count),
        };

        return {
          data: responses,
          paginate,
        };
      }

      throw Error('Paginating fail to execute');
    } catch (error) {
      throw Error(error.message);
    }
  }
};

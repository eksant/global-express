const BaseController = require('./BaseController');
const HandleError = require('./HandleError');

const { ResponseBuilder } = require('../../utils');
const { ExampleService } = require('../services');

module.exports = class ExampleController extends BaseController {
  constructor() {
    super(new ExampleService());
  }

  async get(req, res) {
    const responseBuilder = new ResponseBuilder();
    const handleError = new HandleError();
    const { page, limit } = req.query;

    try {
      const result = await this.service.paginate(page, limit);
      this.sendSuccessResponse(
        res,
        responseBuilder
          .setData(result.data)
          .setPaginate(result.paginate)
          .setMessage('Example fetched successfully')
          .build()
      );
    } catch (error) {
      handleError.sendCatchError(res, error);
    }
  }
};

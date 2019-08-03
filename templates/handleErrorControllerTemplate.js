const BaseController = require('./BaseController');
const { ResponseBuilder } = require('../../utils');

module.exports = class HandleError extends BaseController {
  constructor() {
    super();
  }

  sendCatchError(res, error) {
    const responseBuilder = new ResponseBuilder();

    this.sendInternalServerErrorResponse(
      res,
      responseBuilder
        .setStatus(500)
        .setSuccess(false)
        // eslint-disable-next-line no-useless-escape
        .setMessage(error.toString().replace(/\"/gi, ''))
        .build()
    );
    return;
  }
};

module.exports = class BaseController {
  constructor(service) {
    this.service = service;
  }

  sendSuccessResponse(res, response_body = {}) {
    res.status(200).json(response_body);
  }

  sendCreatedResponse(res, response_body = {}) {
    res.status(201).json(response_body);
  }

  sendNotFoundResponse(res, response_body = {}) {
    res.status(404).json(response_body);
  }

  sendInvalidPayloadResponse(res, response_body = {}) {
    res.status(422).json(response_body);
  }

  sendResourceAlreadyExistResponse(res, response_body = {}) {
    res.status(409).json(response_body);
  }

  sendInternalServerErrorResponse(res, response_body = {}) {
    res.status(500).json(response_body);
  }

  sendBadRequestResponse(res, response_body = {}) {
    res.status(400).json(response_body);
  }
};

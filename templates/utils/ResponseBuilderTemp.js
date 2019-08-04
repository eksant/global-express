module.exports = class ResponseBuilder {
  /**
   * Response builder class
   */
  constructor() {
    this.meta = {
      status: 200,
      message: 'Operations success',
      success: true,
      errors: [],
    };
    this.data = {};
    this.paginate = null;
  }

  /**
   * data setter
   * @param {Object} data
   */
  setData(data) {
    this.data = data;
    return this;
  }

  /**
   * paginate setter
   * @param {Object} paginate
   */
  setPaginate(paginate) {
    this.paginate = paginate;
    return this;
  }

  /**
   * status setter
   * @param {String} status
   */
  setStatus(status) {
    this.meta.status = status;
    return this;
  }

  /**
   * success setter
   * @param {Boolean} success
   */
  setSuccess(success) {
    this.meta.success = success;
    return this;
  }

  /**
   * message setter
   * @param {String} message
   */
  setMessage(message) {
    this.meta.message = message;
    return this;
  }

  /**
   * set the total row count
   * @param {Integer} total
   */
  setTotal(total) {
    this.meta.total = total;
    return this;
  }

  /**
   * set row count fetched
   * @param {Integer} count
   */
  setCount(count) {
    this.meta.count = count;
    return this;
  }

  /**
   * set errors
   * @param {Array} errors
   */
  setErrors(errors) {
    this.meta.errors = errors;
    return this;
  }

  build() {
    return {
      meta: this.meta,
      data: this.data,
      paginate: this.paginate,
    };
  }
};

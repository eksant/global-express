module.exports = class BaseService {
  /**
   * Base service class providing common used operations
   * @param {Model} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * Paginate fetch result.
   * @param {Integer} page    eg: 1
   * @param {Integer} limit   eg: 10
   * @param {Array}   fields  eg: ['key_1', 'key_2']
   * @param {String}  order   eg: 'key_1' for ASC / '-key_1' for DESC
   * @param {Object}  where   eg: {key: value}
   */
  async paginate(page = 1, limit, fields, where, order) {
    limit = typeof limit !== 'undefined' ? parseInt(limit) : 10;
    fields = typeof fields !== 'undefined' ? fields : null;
    order =
      typeof order !== 'undefined'
        ? BaseService.parseOrder(order)
        : [{ column: 'id', order: 'ASC' }];
    where =
      typeof where !== 'undefined'
        ? { key: Object.keys(where)[0], opr: 'like', value: `%${Object.values(where)[0]}` }
        : { key: 'id', opr: '<>', value: '0' };
    const offset = typeof page !== 'undefined' ? (page - 1) * limit : page;

    try {
      const { table, execQuery } = this.model;
      const totals = await execQuery(table)
        .count('id')
        .where(where.key, where.opr, where.value)
        .debug();
      const total = Array.isArray(totals) ? Object.values(totals[0])[0] : Object.values(totals);

      const response = await execQuery
        .select(fields)
        .from(table)
        .where(where.key, where.opr, where.value)
        .limit(limit)
        .offset(offset)
        .orderBy(order)
        .debug();

      if (response) {
        const count = response.length;
        // const lastPage = Math.ceil(total / limit);
        const links = {
          page: parseInt(page),
          count,
          total,
        };

        return {
          data: response,
          links,
          count, // page < lastPage ? limit : total % limit,
          total,
        };
      }

      throw Error('Paginating fail to execute');
    } catch (error) {
      throw Error(error.message);
    }
  }
};

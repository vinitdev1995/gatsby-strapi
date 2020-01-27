'use strict';

/**
 * Blogs.js controller
 *
 * @description: A set of functions called "actions" for managing `Blogs`.
 */

module.exports = {

  /**
   * Retrieve blogs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.blogs.search(ctx.query);
    } else {
      return strapi.services.blogs.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a blogs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.blogs.fetch(ctx.params);
  },

  /**
   * Count blogs records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.blogs.count(ctx.query, populate);
  },

  /**
   * Create a/an blogs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blogs.add(ctx.request.body);
  },

  /**
   * Update a/an blogs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blogs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blogs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blogs.remove(ctx.params);
  }
};

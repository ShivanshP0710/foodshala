/**
 * Items.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //schema: true,

    Restaurant_Name: {
      type: 'string',
      required: true,
    },

    Item_Name: {
      type: 'string',
      required: true,
      unique: true      
    },

    Price: {
      type: 'string',
      required: true
    },

  },

};


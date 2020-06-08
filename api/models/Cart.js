/**
 * Cart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    Customer_Name: {
      type: 'string',
      required: true,
      unique: true    
    },

    Restaurant_Name: {
      type: 'string',
      required: true,    
    },

    Item_Name: {
      type: 'string',
      required: true,    
    },

    Price: {
      type: 'string',
      required: true
    },

  },

};


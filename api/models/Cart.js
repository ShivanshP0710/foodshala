/**
 * Cart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //schema: true,

    CWIId: {
      type: 'string',
      required: true,
      unique: true
    },

    Customer_Name: {
      type: 'string',
      required: true,
      unique: false
    },

    Restaurant_Name: {
      type: 'string',
      required: true,
      unique: false    
    },

    Item_Name: {
      type: 'string',
      required: true,
      unique: false    
    },

    Price: {
      type: 'string',
      required: true,
      unique: false
    },

  },

};


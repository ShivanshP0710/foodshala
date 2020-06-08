/**
 * Orders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    Items_with_Price: {
      type: 'string',
      required: true,    
    },

    Restaurant_Name: {
      type: 'string',
      required: true,    
    },

    Customer_Name: {
      type: 'string',
      required: true,    
    },

    Customer_PhoneNo: {
      type: 'string',
      required: true
    },

    Customer_Address: {
      type: 'string',
      required: true
    },

    Order_Total: {
      type: 'string',
      required: true
    },

  },

};


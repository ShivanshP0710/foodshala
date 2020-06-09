/**
 * Orders.js
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

    Items_with_Price: {
      type: 'string',
      required: true,
      unique: false    
    },

    Restaurant_Name: {
      type: 'string',
      required: true,
      unique: false 
    },

    Customer_Name: {
      type: 'string',
      required: true,
      unique: false    
    },

    Customer_PhoneNo: {
      type: 'string',
      required: true,
      unique: false
    },

    Customer_Address: {
      type: 'string',
      required: true,
      unique: false
    },

    Order_Total: {
      type: 'string',
      required: true,
      unique: false
    },

  },

};


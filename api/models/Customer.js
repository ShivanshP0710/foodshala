/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //schema: true,

    Customer_Name: {
      type: 'string',
      required: true,
    },

    Prefered_Restaurant_Type: {
      type: 'string',
      required: true,
    },

    //unique property is used to make primary key
    //here we have written isEmail unique by the unique property of the attribute unique: true (this helps us in not getting the duplicasy problem)
    Customer_Email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true
    },

    Customer_Password: {
      type: 'string',
      required: true
    },

    Customer_PhoneNo: {
      type: 'string',
      required: true
    },

    Customer_Address: {
      type: 'string',
      required: true
    },

  },

};


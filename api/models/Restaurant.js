/**
 * Restaurant.js
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
      unique: true
    },

    Owner_Name: {
      type: 'string',
      required: true,
      unique: true
    },

    Prefered_Restaurant_Type: {
      type: 'string',
      required: true,
    },

    //unique property is used to make primary key
    //here we have written isEmail unique by the unique property of the attribute unique: true (this helps us in not getting the duplicasy problem)
    Restaurant_Email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true
    },

    Restaurant_Password: {
      type: 'string',
      required: true
    },

    Restaurant_PhoneNo: {
      type: 'string',
      required: true
    },

    Open_Time: {
      type: 'string',
      required: true
    },

    Certified_By: {
      type: 'string',
      required: true
    },

    Certitied_Licence_No: {
      type: 'string',
      required: true
    },

    GSTNo: {
      type: 'string',
      required: true
    },

    Restaurant_Address: {
      type: 'string',
      required: true
    },

    Embedded_Map_Link: {
      type: 'string',
      required: true
    },

    Facebook: {
      type: 'string',
      required: true
    },

    Twitter: {
      type: 'string',
      required: true
    },

    LinkedIn: {
      type: 'string',
      required: true
    },

    Instagram: {
      type: 'string',
      required: true
    },

  }
};


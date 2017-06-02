/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    connection: 'someMysqlServer',
    tableName : 'employee',
    attributes: {
         id: {
            type: 'INTEGER',
            columnName: 'empid',
            primaryKey: true,
            autoIncrement: true
        },
        fullname: 'STRING',
        emailid: 'STRING',
        phonenumber: 'STRING',
    }

};

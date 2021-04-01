const User = require("./user");
const Address = require("./address");
const Baby = require("./babyinfo");

// Setup Associations
User.hasOne(Address);
Address.belongsTo(User);

User.hasMany(Baby);
Baby.belongsTo(User);
module.exports = {
  User,
  Address,
  Baby,
};

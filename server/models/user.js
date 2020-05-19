const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const connectionString = require("../utils/connectionString");

mongoose.set("useCreateIndex", true);
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const hash = await bcrypt.hash(password, 10);
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

module.exports = mongoose.model("user", UserSchema, "users");

const mongoose = require("mongoose");
const connectionString = require("../utils/connectionString");

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CategorySchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
  },
});

module.exports = mongoose.model("category", CategorySchema, "categories");

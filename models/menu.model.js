import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    taste: {
      type: String,
      required: true,
    },
    is_drink: {
      type: Boolean,
      default: false,
    },
    ingredients: {
      type: [String],
      default: [],
    },

    sales: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("menu", menuItemSchema);
export default Menu;

const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Sneakers',
  },
  {
    category_name: 'Bracelet',
  },
  {
    category_name: 'Purse',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
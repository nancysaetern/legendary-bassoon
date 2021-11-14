const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'crystal',
  },
  {
    tag_name: 'crochet',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'corduroy',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
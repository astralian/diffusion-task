'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('catalog', [
      {
        name: 'Curry',
        origin: 'Thai',
        description: 'Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.',
        difficulty: 2,
        protein: 'Jumbo Shrimp',
        produce: 'Onion / Tomatoes',
        spice: 'Saffron',
        cookingOil: 'Olive Oil',
        volume: 700,
        serves: 4,
        authenticity: 'Unverified',
        stock: 'Chicken'
      },
      {
        name: 'Curry',
        origin: 'Indian',
        description: 'The All-American Cheeseburger has certain non-negotiable elements: American cheese is one of them. Rather than unwrap individual singles, get sliced cheese from your nearest deli counter — it tastes better and melts slower and more evenly.',
        difficulty: 1,
        protein: 'Beef',
        produce: 'Onion / Tomatoes',
        spice: 'Pepper',
        cookingOil: 'Sun Oil',
        volume: 350,
        serves: 1,
        authenticity: 'Unverified',
        stock: 'Pork'
      },
      {
        name: 'Curry',
        origin: 'Vietnamese',
        description: 'This iconic red beet soup is made with beef, cabbage, potatoes, carrots, garlic and dill, and then served with a dollop of sour cream and rye bread.',
        difficulty: 3,
        protein: 'Beef',
        produce: 'Beetroot / Tomatoes',
        spice: 'Pepper',
        cookingOil: 'Sun Oil',
        volume: 300,
        serves: 1,
        authenticity: 'Verified',
        stock: 'Beef'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('catalog', null, {});
  }
};

'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Drugs', [
      {
        name: 'Эльбрустин',
        price: 210,
        categoryId: 1,
        image: '/img/tabletki.jpeg',
        info: 'Прими таблетку и стань программистом. Необходимо пропить полный курс(3 месяца)',
        count: 5,
        promoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Полчаcика',
        price: 30,
        categoryId: 1,
        image: '/img/tabletki.jpeg',
        info: 'Когда нужно быстро запилить проект.',
        count: 7,
        promoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вспомнить всё',
        price: 100,
        categoryId: 1,
        image: '/img/tabletki.jpeg',
        info: 'Витамины для улучшения памяти',
        count: 3,
        promoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Озверин',
        price: 10,
        categoryId: 1,
        image: '/img/tabletki.jpeg',
        info: 'Ваш билет в дурку',
        count: 0,
        promoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гель енот-полоскун',
        price: 150,
        categoryId: 1,
        image: '/img/tabletki.jpeg',
        info: 'Ваша кожа станет шелковистой и полосатой',
        count: 15,
        promoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Обнимашки',
        price: 75,
        categoryId: 1,
        image: '/img/tabletki.jpeg',
        info: 'Когда Вам не хватает любви и ласки',
        count: 18,
        promoId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Drugs');
  },
};

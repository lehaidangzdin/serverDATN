module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("Books", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // cloudinary_id: {
    //   type: Sequelize.STRING,
    // },
  });
  return Book;
};

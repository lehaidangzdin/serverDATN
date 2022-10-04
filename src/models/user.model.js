module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        keyApi: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        token: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        refreshToken: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });
    return User;
};



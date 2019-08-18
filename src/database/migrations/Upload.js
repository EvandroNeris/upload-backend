module.exports = {
    up: (queryInterface, DataTypes) => queryInterface.createTable('images', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        cloudinar_id: {
            type: DataTypes.STRING,
        }
    }),

    down: queryInterface => queryInterface.dropTable('images')
};

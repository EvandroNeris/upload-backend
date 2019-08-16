module.exports = (sequelize, DataTypes) => {
    const Images = sequelize.define('Images', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        cloudinar_id: DataTypes.STRING,
    });

    return Images;
}

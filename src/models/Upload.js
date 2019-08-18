module.exports = (sequelize, DataTypes) => {
    const Images = sequelize.define('images', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        cloudinar_id: DataTypes.STRING,
    });

    return Images;
}

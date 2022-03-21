import { Model, DataTypes } from 'sequelize';
import db from '.';

class Club extends Model {
  declare id: number;

  declare clubName: string;
  
  static associate(models: any) {
    Club.hasMany(models.Match, { foreignKey: 'id', as: 'matchs' });
  }
}

Club.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  club_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Club',
  tableName: 'clubs',
  timestamps: false,
});

export default Club;

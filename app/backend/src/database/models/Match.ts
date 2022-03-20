import { Model, DataTypes } from 'sequelize';
import db from '.';

class Match extends Model {
  static associate(models: any) {
    this.belongsTo(models.Club, { foreignKey: 'id', as: 'clubs' });
  }
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  home_team: {
    type: DataTypes.INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
        model: 'clubs',
        key: 'id',
    },
    allowNull: false,
  },
  home_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  away_team: {
    type: DataTypes.INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
        model: 'clubs',
        key: 'id',
    },
    allowNull: false,
  },
  away_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  in_progress: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Match',
  tableName: 'matchs',
  timestamps: false,
});

export default Match;

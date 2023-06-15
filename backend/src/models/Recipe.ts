import {
  Table,
  Column,
  DataType,
  Model,
  CreatedAt, UpdatedAt, DeletedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'catalog',
  timestamps: false
})

export class Recipe extends Model {
  @Column({ type: DataType.STRING })
  public name!: string;

  @Column({ type: DataType.STRING })
  public origin!: string;

  @Column({ type: DataType.STRING })
  public description!: string;

  @Column({ type: DataType.INTEGER })
  public difficulty!: number;

  @Column({ type: DataType.STRING })
  public protein!: string;

  @Column({ type: DataType.STRING })
  public produce!: string;

  @Column({ type: DataType.STRING })
  public spice!: string;

  @Column({ type: DataType.STRING })
  public cookingOil!: string;

  @Column({ type: DataType.INTEGER })
  public volume!: number;

  @Column({ type: DataType.INTEGER })
  public serves!: number;

  @Column({ type: DataType.STRING })
  public authenticity!: number;

  @Column({ type: DataType.STRING })
  public stock!: string;
}

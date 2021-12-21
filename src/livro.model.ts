import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Livro extends Model<Livro> {
  static obterUm(id: number) {
    throw new Error('Method not implemented.');
  }
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco: number;
}

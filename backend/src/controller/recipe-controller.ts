import { Controller, Get, Post, QueryParam, Req, Res } from 'routing-controllers';
import { sequelize } from '../models/index.js';
import { Recipe } from '../models/Recipe';
import { Request, Response } from 'express';
import { IRecipe, IResponse, IMessageResponse } from '../types';
import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

@Controller()
export class RecipeController {
  @Get('/recipes')
  async getAll (@Req() request: Request, @Res() response: Response): Promise<Response<IRecipe[]>>{
    const data = await Recipe.findAll();

    return response.status(200).json(data);
  }

  @Post('/recipes')
  async addRecipe (@Req() request: Request, @Res() response: Response): Promise<Response<IMessageResponse>>{
    const { body } = request

    await Recipe.create({ ...body });
    return response.status(200).json({ message: 'Recipe successfully added' });
  }

  @Get('/recipes/search')
  async search (@QueryParam('query', ) query: string, @Res() response: Response): Promise<Response<IRecipe[]>>{

    const data = await Recipe.findAll({
      where: {
        [Op.or]: [
          {
            "name": {
              [Op.like]: `%${query}%`
            }
          },
          {
            "origin": {
              [Op.like]: `%${query}%`
            }
          }
        ]
      }
    });

    return response.status(200).json(data);
  }

  @Get('/recipes/random')
  async getRandom (@Req() request: Request, @Res() response: Response): Promise<Response<IRecipe>>{
    const data = await Recipe.findOne({ order: [Sequelize.fn('RAND')] });

    return response.status(200).json(data);
  }

  @Get('/recipes/number')
  async getCount (@Req() request: Request, @Res() response: IResponse<IMessageResponse>): Promise<IResponse<IMessageResponse>>{
    const data = await Recipe.count();

    return response.status(200).json(data);
  }

  @Get('/recipes/:index')
  async getById (@Req() request: Request, @Res() response: Response): Promise<Response<IRecipe> | IResponse<IMessageResponse>>{
    const { params } = request;
    const data = await Recipe.findByPk(params.index);

    if (!data) {
      return response.status(404).json({ message: 'Recipe not found' });
    }

    return response.status(200).json(data);
  }
}

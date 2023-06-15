import dotenv from 'dotenv';
import express, { RequestHandler } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { useExpressServer } from 'routing-controllers';
import { RecipeController } from './controller/recipe-controller';
import { Sequelize } from "sequelize-typescript";
import { Recipe } from './models/Recipe';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

dotenv.config()

class App {
  private readonly app;

  constructor() {
    this.app = express();
  }

  public async start(): Promise<void> {
    const port = process.env.PORT || 3001;
    const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } = process.env;

    try {
      const sequelize: Sequelize = new Sequelize({
        username: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        models: [Recipe],
        logging: console.log,
        logQueryParameters: true
      });

      await sequelize.sync();

      this.app.use(cors() as RequestHandler);
      this.app.use(bodyParser.json());

      useExpressServer(this.app, {
        controllers: [RecipeController],
        defaultErrorHandler: false
      });

      const swaggerFile = yaml.load(fs.readFileSync(path.resolve(__dirname, './config/openapi.yaml')));

      this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

      this.app.listen(port, () => {
        console.log('Server listening on port: ' + port);
      });

    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

const app = new App();

app.start().catch(() => {
  console.log();
});

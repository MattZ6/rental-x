import { Router } from 'express';

import { adaptRoute } from '@main/adapters/express/express-route-adapter';
import { authenticationMiddleware } from '@main/config/middlewares/authentication';
import { makeCreateCarCategoryController } from '@main/factories/controllers/car/category/CreateCarCategoryControllerFactory';

const carCategoriesRoutes = Router();

carCategoriesRoutes.post(
  '/',
  authenticationMiddleware,
  adaptRoute(makeCreateCarCategoryController())
);

export default carCategoriesRoutes;

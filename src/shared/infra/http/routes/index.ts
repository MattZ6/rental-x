import { Router } from 'express';

import authenticationRoutes from './authentication.routes';
import carsRoutes from './cars.routes';
import categoriesRoutes from './categories.routes';
import profileRoutes from './profile.routes';
import rentsRoutes from './rents.routes';
import specificationRoutes from './specifications.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/v1/categories', categoriesRoutes);
routes.use('/v1/specifications', specificationRoutes);
routes.use('/v1/users', usersRoutes);
routes.use('/v1/authentication', authenticationRoutes);
routes.use('/v1/cars', carsRoutes);
routes.use('/v1/rents', rentsRoutes);
routes.use('/v1/profile', profileRoutes);

export default routes;

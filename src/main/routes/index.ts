import { Router } from 'express';

import authenticationRoutes from './authentication.routes';
import carBrandsRoutes from './car-brand.routes';
import carCategoriesRoutes from './car-category.routes';
import carSpecificationsRoutes from './car-specification.routes';
import profileRoutes from './profile.routes';

const routes = Router();

routes.use('/v1/authentication', authenticationRoutes);
routes.use('/v1/profile', profileRoutes);
routes.use('/v1/brands', carBrandsRoutes);
routes.use('/v1/specifications', carSpecificationsRoutes);
routes.use('/v1/categories', carCategoriesRoutes);

export default routes;

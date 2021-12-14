import { Router } from 'express';

import { AuthenticateUserController } from '@modules/users/usecases/authenticate-user/AuthenticateUserController';
import { RefreshTokenController } from '@modules/users/usecases/refresh-token/RefreshTokenController';

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

routes.post('/sessions', authenticateUserController.handle);
routes.post('/refresh-token', refreshTokenController.handle);

export default routes;

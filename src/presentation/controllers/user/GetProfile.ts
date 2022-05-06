import { UserNotFoundWithProvidedIdError } from '@domain/errors';
import { IGetUserProfileUseCase } from '@domain/usecases/user/GetProfile';

import { ok, notFound } from '@presentation/helpers/http';
import {
  IController,
  IHttpRequest,
  IHttpResponse,
} from '@presentation/protocols';

class GetUserProfileController implements IController {
  constructor(private readonly getUserProfileUseCase: IGetUserProfileUseCase) {}

  async handle(
    request: GetUserProfileController.Request
  ): Promise<GetUserProfileController.Response> {
    try {
      const { id: userId } = request.user;

      const output = await this.getUserProfileUseCase.execute({ id: userId });

      return ok(output);
    } catch (error) {
      if (error instanceof UserNotFoundWithProvidedIdError) {
        return notFound(error);
      }

      throw error;
    }
  }
}

namespace GetUserProfileController {
  export type Request = IHttpRequest<void, void, void, void>;

  export type Response = IHttpResponse;
}

export { GetUserProfileController };

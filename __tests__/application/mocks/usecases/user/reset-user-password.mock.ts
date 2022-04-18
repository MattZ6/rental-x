import { faker } from '@faker-js/faker';

import { IResetUserPasswordUseCase } from '@domain/usecases/user/ResetPassword';

export const resetUserPasswordUseCaseInputMock: IResetUserPasswordUseCase.Input =
  {
    token: faker.datatype.string(),
    new_password: faker.internet.password(),
  };

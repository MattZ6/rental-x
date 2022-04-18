import { ICreateRentUseCase } from '@domain/usecases/rent/Create';

import { rentMock } from '../../../../domain/models/rent.mock';

export class CreateRentUseCaseSpy implements ICreateRentUseCase {
  async execute(
    _: ICreateRentUseCase.Input
  ): Promise<ICreateRentUseCase.Output> {
    return rentMock;
  }
}

import { ICarCategory } from '@domain/entities/CarCategory';

interface ICreateCarCategoryUseCase {
  execute(
    data: ICreateCarCategoryUseCase.Input
  ): Promise<ICreateCarCategoryUseCase.Output>;
}

namespace ICreateCarCategoryUseCase {
  export type Input = {
    name: string;
    description: string;
  };

  export type Output = ICarCategory;
}

export { ICreateCarCategoryUseCase };

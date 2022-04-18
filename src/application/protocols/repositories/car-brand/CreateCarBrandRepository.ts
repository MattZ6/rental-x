import { ICarBrand } from '@domain/entities/CarBrand';

interface ICreateCarBrandRepository {
  create(
    data: ICreateCarBrandRepository.Input
  ): Promise<ICreateCarBrandRepository.Output>;
}

namespace ICreateCarBrandRepository {
  export type Input = {
    name: string;
  };

  export type Output = ICarBrand;
}

export { ICreateCarBrandRepository };

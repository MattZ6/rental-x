import { ICarCategory } from '@domain/models/CarCategory';

import {
  CreateCarCategoryDTO,
  ICheckIfCarCategoryExistsByNameRepository,
  ICreateCarCategoryRepository,
  IFindCarCategoryByIdRepository,
  IUpdateCarCategoryRepository,
} from '@data/protocols/repositories/car-category';

import { carCategoryMock } from '../../domain/models/car-category.mock';

export class CheckIfCarCategoryExistsByNameRepositorySpy
  implements ICheckIfCarCategoryExistsByNameRepository
{
  async checkIfExistsByName(_: string): Promise<boolean> {
    return false;
  }
}

export class CreateCarCategoryRepositorySpy
  implements ICreateCarCategoryRepository
{
  async create(data: CreateCarCategoryDTO): Promise<ICarCategory> {
    const { name, description } = data;

    const category = { ...carCategoryMock };

    Object.assign(category, { name, description });

    return category;
  }
}

export class FindCarCategoryByIdRepositorySpy
  implements IFindCarCategoryByIdRepository
{
  async findById(id: string): Promise<ICarCategory | undefined> {
    const category = { ...carCategoryMock };

    Object.assign(category, { id });

    return category;
  }
}

export class UpdateCarCategoryRepositorySpy
  implements IUpdateCarCategoryRepository
{
  async update(data: ICarCategory): Promise<ICarCategory> {
    return data;
  }
}

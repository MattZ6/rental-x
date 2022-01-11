import { IUser } from '@domain/models/User';

import {
  CreateUserRepositoryData,
  ICheckIfUserExistsByDriverLicenseRepository,
  ICheckIfUserExistsByEmailRepository,
  ICheckIfUserExistsByIdRepository,
  ICreateUserRepository,
  IFindUserByEmailRepository,
  IFindUserByIdRepository,
  IUpdateUserRepository,
} from '@data/protocols/repositories/user';

import { userMock } from '../../domain/models/user.mock';

export class CheckIfUserExistsByEmailRepositorySpy
  implements ICheckIfUserExistsByEmailRepository
{
  async checkIfExistsByEmail(_: string): Promise<boolean> {
    return false;
  }
}

export class CreateUserRepositorySpy implements ICreateUserRepository {
  async create(data: CreateUserRepositoryData): Promise<IUser> {
    const { name, email, password_hash, driver_license } = data;

    const user = { ...userMock };

    Object.assign(user, { name, email, password_hash, driver_license });

    return user;
  }
}

export class FindUserByEmailRepositorySpy
  implements IFindUserByEmailRepository
{
  async findByEmail(email: string): Promise<IUser | undefined> {
    const user = { ...userMock };

    Object.assign(user, { email });

    return user;
  }
}

export class FindUserByIdRepositorySpy implements IFindUserByIdRepository {
  async findById(id: string): Promise<IUser | undefined> {
    const user = { ...userMock };

    Object.assign(user, { id });

    return user;
  }
}

export class UpdateUserRepositorySpy implements IUpdateUserRepository {
  async update(data: IUser): Promise<IUser> {
    return data;
  }
}

export class CheckIfUserExistsByDriverLicenseRepositorySpy
  implements ICheckIfUserExistsByDriverLicenseRepository
{
  async checkIfExistsByDriverLicense(
    _: ICheckIfUserExistsByDriverLicenseRepository.Input
  ): Promise<ICheckIfUserExistsByDriverLicenseRepository.Output> {
    return false;
  }
}

export class CheckIfUserExistsByIdRepositorySpy
  implements ICheckIfUserExistsByIdRepository
{
  async checkIfExistsById(
    _: ICheckIfUserExistsByIdRepository.Input
  ): Promise<boolean> {
    return true;
  }
}

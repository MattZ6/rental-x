import {
  ICheckIfUserExistsByDriverLicenseRepository,
  ICheckIfUserExistsByEmailRepository,
  ICheckIfUserExistsByIdRepository,
  ICreateUserRepository,
  IFindUserByEmailRepository,
  IFindUserByIdRepository,
  IUpdateUserRepository,
} from '@application/protocols/repositories/user';

import { prisma } from '..';

export class PrismaUsersRepostory
  implements
    ICheckIfUserExistsByEmailRepository,
    ICreateUserRepository,
    IFindUserByIdRepository,
    IFindUserByEmailRepository,
    IUpdateUserRepository,
    ICheckIfUserExistsByIdRepository,
    ICheckIfUserExistsByDriverLicenseRepository
{
  async checkIfExistsByEmail(
    data: ICheckIfUserExistsByEmailRepository.Input
  ): Promise<ICheckIfUserExistsByEmailRepository.Output> {
    const { email } = data;

    const count = await prisma.user.count({
      where: {
        email: {
          mode: 'insensitive',
          equals: email,
        },
      },
    });

    return count >= 1;
  }

  async create(
    data: ICreateUserRepository.Input
  ): Promise<ICreateUserRepository.Output> {
    const { name, role, driver_license, email, password_hash } = data;

    const user = await prisma.user.create({
      data: {
        name,
        role,
        driver_license,
        email,
        password_hash,
      },
    });

    return user;
  }

  async findById(
    data: IFindUserByIdRepository.Input
  ): Promise<IFindUserByIdRepository.Output> {
    const { id } = data;

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(
    data: IFindUserByEmailRepository.Input
  ): Promise<IFindUserByEmailRepository.Output> {
    const { email } = data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async update(
    data: IUpdateUserRepository.Input
  ): Promise<IUpdateUserRepository.Output> {
    const { id, name, role, driver_license, email, password_hash } = data;

    const user = await prisma.user.update({
      where: { id },
      data: { name, role, driver_license, email, password_hash },
    });

    return user;
  }

  async checkIfExistsById(
    data: ICheckIfUserExistsByIdRepository.Input
  ): Promise<ICheckIfUserExistsByIdRepository.Output> {
    const { id } = data;

    const count = await prisma.user.count({
      where: { id },
    });

    return count >= 1;
  }

  async checkIfExistsByDriverLicense(
    data: ICheckIfUserExistsByDriverLicenseRepository.Input
  ): Promise<ICheckIfUserExistsByDriverLicenseRepository.Output> {
    const { driver_license } = data;

    const count = await prisma.user.count({
      where: { driver_license },
    });

    return count >= 1;
  }
}

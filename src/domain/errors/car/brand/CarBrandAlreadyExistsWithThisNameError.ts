import { DomainError } from '@domain/errors';

export class CarBrandAlreadyExistsWithThisNameError extends DomainError {
  constructor(
    message = 'There is already a registered car brand with this name.',
    code = 'car.brand.exists'
  ) {
    super(message, code);
  }
}

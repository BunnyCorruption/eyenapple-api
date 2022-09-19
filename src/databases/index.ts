import { EntityManager, EntityRepository, MikroORM, Options } from '@mikro-orm/core';
import { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from '@config';
import { BaseEntity } from '@entities/base.entity';
import { UserEntity } from '@entities/users.entity';
import { env } from 'process';

export const dbOptions: Options = {
  type: 'postgresql',
  clientUrl: `postgresql://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  user: `${DB_USER}`,
  password: `${DB_PASSWORD}`,
  entities: [BaseEntity, UserEntity],
  debug: NODE_ENV === 'development' ? true : false,
};

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  userRepository: EntityRepository<UserEntity>;
};

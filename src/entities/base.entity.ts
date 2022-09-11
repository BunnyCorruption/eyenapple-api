import { PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core';

export abstract class BaseEntity {
  @PrimaryKey()
  _id!: number;

  @SerializedPrimaryKey({ type: 'text' })
  id!: string;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();
}

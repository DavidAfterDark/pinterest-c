import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PinMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Pin {
  readonly id: string;
  readonly image: string;
  readonly title?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Pin, PinMetaData>);
  static copyOf(source: Pin, mutator: (draft: MutableModel<Pin, PinMetaData>) => MutableModel<Pin, PinMetaData> | void): Pin;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly username?: string | null;
  readonly image?: string | null;
  readonly Pins?: (Pin | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
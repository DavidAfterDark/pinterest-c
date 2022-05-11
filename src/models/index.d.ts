import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BoardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PinMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Board {
  readonly id: string;
  readonly name: string;
  readonly userID: string;
  readonly isPrivate?: boolean | null;
  readonly Pins?: (Pin | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Board, BoardMetaData>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board, BoardMetaData>) => MutableModel<Board, BoardMetaData> | void): Board;
}

export declare class Pin {
  readonly id: string;
  readonly title?: string | null;
  readonly image: string;
  readonly boardID: string;
  readonly boardName: string;
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
  readonly interests?: (string | null)[] | null;
  readonly Boards?: (Board | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Board, Pin, User } = initSchema(schema);

export {
  Board,
  Pin,
  User
};
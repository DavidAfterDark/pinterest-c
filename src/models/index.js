// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pin, User } = initSchema(schema);

export {
  Pin,
  User
};
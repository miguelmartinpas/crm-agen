import { ServiceTypeDefs } from './service/serviceSchema';
import ServiceResolvers from './service/serviceResolver';

export const schema = {
  typeDefs: ServiceTypeDefs,
  resolvers: ServiceResolvers,
};
import { IResolvers } from 'graphql-tools';
import ProductsService from '../../services/product.service';

const resolversProductsQuery: IResolvers = {
  Query: {
    async products(_, variables, context) {
      return new ProductsService(_, { pagination: variables }, context).items(variables);
    },
    async product(_, variables, context) {
      return new ProductsService(_, variables, context).details();
    },
    async productId(_, __, context) {
      return new ProductsService(_, __, context).next();
    }
  },
};

export default resolversProductsQuery;
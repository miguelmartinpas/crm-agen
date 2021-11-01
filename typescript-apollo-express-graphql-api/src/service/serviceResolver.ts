import { ApolloError } from "apollo-server-express";

const globalCourses = new Array(10)
    .fill(null)
    .map (( course, index ) => (
        { id: index, title: `Course ${index}`, technology: `technology ${index}`, tag: `TAG${index}` }
    ));

const ServiceResolvers = {
  Query: {
    getCourse: (_: any, args: any) => {
      return globalCourses.find(course => course.tag === args.input.tag);
    },
    getCourses: () => globalCourses,
    getTechnologies: () => globalCourses,
    getAllUsers: async (_: any, args: any) => {
      try {
        const mockUsers = [{ name: "xyz" }, { name: "abc" }];
        return mockUsers;
      } catch (error) {
        if (error instanceof Error) {
            throw new ApolloError(error.message);
        }
        throw error;
      }
    },
  },
};

export default ServiceResolvers;
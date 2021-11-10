import { gql } from 'apollo-server-express';

export const ServiceTypeDefs = gql`
    type User {
        name: String
    }

    type Course {
        id: ID
        title: String
    }

    type Technology {
        id: ID
        technology: String
    }

    type Tag {
        id: ID
        tag: String
    }

    input CourseInput {
        tag: String
    }

    type Query {
        getAllUsers: [User]
        getCourse(input: CourseInput!): Course
        getCourses: [Course]
        getTechnologies: [Technology]
    }
`;

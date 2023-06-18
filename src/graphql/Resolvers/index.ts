import merge from "lodash.merge";
import userResolvers from "./userResolvers";

const resolvers = merge({}, userResolvers);

export default resolvers;

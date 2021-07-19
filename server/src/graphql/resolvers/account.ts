import { mockUsers } from "../../mocks/users"


export default {
  Query: {
    users: (_, args) => {
      return mockUsers
    }
  },

  Mutation: {
    signup: (_, args) => {
      return 'Account created successfully!'
    }
  }
}

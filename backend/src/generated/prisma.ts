import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    olympiads: <T = Olympiad[]>(args: { where?: OlympiadWhereInput, orderBy?: OlympiadOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    schools: <T = School[]>(args: { where?: SchoolWhereInput, orderBy?: SchoolOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tests: <T = Test[]>(args: { where?: TestWhereInput, orderBy?: TestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cities: <T = City[]>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questions: <T = Question[]>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionChoices: <T = QuestionChoice[]>(args: { where?: QuestionChoiceWhereInput, orderBy?: QuestionChoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    olympiad: <T = Olympiad>(args: { where: OlympiadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    school: <T = School>(args: { where: SchoolWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    test: <T = Test>(args: { where: TestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    city: <T = City>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    question: <T = Question>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    questionChoice: <T = QuestionChoice>(args: { where: QuestionChoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    olympiadsConnection: <T = OlympiadConnection>(args: { where?: OlympiadWhereInput, orderBy?: OlympiadOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    schoolsConnection: <T = SchoolConnection>(args: { where?: SchoolWhereInput, orderBy?: SchoolOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    testsConnection: <T = TestConnection>(args: { where?: TestWhereInput, orderBy?: TestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    citiesConnection: <T = CityConnection>(args: { where?: CityWhereInput, orderBy?: CityOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionsConnection: <T = QuestionConnection>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionChoicesConnection: <T = QuestionChoiceConnection>(args: { where?: QuestionChoiceWhereInput, orderBy?: QuestionChoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createOlympiad: <T = Olympiad>(args: { data: OlympiadCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSchool: <T = School>(args: { data: SchoolCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTest: <T = Test>(args: { data: TestCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCity: <T = City>(args: { data: CityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestion: <T = Question>(args: { data: QuestionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestionChoice: <T = QuestionChoice>(args: { data: QuestionChoiceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOlympiad: <T = Olympiad>(args: { data: OlympiadUpdateInput, where: OlympiadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSchool: <T = School>(args: { data: SchoolUpdateInput, where: SchoolWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTest: <T = Test>(args: { data: TestUpdateInput, where: TestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCity: <T = City>(args: { data: CityUpdateInput, where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateQuestion: <T = Question>(args: { data: QuestionUpdateInput, where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateQuestionChoice: <T = QuestionChoice>(args: { data: QuestionChoiceUpdateInput, where: QuestionChoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteOlympiad: <T = Olympiad>(args: { where: OlympiadWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSchool: <T = School>(args: { where: SchoolWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTest: <T = Test>(args: { where: TestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCity: <T = City>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteQuestion: <T = Question>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteQuestionChoice: <T = QuestionChoice>(args: { where: QuestionChoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertOlympiad: <T = Olympiad>(args: { where: OlympiadWhereUniqueInput, create: OlympiadCreateInput, update: OlympiadUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSchool: <T = School>(args: { where: SchoolWhereUniqueInput, create: SchoolCreateInput, update: SchoolUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTest: <T = Test>(args: { where: TestWhereUniqueInput, create: TestCreateInput, update: TestUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCity: <T = City>(args: { where: CityWhereUniqueInput, create: CityCreateInput, update: CityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestion: <T = Question>(args: { where: QuestionWhereUniqueInput, create: QuestionCreateInput, update: QuestionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestionChoice: <T = QuestionChoice>(args: { where: QuestionChoiceWhereUniqueInput, create: QuestionChoiceCreateInput, update: QuestionChoiceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOlympiads: <T = BatchPayload>(args: { data: OlympiadUpdateManyMutationInput, where?: OlympiadWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySchools: <T = BatchPayload>(args: { data: SchoolUpdateManyMutationInput, where?: SchoolWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTests: <T = BatchPayload>(args: { data: TestUpdateManyMutationInput, where?: TestWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCities: <T = BatchPayload>(args: { data: CityUpdateManyMutationInput, where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestions: <T = BatchPayload>(args: { data: QuestionUpdateManyMutationInput, where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestionChoices: <T = BatchPayload>(args: { data: QuestionChoiceUpdateManyMutationInput, where?: QuestionChoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOlympiads: <T = BatchPayload>(args: { where?: OlympiadWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySchools: <T = BatchPayload>(args: { where?: SchoolWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTests: <T = BatchPayload>(args: { where?: TestWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCities: <T = BatchPayload>(args: { where?: CityWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestions: <T = BatchPayload>(args: { where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestionChoices: <T = BatchPayload>(args: { where?: QuestionChoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    olympiad: <T = OlympiadSubscriptionPayload>(args: { where?: OlympiadSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    school: <T = SchoolSubscriptionPayload>(args: { where?: SchoolSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    test: <T = TestSubscriptionPayload>(args: { where?: TestSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    city: <T = CitySubscriptionPayload>(args: { where?: CitySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    question: <T = QuestionSubscriptionPayload>(args: { where?: QuestionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    questionChoice: <T = QuestionChoiceSubscriptionPayload>(args: { where?: QuestionChoiceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Olympiad: (where?: OlympiadWhereInput) => Promise<boolean>
  School: (where?: SchoolWhereInput) => Promise<boolean>
  Test: (where?: TestWhereInput) => Promise<boolean>
  City: (where?: CityWhereInput) => Promise<boolean>
  Question: (where?: QuestionWhereInput) => Promise<boolean>
  QuestionChoice: (where?: QuestionChoiceWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCity {
  count: Int!
}

type AggregateOlympiad {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateQuestionChoice {
  count: Int!
}

type AggregateSchool {
  count: Int!
}

type AggregateTest {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type City implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type CityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  name: String!
}

input CityCreateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
}

"""An edge in a connection."""
type CityEdge {
  """The item at the end of the edge."""
  node: City!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CityWhereInput
}

input CityUpdateDataInput {
  name: String
}

input CityUpdateInput {
  name: String
}

input CityUpdateManyMutationInput {
  name: String
}

input CityUpdateOneRequiredInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
  update: CityUpdateDataInput
  upsert: CityUpsertNestedInput
}

input CityUpsertNestedInput {
  update: CityUpdateDataInput!
  create: CityCreateInput!
}

input CityWhereInput {
  """Logical AND on all given filters."""
  AND: [CityWhereInput!]

  """Logical OR on all given filters."""
  OR: [CityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input CityWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createOlympiad(data: OlympiadCreateInput!): Olympiad!
  createSchool(data: SchoolCreateInput!): School!
  createTest(data: TestCreateInput!): Test!
  createCity(data: CityCreateInput!): City!
  createQuestion(data: QuestionCreateInput!): Question!
  createQuestionChoice(data: QuestionChoiceCreateInput!): QuestionChoice!
  createUser(data: UserCreateInput!): User!
  updateOlympiad(data: OlympiadUpdateInput!, where: OlympiadWhereUniqueInput!): Olympiad
  updateSchool(data: SchoolUpdateInput!, where: SchoolWhereUniqueInput!): School
  updateTest(data: TestUpdateInput!, where: TestWhereUniqueInput!): Test
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateQuestionChoice(data: QuestionChoiceUpdateInput!, where: QuestionChoiceWhereUniqueInput!): QuestionChoice
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteOlympiad(where: OlympiadWhereUniqueInput!): Olympiad
  deleteSchool(where: SchoolWhereUniqueInput!): School
  deleteTest(where: TestWhereUniqueInput!): Test
  deleteCity(where: CityWhereUniqueInput!): City
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteQuestionChoice(where: QuestionChoiceWhereUniqueInput!): QuestionChoice
  deleteUser(where: UserWhereUniqueInput!): User
  upsertOlympiad(where: OlympiadWhereUniqueInput!, create: OlympiadCreateInput!, update: OlympiadUpdateInput!): Olympiad!
  upsertSchool(where: SchoolWhereUniqueInput!, create: SchoolCreateInput!, update: SchoolUpdateInput!): School!
  upsertTest(where: TestWhereUniqueInput!, create: TestCreateInput!, update: TestUpdateInput!): Test!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  upsertQuestionChoice(where: QuestionChoiceWhereUniqueInput!, create: QuestionChoiceCreateInput!, update: QuestionChoiceUpdateInput!): QuestionChoice!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyOlympiads(data: OlympiadUpdateManyMutationInput!, where: OlympiadWhereInput): BatchPayload!
  updateManySchools(data: SchoolUpdateManyMutationInput!, where: SchoolWhereInput): BatchPayload!
  updateManyTests(data: TestUpdateManyMutationInput!, where: TestWhereInput): BatchPayload!
  updateManyCities(data: CityUpdateManyMutationInput!, where: CityWhereInput): BatchPayload!
  updateManyQuestions(data: QuestionUpdateManyMutationInput!, where: QuestionWhereInput): BatchPayload!
  updateManyQuestionChoices(data: QuestionChoiceUpdateManyMutationInput!, where: QuestionChoiceWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyOlympiads(where: OlympiadWhereInput): BatchPayload!
  deleteManySchools(where: SchoolWhereInput): BatchPayload!
  deleteManyTests(where: TestWhereInput): BatchPayload!
  deleteManyCities(where: CityWhereInput): BatchPayload!
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  deleteManyQuestionChoices(where: QuestionChoiceWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Olympiad implements Node {
  id: ID!
  name: String!
  isPublished: Boolean
  year: DateTime!
  createdBy: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type OlympiadConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OlympiadEdge]!
  aggregate: AggregateOlympiad!
}

input OlympiadCreateInput {
  name: String!
  isPublished: Boolean
  year: DateTime!
  createdBy: UserCreateOneInput!
}

"""An edge in a connection."""
type OlympiadEdge {
  """The item at the end of the edge."""
  node: Olympiad!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OlympiadOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  isPublished_ASC
  isPublished_DESC
  year_ASC
  year_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OlympiadPreviousValues {
  id: ID!
  name: String!
  isPublished: Boolean
  year: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OlympiadSubscriptionPayload {
  mutation: MutationType!
  node: Olympiad
  updatedFields: [String!]
  previousValues: OlympiadPreviousValues
}

input OlympiadSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OlympiadSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OlympiadSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OlympiadSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OlympiadWhereInput
}

input OlympiadUpdateInput {
  name: String
  isPublished: Boolean
  year: DateTime
  createdBy: UserUpdateOneRequiredInput
}

input OlympiadUpdateManyMutationInput {
  name: String
  isPublished: Boolean
  year: DateTime
}

input OlympiadWhereInput {
  """Logical AND on all given filters."""
  AND: [OlympiadWhereInput!]

  """Logical OR on all given filters."""
  OR: [OlympiadWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OlympiadWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
  year: DateTime

  """All values that are not equal to given value."""
  year_not: DateTime

  """All values that are contained in given list."""
  year_in: [DateTime!]

  """All values that are not contained in given list."""
  year_not_in: [DateTime!]

  """All values less than the given value."""
  year_lt: DateTime

  """All values less than or equal the given value."""
  year_lte: DateTime

  """All values greater than the given value."""
  year_gt: DateTime

  """All values greater than or equal the given value."""
  year_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdBy: UserWhereInput
}

input OlympiadWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  olympiads(where: OlympiadWhereInput, orderBy: OlympiadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Olympiad]!
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School]!
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test]!
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  questionChoices(where: QuestionChoiceWhereInput, orderBy: QuestionChoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionChoice]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  olympiad(where: OlympiadWhereUniqueInput!): Olympiad
  school(where: SchoolWhereUniqueInput!): School
  test(where: TestWhereUniqueInput!): Test
  city(where: CityWhereUniqueInput!): City
  question(where: QuestionWhereUniqueInput!): Question
  questionChoice(where: QuestionChoiceWhereUniqueInput!): QuestionChoice
  user(where: UserWhereUniqueInput!): User
  olympiadsConnection(where: OlympiadWhereInput, orderBy: OlympiadOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OlympiadConnection!
  schoolsConnection(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolConnection!
  testsConnection(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TestConnection!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  questionChoicesConnection(where: QuestionChoiceWhereInput, orderBy: QuestionChoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionChoiceConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Question implements Node {
  id: ID!
  type: QUESTION_TYPE!
  wording: String!
  imageUrl: String
  secondaryWording: String
  choices(where: QuestionChoiceWhereInput, orderBy: QuestionChoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionChoice!]
}

enum QUESTION_TYPE {
  MULTIPLE_CHOICE
  OPEN_ENDED
}

type QuestionChoice implements Node {
  id: ID!
  text: String!
}

"""A connection to a list of items."""
type QuestionChoiceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionChoiceEdge]!
  aggregate: AggregateQuestionChoice!
}

input QuestionChoiceCreateInput {
  text: String!
}

input QuestionChoiceCreateManyInput {
  create: [QuestionChoiceCreateInput!]
  connect: [QuestionChoiceWhereUniqueInput!]
}

"""An edge in a connection."""
type QuestionChoiceEdge {
  """The item at the end of the edge."""
  node: QuestionChoice!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionChoiceOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionChoicePreviousValues {
  id: ID!
  text: String!
}

type QuestionChoiceSubscriptionPayload {
  mutation: MutationType!
  node: QuestionChoice
  updatedFields: [String!]
  previousValues: QuestionChoicePreviousValues
}

input QuestionChoiceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionChoiceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionChoiceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionChoiceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuestionChoiceWhereInput
}

input QuestionChoiceUpdateDataInput {
  text: String
}

input QuestionChoiceUpdateInput {
  text: String
}

input QuestionChoiceUpdateManyInput {
  create: [QuestionChoiceCreateInput!]
  connect: [QuestionChoiceWhereUniqueInput!]
  disconnect: [QuestionChoiceWhereUniqueInput!]
  delete: [QuestionChoiceWhereUniqueInput!]
  update: [QuestionChoiceUpdateWithWhereUniqueNestedInput!]
  upsert: [QuestionChoiceUpsertWithWhereUniqueNestedInput!]
}

input QuestionChoiceUpdateManyMutationInput {
  text: String
}

input QuestionChoiceUpdateWithWhereUniqueNestedInput {
  where: QuestionChoiceWhereUniqueInput!
  data: QuestionChoiceUpdateDataInput!
}

input QuestionChoiceUpsertWithWhereUniqueNestedInput {
  where: QuestionChoiceWhereUniqueInput!
  update: QuestionChoiceUpdateDataInput!
  create: QuestionChoiceCreateInput!
}

input QuestionChoiceWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionChoiceWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionChoiceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionChoiceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
}

input QuestionChoiceWhereUniqueInput {
  id: ID
}

"""A connection to a list of items."""
type QuestionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionEdge]!
  aggregate: AggregateQuestion!
}

input QuestionCreateInput {
  type: QUESTION_TYPE!
  wording: String!
  imageUrl: String
  secondaryWording: String
  choices: QuestionChoiceCreateManyInput
}

input QuestionCreateManyInput {
  create: [QuestionCreateInput!]
  connect: [QuestionWhereUniqueInput!]
}

"""An edge in a connection."""
type QuestionEdge {
  """The item at the end of the edge."""
  node: Question!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  wording_ASC
  wording_DESC
  imageUrl_ASC
  imageUrl_DESC
  secondaryWording_ASC
  secondaryWording_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionPreviousValues {
  id: ID!
  type: QUESTION_TYPE!
  wording: String!
  imageUrl: String
  secondaryWording: String
}

type QuestionSubscriptionPayload {
  mutation: MutationType!
  node: Question
  updatedFields: [String!]
  previousValues: QuestionPreviousValues
}

input QuestionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuestionWhereInput
}

input QuestionUpdateDataInput {
  type: QUESTION_TYPE
  wording: String
  imageUrl: String
  secondaryWording: String
  choices: QuestionChoiceUpdateManyInput
}

input QuestionUpdateInput {
  type: QUESTION_TYPE
  wording: String
  imageUrl: String
  secondaryWording: String
  choices: QuestionChoiceUpdateManyInput
}

input QuestionUpdateManyInput {
  create: [QuestionCreateInput!]
  connect: [QuestionWhereUniqueInput!]
  disconnect: [QuestionWhereUniqueInput!]
  delete: [QuestionWhereUniqueInput!]
  update: [QuestionUpdateWithWhereUniqueNestedInput!]
  upsert: [QuestionUpsertWithWhereUniqueNestedInput!]
}

input QuestionUpdateManyMutationInput {
  type: QUESTION_TYPE
  wording: String
  imageUrl: String
  secondaryWording: String
}

input QuestionUpdateWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput!
  data: QuestionUpdateDataInput!
}

input QuestionUpsertWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput!
  update: QuestionUpdateDataInput!
  create: QuestionCreateInput!
}

input QuestionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: QUESTION_TYPE

  """All values that are not equal to given value."""
  type_not: QUESTION_TYPE

  """All values that are contained in given list."""
  type_in: [QUESTION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [QUESTION_TYPE!]
  wording: String

  """All values that are not equal to given value."""
  wording_not: String

  """All values that are contained in given list."""
  wording_in: [String!]

  """All values that are not contained in given list."""
  wording_not_in: [String!]

  """All values less than the given value."""
  wording_lt: String

  """All values less than or equal the given value."""
  wording_lte: String

  """All values greater than the given value."""
  wording_gt: String

  """All values greater than or equal the given value."""
  wording_gte: String

  """All values containing the given string."""
  wording_contains: String

  """All values not containing the given string."""
  wording_not_contains: String

  """All values starting with the given string."""
  wording_starts_with: String

  """All values not starting with the given string."""
  wording_not_starts_with: String

  """All values ending with the given string."""
  wording_ends_with: String

  """All values not ending with the given string."""
  wording_not_ends_with: String
  imageUrl: String

  """All values that are not equal to given value."""
  imageUrl_not: String

  """All values that are contained in given list."""
  imageUrl_in: [String!]

  """All values that are not contained in given list."""
  imageUrl_not_in: [String!]

  """All values less than the given value."""
  imageUrl_lt: String

  """All values less than or equal the given value."""
  imageUrl_lte: String

  """All values greater than the given value."""
  imageUrl_gt: String

  """All values greater than or equal the given value."""
  imageUrl_gte: String

  """All values containing the given string."""
  imageUrl_contains: String

  """All values not containing the given string."""
  imageUrl_not_contains: String

  """All values starting with the given string."""
  imageUrl_starts_with: String

  """All values not starting with the given string."""
  imageUrl_not_starts_with: String

  """All values ending with the given string."""
  imageUrl_ends_with: String

  """All values not ending with the given string."""
  imageUrl_not_ends_with: String
  secondaryWording: String

  """All values that are not equal to given value."""
  secondaryWording_not: String

  """All values that are contained in given list."""
  secondaryWording_in: [String!]

  """All values that are not contained in given list."""
  secondaryWording_not_in: [String!]

  """All values less than the given value."""
  secondaryWording_lt: String

  """All values less than or equal the given value."""
  secondaryWording_lte: String

  """All values greater than the given value."""
  secondaryWording_gt: String

  """All values greater than or equal the given value."""
  secondaryWording_gte: String

  """All values containing the given string."""
  secondaryWording_contains: String

  """All values not containing the given string."""
  secondaryWording_not_contains: String

  """All values starting with the given string."""
  secondaryWording_starts_with: String

  """All values not starting with the given string."""
  secondaryWording_not_starts_with: String

  """All values ending with the given string."""
  secondaryWording_ends_with: String

  """All values not ending with the given string."""
  secondaryWording_not_ends_with: String
  choices_every: QuestionChoiceWhereInput
  choices_some: QuestionChoiceWhereInput
  choices_none: QuestionChoiceWhereInput
}

input QuestionWhereUniqueInput {
  id: ID
}

type School implements Node {
  id: ID!
  name: String!
  email: String!
  phone: String
  olympiadCood: User!
  pedagogyCoord: String
  director: String
  city: City!
  address: String
}

"""A connection to a list of items."""
type SchoolConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SchoolEdge]!
  aggregate: AggregateSchool!
}

input SchoolCreateInput {
  name: String!
  email: String!
  phone: String
  pedagogyCoord: String
  director: String
  address: String
  olympiadCood: UserCreateOneInput!
  city: CityCreateOneInput!
}

"""An edge in a connection."""
type SchoolEdge {
  """The item at the end of the edge."""
  node: School!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SchoolOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  pedagogyCoord_ASC
  pedagogyCoord_DESC
  director_ASC
  director_DESC
  address_ASC
  address_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SchoolPreviousValues {
  id: ID!
  name: String!
  email: String!
  phone: String
  pedagogyCoord: String
  director: String
  address: String
}

type SchoolSubscriptionPayload {
  mutation: MutationType!
  node: School
  updatedFields: [String!]
  previousValues: SchoolPreviousValues
}

input SchoolSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SchoolSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SchoolSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SchoolSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SchoolWhereInput
}

input SchoolUpdateInput {
  name: String
  email: String
  phone: String
  pedagogyCoord: String
  director: String
  address: String
  olympiadCood: UserUpdateOneRequiredInput
  city: CityUpdateOneRequiredInput
}

input SchoolUpdateManyMutationInput {
  name: String
  email: String
  phone: String
  pedagogyCoord: String
  director: String
  address: String
}

input SchoolWhereInput {
  """Logical AND on all given filters."""
  AND: [SchoolWhereInput!]

  """Logical OR on all given filters."""
  OR: [SchoolWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SchoolWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  pedagogyCoord: String

  """All values that are not equal to given value."""
  pedagogyCoord_not: String

  """All values that are contained in given list."""
  pedagogyCoord_in: [String!]

  """All values that are not contained in given list."""
  pedagogyCoord_not_in: [String!]

  """All values less than the given value."""
  pedagogyCoord_lt: String

  """All values less than or equal the given value."""
  pedagogyCoord_lte: String

  """All values greater than the given value."""
  pedagogyCoord_gt: String

  """All values greater than or equal the given value."""
  pedagogyCoord_gte: String

  """All values containing the given string."""
  pedagogyCoord_contains: String

  """All values not containing the given string."""
  pedagogyCoord_not_contains: String

  """All values starting with the given string."""
  pedagogyCoord_starts_with: String

  """All values not starting with the given string."""
  pedagogyCoord_not_starts_with: String

  """All values ending with the given string."""
  pedagogyCoord_ends_with: String

  """All values not ending with the given string."""
  pedagogyCoord_not_ends_with: String
  director: String

  """All values that are not equal to given value."""
  director_not: String

  """All values that are contained in given list."""
  director_in: [String!]

  """All values that are not contained in given list."""
  director_not_in: [String!]

  """All values less than the given value."""
  director_lt: String

  """All values less than or equal the given value."""
  director_lte: String

  """All values greater than the given value."""
  director_gt: String

  """All values greater than or equal the given value."""
  director_gte: String

  """All values containing the given string."""
  director_contains: String

  """All values not containing the given string."""
  director_not_contains: String

  """All values starting with the given string."""
  director_starts_with: String

  """All values not starting with the given string."""
  director_not_starts_with: String

  """All values ending with the given string."""
  director_ends_with: String

  """All values not ending with the given string."""
  director_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  olympiadCood: UserWhereInput
  city: CityWhereInput
}

input SchoolWhereUniqueInput {
  id: ID
  email: String
}

type Subscription {
  olympiad(where: OlympiadSubscriptionWhereInput): OlympiadSubscriptionPayload
  school(where: SchoolSubscriptionWhereInput): SchoolSubscriptionPayload
  test(where: TestSubscriptionWhereInput): TestSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  questionChoice(where: QuestionChoiceSubscriptionWhereInput): QuestionChoiceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Test implements Node {
  id: ID!
  title: String!
  description: String
  author: User!
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type TestConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TestEdge]!
  aggregate: AggregateTest!
}

input TestCreateInput {
  title: String!
  description: String
  author: UserCreateOneWithoutTestsInput!
  questions: QuestionCreateManyInput
}

input TestCreateManyWithoutAuthorInput {
  create: [TestCreateWithoutAuthorInput!]
  connect: [TestWhereUniqueInput!]
}

input TestCreateWithoutAuthorInput {
  title: String!
  description: String
  questions: QuestionCreateManyInput
}

"""An edge in a connection."""
type TestEdge {
  """The item at the end of the edge."""
  node: Test!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TestOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TestPreviousValues {
  id: ID!
  title: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TestSubscriptionPayload {
  mutation: MutationType!
  node: Test
  updatedFields: [String!]
  previousValues: TestPreviousValues
}

input TestSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TestSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TestSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TestSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TestWhereInput
}

input TestUpdateInput {
  title: String
  description: String
  author: UserUpdateOneRequiredWithoutTestsInput
  questions: QuestionUpdateManyInput
}

input TestUpdateManyMutationInput {
  title: String
  description: String
}

input TestUpdateManyWithoutAuthorInput {
  create: [TestCreateWithoutAuthorInput!]
  connect: [TestWhereUniqueInput!]
  disconnect: [TestWhereUniqueInput!]
  delete: [TestWhereUniqueInput!]
  update: [TestUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TestUpsertWithWhereUniqueWithoutAuthorInput!]
}

input TestUpdateWithoutAuthorDataInput {
  title: String
  description: String
  questions: QuestionUpdateManyInput
}

input TestUpdateWithWhereUniqueWithoutAuthorInput {
  where: TestWhereUniqueInput!
  data: TestUpdateWithoutAuthorDataInput!
}

input TestUpsertWithWhereUniqueWithoutAuthorInput {
  where: TestWhereUniqueInput!
  update: TestUpdateWithoutAuthorDataInput!
  create: TestCreateWithoutAuthorInput!
}

input TestWhereInput {
  """Logical AND on all given filters."""
  AND: [TestWhereInput!]

  """Logical OR on all given filters."""
  OR: [TestWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TestWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  author: UserWhereInput
  questions_every: QuestionWhereInput
  questions_some: QuestionWhereInput
  questions_none: QuestionWhereInput
}

input TestWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  tests(where: TestWhereInput, orderBy: TestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Test!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  tests: TestCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTestsInput {
  create: UserCreateWithoutTestsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTestsInput {
  email: String!
  password: String!
  name: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  tests: TestUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  tests: TestUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutTestsInput {
  create: UserCreateWithoutTestsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutTestsDataInput
  upsert: UserUpsertWithoutTestsInput
}

input UserUpdateWithoutTestsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutTestsInput {
  update: UserUpdateWithoutTestsDataInput!
  create: UserCreateWithoutTestsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  tests_every: TestWhereInput
  tests_some: TestWhereInput
  tests_none: TestWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type OlympiadOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'year_ASC' |
  'year_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type QUESTION_TYPE =   'MULTIPLE_CHOICE' |
  'OPEN_ENDED'

export type QuestionChoiceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type QuestionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'wording_ASC' |
  'wording_DESC' |
  'imageUrl_ASC' |
  'imageUrl_DESC' |
  'secondaryWording_ASC' |
  'secondaryWording_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SchoolOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'pedagogyCoord_ASC' |
  'pedagogyCoord_DESC' |
  'director_ASC' |
  'director_DESC' |
  'address_ASC' |
  'address_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TestOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface CityCreateInput {
  name: String
}

export interface CityCreateOneInput {
  create?: CityCreateInput
  connect?: CityWhereUniqueInput
}

export interface CitySubscriptionWhereInput {
  AND?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  OR?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  NOT?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CityWhereInput
}

export interface CityUpdateDataInput {
  name?: String
}

export interface CityUpdateInput {
  name?: String
}

export interface CityUpdateManyMutationInput {
  name?: String
}

export interface CityUpdateOneRequiredInput {
  create?: CityCreateInput
  connect?: CityWhereUniqueInput
  update?: CityUpdateDataInput
  upsert?: CityUpsertNestedInput
}

export interface CityUpsertNestedInput {
  update: CityUpdateDataInput
  create: CityCreateInput
}

export interface CityWhereInput {
  AND?: CityWhereInput[] | CityWhereInput
  OR?: CityWhereInput[] | CityWhereInput
  NOT?: CityWhereInput[] | CityWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface CityWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface OlympiadCreateInput {
  name: String
  isPublished?: Boolean
  year: DateTime
  createdBy: UserCreateOneInput
}

export interface OlympiadSubscriptionWhereInput {
  AND?: OlympiadSubscriptionWhereInput[] | OlympiadSubscriptionWhereInput
  OR?: OlympiadSubscriptionWhereInput[] | OlympiadSubscriptionWhereInput
  NOT?: OlympiadSubscriptionWhereInput[] | OlympiadSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OlympiadWhereInput
}

export interface OlympiadUpdateInput {
  name?: String
  isPublished?: Boolean
  year?: DateTime
  createdBy?: UserUpdateOneRequiredInput
}

export interface OlympiadUpdateManyMutationInput {
  name?: String
  isPublished?: Boolean
  year?: DateTime
}

export interface OlympiadWhereInput {
  AND?: OlympiadWhereInput[] | OlympiadWhereInput
  OR?: OlympiadWhereInput[] | OlympiadWhereInput
  NOT?: OlympiadWhereInput[] | OlympiadWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  isPublished?: Boolean
  isPublished_not?: Boolean
  year?: DateTime
  year_not?: DateTime
  year_in?: DateTime[] | DateTime
  year_not_in?: DateTime[] | DateTime
  year_lt?: DateTime
  year_lte?: DateTime
  year_gt?: DateTime
  year_gte?: DateTime
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  createdBy?: UserWhereInput
}

export interface OlympiadWhereUniqueInput {
  id?: ID_Input
}

export interface QuestionChoiceCreateInput {
  text: String
}

export interface QuestionChoiceCreateManyInput {
  create?: QuestionChoiceCreateInput[] | QuestionChoiceCreateInput
  connect?: QuestionChoiceWhereUniqueInput[] | QuestionChoiceWhereUniqueInput
}

export interface QuestionChoiceSubscriptionWhereInput {
  AND?: QuestionChoiceSubscriptionWhereInput[] | QuestionChoiceSubscriptionWhereInput
  OR?: QuestionChoiceSubscriptionWhereInput[] | QuestionChoiceSubscriptionWhereInput
  NOT?: QuestionChoiceSubscriptionWhereInput[] | QuestionChoiceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionChoiceWhereInput
}

export interface QuestionChoiceUpdateDataInput {
  text?: String
}

export interface QuestionChoiceUpdateInput {
  text?: String
}

export interface QuestionChoiceUpdateManyInput {
  create?: QuestionChoiceCreateInput[] | QuestionChoiceCreateInput
  connect?: QuestionChoiceWhereUniqueInput[] | QuestionChoiceWhereUniqueInput
  disconnect?: QuestionChoiceWhereUniqueInput[] | QuestionChoiceWhereUniqueInput
  delete?: QuestionChoiceWhereUniqueInput[] | QuestionChoiceWhereUniqueInput
  update?: QuestionChoiceUpdateWithWhereUniqueNestedInput[] | QuestionChoiceUpdateWithWhereUniqueNestedInput
  upsert?: QuestionChoiceUpsertWithWhereUniqueNestedInput[] | QuestionChoiceUpsertWithWhereUniqueNestedInput
}

export interface QuestionChoiceUpdateManyMutationInput {
  text?: String
}

export interface QuestionChoiceUpdateWithWhereUniqueNestedInput {
  where: QuestionChoiceWhereUniqueInput
  data: QuestionChoiceUpdateDataInput
}

export interface QuestionChoiceUpsertWithWhereUniqueNestedInput {
  where: QuestionChoiceWhereUniqueInput
  update: QuestionChoiceUpdateDataInput
  create: QuestionChoiceCreateInput
}

export interface QuestionChoiceWhereInput {
  AND?: QuestionChoiceWhereInput[] | QuestionChoiceWhereInput
  OR?: QuestionChoiceWhereInput[] | QuestionChoiceWhereInput
  NOT?: QuestionChoiceWhereInput[] | QuestionChoiceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
}

export interface QuestionChoiceWhereUniqueInput {
  id?: ID_Input
}

export interface QuestionCreateInput {
  type: QUESTION_TYPE
  wording: String
  imageUrl?: String
  secondaryWording?: String
  choices?: QuestionChoiceCreateManyInput
}

export interface QuestionCreateManyInput {
  create?: QuestionCreateInput[] | QuestionCreateInput
  connect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
}

export interface QuestionSubscriptionWhereInput {
  AND?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  OR?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  NOT?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionWhereInput
}

export interface QuestionUpdateDataInput {
  type?: QUESTION_TYPE
  wording?: String
  imageUrl?: String
  secondaryWording?: String
  choices?: QuestionChoiceUpdateManyInput
}

export interface QuestionUpdateInput {
  type?: QUESTION_TYPE
  wording?: String
  imageUrl?: String
  secondaryWording?: String
  choices?: QuestionChoiceUpdateManyInput
}

export interface QuestionUpdateManyInput {
  create?: QuestionCreateInput[] | QuestionCreateInput
  connect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  disconnect?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  delete?: QuestionWhereUniqueInput[] | QuestionWhereUniqueInput
  update?: QuestionUpdateWithWhereUniqueNestedInput[] | QuestionUpdateWithWhereUniqueNestedInput
  upsert?: QuestionUpsertWithWhereUniqueNestedInput[] | QuestionUpsertWithWhereUniqueNestedInput
}

export interface QuestionUpdateManyMutationInput {
  type?: QUESTION_TYPE
  wording?: String
  imageUrl?: String
  secondaryWording?: String
}

export interface QuestionUpdateWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput
  data: QuestionUpdateDataInput
}

export interface QuestionUpsertWithWhereUniqueNestedInput {
  where: QuestionWhereUniqueInput
  update: QuestionUpdateDataInput
  create: QuestionCreateInput
}

export interface QuestionWhereInput {
  AND?: QuestionWhereInput[] | QuestionWhereInput
  OR?: QuestionWhereInput[] | QuestionWhereInput
  NOT?: QuestionWhereInput[] | QuestionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: QUESTION_TYPE
  type_not?: QUESTION_TYPE
  type_in?: QUESTION_TYPE[] | QUESTION_TYPE
  type_not_in?: QUESTION_TYPE[] | QUESTION_TYPE
  wording?: String
  wording_not?: String
  wording_in?: String[] | String
  wording_not_in?: String[] | String
  wording_lt?: String
  wording_lte?: String
  wording_gt?: String
  wording_gte?: String
  wording_contains?: String
  wording_not_contains?: String
  wording_starts_with?: String
  wording_not_starts_with?: String
  wording_ends_with?: String
  wording_not_ends_with?: String
  imageUrl?: String
  imageUrl_not?: String
  imageUrl_in?: String[] | String
  imageUrl_not_in?: String[] | String
  imageUrl_lt?: String
  imageUrl_lte?: String
  imageUrl_gt?: String
  imageUrl_gte?: String
  imageUrl_contains?: String
  imageUrl_not_contains?: String
  imageUrl_starts_with?: String
  imageUrl_not_starts_with?: String
  imageUrl_ends_with?: String
  imageUrl_not_ends_with?: String
  secondaryWording?: String
  secondaryWording_not?: String
  secondaryWording_in?: String[] | String
  secondaryWording_not_in?: String[] | String
  secondaryWording_lt?: String
  secondaryWording_lte?: String
  secondaryWording_gt?: String
  secondaryWording_gte?: String
  secondaryWording_contains?: String
  secondaryWording_not_contains?: String
  secondaryWording_starts_with?: String
  secondaryWording_not_starts_with?: String
  secondaryWording_ends_with?: String
  secondaryWording_not_ends_with?: String
  choices_every?: QuestionChoiceWhereInput
  choices_some?: QuestionChoiceWhereInput
  choices_none?: QuestionChoiceWhereInput
}

export interface QuestionWhereUniqueInput {
  id?: ID_Input
}

export interface SchoolCreateInput {
  name: String
  email: String
  phone?: String
  pedagogyCoord?: String
  director?: String
  address?: String
  olympiadCood: UserCreateOneInput
  city: CityCreateOneInput
}

export interface SchoolSubscriptionWhereInput {
  AND?: SchoolSubscriptionWhereInput[] | SchoolSubscriptionWhereInput
  OR?: SchoolSubscriptionWhereInput[] | SchoolSubscriptionWhereInput
  NOT?: SchoolSubscriptionWhereInput[] | SchoolSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SchoolWhereInput
}

export interface SchoolUpdateInput {
  name?: String
  email?: String
  phone?: String
  pedagogyCoord?: String
  director?: String
  address?: String
  olympiadCood?: UserUpdateOneRequiredInput
  city?: CityUpdateOneRequiredInput
}

export interface SchoolUpdateManyMutationInput {
  name?: String
  email?: String
  phone?: String
  pedagogyCoord?: String
  director?: String
  address?: String
}

export interface SchoolWhereInput {
  AND?: SchoolWhereInput[] | SchoolWhereInput
  OR?: SchoolWhereInput[] | SchoolWhereInput
  NOT?: SchoolWhereInput[] | SchoolWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
  pedagogyCoord?: String
  pedagogyCoord_not?: String
  pedagogyCoord_in?: String[] | String
  pedagogyCoord_not_in?: String[] | String
  pedagogyCoord_lt?: String
  pedagogyCoord_lte?: String
  pedagogyCoord_gt?: String
  pedagogyCoord_gte?: String
  pedagogyCoord_contains?: String
  pedagogyCoord_not_contains?: String
  pedagogyCoord_starts_with?: String
  pedagogyCoord_not_starts_with?: String
  pedagogyCoord_ends_with?: String
  pedagogyCoord_not_ends_with?: String
  director?: String
  director_not?: String
  director_in?: String[] | String
  director_not_in?: String[] | String
  director_lt?: String
  director_lte?: String
  director_gt?: String
  director_gte?: String
  director_contains?: String
  director_not_contains?: String
  director_starts_with?: String
  director_not_starts_with?: String
  director_ends_with?: String
  director_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  olympiadCood?: UserWhereInput
  city?: CityWhereInput
}

export interface SchoolWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface TestCreateInput {
  title: String
  description?: String
  author: UserCreateOneWithoutTestsInput
  questions?: QuestionCreateManyInput
}

export interface TestCreateManyWithoutAuthorInput {
  create?: TestCreateWithoutAuthorInput[] | TestCreateWithoutAuthorInput
  connect?: TestWhereUniqueInput[] | TestWhereUniqueInput
}

export interface TestCreateWithoutAuthorInput {
  title: String
  description?: String
  questions?: QuestionCreateManyInput
}

export interface TestSubscriptionWhereInput {
  AND?: TestSubscriptionWhereInput[] | TestSubscriptionWhereInput
  OR?: TestSubscriptionWhereInput[] | TestSubscriptionWhereInput
  NOT?: TestSubscriptionWhereInput[] | TestSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TestWhereInput
}

export interface TestUpdateInput {
  title?: String
  description?: String
  author?: UserUpdateOneRequiredWithoutTestsInput
  questions?: QuestionUpdateManyInput
}

export interface TestUpdateManyMutationInput {
  title?: String
  description?: String
}

export interface TestUpdateManyWithoutAuthorInput {
  create?: TestCreateWithoutAuthorInput[] | TestCreateWithoutAuthorInput
  connect?: TestWhereUniqueInput[] | TestWhereUniqueInput
  disconnect?: TestWhereUniqueInput[] | TestWhereUniqueInput
  delete?: TestWhereUniqueInput[] | TestWhereUniqueInput
  update?: TestUpdateWithWhereUniqueWithoutAuthorInput[] | TestUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: TestUpsertWithWhereUniqueWithoutAuthorInput[] | TestUpsertWithWhereUniqueWithoutAuthorInput
}

export interface TestUpdateWithoutAuthorDataInput {
  title?: String
  description?: String
  questions?: QuestionUpdateManyInput
}

export interface TestUpdateWithWhereUniqueWithoutAuthorInput {
  where: TestWhereUniqueInput
  data: TestUpdateWithoutAuthorDataInput
}

export interface TestUpsertWithWhereUniqueWithoutAuthorInput {
  where: TestWhereUniqueInput
  update: TestUpdateWithoutAuthorDataInput
  create: TestCreateWithoutAuthorInput
}

export interface TestWhereInput {
  AND?: TestWhereInput[] | TestWhereInput
  OR?: TestWhereInput[] | TestWhereInput
  NOT?: TestWhereInput[] | TestWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  author?: UserWhereInput
  questions_every?: QuestionWhereInput
  questions_some?: QuestionWhereInput
  questions_none?: QuestionWhereInput
}

export interface TestWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  tests?: TestCreateManyWithoutAuthorInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutTestsInput {
  create?: UserCreateWithoutTestsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutTestsInput {
  email: String
  password: String
  name: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  name?: String
  tests?: TestUpdateManyWithoutAuthorInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  tests?: TestUpdateManyWithoutAuthorInput
}

export interface UserUpdateManyMutationInput {
  email?: String
  password?: String
  name?: String
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateOneRequiredWithoutTestsInput {
  create?: UserCreateWithoutTestsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutTestsDataInput
  upsert?: UserUpsertWithoutTestsInput
}

export interface UserUpdateWithoutTestsDataInput {
  email?: String
  password?: String
  name?: String
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutTestsInput {
  update: UserUpdateWithoutTestsDataInput
  create: UserCreateWithoutTestsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  tests_every?: TestWhereInput
  tests_some?: TestWhereInput
  tests_none?: TestWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateCity {
  count: Int
}

export interface AggregateOlympiad {
  count: Int
}

export interface AggregateQuestion {
  count: Int
}

export interface AggregateQuestionChoice {
  count: Int
}

export interface AggregateSchool {
  count: Int
}

export interface AggregateTest {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface City extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface CityConnection {
  pageInfo: PageInfo
  edges: CityEdge[]
  aggregate: AggregateCity
}

/*
 * An edge in a connection.

 */
export interface CityEdge {
  node: City
  cursor: String
}

export interface CityPreviousValues {
  id: ID_Output
  name: String
}

export interface CitySubscriptionPayload {
  mutation: MutationType
  node?: City
  updatedFields?: String[]
  previousValues?: CityPreviousValues
}

export interface Olympiad extends Node {
  id: ID_Output
  name: String
  isPublished?: Boolean
  year: DateTime
  createdBy: User
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface OlympiadConnection {
  pageInfo: PageInfo
  edges: OlympiadEdge[]
  aggregate: AggregateOlympiad
}

/*
 * An edge in a connection.

 */
export interface OlympiadEdge {
  node: Olympiad
  cursor: String
}

export interface OlympiadPreviousValues {
  id: ID_Output
  name: String
  isPublished?: Boolean
  year: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

export interface OlympiadSubscriptionPayload {
  mutation: MutationType
  node?: Olympiad
  updatedFields?: String[]
  previousValues?: OlympiadPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface Question extends Node {
  id: ID_Output
  type: QUESTION_TYPE
  wording: String
  imageUrl?: String
  secondaryWording?: String
  choices?: QuestionChoice[]
}

export interface QuestionChoice extends Node {
  id: ID_Output
  text: String
}

/*
 * A connection to a list of items.

 */
export interface QuestionChoiceConnection {
  pageInfo: PageInfo
  edges: QuestionChoiceEdge[]
  aggregate: AggregateQuestionChoice
}

/*
 * An edge in a connection.

 */
export interface QuestionChoiceEdge {
  node: QuestionChoice
  cursor: String
}

export interface QuestionChoicePreviousValues {
  id: ID_Output
  text: String
}

export interface QuestionChoiceSubscriptionPayload {
  mutation: MutationType
  node?: QuestionChoice
  updatedFields?: String[]
  previousValues?: QuestionChoicePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface QuestionConnection {
  pageInfo: PageInfo
  edges: QuestionEdge[]
  aggregate: AggregateQuestion
}

/*
 * An edge in a connection.

 */
export interface QuestionEdge {
  node: Question
  cursor: String
}

export interface QuestionPreviousValues {
  id: ID_Output
  type: QUESTION_TYPE
  wording: String
  imageUrl?: String
  secondaryWording?: String
}

export interface QuestionSubscriptionPayload {
  mutation: MutationType
  node?: Question
  updatedFields?: String[]
  previousValues?: QuestionPreviousValues
}

export interface School extends Node {
  id: ID_Output
  name: String
  email: String
  phone?: String
  olympiadCood: User
  pedagogyCoord?: String
  director?: String
  city: City
  address?: String
}

/*
 * A connection to a list of items.

 */
export interface SchoolConnection {
  pageInfo: PageInfo
  edges: SchoolEdge[]
  aggregate: AggregateSchool
}

/*
 * An edge in a connection.

 */
export interface SchoolEdge {
  node: School
  cursor: String
}

export interface SchoolPreviousValues {
  id: ID_Output
  name: String
  email: String
  phone?: String
  pedagogyCoord?: String
  director?: String
  address?: String
}

export interface SchoolSubscriptionPayload {
  mutation: MutationType
  node?: School
  updatedFields?: String[]
  previousValues?: SchoolPreviousValues
}

export interface Test extends Node {
  id: ID_Output
  title: String
  description?: String
  author: User
  questions?: Question[]
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface TestConnection {
  pageInfo: PageInfo
  edges: TestEdge[]
  aggregate: AggregateTest
}

/*
 * An edge in a connection.

 */
export interface TestEdge {
  node: Test
  cursor: String
}

export interface TestPreviousValues {
  id: ID_Output
  title: String
  description?: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface TestSubscriptionPayload {
  mutation: MutationType
  node?: Test
  updatedFields?: String[]
  previousValues?: TestPreviousValues
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  tests?: Test[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string
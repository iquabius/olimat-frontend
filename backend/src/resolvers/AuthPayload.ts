import { AuthPayloadResolvers } from '../__generated__/resolvers-types';

export const AuthPayload: AuthPayloadResolvers.Resolvers = {
  user: async ({ user: { id } }, args, ctx, info) => {
    return ctx.prisma.user({ id });
  },
};

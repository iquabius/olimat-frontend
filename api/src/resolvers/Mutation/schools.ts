import { MutationResolvers } from '../../__generated__/resolvers-types';
import { getUserId } from '../../utils';

export const schools: MutationResolvers.Resolvers = {
  async createSchool(_, { name, email, phone, pedagogyCoord, director, city, address }, ctx, info) {
    const userId = getUserId(ctx);
    const newSchool = await ctx.prisma.createSchool({
      name,
      email,
      phone,
      olympiadCood: {
        connect: { id: userId },
      },
      pedagogyCoord,
      director,
      city: { connect: { name: city } },
      address,
    });
    return newSchool;
  },

  async deleteSchool(_, { id }, ctx, info) {
    const userId = getUserId(ctx);
    const schoolExists = await ctx.prisma.$exists.school({
      id,
      olympiadCood: { id: userId },
    });
    if (!schoolExists) {
      throw new Error(`School not found or you're not authorized`);
    }

    return ctx.prisma.deleteSchool({ id });
  },
};

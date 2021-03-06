import * as fs from 'fs';
import * as path from 'path';
import mv from 'mv';

import { MutationResolvers } from '@olimat/api/__generated__/resolvers-types';
// Estes tipos são gerados pelo 'prisma generate'
// Talvez não precisamos usá-los diretamente, mas através do 'graphqlgen'
// import { Question, QuestionCreateInput, QuestionUpdateInput } from '../../__generated__/prisma-client';

export const questions: MutationResolvers.Resolvers = {
	async createQuestion(_, { input }, ctx, info) {
		// move image file from tmp to public directory, if there's one
		if (input.imageUrl !== '') {
			const tempFile = path.join(ctx.config.uploads.tempDir, input.imageUrl);
			const destFile = path.join(ctx.config.uploads.publicDir, input.imageUrl);
			mv(tempFile, destFile, (err) => {
				if (err) {
					throw new Error(err);
				}
			});
		}
		const newQuestion = await ctx.prisma.createQuestion({
			...input,
		});
		return {
			question: newQuestion,
		};
	},

	async deleteQuestion(_, { id }, ctx, info) {
		const questionExists = await ctx.prisma.$exists.question({
			id,
		});
		if (!questionExists) {
			throw new Error(`Question not found or you're not authorized`);
		}

		return {
			question: await ctx.prisma.deleteQuestion({ id }),
		};
	},

	async updateQuestion(_, { input: { id, patch } }, ctx, info) {
		console.log('--- updateQuestion Mutation START');
		const oldQuestion = await ctx.prisma.question({ id });
		console.log(
			`DB Image: '${oldQuestion.imageUrl}' | Patch Image: '${patch.imageUrl}'`,
		);
		const updatedQuestion = await ctx.prisma.updateQuestion({
			data: {
				...patch,
			},
			where: {
				id,
			},
		});

		if (patch.imageUrl && !oldQuestion.imageUrl) {
			// A questão não tinha imagem, mas o usuário fez o upload de uma.
			// Move new image to public directory
			const newFile = path.join(ctx.config.uploads.tempDir, patch.imageUrl);
			const destNewFile = path.join(
				ctx.config.uploads.publicDir,
				patch.imageUrl,
			);
			// Maybe we don't need 'mv' package.
			// https://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback
			mv(newFile, destNewFile, (err) => {
				console.log(`File moved from "${newFile}" to "${destNewFile}"`);
				if (err) {
					console.error(
						'There was an error moving the uploaded image from temp to public directory.',
					);
					throw new Error(err);
				}
			});
		} else if (!patch.imageUrl && oldQuestion.imageUrl) {
			// A questão tinha uma imagem, que está sendo removida
			const oldFile = path.join(
				ctx.config.uploads.publicDir,
				oldQuestion.imageUrl,
			);
			fs.unlink(oldFile, (err) => {
				if (err) {
					throw err;
				}
				console.log('Old image existed, and it was deleted.');
			});
		} else if (patch.imageUrl && oldQuestion.imageUrl) {
			// A questão tinha uma imagem, e continua tendo (talvez o usuário trocou?)
		} else if (!patch.imageUrl && !oldQuestion.imageUrl) {
			// A questão não tinha imagem e continua não tendo (nada a fazer?)
		}
		console.log('--- updateQuestion Mutation END');
		return {
			question: updatedQuestion,
		};
	},
};

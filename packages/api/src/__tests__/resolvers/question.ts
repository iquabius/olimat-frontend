import { Question } from '@olimat/api/__generated__/prisma-client';
import resolvers from '@olimat/api/resolvers';

// eslint-disable-next-line import/order
import mockContext from './__utils/mockContext';

const mockQuestion: Question = {
	id: 'tId1',
	type: 'OPEN_ENDED',
	wording: 'Maria comprou 10 maças...',
};

describe('[Question.choices]', () => {
	test('uses question id from parent to lookup choices', async () => {
		const mockChoices = [{ id: 'cId1' }];
		// o prisma client usa métodos encadeados pra buscar relações
		// @ts-ignore
		mockContext.prisma.question.mockReturnValueOnce({
			choices: () => mockChoices,
		});

		const res = await resolvers.Question.choices(
			mockQuestion,
			null,
			mockContext,
			null,
		);
		expect(res).toEqual(mockChoices);

		expect(mockContext.prisma.question).toBeCalledWith({ id: mockQuestion.id });
	});
});

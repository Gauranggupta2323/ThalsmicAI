// src/ai/flows/personalized-onboarding.ts
'use server';

/**
 * @fileOverview A personalized onboarding AI agent.
 *
 * - getPersonalizedOnboarding - A function that handles the personalized onboarding process.
 * - PersonalizedOnboardingInput - The input type for the getPersonalizedOnboarding function.
 * - PersonalizedOnboardingOutput - The return type for the getPersonalizedOnboarding function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedOnboardingInputSchema = z.object({
  role: z.enum(['patient', 'donor', 'provider']).describe('The role of the user.'),
});
export type PersonalizedOnboardingInput = z.infer<
  typeof PersonalizedOnboardingInputSchema
>;

const PersonalizedOnboardingOutputSchema = z.object({
  onboardingMessage: z
    .string()
    .describe('Personalized onboarding message for the user.'),
});
export type PersonalizedOnboardingOutput = z.infer<
  typeof PersonalizedOnboardingOutputSchema
>;

export async function getPersonalizedOnboarding(
  input: PersonalizedOnboardingInput
): Promise<PersonalizedOnboardingOutput> {
  return personalizedOnboardingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedOnboardingPrompt',
  input: {schema: PersonalizedOnboardingInputSchema},
  output: {schema: PersonalizedOnboardingOutputSchema},
  prompt: `You are a helpful assistant that provides personalized onboarding information based on the user's role in the ThalAI Bridge Lite application.

  Based on the user's role, provide a brief onboarding message that highlights the key features and benefits of the app relevant to their role.  Keep the message concise and easy to understand.

  The user's role is: {{{role}}}
  `,
});

const personalizedOnboardingFlow = ai.defineFlow(
  {
    name: 'personalizedOnboardingFlow',
    inputSchema: PersonalizedOnboardingInputSchema,
    outputSchema: PersonalizedOnboardingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

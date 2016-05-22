import { Survey } from './survey';

export const SURVEYS: Survey[] = [{
    id: 1,
    title: 'Who We Are',
    author: 'Matt Robbins',
    description: 'A survey about you, your life, and your family. The questions were taken from the book "Who We Are: Questions to Celebrate Your Family" by Paul Lowrie and Bret Nicholaus.',
    questions: [
      'What big events were happening in the world the year you were born? Who was president?',
      'What are your three favorite childhood memories?'
    ]
  }, {
    id: 2,
    title: 'Favorites',
    author: 'Adam Ant',
    description: 'Tell some of your favorite things.',
    questions: [
      'What is your favoriate color?',
      'What is your favorite movie?',
      'What is your favorite?'
    ]
  }
];

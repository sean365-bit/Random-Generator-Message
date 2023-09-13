'use strict';

const quotes = [
  'Be yourself; everyone else is already taken. -Oscar Wilde',
  'Without music, life would be a mistake. -Friedrich Nietzsche',
  'Somewhere, something incredible is waiting to be known. -Carl Sagan',
  'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. -Helen Keller',
  'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. -Thomas A. Edison',
  'Be the change that you wish to see in the world. -Mahatma Gandhi',
  'Doubt kills more dreams than failure ever will. –Suzy Kassem',
  'Folks are usually about as happy as they make up their minds to be. – Abraham Lincoln',
  'It is during our darkest moments that we must focus to see the light. — Aristotle',
  'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” -Dale Carnegie',
  'The best way to get started is to quit talking and begin doing. ― Walt Disney',
  'Leaders set high standards. Refuse to tolerate mediocrity or poor performance. – Brian Tracy',
];

function newQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[index];
  // return index;
}

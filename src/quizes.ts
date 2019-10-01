export interface Question {
  text: string;
  answer: number;
  answerOptions: string[];
  description?: string;
  value: Auth0Value;
}

export interface Quiz {
  title: string;
  questions: Question[];
}

interface Auth0Value {
  label: string;
  icon: string;
}

type Values = 'giveAShit' | 'nPlus1' | 'oneTeam';

// Question 1:
// Another team is reaching out requesting your insight on a particular problem they are working on, What would be the Auth0 way of assisting?
// A). Laugh at them.
// B). Point and laugh at them.
// C). Contribute beyond your own area of responsibility when you can.
// D). Leave the room, pointing and laughing.
// Question 2:
// What should be valued higher?
// A). The team failing miserably at completing a task
// B). Achieving individual success at the expense of teammates
// C). Individual accomplishments
// D). Team Success outweighing Individual accomplishments, with both being celebrated.
// One team one score

// Question 3:
// An engineer is discussing improving the process for an implementation he is working on and decides to raise this with his coworkers, what is the most effective way to work through this?
// A). Announce to teammates that they will take care of absolutely everything and not to worry.
// B). Constructively approach questioning the status quo, working collaboratively with teammates to gain insights and document and seek approval for any improvements along the way
// C). Yell aggressively about all the issues with the process, shaking a fist in the air and taking care not to ever attempt to think of potential solutions to the problem at hand
// D). Throw your hands in the air, scream your lungs out and curl up in a ball on the floor crying.

// Its your first day, you are logging into confluence for the first time and you incorrectly setup your personal space, what should your approach be to resolve your issue?
// A). Reach out to your teammates and ask if they are able to assist you. If you’re not making mistakes you are not making progress, N + 1 > N.
// B). Move your personal space to the front page of Confluence for everyone to see
// C). Throw your computer out the window, curl up in a ball on the floor and start crying.
// D). Uninstall Confluence from the internet.

export const auth0Values: Record<Values, Auth0Value> = {
  giveAShit: {
    label: 'We Give a Shit',
    icon:
      'https://api.media.atlassian.com/file/ec3a828e-5e91-4691-97cd-1dd4f8b386c3/image?mode=full-fit&client=077a8a9b-de53-46c4-be67-6d1d4ddde489&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwNzdhOGE5Yi1kZTUzLTQ2YzQtYmU2Ny02ZDFkNGRkZGU0ODkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOmVjM2E4MjhlLTVlOTEtNDY5MS05N2NkLTFkZDRmOGIzODZjMyI6WyJyZWFkIl19LCJleHAiOjE1Njk5NTM3MDQsIm5iZiI6MTU2OTk1MDM0NH0.jsREQVpQBrfIDJxoElbWq6kL6sHdYGytzKG43vgACck',
  },
  nPlus1: {
    label: 'N + 1 > N',
    icon:
      'https://api.media.atlassian.com/file/79ef679d-10ef-4fcc-9483-604452926fae/image?mode=full-fit&client=077a8a9b-de53-46c4-be67-6d1d4ddde489&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwNzdhOGE5Yi1kZTUzLTQ2YzQtYmU2Ny02ZDFkNGRkZGU0ODkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjc5ZWY2NzlkLTEwZWYtNGZjYy05NDgzLTYwNDQ1MjkyNmZhZSI6WyJyZWFkIl19LCJleHAiOjE1Njk5NTM3NTEsIm5iZiI6MTU2OTk1MDM5MX0.5v0xVYtqau6ZgFU4DJFlcOvnzhH3fwAar8Hhp-TAg30',
  },
  oneTeam: {
    label: 'One Team, One Score',
    icon:
      'https://api.media.atlassian.com/file/162ce290-fd06-4d08-85f5-961b5f9d0809/image?mode=full-fit&client=077a8a9b-de53-46c4-be67-6d1d4ddde489&token=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwNzdhOGE5Yi1kZTUzLTQ2YzQtYmU2Ny02ZDFkNGRkZGU0ODkiLCJhY2Nlc3MiOnsidXJuOmZpbGVzdG9yZTpmaWxlOjE2MmNlMjkwLWZkMDYtNGQwOC04NWY1LTk2MWI1ZjlkMDgwOSI6WyJyZWFkIl19LCJleHAiOjE1Njk5NTM4NDIsIm5iZiI6MTU2OTk1MDQ4Mn0.DEJqGtxpLYYoP5fecAvkrs2jRfdACWsrr9hvdNSabqo',
  },
};

export const auth0ValuesQuiz: Quiz = {
  title: 'Auth0 Values',
  questions: [
    {
      answer: 2,
      answerOptions: [
        'Laugh at them.',
        'Point and laugh at them.',
        'Contribute beyond your own area of responsibility when you can.',
        'Leave the room, pointing and laughing.',
      ],
      text:
        'Another team is reaching out requesting your insight on a particular problem they are working on, What would be the Auth0 way of assisting?',
      value: auth0Values.oneTeam,
    },
    {
      answer: 1,
      answerOptions: [
        'Announce to teammates that they will take care of absolutely everything and not to worry.',
        'Constructively approach questioning the status quo, working collaboratively with teammates to gain insights and document and seek approval for any improvements along the way.',
        'Yell aggressively about all the issues with the process, shaking a fist in the air and taking care not to ever attempt to think of potential solutions to the problem at hand',
        'Throw your hands in the air, scream your lungs out and curl up in a ball on the floor crying.',
      ],
      text:
        'An engineer is discussing improving the process for an implementation he is working on and decides to raise this with his coworkers, what is the most effective way to work through this?',
      value: auth0Values.nPlus1,
    },
    {
      answer: 3,
      answerOptions: [
        'The team failing miserably at completing a task',
        'Achieving individual success at the expense of teammates',
        'Individual accomplishments',
        'Team Success outweighing Individual accomplishments, with both being celebrated.',
      ],
      text: 'What should be valued higher?',
      value: auth0Values.oneTeam,
    },
    {
      answer: 0,
      answerOptions: [
        'Reach out to your teammates and ask if they are able to assist you. If you’re not making mistakes you are not making progress, N + 1 > N.',
        'Move your personal space to the front page of Confluence for everyone to see',
        'Throw your computer out the window, curl up in a ball on the floor and start crying.',
        'Uninstall Confluence from the internet.',
      ],
      text:
        'Its your first day, you are logging into confluence for the first time and you incorrectly setup your personal space, what should your approach be to resolve your issue?',
      value: auth0Values.nPlus1,
    },
  ],
};

export const allQuizes: Quiz[] = [auth0ValuesQuiz];

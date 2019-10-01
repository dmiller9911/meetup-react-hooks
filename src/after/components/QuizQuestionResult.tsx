import { Button } from '@auth0/cosmos';
import React from 'react';
import { Card, CardActions } from '../../common/components/Card';
import { Text } from '../../common/components/Text';
import { styled } from '../../common/styles/styled';
import { Question } from '../../quizes';

export interface QuizQuestionResultProps {
  currentQuestion: Question;
  selectedAnswerIndex: number;
  hasNexQuestion: boolean;
  onNextQuestion(): void;
  onExit(): void;
  onTryAgain(): void;
}

const Title = styled(Text).attrs({
  align: 'center',
  mb: 1,
  size: 2,
})<{ isCorrect: boolean }>`
  color: ${props =>
    props.isCorrect ? props.theme.success : props.theme.failure};
`;

const ValueIcon = styled.img`
  height: 100px;
  width: 100px;
  display: block;
  margin-bottom: 10px;
  margin: 0 auto 10px auto;
`;

const ValueTitle = styled.h1`
  text-align: center;
  font-size: 32px;
`;

const wrongAnswerResponses = [
  'WRONG!',
  'Really?',
  'What were you thinking?!',
  'NOPE',
  'Try again please...',
  'An HR meeting has been schedule for you, that’s really incorrect.',
  'Ummmmm, that’s incorrect',
  'Whoa, that might be a bit extreme, also incorrect.',
  'Not quite…… Seriously, try again',
];

function getRandomWrongAnswerResponse() {
  const maxIndex = wrongAnswerResponses.length - 1;
  return wrongAnswerResponses[Math.floor(Math.random() * (maxIndex - 0 + 1))];
}

export const QuizQuestionResult: React.SFC<QuizQuestionResultProps> = ({
  currentQuestion,
  selectedAnswerIndex,
  onNextQuestion,
  hasNexQuestion,
  onExit,
  onTryAgain,
}) => {
  const isCorrect = currentQuestion.answer === selectedAnswerIndex;
  // const correctAnswer = currentQuestion.answerOptions[currentQuestion.answer];

  return (
    <Card>
      <Title isCorrect={isCorrect}>
        {isCorrect ? 'Correct!' : 'Incorrect'}
      </Title>
      <ValueIcon src={currentQuestion.value.icon} />
      <ValueTitle>{currentQuestion.value.label}</ValueTitle>
      {!isCorrect && (
        <Text as="div" align="center" mb={1}>
          <Text mb={1 / 2}>{getRandomWrongAnswerResponse()}</Text>
        </Text>
      )}
      {Boolean(currentQuestion.description) && (
        <Text color="secondary" align="center" mb={1}>
          {currentQuestion.description}
        </Text>
      )}
      <CardActions>
        <Button onClick={onExit}>Exit Quiz</Button>
        {isCorrect ? (
          hasNexQuestion && (
            <Button onClick={onNextQuestion} appearance="cta">
              Next Question
            </Button>
          )
        ) : (
          <Button onClick={onTryAgain} appearance="cta">
            Try Again
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

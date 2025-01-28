export const calculateCorrectAnswers = (dataResult) => {
  return dataResult.reduce((acc, item) => {
    if (item.answer === item.correctAnswer) acc++;
    return acc;
  }, 0);
};

export const calculateTotalQuestions = (dataResult) => {
  return dataResult.length;
};

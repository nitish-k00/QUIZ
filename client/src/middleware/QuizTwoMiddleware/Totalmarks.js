const marks = (answers, response) => {
  let total_marks = 0;
  Object.values(answers).forEach((answer) => {
    if (answer?.is_correct) {
      total_marks += Number(response.correct_answer_marks);
    } else {
      total_marks -= Number(response.negative_marks);
    }
  });

  return total_marks;
};

export default marks;

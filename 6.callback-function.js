//Callback function - A callback function is a function that is passed as an argument to another function.
// I will callback later.

function sum(a, b, cb) {
  const total = a + b;
  cb(total);
}

function callBackSum(something) {
  console.log(something);
}
sum(10, 10, callBackSum);

//real life example:

function getQuizMark(mark, cb) {
  setTimeout(() => {
    console.log("Quiz mark fetched!");
    cb(mark);
  }, 1000);
}

function getContestMark(mark, cb) {
  setTimeout(() => {
    console.log("Contest mark fetched");
    cb(mark);
  }, 2000);
}
function getInterviewMark(mark, cb) {
  setTimeout(() => {
    console.log("Interview mark fetched");
    cb(mark);
  }, 3000);
}

function totalMark(quizMark, contestMark, interviewMark) {
  const total = quizMark + contestMark + interviewMark;
  console.log(total);
}

getQuizMark(10, (quizMark) => {
  getContestMark(415, (contestMark) => {
    getInterviewMark(100, (interviewMark) => {
      totalMark(quizMark, contestMark, interviewMark);
    });
  });
});

import axios from "axios";

export async function getAllQuestions(courseId) {
  const res = await axios.get(
    `http://localhost:8080/questions/all?courseId=${courseId}`
  );
  return res.data;
}

export async function saveQuestion(appUserId, courseId, questionText) {
  const params = encodeURIComponent(questionText);
  const res = await axios.post(
    `http://localhost:8080/questions/add?appUserId=${appUserId}&courseId=${courseId}&questionText=${params}`
  );
  return res;
}

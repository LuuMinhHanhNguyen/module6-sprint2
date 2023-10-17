import axios from "axios";

export async function getAllCourse() {
  const res = await axios.get("http://localhost:8080/courses");
  return res.data;
}

export async function findCourse(courseId) {
  const res = await axios.get(
    `http://localhost:8080/courses/details?courseId=${courseId}`
  );
  return res.data;
}

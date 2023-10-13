import axios from "axios";

export async function getAllCourse() {
  const res = await axios.get("http://localhost:8080/courses");
  return res.data;
}

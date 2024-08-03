export default function createTask(data: any) {
  return fetch("/api/create-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

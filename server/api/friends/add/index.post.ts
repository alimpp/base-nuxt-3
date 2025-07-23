export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response = await $fetch(`http://localhost:4000/friends/add`, {
    method: "POST",
    headers: headers,
    body: body,
  });
  return response;
});

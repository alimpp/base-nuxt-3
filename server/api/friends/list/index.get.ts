export default defineEventHandler(async (event) => {
  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response: any = await $fetch(`http://localhost:4000/friends/list`, {
    method: "GET",
    headers: headers,
  });
  return response;
});

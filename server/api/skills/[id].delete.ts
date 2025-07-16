export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response = await $fetch(`http://localhost:4000/skill/${id}`, {
    method: "DELETE",
    headers: headers,
  });
  return response;
});

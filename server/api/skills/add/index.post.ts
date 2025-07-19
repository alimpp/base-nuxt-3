export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const body = await readBody(event);

  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response = await $fetch(`${baseUrl}/skill/add`, {
    method: "POST",
    body: body,
    headers: headers,
  });

  return response;
});

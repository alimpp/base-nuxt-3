export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const token = getCookie(event, "token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const response: any = await $fetch(`${baseUrl}/skill/list`, {
    method: "GET",
    headers: headers,
  });
  return response;
});

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const body = await readBody(event);

  const response = await $fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    body: body,
  });

  return response;
});

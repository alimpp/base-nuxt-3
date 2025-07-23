import { useCustomServerRequest } from "~/server/utils/useCustomServerRequest";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const body = await readBody(event);

  const response = await useCustomServerRequest(event,`${baseUrl}/auth/login`, {
    method: "POST",
    body: body,
  });

  return response;
});

import { useCustomServerRequest } from "~/server/request/useCustomServerRequest";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const body = await readBody(event);

  const response = await useCustomServerRequest(event,`${baseUrl}/request/send`, {
    method: "POST",
    body: body,
  });
  return response;
});

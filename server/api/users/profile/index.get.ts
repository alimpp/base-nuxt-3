import { useCustomServerRequest } from "~/server/request/useCustomServerRequest";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const response: any = await useCustomServerRequest(event,`${baseUrl}/users/profile`, {
    method: "GET",
  });
  return response;
});

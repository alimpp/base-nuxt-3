import { useCustomServerRequest } from "~/server/utils/useCustomServerRequest";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const response: any = await useCustomServerRequest(event,`${baseUrl}/request/list`, {
    method: "GET",
  });
  return response;
});

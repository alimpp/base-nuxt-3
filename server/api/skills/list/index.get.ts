import { useCustomServerRequest } from "~/server/utils/useCustomServerRequest";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  return await useCustomServerRequest(event, `${baseUrl}/skill/list`, {
    method: "GET"
  });
});
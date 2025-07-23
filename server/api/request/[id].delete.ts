import { useCustomServerRequest } from "~/server/utils/useCustomServerRequest";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const id = getRouterParam(event, "id");

  const response = await useCustomServerRequest(event,`${baseUrl}/request/${id}`, {
    method: "DELETE",
  });

  return response;
});

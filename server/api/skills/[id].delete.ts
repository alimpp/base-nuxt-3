import { useCustomServerRequest } from "~/server/request/useCustomServerRequest";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;

  const id = getRouterParam(event, "id");
  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response = await useCustomServerRequest(event, `${baseUrl}/skill/${id}`, {
    method: "DELETE",
  });
  return response;
});

import { useCustomServerRequest } from "~/server/utils/useCustomServerRequest";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.baseUrl;

    const body = await readBody(event);
  
    const response = await useCustomServerRequest(event,`${baseUrl}/users/update`, {
      method: "PATCH",
      body: body,
    });
  
    return response;
  });
  
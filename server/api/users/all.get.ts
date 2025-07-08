export default defineEventHandler(async (event) => {
  const response = await $fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "GET",
  });
  return response;
})
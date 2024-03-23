export default defineEventHandler(async (event) => {
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const token = getCookie(event, "token");
  const query = getQuery(event);
  try {
    console.log(apiBase + query.url , 'dasdasdasdasddddd');
    const data = await $fetch(apiBase + query.url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ` + token,
      },
      method:"delete"
    });
    return data;
  } catch (error) {
    return error;
  }
});

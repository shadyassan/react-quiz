export async function handleResponse(response) {
  return response.data;
}

export function handleError(error) {
  if (error.response) {
    const { data } = error.response;
    console.error(data);
  } else if (error.request) {
    console.error(error.request);
  } else {
    console.error(error.message);
  }
  console.error(error.config);
  console.error(error.toJSON());
}

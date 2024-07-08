function handleResponseFromAPI(promise) {
  const state = { status: 200, body: 'success' }; 
  return promise
    .then(() => state)
    .catch((err) => err)
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;

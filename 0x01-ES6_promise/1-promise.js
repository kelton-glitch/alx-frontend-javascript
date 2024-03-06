export default function getFullResponseFromAPI (success) {
  return new Promise((resolve, reject) => {
    // Simulating an API request with setTimeout
    setTimeout(() => {
      if (success) {
        // Resolve the promise with a success response
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 1000);
  });
}

export default function getResponsefromAPI () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { data: 'Response from API' };
      resolve(response);
    }, 1000);
  });
}

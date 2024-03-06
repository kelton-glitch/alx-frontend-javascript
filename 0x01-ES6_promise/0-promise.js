export default function getResponsefromAPI () {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = { data: 'true' };
      resolve(response);
    }, 1000);
  });
}

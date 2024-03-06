export default function getResponsefromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {data: 'true'};
      resolve(response);
    }, 1000);
  });
}

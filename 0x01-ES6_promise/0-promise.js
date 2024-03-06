/**
 * @return {value} which represents the output of the data
 */
export default function getResponsefromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {data: 'true'};
      resolve(response);
    }, 1000);
  });
}

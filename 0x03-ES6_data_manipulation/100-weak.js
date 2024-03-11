export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  }

  const queries = weakMap.get(endpoint);
  if (queries >= 5) {
    throw new Error('Endpoint load is high');
  }
}
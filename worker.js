/* eslint-disable no-restricted-globals */
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  let path = url.pathname === "/" ? "/index.html" : url.pathname;
  const asset = await fetch(`https://your-domain.com${path}`);
  return asset;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // First attempt: fetch the exact asset from ASSETS binding
    let response = await env.ASSETS.fetch(request);
    
    // If not found and pathname doesn't have a file extension, try appending .html (e.g. /contact -> /contact.html)
    if (response.status === 404 && !url.pathname.includes('.')) {
      const cleanPath = url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname;
      const htmlUrl = new URL(`${cleanPath}.html`, request.url);
      const htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl, request));
      if (htmlResponse.status !== 404) {
        return htmlResponse;
      }
    }
    
    return response;
  }
};


export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.pathname = url.pathname.replace(/\/$/, '/index.html');
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};


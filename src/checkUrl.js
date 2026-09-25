async function checkUrl(url) {
  const { default: fetch } = await import('node-fetch');
  const res = await fetch(url);
  return { ok: res.ok, status: res.status };
}

module.exports = { checkUrl };

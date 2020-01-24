const getData = async url => {
  let token = process.env.GATSBY_GITHUB_TOKEN;
  const response = await fetch(url, {
    headers: { Authorization: "token " + token },
  });
  return response.json();
};

export { getData };
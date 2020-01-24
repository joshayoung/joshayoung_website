const getData = async url => {
  let token = process.env.GATSBY_GITHUB_TOKEN;
  const response = await fetch(url, {
    headers: { Authorization: "token " + token },
  });
  return response.json();
};

const tags = data => {
  let allTags = [];
  data.forEach(tag => {
    allTags.push({ name: tag.name, url: tag.tags_url });
  });
let tagsUrl = [];
allTags.forEach(tag => {
    tagsUrl.push(getData(tag.url));
});
  return tagsUrl;
};

const archivedRepos = (tagsUrl) => {
    return Promise.all(tagsUrl).then(all => {
    let archived = [];
    all.forEach(t => {
    archived.push(t);
    });
    return archived.filter(a => a.length !== 0);
    });
}

const repoName = name => {
  return name.zipball_url.split("/")[5];
};

const archivedTags = data => {
  let archived = [];
  data.forEach(tg => {
    let repo = tg.filter(value => value.name === "archived");
    if (repo.length > 0) {
      archived.push(repoName(repo[0]));
    }
  });
  return archived;
};

const REPO_URL = 'https://api.github.com/users/joshayoung/repos';

export { tags, archivedRepos, getData, archivedTags, REPO_URL };
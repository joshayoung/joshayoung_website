const REPO_URL = 'https://api.github.com/users/joshayoung/repos';

const top = function(data) {
  if (!Array.isArray(data)) { return []; }

  let all = []
  data.forEach((repo, value) => {
    all.push({
      name: repo.name,
      url: "<a href='" + repo.html_url + "'>" + repo.name + "</a>",
      raw_url: repo.url,
      updated: repo.updated_at,
      language: repo.language,
      created_at: repo.created_at.split("T")[0],
    })
  })
  all.sort(function(a, b) {
    return new Date(b.updated) - new Date(a.updated)
  })
  return all.slice(0, 3)
}

const getData = async url => {
  let t = process.env.GATSBY_BLA;
  const response = await fetch(url, {
    headers: { Authorization: "token " + t },
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

const featureCompleteRepos = (tagsUrl) => {
    return Promise.all(tagsUrl).then(all => {
    let archived = [];
    all.forEach(t => {
    archived.push(t);
    });
    return archived.filter(a => a.length !== 0);
    });
}

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

const completedTags = data => {
  let archived = [];
  data.forEach(tg => {
    let repo = tg.filter(value => value.name === "feature-complete");
    if (repo.length > 0) {
      archived.push(repoName(repo[0]));
    }
  });
  return archived;
};

export { top, REPO_URL, tags, featureCompleteRepos, archivedRepos, getData, archivedTags, completedTags };
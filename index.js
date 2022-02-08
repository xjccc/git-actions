// github api
// octokit

// TODO: auth
const octokit = new Octokit({ auth: 'personal-access-token123' })

octokit.rest.issues.create({
  owner: 'xjccc',
  repo: 'git-actions',
  title: 'Hello world from '
})

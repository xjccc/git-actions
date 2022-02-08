// https://docs.github.com/cn/actions/learn-github-actions/events-that-trigger-workflows
// https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
const { Octokit } = require('octokit')
// TODO: auth
// settings => developsettings => personal code
const octokit = new Octokit({
  auth: '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'
})

octokit.rest.issues.create({
  owner: 'xjccc',
  repo: 'git-actions',
  title: 'second issues',
  body: '哈哈哈'
})

// 自动执行

// https://docs.github.com/cn/actions/learn-github-actions/events-that-trigger-workflows
// https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
const { Octokit } = require('octokit')
const core = require('@actions/core')
// TODO: auth
// settings => developsettings => personal code
// 明文token使用git actions 会失效
// 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
// profiles -> secrets -> actions

// 通过core获取token
const token = core.getInput('token')
const octokit = new Octokit({
  auth: token
})

octokit.rest.issues.create({
  owner: 'xjccc',
  repo: 'git-actions',
  title: 'second issues',
  body: '哈哈哈'
})

// 自动执行

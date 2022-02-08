// https://docs.github.com/cn/actions/learn-github-actions/events-that-trigger-workflows
// https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
const { Octokit } = require('octokit')
const core = require('@actions/core')
const dayjs = require('dayjs')
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
  title: getTitle(),
  body: getBody()
})

function getTitle () {
  // github 上的时间 UTC - 8
  // ? 未处理
  return dayjs()
    .add(8, 'hour')
    .format('YYYY-MM-DD')
}
function getBody () {
  return '[如何写每日任务](https://github.com/xjccc/git-actions/issues/1)'
}

// https://segmentfault.com/a/1190000017790694
// https://commitlint.js.org/#/reference-rules
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'update', // 更新某功能
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'lint', // 代码格式
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'mock', // mock
      ],
    ],
  },
};

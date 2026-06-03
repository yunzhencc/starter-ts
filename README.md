# @yunzhencc/starter-ts

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![CI][ci-src]][ci-href]
[![License][license-src]][license-href]

> 一个开箱即用的现代化 TypeScript 库模板，集成了构建、测试、代码规范与自动化发布等完整工具链。

## ✨ 特性

- **⚡️ 极速构建** — 使用 [tsdown](https://github.com/rolldown/tsdown) 进行快速打包，输出 ESM 格式
- **🧪 测试覆盖** — 基于 [Vitest](https://vitest.dev/) 的单元测试与快照测试
- **🎨 代码规范** — 集成 [ESLint](https://eslint.org/) 与 [@antfu/eslint-config](https://github.com/antfu/eslint-config)，统一代码风格
- **📝 提交规范** — 使用 [simple-git-hooks](https://github.com/toplenbogen/simple-git-hooks) + [commitlint](https://commitlint.js.org/) 约束提交信息
- **🚀 自动发布** — 通过 GitHub Actions 实现 CI 与自动版本发布
- **📦 现代包管理** — 默认使用 [pnpm](https://pnpm.io/)，支持 workspace 与 catalog 依赖管理

## 📦 作为模板使用

点击 GitHub 右上角的 **"Use this template"** 按钮，即可基于此模板创建你自己的 TypeScript 库。

或直接克隆后修改：

```sh
git clone https://github.com/yunzhencc/starter-ts.git my-lib
cd my-lib
# 记得全局替换包名、作者和描述信息
```

## 安装

```sh
# npm
npm install @yunzhen/starter-ts

# yarn
yarn add @yunzhen/starter-ts

# pnpm
pnpm add @yunzhen/starter-ts
```

## 💻 本地开发

请确保已安装 [pnpm](https://pnpm.io/zh)。

```sh
# 克隆项目
git clone git@github.com:yunzhencc/starter-ts.git

# 进入项目目录
cd starter-ts

# 安装依赖
pnpm install

# 启动开发模式（监听构建）
pnpm dev

# 运行测试
pnpm test

# 构建生产包
pnpm build

# 代码检查与自动修复
pnpm lint
pnpm lint:fix

# 类型检查
pnpm typecheck
```

## 📂 目录结构

```
.
├── .github/workflows    # GitHub Actions 工作流
├── src/                 # 源代码
├── test/                # 测试文件
├── dist/                # 构建输出（发布时包含）
├── package.json         # 包配置
├── tsconfig.json        # TypeScript 配置
├── tsdown.config.ts     # 构建配置
├── vitest.config.ts     # 测试配置
└── README.md            # 本文件
```

## 🤝 贡献

欢迎提交 [Issue](https://github.com/yunzhencc/starter-ts/issues) 或 [Pull Request](https://github.com/yunzhencc/starter-ts/pulls)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@yunzhen/starter-ts?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmx.dev/package/@yunzhen/starter-ts
[npm-downloads-src]: https://img.shields.io/npm/dm/@yunzhen/starter-ts?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmx.dev/package/@yunzhen/starter-ts
[ci-src]: https://github.com/yunzhencc/starter-ts/actions/workflows/ci.yml/badge.svg
[ci-href]: https://github.com/yunzhencc/starter-ts/actions/workflows/ci.yml
[license-src]: https://img.shields.io/github/license/yunzhencc/starter-ts?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/yunzhencc/starter-ts/blob/main/LICENSE

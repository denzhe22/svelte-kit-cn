
# 部署流程
1、服务器安装nodejs
    npm install -g npm@11.4.2

配置 SSH 密钥登录
    在本地生成 SSH 密钥对（如 ssh-keygen），将公钥内容添加到服务器用户的 C:\Users\<你的用户名>\.ssh\authorized_keys 文件中。
确认可以用 SSH 连接到服务器
    用 ssh 用户名@服务器IP 测试连接。

    ssh配置，
    Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
    Start-Service sshd
    Set-Service -Name sshd -StartupType 'Automatic'

    pub公钥放：C:\Users\<你的用户名>\.ssh\authorized_keys authorized_keys没有就新建

启动服务
    $env:HOST="0.0.0.0"; $env:PORT="80"; node index.js

1、服务器端准备流程中，我已经处理好第一步，开启windows ssh服务，接下来，第二步，我已经在本地生成了ssh密钥对，现在我应
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Debugging!


- ✨Debug🐞  🐛 Typescript in VS-Code ✨
- let’s debug TypeScript files and find bugs! 🦗🐌🐛🕷🐞

## Installation

After that, we need to install [live-server](https://www.npmjs.com/package/live-server) or use the [live-server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.


Install the dependencies and devDependencies and start the server.

```sh
cd project
npm i -g live-server
```

To create our [tsConfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) we need this command...

```sh
tsc --init     
```


#### Building for .js file from .ts file

```sh
tsc
```

> Note: `<script src="./findbug.js"></script>` is required to add in index.html.

```sh
<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Debug</title>
</head>
<body>
<script src="./findbug.js"></script>
</body></html>
```
>   Example extension Liver Server

![Alt text](https://miro.medium.com/v2/resize:fit:1330/format:webp/1*ssAOCV-ZbdhqEOuiChcHQA.png "")

It will open our index.html on Chrome browser and if you click on the sources there are three files index.html, findbug.js and finbug.ts

![Alt text](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*q3_OOm9ASvD1fn_MZ35ucA.png "")

Then we need to add breakpoint and have fun! Because it is working so well we can now find all the bugs in our project and the best part is that we will find them on TypeScript files.
![Alt text](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7yMvuvMVRjfxWyvk5-7UhQ.png "")

Verify the deployment by navigating to your server address in
your preferred browser.
```sh
http://127.0.0.1:5500/src/main/index.html
```

With the latest tsc, you should be fine to do the clean with below command
```sh
tsc --build --clean
```    


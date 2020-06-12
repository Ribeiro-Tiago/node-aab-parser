# node-aab-parser

A parser for aaba manifest's, inspired by [node-apk-parser](https://www.npmjs.com/package/node-apk-parser)

### Requirements

You must have java JDK 8+ on your machine
NodeJS 12.18.0 (lower might versions work but unsupported)

### Installation

`npm install node-aab-parser`
or
`yarn add node-aab-parser`

### Usage

```
import { readManifest } from "node-aab-parser"; // or the require equivalent

await readManifest(filePath); // async / await

readManifest(filePath)
  .then(response => /* do something */);
  .catch(err => /* handle err */ ) // promise based
```

### API

`async aabParser(filePath): Response`

| Parameter |                 Description                 | Required |  Type  |
| :-------: | :-----------------------------------------: | :------: | :----: |
| filePath  | Absolute path of the file you want to parse |   true   | string |

Response object:

|         Attribute          |                           Description                           |   Type   |
| :------------------------: | :-------------------------------------------------------------: | :------: |
|     compiledSdkVersion     | sdk version this was compiled to (api level on android studio ) |  number  |
| compiledSdkVersionCodename |                 commonly known android version                  |  number  |
|       minSdkVersion        |            minimum android version that runs the app            |  number  |
|      targetSdkVersion      |               target android version for the app                |  number  |
|        versionCode         |                         version number                          |  number  |
|        versionName         |                          version name                           |  string  |
|        packageName         |                    package name of your app                     |  string  |
|        permissions         |                    permissions your app has                     | string[] |

### Contribution

It's still very barebones so any contribution is more than welcome.

Check the [guidelines](https://github.com/Ribeiro-Tiago/bundletool/master/CONTRIBUTION) and the [TODO](https://github.com/Ribeiro-Tiago/bundletool/master/TODO.md)

# 
<a href="https://www.buymeacoffee.com/ribeirotiago" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-violet.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

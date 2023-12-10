<!-- Badges section here. -->

[![npm version](https://badge.fury.io/js/@ebenjs%2Fgpt-shell.svg)](https://badge.fury.io/js/@ebenjs%2Fgpt-shell)
[![Build Status](https://travis-ci.org/brunolm/chat-gpt.svg?branch=master)](https://travis-ci.org/brunolm/chat-gpt)
[![Known Vulnerabilities](https://snyk.io/test/github/ebenjs/gpt-shell/badge.svg?targetFile=package.json)](https://snyk.io/test/github/brunolm/chat-gpt?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- Description section here. -->

The app is a command line client for chat gpt. It allows users to ask gpt questions and receive responses directly in the console. Written in nodejs.

<!-- Table of contents section here. -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Common steps](#common-steps)
  - [Linux and MacOS](#linux-and-macos)
  - [Windows](#windows)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Prerequisites

Any recent version of nodejs.

<!-- Installation section here. -->

## Installation

### Common steps

```bash
git clone https://github.com/ebenjs/gpt-shell.git
cd gpt-shell
npm install
```

### Linux and MacOS

```bash
sudo chmod +x index.js
ln -s "$(pwd)/index.js" ~/bin/gptshell
```

### Windows

On windows you need to create a `gptshell.cmd` file in `C:\Windows\System32` with the following content:

```cmd
@echo off
node "C:\path\to\gpt-shell\index.js" %*
```

<!-- Usage section here. -->

## Usage

```bash
gptshell ask -p "What is the meaning of life?"
```

## Configuration

```bash
gptshell config -k YOUR_API_KEY -m MODEL_NAME -u API_URL
```

`-k` or `--key` is your openai api key.  
`-m` or `--model` is the model name to use. Default is `gpt-3.5-turbo`.  
`-u` or `--url` is the url of the gpt server. Default is `https://api.openai.com/v1/chat/completions`.

The configuration command is needed only once. It will create a `.gpt-shell-config.json` file in current directory. You can edit this file manually if you want to change the configuration.

<!-- Contributing section here. -->

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

For more information, please refer to the [contributing guidelines](./CONTRIBUTING.md).

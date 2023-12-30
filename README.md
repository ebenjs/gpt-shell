<!-- Badges section here. -->

[![npm version](https://badge.fury.io/js/@ebenjs%2Fgpt-shell.svg)](https://badge.fury.io/js/@ebenjs%2Fgpt-shell)
![Build Status](https://github.com/ebenjs/gpt-shell/actions/workflows/node.js.yml/badge.svg?branch=develop)
[![Known Vulnerabilities](https://snyk.io/test/github/ebenjs/gpt-shell/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ebenjs/gpt-shell?targetFile=package.json)
[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)](https://opensource.org/licenses/Apache-2.0)

<!-- Description section here. -->

The app is a command line client for chat gpt. It allows users to ask gpt questions and receive responses directly in the console. Written in nodejs.

<!-- Table of contents section here. -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Automatic install on debian based distros](#automatic-install-on-debian-based-distros)
  - [Manual install from sources](#manual-install-from-sources)
    - [Common steps](#common-steps)
    - [Linux and MacOS](#linux-and-macos)
    - [Windows](#windows)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Prerequisites

gpt-shell is a command line tool that can be installed on any operating system. However, it requires any recent version of Node.js to be installed.

<!-- Installation section here. -->

## Installation

Choose your preferred installation method below. Unix based systems (Linux, macOS) users can install gpt-shell via the command line with the following scripts:

### Automatic install on debian based distros

```bash
curl -s https://raw.githubusercontent.com/ebenjs/gpt-shell/main/install-scripts/install-script-deb.sh | sudo bash
```

### Manual install from sources

#### Common steps

```bash
git clone https://github.com/ebenjs/gpt-shell.git
cd gpt-shell
npm install
```

#### Linux and MacOS

```bash
cp .env.example .env
sudo chmod +x index.js
ln -s "$(pwd)/index.js" /usr/local/bin/gpts
```

#### Windows

On windows, first you need to copy the `.env.example` file to `.env`.

```cmd
copy .env.example .env
```

Then you need to create a `gpts.cmd` file in `C:\Windows\System32` with the following content:

```cmd
@echo off
node "C:\path\to\gpt-shell\index.js" %*
```

<!-- Usage section here. -->

## Usage

```bash
gpts ask -p "What is the meaning of life?"
```

## Configuration

```bash
gpts config -k YOUR_API_KEY -m MODEL_NAME -u API_URL
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

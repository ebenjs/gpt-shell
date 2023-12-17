#!/bin/bash
set -e

echo "Downloading binaries"

curl https://codeload.github.com/gist/8c298d51c599794ddcf5cdfc86012345/zip/6408d6c9c693ac30e0c4c0c19a4f42c0b869d84d --output gpt-shell-archive.zip

if ! which unzip > /dev/null; then
    echo "Installing unzip"
    sudo apt-get update
    sudo apt-get install unzip
fi

unzip gpt-shell-archive.zip -d gpt-shell-archive

if [ ! -d "/usr/local/bin/gpts" ]; then
    sudo mkdir /usr/local/bin/gpts
fi

sudo mv ./gpt-shell-archive/8c298d51c599794ddcf5cdfc86012345-6408d6c9c693ac30e0c4c0c19a4f42c0b869d84d/* /usr/local/bin/gpts
sudo mv /usr/local/bin/gpts/script.js /usr/local/bin/gpts/gpts

sudo chmod +x /usr/local/bin/gpts/gpts

# Cleanup
rm -rf ./gpt-shell-archive
rm ./gpt-shell-archive.zip

# Add to path
if ! grep -q "export PATH=\$PATH:/usr/local/bin/gpts" ~/.bashrc; then
    echo "export PATH=\$PATH:/usr/local/bin/gpts" >> ~/.bashrc
fi

echo -e "\n🔥 All done.\n"

echo -e "💻 Restart your terminal or source your .bashrc to use gpts.\n"

echo "🚀 Installation complete."

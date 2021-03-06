#!/usr/bin/env bash

Platform="UNKNOWN"
case "$OSTYPE" in
  cygwin*|msys*|Windows_NT*)    Platform="WIN" ;;
  linux*)   Platform="LINUX" ;;
  darwin*)  Platform="MAC" ;;
  *)        echo  "unknown: $OSTYPE" ;;
esac

export $(grep -v '^#' .env | xargs)

echo "OS TYPE: $OSTYPE - Platform: $Platform"

if [[ $Platform == "WIN" ]]; then
	echo "Win: Start & Connect MongoDB."
	./build/config/MongodWin.bat
echo "Win: Start & Connect MongoDB - done."

elif [[ $Platform == "LINUX" ]]; then
 echo "Linux: Start & Connect MongoDB."
 echo "Linux: Start & Connect MongoDB - done."

fi

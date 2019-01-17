#!/usr/bin/env bash

set -e

REMOTE=proto
ROOT=/srv/me/c83/@

scp -r index.html ${REMOTE}:${ROOT}

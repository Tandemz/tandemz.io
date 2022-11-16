#!/usr/bin/env bash

set -e
set -o pipefail
set -v

gatsby build
cp _redirects ./public/

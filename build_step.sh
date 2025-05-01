#!/bin/bash

echo "Build script"

npm install --legacy-peer-deps
npx playwright install
npm run build
#!/bin/bash 
set -eo pipefail

EWVERSION=$1 #Edgeworkers Version
DESCRIPTION=$2 #Description
USE_EDGEKV=$3 #Push to production? (true|false)
ACTIVATE_PRODUCTION=$4 #Use EdgeKV? (true|false)

# Update the bundle.json
sed -i "s|DESCRIPTION|$DESCRIPTION|g" bundle.json

# Update the akamai-ew.yml
sed -i 's|EWVERSION|'$EWVERSION'|g' ./configs/akamai-ew.yml
sed -i 's|USE_EDGEKV|'$USE_EDGEKV'|g' ./configs/akamai-ew.yml
sed -i 's|ACTIVATE_PRODUCTION|'$ACTIVATE_PRODUCTION'|g' ./configs/akamai-ew.yml

cp ./configs/akamai-ew.yml ./configs/akamai-ew2.yml
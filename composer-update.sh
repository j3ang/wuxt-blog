#!/bin/zsh 

req=$(jq '.require | keys[] as $k | "\($k)" ' composer.json)

echo 'Updating composer ...'
for k in $req; do
    plugin=$(echo $k | cut -d '/' -f 2 | cut -d '"' -f 1)
    #su daemon -s /bin/bash -c '/opt/bitnami/wp-cli/bin/wp plugin status $plugin'
    [ ! -d "/path/to/dir" ] && composer require $plugin
done
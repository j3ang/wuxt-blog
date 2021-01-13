#!/bin/bash

#!/bin/zsh 
req=$(jq '.require | keys[] as $k | "\($k)" ' composer.json)
#content=$(curl -s  -X GET -H "Header:Value" http://127.0.0.1:8200/etc) 
#username=$( echo jq -r  '.data.value' <<< "${content}" ) 
#echo ${username}
#require=$(echo jq '.require | keys[] as $k | "($k)"' composer.json);

for k in $req; do
        plugin=$(echo $k | cut -d '/' -f 2 | cut -d '"' -f 1)
        #su daemon -s /bin/bash -c '/opt/bitnami/wp-cli/bin/wp plugin status $plugin'
        [ ! -d "/path/to/dir" ] && composer require $plugin
done
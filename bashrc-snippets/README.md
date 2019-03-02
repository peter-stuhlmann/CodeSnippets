# .bashrc 

**Switch to higher-level directories**
```
alias 1up ='cd ../'
alias 2up ='cd ../../'
alias 3up ='cd ../../../'
alias 4up ='cd ../../../../'
alias 5up ='cd ../../../../../'
```  

**Git**
```
alias push = 'git push origin master'
alias commit = 'git commit -m'
```

**Wordpress**

_start wordpress_

```
alias wordpress = 'sudo /opt/lampp/lampp start'
```
_switch to wp theme directory_
```
alias wpthemes = 'cd /opt/lampp/htdocs/wordpress/wp-content/themes'
```
_switch to wp plugin directory_
```
alias wpplugins = 'cd /opt/lampp/htdocs/wordpress/wp-content/plugins'
```

**SASS compiler**  
_(1) Write this code snippet in the .bashrc:_
```
function sassy {
    node-sass --watch --recursive --output "$1" --source-map true --source-map-contents "$2"
}
```
_(2) Write this code snippet in the shell:_
```
$ sassy css-directory scss-directory
```
#!/bin/zsh
git addA
if [ $1 ]
then
    git commit -m $1
else
    git commit -m 'test.'
fi
git push origin master
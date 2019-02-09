
git status

echo "Are you want to add changes? "

read add_confirm

if ( ( "$add_confirm" == "Y" ) || ( "$add_confirm" == "y" ) ); then
	git add ./
else
	echo "STOPPED!"
fi

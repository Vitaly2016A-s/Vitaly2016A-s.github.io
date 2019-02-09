echo "RUN Auto git add + git commit + git push..."
git status

echo "Are you want to add changes? "
read add_confirm

if [ $add_confirm == 'y' || $add_confirm == 'Y' ]
then
	git add ./
	echo "Type Commit Name: "
	read commit_name
	echo "Type a Commit Description: "
	read commit_description
	git commit -m $commit_name -m $commit_description
	git push -u my-hosting master
else
	echo "STOPPED!"
fi

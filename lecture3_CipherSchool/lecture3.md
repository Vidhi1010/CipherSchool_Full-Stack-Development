1.Add all changes to the staging area:

`git add .`-> Adds all modified and new files in the current directory to the staging area.

2.Checkout a specific commit:

`git checkout <COMMIT_ID>`-> Moves the HEAD to a specific commit, making the working directory match that commit. Use the commit ID from git `log --oneline` to specify which commit.

*While in this state, running `git log` will only show commits up to the checked-out commit.

*To return to the latest commit on the master branch:
`git checkout master` Switches back to the master branch.
Changing commit history:

*To modify commit history, you need to create a new branch and make the changes there. Changing history directly in the same branch can cause issues for collaborative work.
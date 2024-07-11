1.Revert a commit:

`git revert <COMMIT_ID>`-> Creates a new commit that undoes the changes made in the specified commit. This command opens the VI editor for you to add a commit message describing the revert.

2.Reset to a specific commit:

`git reset <COMMIT_ID> --hard`-> Resets the repository to the specified commit, discarding all changes in the working directory and staging area since that commit.

`git reset <COMMIT_ID> --soft`-> Resets the repository to the specified commit, keeping changes in the staging area.

3.Create and switch to a new branch:

`git checkout -b <BRANCH_NAME>`-> Creates a new branch with the specified name and switches to that branch.
Switch to an existing branch:

`git checkout <BRANCH_NAME>`-> Switches to the specified branch.
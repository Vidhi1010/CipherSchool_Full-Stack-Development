`git status` -> Shows the status of tracked, modified, and committed files/folders.

`git add fileName`-> Adds the specified file to the staging area.

`git rm --cached fileName`-> Removes the specified file from the staging area, moving it back to the untracked zone.

`git commit -m "MessageForCommit"`-> Commits the staged changes with the provided message.

`git log`-> Shows the commit history, including commit IDs and messages.

`git config --global user.name "GITHUB_USERNAME"`-> Sets the global Git username.

`git config --global user.email "GITHUB_EMAIL"`-> Sets the global Git email.

Without specifying `GITHUB_USERNAME` or `GITHUB_EMAIL`, the commands will display the currently configured username and email.

`git log --oneline`-> Shows the commit history in a compact format, displaying each commit on a single line.
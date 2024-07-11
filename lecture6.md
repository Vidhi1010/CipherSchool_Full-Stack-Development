
This class focuses on collaborating on projects using GitHub.

*Creating a New Repository Using Commands

1. Create a README file:
   - `echo "# Testing_GITHUB" >> README.md`: Creates a new `README.md` file and adds "# Testing_GITHUB" to it.

2. Initialize a new Git repository:
   - `git init`: Initializes a new Git repository.

3. Stage the README file:
   - `git add README.md`: Stages the `README.md` file, preparing it for commit.

4. Commit the staged changes:
   - `git commit -m "MESSAGE"`: Commits the staged changes with a descriptive message.

5. Rename the current branch to 'main':
   - `git branch -M main`: Renames the current branch to 'main'.

6. Add a remote repository:
   - `git remote add origin https://github.com/Vidhi1010/Repositary_Name.git`: Adds a new remote repository named 'origin' at the specified URL.

7. Push commits to the remote repository:
   - `git push -u origin main`: Pushes the commits in the 'main' branch to the 'origin' remote repository.


*Working with an Existing Repository

1. Clone the repository:
   - `git clone https://github.com/username/repository_name.git`: Clones the specified repository to your local machine.

2. Navigate to the repository directory:
   - `cd repository_name`: Changes the directory to the repository's directory.

3. Create a new branch:
   - `git checkout -b new-branch-name`: Creates a new branch and switches to it.

4. Make and commit changes:
   - `git add .`: Stages all changes.
   - `git commit -m "Describe your changes here"`: Commits the changes with a descriptive message.

5. Push the new branch to GitHub:
   - `git push origin new-branch-name`: Pushes the new branch to the remote repository on GitHub.

6. Create a pull request:
   - Go to your repository on GitHub and create a pull request from the new branch to the main branch. Provide a description of the changes and request a review.
# Homework Submission Process

### 1) Navigate to the wdi-atx-1-hw repository on your local file system
````
$ cd ~/dev/wdi/wdi-atx-1-hw
````
> In this example, we're assuming your homework repository is inside of `~/dev/wdi`, but it might not be. Use whatever path you saved the `wdi-atx-1-hw` repo at.

### 2) Switch to the `master` branch
````
$ git checkout master
````
> We need to start on the `master` branch so we can pull code down from the `origin` repository's `master` branch.

### 3) Clean up your working directory
If you have any outstanding changes that haven't been committed, you'll need to `add` and `commit` them OR `stash` them (hide them temporarily) so that when you pull new code, it doesn't overwrite your local changes.

### 4) `git pull` the latest code from the remote repository
````
$ git pull
````
> `git pull` is a `git fetch` and a `git merge` together. Occasionally, there will be remote updates that conflict with your local changes. This is called a "merge conflict", and you'll have to decide which changes you want to keep or get rid of by manually editing the conflicting files.

### 5) Create the branch for today's homework
The naming convention for homework branches will be `<your_computer_username>-w01d01`, where `w01d01` will change based on the day and week (e.g. `w01d02` for week 1, day 2 or `w08d04` for week 8, day 4, etc.)
````
$ git checkout -b sean_shannon-w01d01
````

### 6) COPY (do NOT move or delete) the assignment files from the 'assignments' folder to your student folder for the corresponding week and day
We need to **copy** the assignment files, rather than move, delete or edit them, so that when we submit our pull request back to master, we don't affect the assignment files for everyone else. You should **NEVER** make any changes to any files in the homework repo that aren't in your own student directory!
````
$ cp -a assignments/w01/d01/. students/<your_first_name>/w01/d01/
````

### 7) Work on the files in your student folder to complete the assignment
Again, you should be working on the files in `students/<your_first_name>/w01/d01/`, **NOT** in the assignment folder or anyone else's student folder!

### 8) Commit your changes
````
$ git add .
$ git commit -am "Committing homework for w01d01"
````
> You can make many commits for one homework submission, as long as they are all on the same branch.

### 9) Push your changes to the remote branch of the SAME NAME as the one you're working on
````
$ git push origin sean_shannon-w01d01
````
> Make sure you push your changes to the same branch name on the `origin` repo that you created locally!

### 10) Find your branch in the browser
Go to [Github](https://github.com/ga-students/wdi-atx-1-hw) to find the HW repo, then click on your particular branch toward the list of branches on the top left of the page. Find the green "Create Pull Request" button and click it. This will take you to the "Pull Request" page where you can edit your pull request.

### 11) Make a properly formatted Pull Request
Make sure the "base" branch is set to `master`, and the "compare" branch is set to the name of the branch you created (e.g. `<your_computer_username>-w01d01`). Make the title of the Pull Request the combination of the week and day together (e.g. "w01d01").

### 12) Add 'comfort' and 'completeness' in the Pull Request comment area
This is just so we can know how comfortable and complete your homework is, it's valuable information for us to have!

### 13) Submit your pull request
Click the "Submit" button, and you're done!

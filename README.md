# Homework Submission Process

All turned in homework will be submitted as a pull request to this repository.

## 1. Clean up your working directory

- If (for some reason) you have uncommitted changes in your repo, commit your changes (`git add` and `git commit`).
- The output of `git status` should contain "working directory clean"

## 2. Pull the homework assignment from the `upstream` repo

- Make sure you're on your `master` branch! We don't want to pull to just any old branch.
- Once you're on `master`, type `$ git pull upstream master` to pull the changes from the main homework repo

## 3. Switch to the branch for this week's homework

**If you have not yet created a branch** for this week's homework (meaning it's probably the beginning of the week), do so by typing:

    $ git checkout -b <branch-name>

**If you have already created a branch for this week's homework** (meaning it's probably the middle of the week), then switch to that branch by typing:

    $ git checkout <branch-name>

Then merge the most recent changes into your homework branch by typing:

    $ git merge master

Now you have the assignment instructions on your weekly homework branch.

## 4. Make Changes

- Copy the relevant assignment from `assignments/` to `students/your_name/`, and put it in the right daily/weekly folder.
- Do a `git commit` at this point so you can come back to this point if you need to.
- Do the homework.

## 5. Commit your changes

    $ git add .
    # Make sure you're only committing changes that happened within your student folder.
    $ git commit -m "Completed w01 hw"

## 6. Push your commits to your fork of the hw repo

    $ git push origin <branch-name>

## 7. Visit your fork in the browser

1. Select the relevant homework branch
2. Click the green button: ![](https://dl.dropboxusercontent.com/s/r6yvn15v7casta9/Screenshot%202014-11-18%2013.49.59.png?dl=0)
3. Click "Create pull request"

## 8. Title your Pull Request correctly

Homeworks should be named like "w01d03" or "w07d04" (lowercase "w" and week number and lowercase "d" and week number)

## 9. Add Comfort and Completeness

Add a rating out of 5 to the comment area of the pull request like this:

    Completeness: 5
    Comfort: 4

## 10. Submit it!

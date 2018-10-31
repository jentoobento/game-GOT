# Game of Thrones Simple Board Game

### Consists mainly of 3 components: 

#### The Commands

Button inputs that determine the user's intent. Each button has different logic tied to it in order to make each command unique and with various consequences.

#### The Map

The main area of the screen that holds the virtual "board." Each section of the map represents a city, state, or region of the GoT world. Functionality of this area has not been worked on yet.

#### The Top Bar

This area keeps track of important statistics for the user. It also holds the user's information that they inputed earlier. The statistics in this component will help the player make their choices in the Command component.

=========

#Collaboration Guidelines 
These are some guidelines  and standards to properly create a fork, work on, issue/generate pull requests and merging the pull request into the original repository. 


## Creating a Fork

Go to the GitHub page and click the "Fork" button. Once you've done that, you can use your git client to clone your repo or just use the command line:

```shell
# Clone your fork to your local machine
git clone git@github.com:USERNAME/FORKED-PROJECT.git
```

## Keeping Your Fork Up to Date

You dont have to do this, but this is considered best practices and it can save your life if you computer was to crash.. Keep your fork up to date by tracking the original "upstream" repo that you forked. To do this, you'll need to add a remote:

```shell
# Add 'upstream' repo to list of remotes
git remote add upstream https://github.com/UPSTREAM-USER/ORIGINAL-PROJECT.git

# Verify the new remote named 'upstream'
git remote -v
```

When you decide to update your fork with the latest upstream changes, you will need to first fetch the upstream repo's branches and latest commits to bring them into your repository:

```shell
# Fetch from upstream remote
git fetch upstream

# View all branches, including those from upstream
git branch -va
```

Next, checkout your own master branch and merge the upstream repo's master branch:

```shell
# Checkout your master branch and merge upstream
git checkout master
git merge upstream/master
```

If there are no unique commits on the local master branch, git will simply perform a fast-forward. However, if you have been making changes on master (in the vast majority of cases you probably shouldn't be - [see the next section](#doing-your-work), you may have to deal with conflicts. When doing so, be careful to respect the changes made upstream.

Congratulations! Your local master branch is up-to-date with everything modified upstream.

## Doing Your Work

### Create a Branch
When you begin to work on a new feature or bugfix, it's important that you create a new branch. This is proper git workflow, AND it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task you complete.

Here is how to create a new branch and start working on it:

```shell
# Checkout the master branch - you want your new branch to come from master
git checkout master

# Create a new branch named newfeature (give your branch its own simple informative name)
git branch newfeature

# Switch to your new branch
git checkout newfeature
```

Congratulations! you have now learned how to create a new branch! Now you can make whatever changes you want to.

## Submitting a Pull Request

### Cleaning Up Your Work

Before you submit your pull request, here are a few things to do to clean up your branch and make it as simple as possible for the original repo's maintainer to test, accept, and merge your work.

If any commits have been made to the upstream master branch, you should rebase your development branch so that merging it will be a simple fast-forward that won't require any conflict resolution work.

```shell

# Fetch upstream master and merge with your repo's master branch
git fetch upstream
git checkout master
git merge upstream/master

# If there were any new commits, rebase your development branch
git checkout newfeature
git rebase master
```

Here is how you do an interactive rebase:

```shell
# Rebase all commits on your development branch
git checkout 
git rebase -i master
```

This will open up a text editor where you can specify which commits to squash.

### Submitting

Once you hace committed and pushed all of your changes to GitHub, go to the page for your fork on GitHub, select your development branch, and click the pull request button. If you need to make any adjustments to your pull request, just push the updates to GitHub. Your pull request will automatically track the changes on your development branch and update.

## Accepting and Merging a Pull Request

Note: in the previous section, "forker" was referring to the original repository as `upstream`.
Now, we are looking at it as the perspective of the owner of that original repository and the standard `origin` remote.

### Checking Out and Testing Pull Requests
Open up the `.git/config` file and add a new line under `[remote "origin"]`:

```
fetch = +refs/pull/*/head:refs/pull/origin/*
```

 Fetch and checkout any pull request so that you can test them:

```shell
# Fetch all pull request branches
git fetch origin

# Checkout out a given pull request branch based on its number
git checkout -b 999 pull/origin/999
```

NOTE: These branches will be read only and you won't be able to push any changes!

### Automatically Merging a Pull Request
In cases where the merge would be a simple fast-forward, you can automatically do the merge by just clicking the button on the pull request page on GitHub.

### Manually Merging a Pull Request
To do the merge manually, you'll need to checkout the target branch in the source repo, pull directly from the fork, and then merge and push.

```shell
# Checkout the branch you're merging to in the target repo
git checkout master

# Pull the development branch from the fork repo where the pull request development was done.
git pull https://github.com/forkuser/forkedrepo.git newfeature

# Merge the development branch
git merge newfeature

# Push master with the new feature merged into it
git push origin master
```

Now that you're done with the development branch, you can delete it.

```shell
git branch -d newfeature
```

**Sources**
* [GitHub - Fork a Repo](https://help.github.com/articles/fork-a-repo)
* [GitHub - Syncing a Fork](https://help.github.com/articles/syncing-a-fork)
* [GitHub - Checking Out a Pull Request](https://help.github.com/articles/checking-out-pull-requests-locally)


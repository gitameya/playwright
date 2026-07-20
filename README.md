# Playwright GitHub workflow

This project is set up to run Playwright tests in GitHub Actions on pushes and pull requests.

## How to push to GitHub

1. Create a GitHub account if you do not already have one.
2. Create a new repository on GitHub.
3. In your local project folder, run:

```bash
git init
```
Initializes a new Git repository in the current folder.

```bash
git add .
```
Stages all the files in the project so they are ready to be committed.

```bash
git commit -m "Initial Playwright setup"
```
Saves the staged changes with a commit message describing what you changed.

```bash
git branch -M main
```
Renames the current branch to main, which is the standard default branch on GitHub.

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
```
Connects your local repository to the GitHub repository you created online.

```bash
git push -u origin main
```
Uploads your local main branch to GitHub and sets it as the default upstream branch for future pushes.

4. GitHub Actions will start automatically after the first push.

## How to run tests locally

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

## Pull before push

If the GitHub repository already has changes and you want to avoid overwriting them, pull the latest version first.

```bash
git pull origin main
```

Then commit and push your changes.

```bash
git add .
git commit -m "Add new Playwright test"
git push origin main
```

If the repository is brand new and empty, you can skip the pull step.

## Pull request workflow

A simple workflow for beginners is:

1. Create a feature branch for your change.

```bash
git checkout -b feature/my-change
```

2. Make your changes and commit them.

```bash
git add .
git commit -m "Add new Playwright test"
```

3. Push the branch to GitHub.

```bash
git push -u origin feature/my-change
```

4. Open the repository in GitHub and create a pull request from that branch.

5. GitHub Actions will run your Playwright tests automatically for the pull request.

## What happens in GitHub Actions

Every push or pull request to the main branch triggers the workflow in [.github/workflows/playwright.yml](.github/workflows/playwright.yml). It installs dependencies, downloads Chromium, and runs the Playwright suite.

## How to view the Playwright report

After a workflow run finishes:

1. Open the Actions tab in your GitHub repository.
2. Click the latest workflow run.
3. Download the artifact named "playwright-report".
4. Open the downloaded HTML file in your browser.

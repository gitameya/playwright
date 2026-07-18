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

## What happens in GitHub Actions

Every push or pull request to the main branch triggers the workflow in [.github/workflows/playwright.yml](.github/workflows/playwright.yml). It installs dependencies, downloads Chromium, and runs the Playwright suite.

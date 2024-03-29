# Contributing

Thanks for your time and interest for contributing to the doineedavpn.com Web project!  
As a contributor, here are the guidelines we would like you to follow:

* [Contributing Code](#contributing)
* [Creating an Issue](#issue)
* [Pull Requests](#pr)
* [Git Workflow](#git)

<a name="contributing"></a>
## Contributing Code

* By contributing to this project you are agreeing to the terms stated in the [Contributor License Agreement](/CLA.md).
* By contributing to this project, you share your code under the GPLv3 license, as specified in the [License](/LICENSE.md) file.

<a name="issue"></a>
## Creating an Issue

* If you want to report a security problem **DO NOT CREATE AN ISSUE**, please read our [Security Policy](/.github/SECURITY.md) on how to submit a security vulnerability.
* When creating a new issue, choose a "Bug report" or "Feature request" template and fill the required information.
* Please describe the steps necessary to reproduce the issue you are running into.

<a name="pr"></a>
## Pull Requests

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please ask first before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the developers might not want to merge into the project.

Follow these steps when you want to submit a pull request:  

1. Go over installation guides in the [README](/README.md#installation)
2. Follow our [Git Workflow](#git)
3. Follow instructions in the [PR Template](/.github/PULL_REQUEST_TEMPLATE.md)
4. Update the [README](/README.md) file with details of changes if applicable

<a name="git"></a>
## Git Workflow

This project is using [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

### Branch naming guidelines

Naming for branches is made with following structure:

```
<type>/<short-summary-or-description>
```

Where <type> can be `epic`, `feature`, `task`, `bugfix`, `hotfix` or `release`.

### Branches

`main` - The production branch. Clone or fork this repository for the latest copy.  
`<feature branch>` - The feature or fix branch. Pull requests should be made from this branch into `main` brach.  

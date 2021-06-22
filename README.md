# Turbo EdgeWorkers Deployments
Demo for bundling, saving, activating and generating enhanced debugging headers for EdgeWorkers upon a Git commit. All these steps will be completed within minutes of the repository commit by using CircleCi. 

*Keyword(s):* edgeworkers, circleci, automation<br>

The actual EdgeWorkers example is based on the [hello-world](https://github.com/akamai/edgeworkers-examples/tree/master/hello-world) example in the official Akamai repository.

![CircleCI Pipeline](http://jaescalo.test.edgekey.net/images/CircleCI-flow.jpg)

## Prerequisites/Tools
- GitHub account and repository
- Akamai EdgeWorkers Enabled. EdgeKV is Optional.
- [CircleCI Account](https://app.circleci.com/dashboard)
- [EdgeWorkers Docker](https://hub.docker.com/r/akamai/edgeworkers)
- [EdgeWorkers CLI](https://github.com/akamai/cli-edgeworkers)
- Understand basic file manipulation with `echo` and `sed`

## Quick Setup
Follow the instructions to the line to run this same example in your Akamai EdgeWorkers environment.
1. Clone this repository and push it to your own repository. 
2. Modify the `.circleci/config.yml` configuration by adding your own values to the environmental variables `EWVERSION`, `DESCRIPTION` and `EWID`. For example:
```
    environment:
      EWVERSION: 0.43
      EWID: 4885
      BUNDLENAME: ew-bundle.tgz
      DESCRIPTION: "EW Deployment Automation with CircleCI"
```
3. Set up a CircleCI Context named **edgerc** with all the variables labeled as “CircleCI Context” from the table below. If you’re not use EdgeKV then ignore the EDGEKV_* variables. [Instructions](https://circleci.com/docs/2.0/contexts/)
4. Set up a CircleCI project with GitHub. [Instructions](https://circleci.com/docs/2.0/getting-started/)
5. Commit your changes to your GitHub repository and watch the pipeline execute.

## CircleCI Setup
A workflow is defined in the `.circleci/config.yml` file which is comprised of the build, deploy and test jobs to exemplify a DevOps pipeline.
The different configuration files are parametrized and we need to define these parameters or variables first.

* In CircleCI Context set up the variables that will be used directly by the `.circleci/config.yml` file. These variables may contain sensitive information (values are obscured) and the values do not change frequently. Instructions here ALOHA POST.
* In the `.circleci/config.yml` configuration the local variables can be changed on every execution of the pipeline to adjust to each case and these do not contain sensitive information.
* In the `.circleci/config.yml` configuration file there are parameters which can be modified for conditional execution of blocks within the pipeline.

These are the variables and parameters to setup and modify. Keep the same names in the table below.
| Variable Name | Value (Example) | Location | Description |
| --- | --- |  --- |  --- | 
| CLIENT_SECRET | ***** | CircleCI Context | API Credential. Used to build the .edgerc file. |
| HOST | ***** | CircleCI Context | API Credential. Used to build the .edgerc file. |
| ACCESS_TOKEN | ***** | CircleCI Context | API Credential. Used to build the .edgerc file. |
| CLIENT_TOKEN | ***** | CircleCI Context | API Credential. Used to build the .edgerc file. |
| HOSTNAME | ***** | CircleCI Context | Hostname used to create the Enhanced Debug Token |
| ACCOUNTKEY | ***** | CircleCI Context | The account ID. Used to switch between accounts. If not needed remove the ‘accountkey’ flag from the commands. |
| EDGEKV_NAMESPACE | ***** | CircleCI Context | [OPTIONAL] Namespace if EdgeKV is enabled. Used to build the edgekv_tokens.js file. |
| EDGEKV_TOKEN_NAME | ***** | CircleCI Context | [OPTIONAL] Token Name if EdgeKV is enabled. Used to build the edgekv_tokens.js file.  |
| EDGEKV_TOKEN_VALUE | ***** | CircleCI Context | [OPTIONAL] Token Value if EdgeKV is enabled. Used to build the edgekv_tokens.js file.  |
| EWVERSION | 2.55 | .circleci/config.yml: environment block | EdgeWorkers version. This should increment on each execution. |
| EWID | 1234 | .circleci/config.yml: environment block | EdgeWorkers ID |
| BUNDLENAME | my_bundle.tgz | .circleci/config.yml: environment block | The name for the bundle file. Used to update the bundle.json file. |
| DESCRIPTION | Hello World Example | .circleci/config.yml: environment block | The description of the EdgeWorker. Used to update the bundle.json file. |
| edgekv | Boolean (true \|\| false) | .circleci/config.yml: parameter block | ‘true’ if EdgeKV is enabled and ‘false’ if EdgeKV is not enabled |
| production | Boolean (true \|\| false) | .circleci/config.yml: parameter block | ‘true’ to push to production and staging and ‘false’ to push only to staging |

## Future Improvements
* Add actual test jobs examples to test EW's code.

## More details on EdgeWorkers
- [Akamai EdgeWorkers](https://developer.akamai.com/akamai-edgeworkers-overview)
- [Akamai EdgeWorkers User Guide](https://learn.akamai.com/en-us/webhelp/edgeworkers/edgeworkers-user-guide/GUID-14077BCA-0D9F-422C-8273-2F3E37339D5B.html)
- [Akamai EdgeWorkers Examples](https://github.com/akamai/edgeworkers-examples)
- [Akamai CLI for EdgeWorkers](https://developer.akamai.com/legacy/cli/packages/edgeworkers.html)
- [Akamai EdgeKV](https://learn.akamai.com/en-us/webhelp/edgeworkers/edgekv-getting-started-guide/index.html)
- [Akamai EdgeKV CLI](https://github.com/akamai/cli-edgeworkers/blob/master/docs/edgekv_cli.md)
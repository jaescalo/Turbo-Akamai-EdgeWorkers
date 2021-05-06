# Turbo EdgeWorkers Deployments
Demo for bundling, saving, activating and generating enhanced debugging headers for EdgeWorkers upon a Git commit. All these steps will be completed within minutes of the repository commit by using CircleCi. 

*Keyword(s):* edgeworkers, circleci, automation<br>

The actual EdgeWorkers example is based on the [hello-world](https://github.com/akamai/edgeworkers-examples/tree/master/hello-world) example in the official Akamai repository.

## Prerequisites/Tools
- GitHub account and repository
- [CircleCI Account](https://app.circleci.com/dashboard)
- [EdgeWorkers Docker](https://hub.docker.com/r/akamai/edgeworkers)
- [EdgeWorkers CLI](https://github.com/akamai/cli-edgeworkers)


## EdgeWorkers Required Files Setup
The main.js and bundle.json files are required to create the *.tgz bundle to upload to Akamai EdgeWorkers. 

- main.js: contains the javascript code for the functions to execute at the edge.
- bundle.json: contains information about the EdgeWorkers artifact/bundle. In this example it is parametrized so that the EdgeWorkers version and Description fields are populated from values set in the `.circleci.yml`.

The bundle.json template looks like

`{
    "edgeworker-version": "EWVERSION",
    "bundle-version" : 5,
    "api-version" : "1.0",
    "description" : "DESCRIPTION",
    "misc" : {
        "author" : "Obi Wan Kenobi"
     }
}`

The EWVERSION and DESCRIPTION values will be replaced by the respective values set in the `.circleci.yml`. By doing this we avoid modifying the bundle.json manually on every deployment.

## CircleCI Setup
CircleCI is used to automate the deployment for this EdgeWorker on each `git commit` to the repository. The asociated configuration is in the `.circleci.yml` file.

[CircleCI Contexts](https://circleci.com/docs/2.0/contexts/]) is are used to pass on sensitive information in variables to the configuration file `.circleci.yml`. The following variables should be managed under CirecleCI Contexts for this example. 

### Account Info Variables
- $ACCOUNTKEY: Optional. Used to switch between accounts. If not needed remove all associations and the `--accountkey` flag from the commands.
- $HOSTNAME: Hostname associated to the property running EdegeWorkers. Used to create the enhanced debugging token.

### Akamai API Credential Variables
- $ACCESS_TOKEN
- $HOST
- $CLIENT_SECRET
- $CLIENT_TOKEN

## More details on EdgeWorkers
- [Akamai EdgeWorkers](https://developer.akamai.com/akamai-edgeworkers-overview)
- [Akamai EdgeWorkers User Guide](https://learn.akamai.com/en-us/webhelp/edgeworkers/edgeworkers-user-guide/GUID-14077BCA-0D9F-422C-8273-2F3E37339D5B.html)
- [Akamai EdgeWorkers Examples](https://github.com/akamai/edgeworkers-examples)
- [Akamai CLI for EdgeWorkers](https://developer.akamai.com/legacy/cli/packages/edgeworkers.html)
- [Akamai EdgeKV](https://learn.akamai.com/en-us/webhelp/edgeworkers/edgekv-getting-started-guide/index.html)
- [Akamai EdgeKV CLI](https://github.com/akamai/cli-edgeworkers/blob/master/docs/edgekv_cli.md)
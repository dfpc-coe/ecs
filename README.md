<h1 align=center>TAK ECS</h1>

<p align=center>Create and Manage ECS with CloudFormation</p>

## Installation

Local installation can be performed via the following

```sh
npm install
```

## AWS Deployment

### Prerequisites 

Amazon Elastic Container Service uses AWS Identity and Access Management (IAM) service-linked roles. This service linked role needs to be created first - either manually or by having ECS create it during the first deployment. 
If you have never used ECS in this specific AWS account you need to manually create the service-linked role via `aws iam create-service-linked-role --aws-service-name ecs.amazonaws.com`.

### Installation

From the root directory, install the deploy dependencies

```sh
npm install
```

Deployment to AWS is handled via AWS Cloudformation. The template can be found in the `./cloudformation`
directory. The deployment itself is performed by [Deploy](https://github.com/openaddresses/deploy) which
was installed in the previous step.

The deploy tool can be run via the following

```sh
npx deploy
```

To install it globally - view the deploy [README](https://github.com/openaddresses/deploy)

Deploy uses your existing AWS credentials. Ensure that your `~/.aws/credentials` has an entry like:

```
[coe]
aws_access_key_id = <redacted>
aws_secret_access_key = <redacted>
```

Deployment can then be performed via the following:

```
npx deploy create <stack>
```

```
npx deploy update <stack>
```

```
npx deploy info <stack> --outputs
```

```
npx deploy info <stack> --parameters
```

Stacks can be created, deleted, cancelled, etc all via the deploy tool. For further information
information about `deploy` functionality run the following for help.

```sh
npx deploy
```

Further help about a specific command can be obtained via something like:

```sh
npx deploy info --help
```


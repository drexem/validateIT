# CLI Application - administration documentation

Here you will find the information needed for running the CLI version of Validator.

*You have two options*:
- **[Docker](#docker)**
- **[.NET Build](#net-build)**

Don't forget to check out the [user documentation](../user/index.md) of CLI App!

## Docker
To use this app you need to have docker installed on your local machine and have the docker daemon running!

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the [repository](https://gitlab.mff.cuni.cz/kolcunm/csv-validator).
2. Relocate to the directory [CSV_Validator](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator).
3. Build the docker image. Run this command (you
	can replace the `validate-image` with your desired image name): 
```bash
docker build -t validate-image -f ValidateCLI/Dockerfile .
```

Now you can run the application using command: 
```bash
docker run validate-image
```

This will run the application. However the application will expect some command line [arguments](../user/index.md) to follow the command.

### Example usage (docker)

We expect that you have completed  steps 1, 2 and 3 from the [docker part](#docker).
Please be aware of the name of your docker container.

#### Remote (online) files
You can run the image you have created in the step 3. like this:

```bash
docker run validate-image --metadataIRI https://w3c.github.io/csvw/tests/test035/csv-metadata.json 
```

This will start remote validation on a file that is part of the integration tests for the `validator`. You
can replace the URL with arbitrary URL of metadata file you want to validate. In this case the metadata starts
with metadata file so no other metadata is located, this type of validation is called [Metadata validation](../../general/index.md#validation-types)

If you want to start [tabular validation](../../general/index.md#validation-types) you can do so by invoking:
```bash
docker run validate-image --tabularIRI https://w3c.github.io/csvw/tests/test006.csv
```

If you provide both parameters:
```bash
docker run validate-image --tabularIRI https://w3c.github.io/csvw/tests/test012/tree-ops.csv --metadataIRI https://w3c.github.io/csvw/tests/test012/csv-metadata.json
```
The validation will be conducted as [overriding](../../general/index.md#validation-types).

#### Local files

When you want to validate local files you need to somehow map your local directory into the container.
Lets look at an example:
```bash
docker run -v /path/to/your/directory:/data validate-image --tabularIRI /data/my.csv
```

So if you have your local files in `/path/to/your/directory` it will map them into the directory `/data` in the docker container.
This also means that if you used absolute paths inside metadata file, the validation won't succeed as the paths will be invalid.

Another example is that for example you want to start validation from metadata file lets say it's path is:

`/opt/myFiles/metadata.json`

and this file references tabular data file with path:

`/opt/myFiles/tabular.csv`

for this we will use command:

```bash
docker run -v /opt/myFiles:/data validate-image --metadataIRI /data/metadata.json
```

If you provide both paths:
```bash
docker run -v /opt/myFiles:/data validate-image --metadataIRI /data/metadata.json --tabularIRI /data/tabular.csv
```
the validation will be done as [overriding](../../general/index.md#validation-types). That means that the reference from the
metadata file `metadata.json` to another file will be overriden to the path you provided, in this 
case `/data/tabular.csv`. This is useful if you want to use the same schema for different tabular
files.

Please checkout the [arguments](#section-CLI-arguments) documentation for the command line for more info about the usage.

## Mapping of local files into the Docker container
If you want to use local files in the docker container you firstly need to map directory containing such files into the Docker container.
This is done using the parameter -v:
```bash
-v /my/local/path:/my/docker/container/path
```
this will map the directory `/my/local/path` of your local machine into the directory `/my/docker/container/path` in the docker container. Since this mapping we will be using only the mapped paths as the Validator running inside the Docker container cannot access your local files.

Now if we want to start for example [tabular validation](../../general/index.md#validation-types) we can do so by invoking:
```bash
docker run -v /my/local/path:/my/docker/container/path validate-image --tabularIRI /my/docker/container/path/my.csv --rdfPaths /my/docker/container/path/result.ttl
```
In this example we have a local file `/my/local/path/my.csv` and the validator sees it as `/my/docker/container/path/my.csv`. Also notice that if we want to create for example a RDF result we also need to use mapped directories not the local ones!

We recommend to map your directories into the directory `/data` in the docker container.

# .NET Build


*This has been tested on [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) 
and [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).*


If you prefer to build the CLI app on your own from the source files, we have step-by-step 
guide for you:
1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the [repository](https://gitlab.mff.cuni.cz/kolcunm/csv-validator).
2. Relocate to the directory [CSV_Validator](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator).
3. To restore the project run:
```bash
dotnet restore
```
4. To start the validation run:
```bash
dotnet run --configuration Release [CLI arguments]
```

## Examples

Start [Tabular validation](../../general/index.md#validation-types):
```bash
dotnet run --tabularIRI https://w3c.github.io/csvw/tests/test005.csv
```
Start [Metadata validation](../../general/index.md#validation-types):
```bash
dotnet run --metadataIRI https://w3c.github.io/csvw/tests/test034/csv-metadata.json
```
Start [Overriding validation](../../general/index.md#validation-types):
```bash
dotnet run --metadataIRI https://w3c.github.io/csvw/tests/test011/tree-ops.csv-metadata.json --tabularIRI https://w3c.github.io/csvw/tests/test011/tree-ops.csv
```

You can replace the URLs with your local file paths to validate local files!

Please checkout the [arguments](../user/index.md) 
documentation for the command line for more info about the usage.

## Alternative

Alternatively you can follow these steps:
1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the [repository](https://gitlab.mff.cuni.cz/kolcunm/csv-validator).
2. Relocate to the directory [CSV_Validator](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator).
3. To restore the project run:
```bash
dotnet restore
```
4. Build the application:
```bash
dotnet build --configuration Release --output /output/directory
```
5. Run the application
```bash
dotnet /output/directory/ValidateCLI.dll [CLI arguments]
```


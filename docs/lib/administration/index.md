# Library - administration documentation

Here you will find the information needed for [installing](#installing-library) the library or [running](#run-integration-tests) library's integration tests!

Also don't forget to check out [developer documentation](../developer/index.md) for the library!

You can check out the nugget package [here](https://www.nuget.org/packages/CSVW-validator-lib).

## Installing library
### Using Nuget Package Manager Console

To install the library you can use [Nuget Package Manager Console](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell).

All you need to do is use command:
```bash
Install-Package CSVW-validator-lib
```

and you should have your validation library installed!

### Using .NET

First relocate in the console to the directory containing your `.csproj` file.
Then run following command:
```bash
dotnet add package CSVW-validator-lib
```


## Run integration tests

The validator passes all the [integration tests](https://w3c.github.io/csvw/tests/#manifest-validation).
You can try running the tests here!

** 
We use the api of [W3C](https://w3c.github.io/csvw/tests/#manifest-validation) for testing 
so please do not overload their API aby running the tests multiple times!
**

### Docker

To run the integration tests we will again create a simple docker image and then run it.
Follow these steps:
1. Relocate to the directory [CSV_Validator](CSV_Validator).
2. Create a docker image:
```bash 
docker build -t test-image -f CSVWIntegrationTests/Dockerfile .
```
3. run the docker image using:
```bash 
docker run test-image
```

You should see the similar output to:
```bash
Passed!  - Failed:     0, Passed:   283, Skipped:     0, Total:   283, Duration: 1 m 32 s - CSVWIntegrationTests.dll (net7.0)
```

### Using .NET

*This has been tested on [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) 
and [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).*


To run the integration using just [.NET](https://dotnet.microsoft.com/en-us/) you can follow these steps:
1. Relocate to the directory [CSVWIntegrationTests](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator/CSVWIntegrationTests?ref_type=heads)
2. Run the following command:
```bash
dotnet test
```

Now you should see output similar to:
```bash
Passed!  - Failed:     0, Passed:   283, Skipped:     0, Total:   283, Duration: 1 m 19 s - CSVWIntegrationTests.dll (net7.0)
```
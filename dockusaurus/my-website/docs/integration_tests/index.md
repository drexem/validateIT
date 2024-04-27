# Integration tests
The validator passes all the [integration tests](https://w3c.github.io/csvw/tests/#manifest-validation).
You can try running the tests here!

** 
We use the api of [W3C](https://w3c.github.io/csvw/tests/#manifest-validation) for testing 
so please do not overload their API aby running the tests multiple times!
**

## Docker

To run the integration tests we will again create a simple docker image and then run it.
Follow these steps:
1. Relocate to the directory [CSV_Validator_lib](CSV_Validator_lib).
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

## Using .NET

*This has been tested on [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) 
and [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).*


To run the integration using just [.NET](https://dotnet.microsoft.com/en-us/) you can follow these steps:
1. Relocate to the directory `[CSVWIntegrationTests](CSV_Validator_lib/CSVWIntegrationTests)`
2. Run the following command:
```bash
dotnet test
```

Now you should see output similar to:
```bash
Passed!  - Failed:     0, Passed:   283, Skipped:     0, Total:   283, Duration: 1 m 19 s - CSVWIntegrationTests.dll (net7.0)
```

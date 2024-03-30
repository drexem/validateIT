# Library - user documentation

Here you will find all you need to know to use the Validator Library!

## Tutorials

All [types](../../general/index.md#validation-types) of validation require a `IController` class. We create instance of it with `ControllerFactory`:

```csharp
IController controller = ControllerFactory.CreateController();
```

Next you need to decide what [type](../../general/index.md#validation-types) suites your need the best. Here are all types of validation you can call:

```csharp
IController controller = ControllerFactory.CreateController();

string remoteMetadataURL = "https://w3c.github.io/csvw/tests/test011/tree-ops.csv-metadata.json";
string remoteTabularURL = "https://w3c.github.io/csvw/tests/test011/tree-ops.csv";
string localMetadaPath = @"/data/my.csv";
string localTabularPath = @"/data/schema.json";

// starts remote tabular validation
IResult result1 = controller.ProcessTabularData(remoteTabularURL);

// start local tabular validation
IResult result2 = controller.ProcessTabularData(localTabularPath);

// start remote metadata validation
IResult result3 = controller.ProcessMetadata(remoteMetadataURL);

// start local metadata validation
IResult result4 = controller.ProcessMetadata(localMetadaPath);
```
Afterwards you can for example review the validation type by:
```csharp
switch (result1.GetValidationResultType)
{
    case ValidationResultType.VALID:
        Console.WriteLine("Validated files were valid!");
        break;
    case ValidationResultType.WARNING:
        Console.WriteLine("Warnings occurred during the validation!");
        break;
    case ValidationResultType.ERROR:
        Console.WriteLine("Errors occurred during the validaiton!");
        break;
}
```
Or you can generate a result file with all the errors and warnings in one of the supported formats!
```csharp
string resultPath = "/data/result.csv";
IResultWriter csvResultWriter = ResultWriterFactory.CreateResultWriter(ResultFileFormat.CSV);
csvResultWriter.GenerateResult(resultPath, result1.GetValidationDetails);
```

Or you can review individual errors! (Similarly for warnings.):
```csharp
// iterate through general errors
foreach(var error in result1.GetValidationDetails.GeneralErrors)
{
    Console.WriteLine(error.GetMessage(CultureInfo.CurrentCulture));
}

// foreach errors related to specific table
foreach(var tableDetails in result1.GetValidationDetails.TableValidationDetails)
{
    foreach(var error in tableDetails.Errors)
    {
        Console.WriteLine(error.GetMessage(CultureInfo.CurrentCulture));
    }
}
```


Whole example:

```csharp
IController controller = ControllerFactory.CreateController();

string remoteMetadataURL = "https://w3c.github.io/csvw/tests/test011/tree-ops.csv-metadata.json";
string remoteTabularURL = "https://w3c.github.io/csvw/tests/test011/tree-ops.csv";
string localMetadaPath = @"/data/my.csv";
string localTabularPath = @"/data/schema.json";

// starts remote tabular validation
IResult result1 = controller.ProcessTabularData(remoteTabularURL);

// start local tabular validation
IResult result2 = controller.ProcessTabularData(localTabularPath);

// start remote metadata validation
IResult result3 = controller.ProcessMetadata(remoteMetadataURL);

// start local metadata validation
IResult result4 = controller.ProcessMetadata(localMetadaPath);

switch (result1.GetValidationResultType)
{
    case ValidationResultType.VALID:
        Console.WriteLine("Validated files were valid!");
        break;
    case ValidationResultType.WARNING:
        Console.WriteLine("Warnings occurred during the validation!");
        break;
    case ValidationResultType.ERROR:
        Console.WriteLine("Errors occurred during the validaiton!");
        break;
}

// iterate through general errors
foreach (var error in result1.GetValidationDetails.GeneralErrors)
{
    Console.WriteLine(error.GetMessage(CultureInfo.CurrentCulture));
}

// foreach errors related to specific table
foreach(var tableDetails in result1.GetValidationDetails.TableValidationDetails)
{
    foreach(var error in tableDetails.Errors)
    {
        Console.WriteLine(error.GetMessage(CultureInfo.CurrentCulture));
    }
}

string resultPath = @"/data/result.csv";
IResultWriter csvResultWriter = ResultWriterFactory.CreateResultWriter(ResultFileFormat.CSV);
csvResultWriter.GenerateResult(resultPath, result1.GetValidationDetails);
```

For more detailed specification of individual classes and interfaces you can review the [developer documentation](../developer/index.md).
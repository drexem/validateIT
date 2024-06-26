# Web Service - user documentation

Currently the web service contains two endpoints:
- **[api/Validate](#validate)** - where the particular listening controller expects a post method with particular body.
- **[api/GetResult/{resultID}](#getResult)** - where the particular listening controller expects a get method with a correct resultID parameter

Also check out some [typical usage scenarios](#TypicalUsage).

## api/Validate
<a id="validate"></a>

At this endpoint the web service receives `POST` requests with particular bodies. Example of such body:
```json
{
    "metadataURL": "https://w3c.github.io/csvw/tests/test279-metadata.json"
}
```

these bodies can contain 2 properties:
- **metadataURL** - contains URL of metadata file we want to use for validation.
- **tabularURL** - contains array of URLs of tabular files we want to validate.

If you want to start [Tabular validation](../../general/index.md#section-tabularValidation) provide just one table URL in the property `tabularURL`. For example:
```json
{
    "tabularURL": "https://w3c.github.io/csvw/tests/test042.csv"
}
```

If you want to start [Metadata validation](../../general/index.md#section-metadataValidation) provide just property `metadataURL`.
For example:
```json
{
    "metadataURL": "https://w3c.github.io/csvw/tests/test279-metadata.json"
}
```

If you want to start [Overriding validation](../../general/index.md#section-overridingValidation) provide both properties accordingly. For example:
```json
{
    "metadataURL": "https://w3c.github.io/csvw/tests/test077-metadata.json",
    "tabularURL": "https://w3c.github.io/csvw/tests/tree-ops.csv"
}
```

### Response
As a response you will either get valid response containing the `resultID` you can query at [GetResult endpoint](#getResult) with HTTP response code `200`:
```json
{
    "resultID": 15
}
```

Or you will get invalid response indicating something is wrong with the body with the HTTP response code `400`:
```json
{
    "isBodyValid": false,
    "body": {
        "metadataUrl": "invalid metadataURL",
        "tabularUrl": null,
    }
}
```
## api/GetResult/{resultID}
<a id="getResult"></a>

There are two response from server for this kind of request:
1. You provided correct `resultID` and the result is still stored at the database, then
you will ger a [correct response message](#correctResponse).
2. Otherwise you will get a [invalid response](#invalidResponse) with HTTP code `404`, indicating that the result with such `resultID` does not exist.

### Invalid response message
<a id="invalidResponse"></a>
When you make a request to the `api/GetResult/{resultID}` endpoint and you provide incorrect `resultID` or it does no longer reside in the database (results are stored for limited time period).

For example you can make a request to endpoint like this: `/api/GetResult/7` and get result:
```json
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.4",
    "title": "Not Found",
    "status": 404,
    "traceId": "00-07bebb63a5aaa62b920a07c589b14892-3b65a92a176cfc93-00"
}
```

In this case check if you typed correct `resultID` and if yes, retry the validation.

### Valid response message
<a id="correctResponse"></a>

If you provided correct `resultID` and the result still resides in the database, you will get a response message like this:

```json
{
    "ResultID": 7,
    "ValidationStatus": "ERROR",
    "ProgressStatus": "FINISHED",
    "CreatedAt": "2024-03-28T18:13:52.8947799",
    "TableGroupResult": {
        "TablesProcessed": 1,
        "MetadataIRI": "https://w3c.github.io/csvw/tests/test279-metadata.json",
        "GeneralErrors": [],
        "GeneralWarnings": [],
        "TableResults": [
            {
                "TableIRI": "https://w3c.github.io/csvw/tests/test279.csv",
                "RowsProcessed": 1,
                "ColumnsProcessed": 1,
                "CellsProcessed": 1,
                "NumberOfErrors": 1,
                "NumberOfWarnings": 0,
                "Errors": [
                    {
                        "Message": "There is datatype validation error!\r\nThe cell does not contain valid value of datatype specified in metadata file!\r\nTable url: https://w3c.github.io/csvw/tests/test279.csv\r\nCell row: 1 column: 1\r\nAdditional info: Foo\r\nMore about datatypes at:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#datatypes"
                    }
                ],
                "Warnings": []
            }
        ]
    }
}
```

this message consists of 5 objects:
- **[ResponseMessage object](#responseMessage)**
- **[TableGroupResult object](#TableGroupResult)**
- **[TableResult object](#TableResult)**
- **[Error object](#ErrorOrWarning)**
- **[Warning object](#ErrorOrWarning)**

#### ResponseMessage object
<a id="responseMessage"></a>

Example of `ResponseMessage object` when the validation has finished:
```json
{
    "ResultID": 7,
    "ValidationStatus": "ERROR",
    "ProgressStatus": "FINISHED",
    "CreatedAt": "2024-03-28T18:13:52.8947799",
    "TableGroupResult": {}
}
```
It has following properties:
- **ResultID** - contains the resultID.
- **ValidationStatus** - contains validation status i.e. if any errors or warnings occurred:
  - `UNDEFINED` - when the validation has not finished yet
  - `VALID` - the validation result is valid
  - `WARNING` - warnings occurred during the validation
  - `ERROR` - errors occurred during the validation
- **ProgressStatus** - contains progress of the validation:
  - `RECEIVED` - the validation request has been received at the server, but the validation has not started yet
  - `VALIDATING` - the validation is in progress
  - `FINISHED` - the validation has finished
  - `CANCELED` - the validation has been canceled (probably because the validation took too much time or resources).
- **CreatedAt** - contains time stamp when the response message has been created. It is the time when the validation request has been received at the server.
- **TableGroupResult** - contains [TableGroupResult object](#TableGroupResult)

#### TableGroupResult object
<a id="TableGroupResult"></a>

Example of `TableGroupResult object` when the validation has finished:
```json
{
        "TablesProcessed": 1,
        "MetadataIRI": "https://w3c.github.io/csvw/tests/test279-metadata.json",
        "GeneralErrors": [],
        "GeneralWarnings": [],
        "TableResults": []
    }
```

It has following properties:
- **TablesProcessed** - contains number of tables processed
- **MetadataIRI** - contains the metadataIRI that has been provided or located. If no metadata was provided or located this property will not be present.
- **GeneralErrors** - contains array of [Error objects](#ErrorOrWarning) which represent general errors in the table group.
- **GeneralWarnings** - contains array of [Warning objects](#ErrorOrWarning) which represent general warnings in the table group.
- **TableResults** - contains array of [TableResult objects](#TableResult) which represent results associated with individual tables in the table group.

#### TableResult object
<a id="TableResult"></a>

Example of `TableResult object` when the validation has finished:
```json
{
    "TableIRI": "https://w3c.github.io/csvw/tests/test279.csv",
    "RowsProcessed": 1,
    "ColumnsProcessed": 1,
    "CellsProcessed": 1,
    "NumberOfErrors": 1,
    "NumberOfWarnings": 0,
    "Errors": [],
    "Warnings": []
    }
```
It has following properties:
- **TableIRI** - IRI of the table that this `TableResult object` belongs to.
- **RowsProcessed** - number of rows processed in this table
- **ColumnsProcessed** - number of columns processed in this table
- **CellsProcessed** - number of cells processed in this table
- **NumberOfErrors** - number of errors in this table
- **NumberOfWarnings** - number of warnings in this table
- **Errors** - contains array of [Error objects](#ErrorOrWarning) representing the errors that occurred during validation of this table.
- **Warnings** - contains array of [Warning objects](#ErrorOrWarning) representing the warnings that occurred during validation of this table.

#### Error object and Warning object
<a id="ErrorOrWarning"></a>

`Error objects` and `Warning objects` have same structure containing only 2 properties:
- **Message** - contains string representing Error/Warning message in default language (english)
- **MessageSK** - contains string representing Error/Warning message in Slovak language

Example of `Error object`:
```json
{
    "Message": "There is datatype validation error!\r\nThe cell does not contain valid value of datatype specified in metadata file!\r\nTable url: https://w3c.github.io/csvw/tests/test279.csv\r\nCell row: 1 column: 1\r\nAdditional info: Foo\r\nMore about datatypes at:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#datatypes",
    "MessageSK": "Vyskytol sa problám s validáciou dátového typu!\r\nBunka nie je platnou hodnotou dátového typu definovaného v metadátovom súbore!\r\nURL tabuľky: https://w3c.github.io/csvw/tests/test279.csv\r\nRiadok bunky: 1 stĺpec: 1\r\nMore about datatypes:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#datatypes\r\nDodatočné info: Foo"
}
```

Example of `Warning object`:
```json
{
    "Message": "The textDirection property must have a single string value that is one of \"ltr\", \"rtl\", \"auto\" or \"inherit\" (the default).\r\nYour value: forwards\r\nMore about textDirecton property at:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties",
    "MessageSK": "textDirection vlasnosť musí máť stringovú hodnotu jednu z:  \"ltr\", \"rtl\", \"auto\" alebo \"inherit\" (default).\r\nVaša hodnota: forwards\r\nViac o textDirection vlastnosti na:\r\nhttps://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties"
}
```

### Language

If you want to receive the error messages in only one language you can do so by using parameter `?language`.

If you want to receive only `SK` messages please use:
`api/GetResult/{resultID}?language=sk-SK`

If you want to receive only `GB` messages please use:
`api/GetResult/{resultID}?language=en-GB`

If you want to receive both messages (also default case) just use:
`api/GetResult/{resultID}`
without the language parameter.


## Typical usage scenarios
<a id="TypicalUsage"></a>

So typically a user want to validate a `tabular data file` with associated `metadata file`.
The recommended approach is to start [Metadata validation](../../general/index.md#section-metadataValidation). If you want to use [Tabular validation](../../general/index.md#section-tabularValidation) or [Overriding validation](../../general/index.md#section-overridingValidation) check out how you can [adjust](#validate) the body of the validate request.

So we will send a `HTTP POST` request to the endpoint [api/Validate/](#validate) with this body:
```json
{
    "metadataURL": "https://w3c.github.io/csvw/tests/test041-metadata.json"
}
```

In response we will get valid response:
```json
{
    "resultID": 15
}
```

Then we will proceed to polling the validation result at the endpoint [api/GetResult/17](#getResult).

First we will get a response indicating that the validation is in progress indicated by the property `ProgressStatus` set to `VALIDATING`:
```json
{
    "ResultID": 15,
    "ValidationStatus": "UNDEFINED",
    "ProgressStatus": "VALIDATING",
    "CreatedAt": "2024-03-28T20:25:55.5224548",
    "TableGroupResult": {
        "TablesProcessed": 0,
        "GeneralErrors": [],
        "GeneralWarnings": [],
        "TableResults": []
    }
}
```

We will wait a few seconds and try to poll the request again [api/GetResult/17](#getResult).
Now we will get the final result:
```json
{
    "ResultID": 20,
    "ValidationStatus": "WARNING",
    "ProgressStatus": "FINISHED",
    "CreatedAt": "2024-03-28T20:27:00.795894",
    "TableGroupResult": {
        "TablesProcessed": 1,
        "MetadataIRI": "https://w3c.github.io/csvw/tests/test041-metadata.json",
        "GeneralErrors": [],
        "GeneralWarnings": [
            {
                "Message": "Value of lang property must be valid language tag!\r\nYour value: \"lang\": \"notavalidlanguagetag\"\r\nMore about language tags at:\r\nhttps://tools.ietf.org/html/bcp47",
                "MessageSK": "Hodnota lang property musí byť validný BCP language tag!\r\nVaša hodnota:  \"lang\": \"notavalidlanguagetag\"\r\nViac o language tagoch na:\r\nhttps://tools.ietf.org/html/bcp47"
            }
        ],
        "TableResults": [
            {
                "TableIRI": "https://w3c.github.io/csvw/tests/test041.csv",
                "RowsProcessed": 1,
                "ColumnsProcessed": 10,
                "CellsProcessed": 10,
                "NumberOfErrors": 0,
                "NumberOfWarnings": 0,
                "Errors": [],
                "Warnings": []
            }
        ]
    }
}
```

After a few days we remembered we have a nice validation report saved and we tried to poll it again [api/GetResult/17](#getResult). However this time we get [invalid response](#invalidResponse) because the validation result is no longer in the database. So we have no other choice but to [repeat the validation](#TypicalUsage)
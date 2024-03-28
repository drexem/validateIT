# CLI Application - user documentation

We can see all the available options for the command line application using the option `--help`
and we will see output similar to this:
```bash
ValidateCLI 1.0.0
Copyright (C) 2024 ValidateCLI

  --language       Specify the language. Available are: sk-SK (slovak language)
                   or en-GB (english - default)

  --tabularIRI     Either a file path to a local metadata file or URL to remote
                   metadata file.

  --metadataIRI    Either a file path to a local metadata file or URL to remote
                   metadata file.

  --csvPath        Path where csv result file should be generated.

  --rdfPath        Path where rdf result file should be generated.

  -v, --verbose    Wether to include more detailed statistics in the output.

  --help           Display this help screen.

  --version        Display version information.
```
Now we will take a closer look at different types of validation and how you can start them. Also we will look at how to use different CLI parameters and arguments.

So as it is described in [general information](../general/index.md) there are three types of validation and we will show you how to run all of them!

## Tabular validation
Look at the definition of [tabular validation](../general/general_info.md#section-tabularValidation).

You can run remote tabular validation by invoking the validator with arguments:
```bash
--tabularIRI https://w3c.github.io/csvw/tests/test006.csv
```

Replace the `https://w3c.github.io/csvw/tests/test006.csv` with URL to your desired remote `tabular data file`

Alternatively similarly you can run local tabular validation by invoking:
```bash
--tabularIRI /home/user/Desktop/my.csv
```

Replace the `/home/user/Desktop/my.csv` with path to your desired local `tabular data file`

## Metadata validation
Look at the definition of [metadata validation](../general/general_info.md#section-metadataValidation).

You can run remote metadata validation by invoking the validator with arguments:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/countries.json
```

Replace the `https://w3c.github.io/csvw/tests/countries.json` with URL to your desired remote `metadata file`

Alternatively similarly you can run local metadata validation by invoking:
```bash
--metadataIRI /home/user/Desktop/my_schema.json
```

Replace the `/home/user/Desktop/my_schema.json` with path to your desired local `metadata file`

## Overriding validation
Look at the definition of [overriding validation](../general/general_info.md#section-overridingValidation).


You can run remote overriding validation by invoking the validator with arguments:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/countries.json --tabularIRI https://w3c.github.io/csvw/tests/countries.csv --tabularIRI https://w3c.github.io/csvw/tests/country_slice.csv
```

Replace the `https://w3c.github.io/csvw/tests/countries.json` with URL to your desired remote `metadata file`

Replace `https://w3c.github.io/csvw/tests/countries.csv` and `https://w3c.github.io/csvw/tests/country_slice.csv` with URLs to your desired remote `tabular data files`.


Alternatively similarly you can run local metadata validation by invoking:
```bash
--metadataIRI /home/user/Desktop/my_schema.json --tabularIRI /home/user/Desktop/my_table.csv
```

Replace the `/home/user/Desktop/my_schema.json` with path to your desired local `metadata file`.

Replace the `/home/user/Desktop/my_table.csv` with path to your desired local `tabular data file`.

## Other arguments

### --language

You can change the default language that is `English` to a `Slovak` language using parameter:
```bash
--language sk-SK
```

For example if you run:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json
```

You get result:
```bash
General results:
Validation status: Warning

The textDirection property must have a single string value that is one of "ltr", "rtl", "auto" or "inherit" (the default).
Your value: forwards
More about textDirecton property at:
https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties

Results for table: https://w3c.github.io/csvw/tests/test042.csv
Validation status: Valid
```

However if you switch to a slovak language:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --language sk-SK
```
You get translated result:
```bash
Všeobecné výsledky:
Výsledok validácie: Varovanie
Všeobecné varovania:
textDirection vlasnosť musí máť stringovú hodnotu jednu z:  "ltr", "rtl", "auto" alebo "inherit" (default).
Vaša hodnota: forwards
Viac o textDirection vlastnosti na:
https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties

Výsledky pre tabuľku: https://w3c.github.io/csvw/tests/test042.csv
Výsledok validácie: Valid
```

### --csvPath
You can specify that you want to create a validation report to a file in `csv` format using the parameter `--csvPath`

For example you can invoke:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --csvPath /home/user/Desktop/result.csv
```

and afterwards you will find the validation result in format `csv` located at path `/home/user/Desktop/result.csv`

Change the `/home/user/Desktop/result.csv` accordingly to satisfy your particular needs.


### --rdfPath
You can specify that you want to create a validation report to a file in `rdf` format using the parameter `--rdfPath`

For example you can invoke:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --rdfPath /home/user/Desktop/result.ttl
```

and afterwards you will find the validation result in format `rdf` located at path `/home/user/Desktop/result.ttl`

Change the `/home/user/Desktop/result.ttl` accordingly to satisfy your particular needs.

### -v / --verbose

You can turn on more detailed validation report by invoking parameter `--verbose` or its short version `-v`.

For example you can run non-verbose version:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json 
```
and get result:
```bash
General results:
Validation status: Warning

The textDirection property must have a single string value that is one of "ltr", "rtl", "auto" or "inherit" (the default).
Your value: forwards
More about textDirecton property at:
https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties

Results for table: https://w3c.github.io/csvw/tests/test042.csv
Validation status: Valid
```

Or you can run verbose version:
```bash
--metadataIRI https://w3c.github.io/csvw/tests/test042-metadata.json --verbose
```

and get result:
```bash
General results:
Validation status: Warning
Statistics:
Validated tables: 1
Used metadata: https://w3c.github.io/csvw/tests/test042-metadata.json

The textDirection property must have a single string value that is one of "ltr", "rtl", "auto" or "inherit" (the default).
Your value: forwards
More about textDirecton property at:
https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#inherited-properties

Results for table: https://w3c.github.io/csvw/tests/test042.csv
Validation status: Valid
Statistics:
Validated rows: 1
Validated columns: 10
Validated cells: 10
```

This verbose version contain additional information like number of validated rows, columns and cells...
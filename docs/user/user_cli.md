## CLI Application - user documentation
<a id="section-CLI"></a>

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

So as it is described in [general information](general_info.md) there are three types of validation and we will show you how to run all of them!

### Tabular validation
Look at the definition of [tabular validation](general_info.md#section-tabularValidation).

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

### Metadata validation
Look at the definition of [metadata validation](general_info.md#section-metadataValidation).

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

### Overriding validation
Look at the definition of [overriding validation](general_info.md#section-overridingValidation).


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

### Other arguments
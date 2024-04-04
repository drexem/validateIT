---
sidebar_position: 6
---

# General information about validation

## Validation types
The validation has 3 types:
- **Tabular validation** <a id="section-tabularValidation"></a> - this validation begins from the csv file and tries to locate associated metadata
as defined in [Metadata-localization](https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#locating-metadata). 
- **Metadata validation** <a id="section-metadataValidation"></a>- this validation begins from the metadata file and then validates all the csv files
referenced from this metadata file. 
- **Overriding validation** <a id="section-overridingValidation"></a> - this is combination of both previous cases. If the validator is provided with both `metadata file` and also `tabular data files` it will not continue to locate any metadata for tabular data files and moreover it will override the references in metadata file [table descriptors](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#tables) (property url) to the IRIs of the `tabular data files` you have provided in the exact same order you provided.

### Overriding example

Lets consider we have a metadata file called `countries.json` with following content:
```json
{
  "@context": "http://www.w3.org/ns/csvw",
  "tables": [{
    "url": "countries.csv"
  }, {
    "url": "country_slice.csv",
  }]
}
```

So firstly, if you want to process such metadata file as overriding you need to provide correct number of tabular data files. In case `metadata file` containing [table descriptor](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#tables) you need to provide on tabular data file, in case of containing [table group descriptor](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#table-groups) you need to provide same number `tabular data files` as there are [tables descriptors](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#tables) in the property `tables` of the [table group descriptor](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#table-groups).

In this case you need to provide exactly 2 `tabular data files`. Lets say they are called `overriding1.csv` and `overriding2.csv` and are located at the same location as the `countries.json`.

So when you start the overriding validation the validator will override the references like this:
```json
{
  "@context": "http://www.w3.org/ns/csvw",
  "tables": [{
    "url": "overriding1.csv"
  }, {
    "url": "overriding2.csv",
  }]
}
```
and continue validating as if starting from [metadataFile](#section-metadataValidation) with the contain as above.

This can be useful if you want to quickly validate multiple csv files against one schema but do not want to rewrite the references in `metadata file`.

For more info about metadata localization you can read the documentation 
[here](https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#locating-metadata).
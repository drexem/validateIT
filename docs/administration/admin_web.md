# Web App and Web Service - administration documentation
Here you will find the information needed for running, configuring and deploying of the Web App and Web Service. Don't forget to check out 

Content:
- **[Deploy using docker](#docker)**
- **[Configuration](#configuration)**
## Docker

To use web app and web service follow these steps:
1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the [repository](https://gitlab.mff.cuni.cz/kolcunm/csv-validator).
2. Relocate to the directory [CSV_Validator](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/CSV_Validator).
3. Run:
```bash
docker compose up
```

The web app will be available to you on the address [http://localhost:9001](http://localhost:9001) and
web service is working at the address [http://localhost:8001](http://localhost:8001). The supporting database
is running on port `10001` but you should not need it.


Please make sure that you have available ports `8001` `9001` `10001` available for the database,web service and web app, or you can [configure](#ports) them.

## Configuration

### Ports

You can configure the ports of the individual components in the [.env](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/CSV_Validator/.env) file.
You can configure:
- **WEB_SERVICE_PORT** -> set the port number to your desired port. (**8001 default**)
- **WEB_APP_PORT** -> set the port number to your desired port. (**9001 default**)
- **DB_PORT** -> set the database port number to your desired port (**10001 default**)

### Database cleaning

You can configure the database cleaning period and item storage lifetime in the file [appsettings.json](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/CSV_Validator/WebService/appsettings.json?ref_type=heads).

```json
"CleaningSettings": {
    "CleaningIntervalMinutes": 60,
    "RecordRetentionMinutes": 60
  }
```

Properties:
- **CleaningIntervalMinutes** - specifies how much time will pass between two cleaning intervals.
- **RecordRetentionMinutes** - specifies for how long will one result be stored in the database.

### Web app config

You can adjust the behavior of web app with the [config.json](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/CSV_Validator/WebApp/config.json?ref_type=heads) and its properties:
```json
{
  "PollingInterval": 2000,
  "MaxLocalFileSizeForTabularDataMB": 20,
  "MaxLocalFileSizeForMetadataMB": 20,
  "MaxTabularUrlsOverriding": 5,
  "MaxErrorsShowed": 15,
  "MaximumTabularFiles":  5
}
```
You can configure:
- **PollingInterval** - Defines time in seconds between pollings of result while waiting for it to finish in the validate views. **(Default 2000)**
- **MaxLocalFileSizeForTabularDataMB** - defines maximum local tabular file size user can provide in MB. **(Default 20MB)**
- **MaxLocalFileSizeForMetadataMB** - defines maximum local metadata file size user can provide in MB. **(Default 20MB)**
- **MaxTabularUrlsOverriding** - defines max count of tabular URLs user can provide in the [Overriding validation](../general/index.md#validation-types) remote. **(Default 5)**
- **MaxErrorsShowed** - defines how many errors of one type can be shown in the result page. **(Default 15)**
- **MaximumTabularFiles** - defines how many local tabular data files user can provide in the [Overriding validation](../general/index.md#validation-types) local. **(Default 5)**
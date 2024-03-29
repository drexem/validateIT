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


Please make sure that you have available ports `8001` `9001` `10001` available for the database,
web service and web app.

## Configuration
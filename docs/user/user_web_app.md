# Web App - user documentation

Here we will walk you through some typical usage scenarios and teach you how to use our Web application.
Before starting make sure you have read [general information](../general/index.md) about the validation.

We will use some local files to which we will always provide links for you to download them and try it out yourself. Generally the local example files are all situated [here](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/Docs/User/WebApp/Examples?ref_type=heads) so if you have cloned [the repository](https://gitlab.mff.cuni.cz/kolcunm/csv-validator) you have them ready.

## General information
Here will be really, really basic information about how to navigate around the webpage, which is not really interesting to people that now their way around the internet. You can [skip](#typical-usage-scenarios) to the [typical usage scenarios](#typical-usage-scenarios).
### Main navigation 
The main navigation bar is located at the top left corner of our web page:
![main navigation](img/main_navigation.png)
And you can navigate to the Validation screens by clicking on the `ValidateIT` or `Validate` links, to the about page by clicking on `About` link or to the contact information by clicking on the `Contact` link.

### Selecting a language
Firstly we can switch between the two language variants of the web application by clicking on the language dropdown located at the top right corner of your screen:
![language dropdown zoomed out](img/language_dropout_maximized.png)
And then choosing the language variant of the website you want to use (English/Slovak):
![language dropdown zoomed in](img/language_dropdown_zoomedin.png)

### Checking contact information

You can check the contact information by clicking on contact link in the [Main navigation](#main-navigation) or by clicking contact link in the `footer`:
![contact](img/contact.png)
And you will be redirected to a page like this:
![contact](img/contact_page.png)

### Checking about information

You can check information about the validator and get links to useful stuff by clicking on the `About` link in the [Main navigation](#main-navigation):
![about navigation](img/about_navigation.png)

### Validate screens second navigation
If you are located at one of validate screens you can choose between different [types of validation](../general/index.md#validation-types) with the second navigation menu:
![second navigation](img/second_nav_menu.png)
You can choose between:
- **[Tabular validation](../general/index.md#section-tabularValidation)** - by clicking on the link `Tabular Data`.
- **[Metadata validation](../general/index.md#section-metadataValidation)** - by clicking on the link `Metadata`
- **[Overriding validation](../general/index.md#section-overridingValidation)** - by clicking on the link `Both (overriding)`

### Validate screens third navigation
If you are located at one of validate screens you can typically choose between the local validation and remote validation (except for [Metadata validation](../general/index.md#section-metadataValidation)) by third navigation menu:
![third navigation](img/third_navigation.png)

### Result page details
On the result page you can see the general information about the validation at the top of the screen:
![result page general](img/result_page_general.png)
It contains following properties:
- **Validation status** - this is the main property. It contains general status of validation:
  - `VALID` - no ERRORS or WARNINGS occurred during the validation
  - `WARNING` - WARNINGS occurred during the validation but no ERRORS occurred
  - `ERROR` - ERRORS occurred during the validation and possibly some WARNINGS too.
- **Tables processed** - contains number of tables processed during the validation
- **Used metadata IRI** - contains IRI of metadata file used for the validation. If you did not provide any you will see `None metadata were used` and small warning, because the best practice is to use metadata file, so maybe you just forgot to add it or you wanted it to be located but it was not.
- **Collapsibles of ERRORS and WARNINGS** - under these information you can see collapsibles of errors and warnings grouped by their type. Validator only shows first 15 errors of the same type, all errors can be shown on [another page](#validation-of-remote-csv-file-pp3).

You can see information related to one of the tables that has been validated down below:
![result page table](img/result_page_table.png)
It contains the following properties:
- **Validation status** - this contains validation status of particular table. Keywords have the same meaning as in the general case.
- **Columns processed** - how many columns have been processed in this table.
- **Rows processed** - how many rows have been processed in this table.
- **Cells processed** - how many cells have been processed in this table.
- **Collapsibles of ERRORS and WARNINGS** - under these information you can see collapsibles of errors and warnings grouped by their type. Validator only shows first 15 errors of the same type, all errors can be shown on [another page](#validation-of-remote-csv-file-pp3).

## Typical usage scenarios

Here we will walk through some typical use cases. As mentioned [before](#web-app---user-documentation) we will work with some example files located [here](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/Attachments/Web_Service?ref_type=heads) so you can download them and work with us step by step!

### Validation of local CSV file (PP1.)
Here we will work with the [PP1/example.csv](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP1/example.csv?ref_type=heads)

First lets locate to the correct validate screen.
1. Click on the `Validate` link in the [Main navigation](#main-navigation).
2. Click on the `Tabular Data` link in the [Second navigation](#validate-screens-second-navigation).
3. Click on the `Local Files` link in the [Third navigation](#validate-screens-third-navigation).

Now click on the `Drag&Drop` field:
![drag and drop click tabular](img/drag_and_drop_click_tabular.png)
File select window will open and we select our file and click open:
![pp1 select file](img/pp1_file_select.png)
Afterwards your page should look like this:
![selected tabular file local](img/selected_tabular_file_local.png)
Now start the validation by clicking the `Start Validation` button:
![start validation](img/start_validation_button_local_tabular.png)
After the validation is done, you will be relocated to a result page:
![validation result page](img/validation_result_page.png)
We can see that there has been one Columns count mismatch error:
![columns count mismatch error detail](img/columns_count_mismatch_error_detail.png)
And that it belongs to the table `example.csv` as it contains different number of columns in some row.

### Validation of local metadata file (PP2. + PP5.)

As the validation of just the local metadata file itself does not make much sense because metadata file must contain [Table descriptor](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#tables) of at least one table, we need to upload local tabular data file with it.

We will be working with the files in directory [PP2/](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP2/)

First lets locate to the correct validate screen.
1. Click on the `Validate` link in the [Main navigation](#main-navigation).
2. Click on the `Both (overriding)` link in the [Second navigation](#validate-screens-second-navigation).
3. Click on the `Local Files` link in the [Third navigation](#validate-screens-third-navigation).

Now click on the top `Drag&Drop` field:
![pp2 top drag and drop](img/pp2_top_drag_and_drop.png)
Select the metadata file called `countries.json`:
![pp2 metadata select](img/pp2_metadata_select.png)
Click on the bottom `Drag&Drop` field:
![pp2 bottom drag drop](img/pp2_bottom_drag_drop.png)
Select the files `countries.csv` and `country_slice.csv`:
![pp2 tabular select](img/pp2_tabular_select.png)
Make sure that the `countries.csv` is first, if you have wrong order you need to sort them like this:
![pp2 wrong order](img/pp2_wrong_order.png)
Start the validation by clicking `Start Validation` button:
![pp2 start validation](img/pp2_start_validation.png)
Afterwards you will see the result page:
![pp2 result page](img/pp2_result_page.png)
We can see that the files are correct and none validation error has occurred!

### Validation of remote CSV file (PP3.)

Now we will use file located at [PP3/example.csv](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP3/example.csv) so we wil work with the link `https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP3/example.csv`.

First lets locate to the correct validate screen.
1. Click on the `Validate` link in the [Main navigation](#main-navigation).
2. Click on the `Tabular Data` link in the [Second navigation](#validate-screens-second-navigation).
3. Click on the `Remote Files` link in the [Third navigation](#validate-screens-third-navigation).

Insert the `https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP3/example.csv` into the `URL input` field:
![pp3 URL input](img/pp3_url_input.png)
Start the validation by clicking on the `Start Validation` button:
![pp3 start validation](img/pp3_start_validation.png)
Afterwards you will see this result page:
![pp3 result page](img/pp3_result_page.png)
We can see that the error `Char outside of quotes` occurred more than 15 times, but the validator is only showing first 15 of errors of the same type. To see all of the errors associated with the table `https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP3/example.csv` we can click the `View all Errors` button:
![pp3 view all errors](img/pp3_view_all_errors.png)
This will relocate us to a site where we can see all of the 112 occurrences of the `Char outside of quotes` error:
![pp3 all errors](img/pp3_all_errors.png)


### Validation of remote metadata file (PP4.)
For this use case we will borrow one of the [integration tests](https://w3c.github.io/csvw/tests/#manifest-validation) specifically [test042](https://w3c.github.io/csvw/tests/#manifest-validation#test042).
Contents of this file will be are saved at [PP4/](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/Docs/User/WebApp/Examples/PP4).

First lets locate to the correct validate screen.
1. Click on the `Validate` link in the [Main navigation](#main-navigation).
2. Click on the `Metadata Data` link in the [Second navigation](#validate-screens-second-navigation).
3. Click on the `Remote Files` link in the [Third navigation](#validate-screens-third-navigation).

Insert the `https://w3c.github.io/csvw/tests/test042/csv-metadata.json` into the `URL input` field:
![pp4 input](img/pp4_input.png)
Start the validation by clicking on the `Start Validation` button: 
![pp4 start validation](img/pp4_start_validation.png)
Afterwards you will see the result page:
![pp4 result page](img/pp4_result_page.png)
Here the warning of wrong text direction property value has occurred.

### Validation of remote table group with remote metadata file (PP6.)

For this use case we will borrow one of the [integration tests](https://w3c.github.io/csvw/tests/#manifest-validation) specifically [test097](https://w3c.github.io/csvw/tests/#manifest-validation#test097).
Contents of this file will be are saved at [PP6/](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/tree/master/Docs/User/WebApp/Examples/PP6).

First lets locate to the correct validate screen.
1. Click on the `Validate` link in the [Main navigation](#main-navigation).
2. Click on the `Both (overriding)` link in the [Second navigation](#validate-screens-second-navigation).
3. Click on the `Remote Files` link in the [Third navigation](#validate-screens-third-navigation).

Insert the `https://w3c.github.io/csvw/tests/test097-metadata.json` into the first `URL input` field:
![pp6 first insert](img/pp6_first_insert.png)
Insert the `https://w3c.github.io/csvw/tests/countries.csv` into the second `URL input` field:
![pp6 second insert](img/pp6_second_insert.png)
Add third input field by clicking `Add tabular file` button:
![pp6 add url input](img/pp6_add_url_input.png)
Insert the `https://w3c.github.io/csvw/tests/country_slice.csv` into the third `URL input` field:
![pp6 third insert](img/pp6_third_insert.png)
Start the validation by clicking on the `Start Validation` button: 
![pp6 start validation](img/pp6_start_validation.png)
Afterwards you will see the result page:
![pp6 result page](img/pp6_result_page.png)
Here the warning of wrong object property value has occurred.


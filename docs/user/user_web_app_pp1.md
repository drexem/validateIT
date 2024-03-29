### Validation of local CSV file (PP1.)
Here we will work with the [PP1/example.csv](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP1/example.csv?ref_type=heads)

First lets locate to the correct validate screen.
1. Click on the `Validate` link in the [Main navigation](user_web_app.md#main-navigation).
2. Click on the `Tabular Data` link in the [Second navigation](user_web_app.md#validate-screens-second-navigation).
3. Click on the `Local Files` link in the [Third navigation](user_web_app.md#validate-screens-third-navigation).

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

### Validation of local metadata file (PP2. + PP5.)

As the validation of just the local metadata file itself does not make much sense because metadata file must contain [Table descriptor](https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#tables) of at least one table, we need to upload local tabular data file with it.

We will be working with the files in directory [PP2/](https://gitlab.mff.cuni.cz/kolcunm/csv-validator/-/blob/master/Docs/User/WebApp/Examples/PP2/)

First lets locate to the correct validate screen.
1. Click on the `Validate` link in the [Main navigation](./#main-navigation).
2. Click on the `Both (overriding)` link in the [Second navigation](./#validate-screens-second-navigation).
3. Click on the `Local Files` link in the [Third navigation](./#validate-screens-third-navigation).

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
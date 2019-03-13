# JSDatagrid
Copy paste tabular data and fiddle with F12

At the console you can do something like this :

    dataTable.colXIsNumeric = false
    dataTable.colYIsNumeric = true

    var q = dataTable.getSelectionValuesObject()
    for(var c = 0; c < q.items[0].length; c++){ console.log(q.items[0][c])}

or without changing the values :

    var q = dataTable.getSelectionValuesObjectNotNumeric()

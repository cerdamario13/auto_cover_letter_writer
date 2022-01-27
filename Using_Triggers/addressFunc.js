function onEditFunc(e) {
    //We need to have the same code that access the sheet
    //First we need access to the sheet
    var sheet_id = "1nGqwUjMVLTQedyrGmLZlXKfUwMOnNGS5uMI8WInHDUA" //This is foud in the URL. You can also use the whole URL by calling **openByUrl**
    var mainSheet = SpreadsheetApp.openById(sheet_id).getSheetByName("Enter Info");
  
    var standardAddress = mainSheet.getRange("B16").getValue();
    var individual = mainSheet.getRange("B19").getValue();
    var custom = mainSheet.getRange("B22").getValue();
  
    console.log(e.range);
    
  }
  
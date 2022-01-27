function main_func() {
    //First we need access to the sheet
    var sheet_id = "1nGqwUjMVLTQedyrGmLZlXKfUwMOnNGS5uMI8WInHDUA" //This is foud in the URL. You can also use the whole URL by calling **openByUrl**
    var mainSheet = SpreadsheetApp.openById(sheet_id).getSheetByName("Enter Info");
  
    //
    //Well start by getting all the values from the sheet in order
    //
  
    //Getting Date
    var todaysDate = mainSheet.getRange("B4").getValue(); //Getting the value - can also use (row, column) notation
    var anotherDate = mainSheet.getRange("B5").getValue();
  
    if (todaysDate == false && anotherDate == ""){
      SpreadsheetApp.getUi().alert("Make sure that today's date is checked or Another Date is filled."); //alert
    } else if(todaysDate !== false && anotherDate == ""){
      var useThisDate = mainSheet.getRange("C4").getValue();
    }else if(anotherDate !== "" && todaysDate == false){
      var useThisDate = anotherDate
    } else{
      SpreadsheetApp.getUi().alert("Both dates cannot be used!");
    }
  
    //Getting name of company and Role
    var nameCompany = mainSheet.getRange("A8").getValue(); //When dealing with cells merged, you can use the left most cell to get the value.
    var nameRole = mainSheet.getRange("A11").getValue();
    var article = mainSheet.getRange("D11").getValue();
  
    //Getting Letter Addressed to:
  
    //For this one, we could use if statments to make sure only one is selected. But instead, we'll use onEdit() trigger to show you how is done.
    
  
    
  }//main_func brace
  
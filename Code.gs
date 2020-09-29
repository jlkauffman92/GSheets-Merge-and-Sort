function compileAndSort(...sheets) {
  
  // Pulls however many arguments and turn them into an array
  var sheets = Array.prototype.slice.call(arguments);
  //initialize our, now empty final array
  var mergedData = [];
  var finalData = [];
  
  // Loop through each sheet passed to the function
  for(sheet of sheets) {
    //take whatever is in our result array and mergeshot it with the next sheet
       mergedData = mergeSort(mergedData, sheet)  
    }
    //Sort the data again to be sure
    mergedData = mergedData.sort(sortFirstColumn);
    
    //check for blank cells in the first two rows
    for (row of mergedData) {
       if((row) && (row[1] != '') && (row[0] != '')){
           finalData.push(row);
       }
    
  }

    return finalData;
  
 }
    //sort function that sorts by the first column
    function sortFirstColumn(a,b){
    if(a[0] === b[0]){
       return 0;
    }
    else {
    return (a[0] < b[0]) ? 1 : -1;
    }
  }

function mergeSort(left, right) {
    
    //initize variables
    var inxLeft = 0;
    var inxRight = 0;
    //sum the length of our two input arrays to find out what how long the merged array should be    
    var finalLength = left.length + right.length;
    //initialize our, now empty, final array
    var result = [];
    
    //Continue to preform a merge sort until the result array is the lenght it should be
    while (result.length <= finalLength){
       //Check to see if there actually is an item at this index, if not, push and advance the other array
       if (!left[inxLeft]){
       		result.push(right[inxRight]);
          if (inxRight < (right.length)) {
              	 inxRight++
          }
       }
       else if (!right[inxRight]){
       				result.push(left[inxLeft]);
               if (inxLeft < (left.length)) {
              	 inxLeft++
              }		
       }
      //Compare the first  column of the selected row, push the larger row, and advance it
       else if(left[inxLeft][0] > right[inxRight][0]){
              result.push(left[inxLeft]);
              
              if (inxLeft < (left.length)) {
              	 inxLeft++
              }
             
       }
      //If they're the same push both
       else if(left[inxLeft][0] == right[inxRight][0]) {
            result.push(left[inxLeft]);
            result.push(right[inxRight]);
          
            if (inxLeft < (left.length)) {
              	 inxLeft++
              }
            if (inxRight < (right.length)) {
              	 inxRight++
              }

       }
       else {
            result.push(right[inxRight]);

            if (inxRight < (right.length)) {
              	 inxRight++
             }
       }
   }
   return result;   
  
}
    

function countSwaps(a) {
    // Write your code here
    let swap = 0;
    for(let i = 0; i < a.length; i++){  
        let temp = 0;
    for(let j = i + 1; j < a.length; j++){
      if(a[i]>a[j]){
          
          temp = a[i];
          a[i] = a[j];
          a[j] = temp;
          
          swap++;
      }  
      }
    }
    
    console.log("Array is sorted in " + swap + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length-1]);
}

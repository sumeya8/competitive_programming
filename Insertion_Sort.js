function insertionSort1(n, arr) {
    // Write your code here
   
   const target = arr[n - 1];

    while (arr[--n - 1] > target) {
    arr[n] = arr[n - 1];

    console.log(arr.join(' '));
         }

      arr[n] = target;
      console.log(arr.join(' '));


    
 

}

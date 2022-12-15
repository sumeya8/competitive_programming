function gradingStudents(grades) {
    // Write your code here
    let output = [];
    for(let i = 0; i < grades.length; i++){
        let nextMultiple = Math.ceil(grades[i]/5) * 5;
        let num = nextMultiple - grades[i];
        if(num < 3 && grades[i] >= 38){
          output.push(nextMultiple);      
        }
        else {
            
         output.push(grades[i])
            
        }
    }
    
    return output;

}

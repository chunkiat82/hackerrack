function insertSort(array){
  
    for(var i = 1; i < array.length; i++){
        var value = array[i];
        var j = i - 1;
        console.log(`array[i] =${array[i]} j=${j} array[j] =${array[j]}`);

        while(j >= 0 && array[j] > value){
            console.log(`array[j] =${array[j]} value = ${value}`);
            array[j + 1] = array[j];
            j = j - 1;

        }
        array[j + 1] = value;
    }
 
}
var array = [1,3,9,8,2,7,5]
insertSort(array);
console.log(array);

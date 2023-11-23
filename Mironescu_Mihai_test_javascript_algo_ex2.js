// Function f21 that verifies if an array is valid
// meaning that all 9 positions are numbers and different from each other
function f21(array9) {
    var ind = 0;
    if (array9.length !== 9) {
      ind++;
    }
    
    for (var i = 0; i < 9; i++) {
      if (array9[i] < 1 || array9[i] > 9 || isNaN(array9[i]) ) {
      ind++;
      }
    }
    var setOf9 = new Set(array9)
    if (setOf9.size !== array9.length) {
      ind++;
    }
    if(ind > 0){
      return false;
    } else {
      return true;
    }
  }
//Declare bidimensional Array
var to_verify = new Array(9);
for (var i = 0; i < 9; i++) {
    to_verify[i] = new Array(9);
}
//Convert array from one dimension to two
function f11(oldTable, newTable) {
    for (var i = 0; i < 9; i++) {
        var cell = oldTable[i].split(" ");
        for (var j = 0; j < 9; j++) {
            newTable[i][j] = cell[j];
        }
    }
}
//Create HTML table by concatenation
function f12(newTable) {
    var tableau = '<table>';
    for (var i = 0; i < 9; i++) {
        tableau += '<tr>';
        for (var j = 0; j < 9; j++) {
            tableau += '<td>' ;
            tableau += newTable[i][j] ;
            tableau += '</td>';
        }
        tableau += '</tr>';
    }
    tableau += '</table>';
    // Display Sudoku table
    document.getElementById('ex1').innerHTML = tableau; 

}

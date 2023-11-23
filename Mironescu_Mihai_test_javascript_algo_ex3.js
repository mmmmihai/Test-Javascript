// Declaration of a one dimensional array for anomalies
var errorLine = []; 

// Fonction f31 that checks the lines of the table to_verify
function f31() {
    for (var i = 0; i < 9; i++) {
        var row = to_verify[i]; 
        if (!f21(row)) {
            errorLine.push("Line " + (i + 1) + " incorrect " + row);
            console.log (errorLine,f21(row));
        }
    }
}

// Fonction f32 that checks the columns of the table to_verify
function f32() {
    for (var j = 0; j < 9; j++) {
        var column = [];
        for (var i = 0; i < 9; i++) {
            column.push(to_verify[i][j]); 
        }
        if (!f21(column)) {
            errorLine.push("Column " + (j + 1) + " incorrect " + column);
        }
    }
}

// Fonction f33 that checks the lines of the table to_verify
function f33() {
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            var region = [];
            for (var i = r * 3; i < (r + 1) * 3; i++) {
                for (var j = c * 3; j < (c + 1) * 3; j++) {
                    region.push(to_verify[i][j]); 
                }
            }
            if (!f21(region)) {
                errorLine.push("Region " + (r * 3 + c + 1) + " incorrect " + region);
            }
        }
    }
} 
var rect = {
    perimeter: (x, y) => (2*(x+y)),
    area: (x, y) => (x*y)
};


function solveRet(l, b) {
    console.log("Solving for rectangle with l=  " + l + " and b = " + b);

    if( l<=0 || b <= 0) {
        console.log( "rectangle dimensions should be greater than zero: l = " + l  + " and b = " + b)
    }
    else {
        console.log(" Thes area of the rectangle is " + rect.area(l, b));
        console.log(" Thes Perimeter of the rectangle is " + rect.perimeter(l, b));
    }
}

solveRet(2, 4)
solveRet(4, 6)
solveRet(1, 0)
solveRet(-6, 0)

// Is there a way to use prototypal inheritance to make 
// signaling a domain-driven event common behavior?

// http://uttamkini.wordpress.com/2012/07/08/fighting-my-javascript-demons-with-domain-driven-javascript/
//

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        "use strict";
        function F() {}
        F.prototype = o;
        return new F();
    };
}


var t = 0;


function getMidpoint(p1, p2) {
    "use strict";
    var midPoint = {};
    midPoint.x = (p2.x - p1.x) / 2;
    midPoint.y = (p2.y - p1.y) / 2;
    return midPoint;
}


function Triangle(p1, p2, p3) {
    "use strict";
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.x = 0;
    this.y = 0;
}

Triangle.prototype.getCentroid = function () {
    "use strict";
    var x, y, centroid, midPoint, thirdPoint;

    midPoint = getMidpoint(this.p1, this.p2);
    thirdPoint = this.p3;

    x = thirdPoint.x + ((2 / 3) * (midPoint.x - thirdPoint.x));
    y = thirdPoint.y + ((2 / 3) * (midPoint.y - thirdPoint.y));
    centroid = {};
    centroid.x = x;
    centroid.y = y;
    return centroid;
};

exports.testMidpoint = function (test) {
    "use strict";
    var p1, p2, midPoint;

    p1 = {};
    p1.x = 0;
    p1.y = 0;

    p2 = {};
    p2.x = 12;
    p2.y = 0;

    midPoint = getMidpoint(p1, p2);

    test.equal(midPoint.x, 6);
    test.equal(midPoint.y, 0);
    test.done();
};

exports.testCentroid = function (test) {
    "use strict";
    var p1, p2, p3, centroid;
    p1 = {};
    p1.x = 0;
    p1.y = 0;
    p2 = {};
    p2.x = 12;
    p2.y = 0;
    p3 = {};
    p3.x = 3;
    p3.y = 9;

    t = new Triangle(p1, p2, p3);

    centroid = t.getCentroid();

    test.equal(centroid.x, 5);
    test.equal(centroid.y, 3);
    test.done();
};


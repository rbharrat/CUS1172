var area2 = function(width) {
    return width * width;
}

exports.area_circle = (r) => {
    return 3.14 * r * r;
}
exports.area = area2;

exports.perimeter = width => 4*width;

exports.perim_circle = (r) => {
    return 2 * 3.14 * r;
}

exports.volume_sphere = (r) => {
    var d = r * r * r;
    return (4/3)*3.14*3375
}

exports.volume_cylinder = (r,h) => {
    const d = r * r;
    return 3.14*d*h;
}
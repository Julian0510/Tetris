
class Shape {
    static J = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 1]
    ]
    static L = [
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 1]
    ]
    static O = [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ]
    static S = [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ]
    static Z = [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ]
    static T = [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1]
    ]
    static I = [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ]
}
var piece = {
    currentShape: Shape.J,
    nextShape: null,
    x: 4,
    y: -1
}

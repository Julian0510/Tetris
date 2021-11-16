
class Shape {
    static J = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 1]
    ]
    static L = [
        [0, 0, 0],
        [0, 0, 2],
        [2, 2, 2]
    ]
    static O = [
        [0, 0, 0],
        [3, 3, 0],
        [3, 3, 0]
    ]
    static S = [
        [0, 0, 0],
        [0, 4, 4],
        [4, 4, 0]
    ]
    static Z = [
        [0, 0, 0],
        [5, 5, 0],
        [0, 5, 5]
    ]
    static T = [
        [0, 0, 0],
        [0, 6, 0],
        [6, 6, 6]
    ]
    static I = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [7, 7, 7, 7],
        [0, 0, 0, 0]
    ]
    static randShape(){
        let shapes = [Shape.J, Shape.L, Shape.O, Shape.S, Shape.Z, Shape.T, Shape.I];
        return shapes[Math.floor(Math.random() * 7)];
    }
}



enum State { init, firstFigure, secondFigure, result }

export class Calculator {
    constructor(public display = '',
                public currentState = State.init,
                public firstFigure = 0,
                public secondFigure = 0,
                public result = 0,
                public operator = '') { }
}

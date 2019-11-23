export class TestParameterModel {
    public title: string;
    public questionCount: number;
    public subject: string;
    public min?: number;
    public max?: number;

    constructor(param: TestParameterModel) {
        this.title = param.title;
        this.questionCount = param.questionCount;
        this.subject = param.subject;
        this.min = param.min;
        this.max = param.max;
    }
}
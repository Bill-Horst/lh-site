export class TestLinkModel {
    public title: string;
    public subtitle: string;
    public imageLink: string;
    public description: string;
    public questionCount: number;
    public subject: string;
    public min?: number;
    public max?: number;

    constructor(link: TestLinkModel) {
        this.title = link.title;
        this.subtitle = link.subtitle;
        this.imageLink = link.imageLink;
        this.description = link.description;
        this.questionCount = link.questionCount;
        this.subject = link.subject;
        this.min = link.min;
        this.max = link.max;
    }
}
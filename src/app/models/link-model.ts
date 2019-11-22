export class LinkModel {
    public title: string;
    public subtitle: string;
    public url: string;
    public imageLink: string;
    public description: string;

    constructor(link: LinkModel) {
        this.title = link.title;
        this.subtitle = link.subtitle;
        this.url = link.url;
        this.imageLink = link.imageLink;
        this.description = link.description;
    }
}
export class PostBodyModel {
    constructor(id: number, postId: number, text: string) {
        this.id = id;
        this.postId = postId;
        this.text = text;
    }

    id: number;
    postId: number;
    text: string;
}

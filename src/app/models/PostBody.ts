export class PostBodyModel {
    id: number;
    postId: number;
    text: string;
    constructor(id: number, postId: number, text: string) {
        this.id = id;
        this.postId = postId;
        this.text = text;
    }
}

export interface Post {
   API: string;
   Description: string;
   Auth: string;
   HTTPS: boolean;
   Cors: string;
   Link: string;
   Category: string;
}
export interface GetPostsInterface {
   count: number;
   entries: Array<Post>;
}

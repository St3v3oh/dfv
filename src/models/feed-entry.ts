export interface FeedEntry {
    Author?: string;
    Categories: Array<string>;
    Content: string;
    Description: string;
    Enclosure?: Map<string, any>;
    Guid: string;
    Link: string;
    PubDate: Date;
    Thumbnail?: string;
    Title: string;
}

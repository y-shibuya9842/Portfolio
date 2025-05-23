type Image = {
    url: string;
    height?: number;
    width?: number;
};

export type work = {
    id: string;
    title: string;
    description: string;
    image: Image;
    page: string;
    github: string;
};
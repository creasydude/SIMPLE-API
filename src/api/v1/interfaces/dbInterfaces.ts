export interface Options {
    useNewUrlParser: boolean,
    useUnifiedTopology: boolean,
    useCreateIndex: boolean,
    useFindAndModify: boolean,
}

export interface BookInterface {
    title: string;
    author: string;
    description: string;
}
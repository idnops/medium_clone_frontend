interface PostDto {
    id: number,
    author: string,
    community?: string,
    title: string,
    date: string,
    duration: string,
    isMemberOnly: boolean,
    isBookAuthor?: boolean
}

export type { PostDto }
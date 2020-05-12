export interface Product {
    id: string;
    volumeInfo: {
        NameProduct: string;
        Price: number;
        Quantity: number;
        Total: number;
        imageLink: {
            thumbnail: string;
            smallThumbnail: string;
        },
    };
}

export function DetailProduct(): Product {
    return {
        id: '1',
        volumeInfo: {
            NameProduct: 'product1',
            Price: 1,
            Quantity: 2,
            Total: 2,
            imageLink: {
                thumbnail: 'string',
                smallThumbnail: 'string',
            },
        },
    };
}

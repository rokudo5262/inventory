export interface OrderInformation {
    id: string;
    volumeInfo: {
        NameProduct: string;
        Price: number;
        Quantity: number;
        Discount: number;
        Total: number;
    };
}

export function Information(): OrderInformation {
    return{
        id: '1',
        volumeInfo: {
            NameProduct: 'product 1',
            Price: 10,
            Quantity: 10,
            Discount: 0,
            Total: 100,
        },
    };
}

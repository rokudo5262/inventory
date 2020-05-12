export interface OrderProcessing {
    id: string;
    volumeInfo: {
        Time: string;
        Customer: string;
        Total: number;
        Status: string;
    };
}

export function ViewOrderProcessing(): OrderProcessing {
    return{
        id: '1',
        volumeInfo: {
            Time: '',
            Customer: 'pika',
            Total: 1000,
            Status: 'delivery',
        },
    };
}


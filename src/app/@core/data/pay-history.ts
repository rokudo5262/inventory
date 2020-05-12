export interface PayHistory {
    id: String;
    volumeInfo: {
        Time: string;
        Staff: string;
        Payment: string;
        Status: string;
        MoneyCollection: number;
    };
}

export function payhistory(): PayHistory {
    return{
        id: '1',
        volumeInfo: {
            Time: '',
            Staff: 'Staff1',
            Payment: 'cash',
            Status: 'delivery',
            MoneyCollection: 1000,
        },
    };
}

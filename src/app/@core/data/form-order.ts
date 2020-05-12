export interface OrderForm {
    volumeInfo: {
        TotalAmountOfGoods: number;
        Discount: number;
        TheMoneyForPaying: number;
        Pay: number;
    };
}

export function Order(): OrderForm {
    return{
        volumeInfo: {
            TotalAmountOfGoods: 1,
            Discount: 0,
            TheMoneyForPaying: 100,
            Pay: 100,
        },
    };
}


export interface OrderProduct {
    id: number;
    code: string;
    nameProduct: string;
    price: boolean;
    quantity: string;
    total: number;
    delete: boolean;
}

export function OrderProducts(): OrderProduct {
return{
    id: 0,
    code: '1',
    nameProduct: 'Product1',
    price: false,
    quantity: '',
    total: 1000,
    delete: false,
 };
}


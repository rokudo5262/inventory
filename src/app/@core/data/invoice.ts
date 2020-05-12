export interface Invoice {
    id_invoice: string;
        date_invoice: string;
        total_invoice: string;
        payment_invoice: string;
        payment_type_invoice: string;
        discount_invoice: string;
        surcharge_invoice: string;
        refund_invoice: string;
        status_invoice: string;
        note_invoice: string;
        customerInfo: {
            id_customer: string;
            name_customer: string;
            adress_customer: string;
            phone_customer: string;
            dob_customer: string;
            gender_customer: string;
            debt_customer: string;
            point_customer: string;
        };
        staffInfo: {
            id_customer: string;
            name_customer: string;
            adress_customer: string;
            phone_customer: string;
            dob_customer: string;
            gender_customer: string;
        };
        productInfo: {
            id_product: string[];
            name_product: string[];
            price_product: string[];
            amount_product: string[];
        };
    }
        export function generateMockInvoice(): Invoice {
            return {
                id_invoice: 'HD001',
                date_invoice: 'date_invoice',
                total_invoice: 'total_invocie',
                payment_invoice: 'payment_invoice',
                payment_type_invoice: 'payment_type_invoice',
                discount_invoice: 'discount_invoice',
                surcharge_invoice: 'surcharge_invoice',
                refund_invoice: 'refund_invoice',
                status_invoice: 'status_invoice',
                note_invoice: 'note_invoice',
                customerInfo: {
                    id_customer: 'id_customer',
                    name_customer: 'name_customer',
                    adress_customer: 'adress_customer',
                    phone_customer: 'phone_customer',
                    dob_customer: 'dob_customer',
                    gender_customer: 'gender_customer',
                    debt_customer: 'debt_customer',
                    point_customer: 'point_customer',
                },
                staffInfo: {
                    id_customer: 'id_customer',
                    name_customer: 'name_customer',
                    adress_customer: 'adress_customer',
                    phone_customer: 'phone_customer',
                    dob_customer: 'dob_customer',
                    gender_customer: 'gender_customer',
                },
                productInfo: {
                    id_product: ['id_product'],
                    name_product: ['name_product'],
                    price_product: ['price_product'],
                    amount_product: ['amount_product'],
                },
            };
        }

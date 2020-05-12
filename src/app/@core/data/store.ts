import { Time } from '@angular/common';

export interface StoreInformation {
    id: number;
    codeStore: number;
    codeLocation: number;
    codeStaff: number;
    openTime: Time;
    closeTime: Time;
    address: string;
    // status: string;
}

// export function StoreInformations(): StoreInformation {
//     return {
//         id: 1,
//         codeStore: 1,
//         codeLocation: 1,
//         codeStaff: 1,
//         closeTime: {
//             hours: 1,
//             minutes: 20,
//         },
//         openTime: {
//             hours: 1,
//             minutes: 20,
//         },
//         address: '123A',

//     };
// }

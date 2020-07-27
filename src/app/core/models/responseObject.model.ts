import { Debt } from './debt.model';

export interface ResponseObject {
    countDebtsArrears: number;
    debts: Debt[];
}
export class Income {
    amount: number;
    description: string;
    payday: number;
    lastday: boolean;

    constructor(amount: number, description: string, payday: number, lastday: boolean) {
        this.amount = amount;
        this.description = description;
        this.payday = payday;
        this.lastday = lastday;
    }
}
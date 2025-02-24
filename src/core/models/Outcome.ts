export class Outcome {
    id: string;
    amount: number;
    description: string;
    date: Date;
    category: string;

    constructor(id: string, amount: number, description: string, date: Date, category: string) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.date = date;
        this.category = category;
    }
}
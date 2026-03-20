export class ProductContext{
    id: number;
    name: string;
    value: number;
    code: string;

    constructor(id: number, name: string, value: number, code: string) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.code = code;
    }
}
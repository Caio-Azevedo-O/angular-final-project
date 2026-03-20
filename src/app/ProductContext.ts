export class ProductContext{
    Id?: number;
    name: string;
    value: number;
    description!: string;
    code: string;

    constructor(name: string, value: number, description: string, code: string, id?: number,) {
        this.Id = id;
        this.name = name;
        this.value = value;
        this.description = description;
        this.code = code;
    }
}
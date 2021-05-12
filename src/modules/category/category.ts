//Domain : Category

interface ICategory {
    id: number
    name: string
}

export type CategoryProps = {
    id: number
    name: string
}

export class Category implements ICategory {
    public id: number
    public name: string

    constructor(props: CategoryProps) {
        this.id = props.id
        this.name = props.name
    }
}
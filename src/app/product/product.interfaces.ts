export interface Product{
    product: string;
    cost: number;
    description: string;
    quantity: number;
    createdAt: string;
    updatedAt: string;
}

export interface ProductAPIList{
    status: boolean;
    data: Product[];
}
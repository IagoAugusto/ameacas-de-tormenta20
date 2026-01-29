import { Roles, NívelResistência } from "@/features/Sheet/types/sheet";

export interface IFormInput {
    name: string;
    nd: string;
    role: Roles;
    fortitude: NívelResistência;
    reflexos: NívelResistência;
    vontade: NívelResistência;
}

export interface FormProps {
    onSubmit: (data: IFormInput) => void;
}
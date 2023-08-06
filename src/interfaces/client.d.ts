import { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
    title: string;
    labelName: string;
}

export interface FormValues {
    name: string;
    email: string;
    phone: string;
    origin: string;
    preferences: string;
}

export interface ClientCardProps {
    id?: BaseKey | undefined;
    name: string;
    email: string;
    phone: string;
    origin: string;
    preferences: string;
}

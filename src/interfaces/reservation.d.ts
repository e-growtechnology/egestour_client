import { BaseKey } from "@refinedev/core";

export interface ReservationCardProps {
    id?: BaseKey | undefined;
    title: string;
    location: string;
    price: number | undefined;
    photo: string;
}
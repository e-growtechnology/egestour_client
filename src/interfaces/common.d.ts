export interface CustomButtonProps {
    type?: string;
    title: string;
    backgroundColor: string;
    color: string;
    fullWidth?: boolean;
    icon?: ReactNode;
    disabled?: boolean;
    handleClick?: () => void;
}

export interface ProfileProps {
    type: string;
    name: string;
    avatar: string;
    email: string;
    tours: Array | undefined;
}

export interface TourProps {
    _id: string;
    title: string;
    description: string;
    location: string;
    price: string;
    photo: string;
    orientation: string;
    extras: string;
    creator: string;
}

export interface ClientProps {
    _id: string;
    name: string;
    phone: string;
    email: string;
    preferences: string;
    origin: string;
    history: string;
    activities: string;
    creator: string;
}

export interface FormProps {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    handleImageChange: (file) => void;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
    tourImage: { name: string; url: string };
}

export interface FormTypeProps {
    type: string;
    register: any;
    onFinish: (
        values: FieldValues,
    ) => Promise<
        void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>
    >;
    formLoading: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
    onFinishHandler: (data: FieldValues) => Promise<void> | void;
}

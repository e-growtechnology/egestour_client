import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

import { FieldValues } from "react-hook-form";

import Form2 from "components/common/Form-client";

const CreateClient = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
    } = useForm();


    const onFinishHandler = async (data: FieldValues) => {

        await onFinish({
            ...data,
            email: user.email,
        });
    };

    return (
        <Form2
            type="Create"
            register={register}
            onFinish={onFinish}
            formLoading={formLoading}
            handleSubmit={handleSubmit}
            onFinishHandler={onFinishHandler}
        />
    );
};
export default CreateClient;

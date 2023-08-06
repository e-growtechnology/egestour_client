import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "components";

const AgentProfile = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id as string,
    });

    console.log(data);

    const myProfile = data?.data ?? [];

    if (isLoading) return <div>Carregando...</div>;
    if (isError) return <div>erro...</div>;

    return (
        <Profile
            type="Agent"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            tours={myProfile.allTours}
        />
    );
};

export default AgentProfile;

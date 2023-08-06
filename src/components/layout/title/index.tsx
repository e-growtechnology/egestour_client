import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { logo, whitelogo } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={whitelogo} alt="E-Gestour" width="28px" />
                ) : (
                    <img src={logo} alt="E-Gestour" width="140px" />
                )}
            </Link>
        </Button>
    );
};

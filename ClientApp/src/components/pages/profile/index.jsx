import React from "react";
import { useSelector } from "react-redux";
import { RegularProfile } from "./RegularProfile";
import { AdminProfile } from "./AdminProfile";

export const ProfilePage = () => {
    const { isAuth, role } = useSelector((state) => state.user);

    return (
        <>
            {isAuth && role ? (
                <>
                    <AdminProfile />
                </>
            ) : (
                <>
                    <RegularProfile />
                </>
            )}
        </>
    );
};

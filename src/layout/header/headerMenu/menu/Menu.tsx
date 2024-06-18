import React from 'react';
import {S} from "../Menu_Styles";
import {menuItems} from "../../Header";

// export const Menu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
export const Menu: React.FC = () => {
    return (
        <ul>
            {menuItems.map(m => {
                return (
                    <S.MenuItem key={m.id}>
                        <S.Link href={m.href}>{m.name}</S.Link>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};


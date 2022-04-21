import React  from "react";

import HeadLine from "../Module/HeadLine";
import Info from "../Module/Info";
import Contents from "../FAQ/Ban/contents";
import Banner from "../FAQ/Banner"

export default function Faq02() {
    return (
        <div>
            <HeadLine />
            <Banner />
            <Contents />
            <Info />
        </div>
    )
}
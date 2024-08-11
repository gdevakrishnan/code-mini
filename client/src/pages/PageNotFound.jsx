import React, { Fragment } from "react";
import page_not_found from "../assets/pagenotfound.svg";

function PageNotFound() {
    return (
        <Fragment>
            <section className="page page_not_found">
                <img src={page_not_found} alt="404 Page not found" className="page_not_found_img" />
            </section>
        </Fragment>
    );
}

export default PageNotFound;
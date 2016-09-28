import React from "react";
import { Link } from "react-router";
import Nav from "../pages/nav";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;
        const containerStyle = {
            marginTop: "60px"
        };

        return (
            <div>
                <Nav location={location} />
                <div style={containerStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

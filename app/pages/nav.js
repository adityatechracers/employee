import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const homeClass = location.pathname === "/" ? "active" : "";
        const aboutusClass = location.pathname.match(/^\/home/) ? "active" : "";
        const contactusClass = location.pathname.match(/^\/contactus/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this) } >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className={homeClass}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this) }>Home</IndexLink>
                            </li>
                            <li className={aboutusClass}>
                                <Link to="about" onClick={this.toggleCollapse.bind(this) }>About Us</Link>
                            </li>
                            <li className={contactusClass}>
                                <Link to="contactus" onClick={this.toggleCollapse.bind(this) }>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

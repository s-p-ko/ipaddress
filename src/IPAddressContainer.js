import React, { Component } from "react";
import IPAddress from "./IPAddress";
const ipToken = "074087c9573d08";
let xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);


        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json?token=" + ipToken, true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            });
        }
    }

    render() {
        return (
            <IPAddress ip={this.state.ip_address} />
        );
    }
}

export default IPAddressContainer;
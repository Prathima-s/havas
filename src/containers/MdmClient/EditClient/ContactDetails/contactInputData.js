import React, {Component} from "react";
import { Input } from 'antd';
import '../clients.css';

class ContactInputData extends Component {

    dblclick = () => {}
    render() {
        return (
            <Input className="contactTabData" placeholder="Basic usage" />

            // <div dblclick={this.dblclick}>
               
            // </div>
        );
    };
};

export default ContactInputData;
import React, { Component } from 'react';
import './selectButton.css';

const selectButtonClass = {
    overflow: "hidden",
    position: "relative",
    margin: "auto",
    padding: "10px 0 10px",
    height: "65px"
}

class SelectButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.onCheckBoxChanged = this.onCheckBoxChanged.bind(this);
        this.generateUniqueID = this.generateUniqueID.bind(this);
    }

    generateUniqueID(key, value) {
        return key+'_'+ value;
    }

    onStarChanged(e) {
        
      // console.log(e.currentTarget.id.split('_')[1])
        var checkID = e.currentTarget.id.replace('radio_', 'check_');
        var node = document.getElementById(checkID);
        //this.props.updateUserInfo(e.currentTarget.id.split('_')[1]);
        if (node.checked) {
        } else node.click();
    }

    onCheckBoxChanged =(e) => {
      // console.log(e.currentTarget.id.split('_')[1])
        //this.props.updateUserInfo(e.currentTarget.id.split('_')[1]);
        var node = document.getElementById(e.currentTarget.id).parentNode.querySelectorAll('input[type="radio"]');
        var labelNode = document.getElementById(e.currentTarget.id).parentNode.querySelectorAll('input[type="checkbox"]');

        if (this.props.radio === 'yes') {

            if (labelNode[0].checked) {
            } else node[0].checked = false;

            var mdmView = document.getElementById('check_MMS_6').parentNode.querySelectorAll('input[type="checkbox"]');
            var mdmAdmin = document.getElementById('check_MMS_13').parentNode.querySelectorAll('input[type="checkbox"]');

            let currentRole = {
                'MDM Admin': mdmAdmin[0].checked,
                'MDM View': mdmView[0].checked
            };
            if (e.currentTarget.id === 'check_MMS_6' || e.currentTarget.id === 'check_MMS_13') this.props.mdmSelect(currentRole);
        }       
    }

    render() {
        return (
            <div style={selectButtonClass}>
                <input className="checkbox" defaultChecked={this.props.isSelected} type="checkbox"
                     onChange={this.onCheckBoxChanged} name="label" id={this.generateUniqueID('check',this.props.keys)} />
                <label id="checklabel" className="checklabel" htmlFor={this.generateUniqueID('check',this.props.keys)}>{this.props.value}</label>
                {this.props.radio === "yes" ? (
                    <span className="star-cb-group">
                        <input type="radio" defaultChecked={this.props.isPrimary} id={this.generateUniqueID('radio',this.props.keys)} 
                        onChange={this.onStarChanged} name={this.generateUniqueID('radio',this.props.roleType)} value={this.props.value} />
                        <label htmlFor={this.generateUniqueID('radio',this.props.keys)}>{this.props.value}</label>
                    </span>
                ) : null}
            </div>
        );
    }
}

export default SelectButton;

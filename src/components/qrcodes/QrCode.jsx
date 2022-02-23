import React, { Component } from 'react';
import QRCode from 'qrcode.react'
export default class QrCode extends Component {
    state={
        value:'University of Rwanda, College of Science and Technology'
    }
    state1={
        value:'University of Rwanda, College of Science and Technology, Department of Computer Science'
    }
    render() {
        return (
            <div className="content-wrapper bg-white">
                <div className="qrCodes">
                All QR CODES
                </div>
                <QRCode
                id="abc"
                value={this.state.value}
                className="qrcodeDisplay"/>

                <QRCode
                id="abc"
                value={this.state1.value}
                className="qrcodeDisplay"/>  

                <QRCode
                id="hello"
                value="Hello Ange"
                className="qrcodeDisplay"/>         

               
            </div>
        )
    }
}

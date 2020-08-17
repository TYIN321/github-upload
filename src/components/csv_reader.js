import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';
import fire from '../config/fire';

class UploadPage extends Component {
    
    constructor(props) {
        super(props);
        var itemRef = fire.database().ref('Feather down pillow inserts 90\\10 16x16 18x18 20x20 22x22 24x24 26x26  Euro down insert Lumbar pillow insert');
        itemRef.on('value', (snap) => {
            console.log(snap.val());
        });
        
    }

    setPrevOrders(reference) {

    }

    onDrop(files) {
        this.setState(files);

        var file = files[0];

        const reader = new FileReader();
        reader.onload = () => {
            csv.parse(reader.result, (err,data) => {

                var orderList = [];

                for (var i = 1; i < data.length; i++) {
                    const sell_date = data[i][0];
                    const item_name = data[i][1];
                    const buyer = data[i][2];
                    const quantity = data[i][3];
                    const price = data[i][4];
                    const total = data[i][11];
                    const trans_id = data[i][13];
                    const listing_id = data[i][14];
                    const shipping_name = data[i][17];
                    const shipping_add1 = data[i][18];
                    const shipping_add2 = data[i][19];
                    const shipping_city = data[i][20];
                    const shipping_state = data[i][21];
                    const shipping_zip = data[i][22];
                    const shipping_country = data[i][23];
                    const size = data[i][25];

                    const item_name_r = item_name.replace("\/", "\\");

                    if (listing_id == "203436393" || listing_id == "208513524" || listing_id == "476575737" || listing_id == "506978724" || listing_id == "609905418") {
                        const newOrder = {"Item": item_name, "Buyer": buyer, "Sold On": sell_date, "Quantity": quantity, "Size": size, "Price Total": total, "Shipping Name": shipping_name,
                        "Shipping Address": shipping_add1, "Address2": shipping_add2, "City": shipping_city, "State": shipping_state,
                        "Zip Code": shipping_zip, "Country": shipping_country};

                        fire.database().ref(trans_id).set(newOrder);
                    }
                };
            });
        };

        reader.readAsBinaryString(file);

    }

    render() {
        const fontSize = "18px";

        return (
            <div style={mainContainerStyle} align = "center" oncontextmenu="return false">
                <br /><br /><br />
                <div style={dropZoneStyle} className = "dropzone">
                    <h2 style={h2Style}>Please upload your <font size={fontSize} color="#0099FF">CSV </font>file..</h2>
                    <Dropzone accept=".csv" onDropAccepted={this.onDrop.bind(this)} style={dropBoxStyle}>upload new..</Dropzone>
                    <br /><br /><br />
                    <button onClick={this.goNext} style={nextButtonStyle}>Next</button>
                </div>
            </div>
        )
    }
}

const mainContainerStyle = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#D2D5DA",
}

const dropZoneStyle = {
    position: "relative",
    backgroundColor: "white",
    borderRadius: '29px',
    display: "inline-block",
    boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
    top: "25%",
    width: "30%"
}

const dropBoxStyle = {
    width: "40%",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "4px",
    borderColor: "#9097A3",
    fontFamily: "Rubik",
    color: "#5B7082",
    cursor: "pointer",
    marginTop: "40px",
    paddingTop: "8px",
    paddingBottom: "8px"
}

const h2Style = {
    fontFamily: "Rubik",
    fontWeight: "normal",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "21px",
    paddingTop: "50px"
}

const nextButtonStyle = {
    backgroundColor: "#0099FF",
    border: "none",
    color: "white",
    fontFamily: "Rubik",
    fontSize: "1vw",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "10px",
    paddingBottom: "10px",
    position: "relative",
    left: "120px",
    bottom: "10px",
    borderRadius: "3px",
    marginBottom: "45px",
    cursor: "pointer"
}

export default UploadPage;
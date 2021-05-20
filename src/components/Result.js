import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import Header from "./Header";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';




const Result = (props) => {
    const [planImg,setPlanImg] = useState('')
    const convertImgToBase64 =(url,callback)=>{

        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var img = new Image;
        img.crossOrigin = 'Anonymous';
        img.onload = function(){
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img,0,0);
            var dataURL = canvas.toDataURL('image/png');
            callback.call(this, dataURL);
            // Clean up
            canvas = null;
        };
        img.src = url;
        console.log(url)

    }
    useEffect(() => {
        convertImgToBase64(props.sortedData && props.sortedData.plan_image,(url) => {
            setPlanImg(url)
        })
    },[props.result])
    if(!props.result){
        return false
    }

    const img = require('../assets/img/Mask Group 33.png').default;

    const title = 'You’re All Set!';
    const description = 'Grab, pay and enjoy!'




    const printDocument = () =>  {

        let node = document.getElementById('divToPrint')

        htmlToImage.toPng(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                const pdf = new jsPDF('p','px',[node.clientWidth,node.clientHeight]);
                pdf.addImage(img, 'SVG', 0, 0,node.clientWidth,node.clientHeight);
                pdf.save("download.pdf");
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });

    }



    console.log(props.sortedData,'sortedData')
    return(
        <div id="divToPrint">
            <div className={'step1_body'} >
                 <Header imgSrc = {img} title = {title} description = {description} result = {true} />
            </div>
            <div className={'plan_title'}>
                <h2>YOU WILL SAVE $600/YR.</h2>
            </div>

            <div className={'recommended_plan'}>
                <h2>Your recommended SIM and plan:</h2>
                <span>Net10</span>
            </div>
            <div className={'plan_img'}>
                <img src={planImg}/>
            </div>
            <div className={'plan_info'}>
                <h3>$1</h3>
                <h4>Net10 SIM Kit</h4>
                <p>Includes Nano, Micro and SIM cards, compatible with ATT network or Unlocked compatible GSM phones.</p>
            </div>
            <div className={'plan_description'}>
                <h3>$35</h3>
                <h4>$35 5GB Plan, Plus $10 Intl. Calling Credit, 1 Line</h4>
                <ul>
                    <li><span>30</span>Service Days</li>
                    <li>Unlimited nationwide talk and text</li>
                    <li>Mobile Hotspot Capable (up to 5GB)</li>
                    <li>No Contract </li>
                    <li>Add more data whenever you need it</li>
                    <li>For 1 line/device</li>
                </ul>
            </div>
            <div className={'plan_save'}>
                <a href={'https://www.google.ru/'} target={'_blank'} rel="noopener noreferrer">Start Over</a>

                <div className="">
                    <button onClick={printDocument}>Print</button>
                </div>
            </div>
        </div>
    )
}



function mapStateToProps(state) {

    return{
        result:state.appReducer.result,
        sortedData:state.appReducer.sortedData
    }

}

export default connect(mapStateToProps,null)(Result);
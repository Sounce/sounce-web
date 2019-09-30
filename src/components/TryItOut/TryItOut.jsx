import React from "react";
import * as handTrack from 'handtrackjs';


import Section from "../core/Section";
import H1 from "../core/H1";
const TryItOut = props => {
  const headerTxt = "Try it out";

  const videoRef = React.createRef();
  const canvasRef = React.createRef();

  React.useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user"
          }
        })
        .then(stream => {
          window.stream = stream;
          videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });

       // Load the model. 
       const modelPromise = handTrack.load();
       console.log("model loaded")

       Promise.all([modelPromise, webCamPromise])
        .then(values => {
          values[0].detect(this.videoRef.current).then(predictions => {
            console.log('Predictions: ', predictions);
            const context = document.getElementById('canvas-web').getContext('2d'); 
            values[0].renderPredictions(predictions, canvasRef, context, this.videoRef.current)
          });
        })
        .catch(error => {
          console.error(error);
        });

    }
  }, []);

  const videoWidth = 500;
  return (
    <Section>
      <H1 color="#acedfb">{headerTxt}</H1>
      <div style={{ display: "flex", height: "500" }}>
        <video autoPlay playsInline muted ref={videoRef} width={videoWidth} />
        <canvas ref={canvasRef} width={videoWidth} id="canvas-web"></canvas>
      </div>
    </Section>
  );
};
export default TryItOut;

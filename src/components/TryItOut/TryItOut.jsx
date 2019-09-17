import React from "react";
import * as tf from "@tensorflow/tfjs";

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

      // const modelPromise = tf.loadLayersModel("./model/model.json");

      // Promise.all([modelPromise, webCamPromise])
      //   .then(values => {
      //     detectFrame(videoRef.current, values[0]);
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
    }
  }, []);

  // const detectFrame = (video, model) => {
  //   console.log(video);

  //   let tensor = tf
  //     .fromPixels(video)
  //     .resizeNearestNeighbor([224, 224])
  //     .toFloat();

  //   model.predict(tensor).then(predictions => {
  //     console.log(this.renderPredictions(predictions));
  //     requestAnimationFrame(() => {
  //       this.detectFrame(video, model);
  //     });
  //   });
  // };

  // const renderPredictions = predictions => {
  //   console.log(predictions);
  // };

  return (
    <Section>
      <H1 color="#acedfb">{headerTxt}</H1>
      <div>
        <video
          className="size"
          autoPlay
          playsInline
          muted
          ref={videoRef}
          width="600"
          height="500"
        />
        <canvas className="size" ref={canvasRef} width="600" height="500" />
      </div>
    </Section>
  );
};
export default TryItOut;

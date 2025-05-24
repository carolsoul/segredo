import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as faceapi from 'face-api.js';
import styles from '../styles/FaceId.module.css';

function FaceId() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [reconhecido, setReconhecido] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models/tiny_face_detector_model'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models/face_landmark_68_model'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models/face_recognition_model'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models/ssd_mobilenetv1_model')
      ]);
      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error('Erro ao acessar a câmera:', err));
    };

    const detectar = async () => {
      const imagemReferencia = await faceapi.fetchImage('/referencia.jpg');
      const resultadoReferencia = await faceapi
        .detectSingleFace(imagemReferencia)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!resultadoReferencia) {
        alert('Não foi possível detectar um rosto na imagem de referência.');
        return;
      }

      const faceMatcher = new faceapi.FaceMatcher(
        new faceapi.LabeledFaceDescriptors('referencia', [resultadoReferencia.descriptor]),
        0.6
      );

      const intervalo = setInterval(async () => {
        if (!videoRef.current) return;

        const detections = await faceapi
          .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptor();

        if (detections) {
          const resultado = faceMatcher.findBestMatch(detections.descriptor);
          console.log('Resultado:', resultado); // 👈 para debug
          if (resultado.label === 'referencia') {
            setReconhecido(true);
            clearInterval(intervalo);
          }
        }
      }, 1000);
    };

    loadModels().then(detectar);
  }, []);

  const irParaEscolhaNome = () => {
    if (reconhecido) navigate('/escolha-de-nome');
  };

  return (
    <div className={styles.FaceIdContainer}>
      <h1 className={styles.faceTitle}>Encaixe o rosto no círculo</h1>

      <div className={styles.camera}>
        <video ref={videoRef} autoPlay />
      </div>

      <button
        className={styles.faceBtn}
        onClick={irParaEscolhaNome}
        disabled={!reconhecido}
      >
        {reconhecido ? 'Próximo' : 'Reconhecendo...'}
      </button>
    </div>
  );
}

export default FaceId;

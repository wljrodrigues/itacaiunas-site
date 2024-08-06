// src/components/Loading.js
import React from "react";
import styled, { keyframes } from "styled-components";
import loadingGif from "../components/load-142_256.gif"; // Certifique-se de ter um gif de carregamento no diretório assets

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Altura total da viewport
  background-color: #f0f0f0; // Cor de fundo opcional
`;

const Loader = styled.img`
  width: 100px; // Ajuste o tamanho conforme necessário
  height: 100px; // Ajuste o tamanho conforme necessário
  animation: ${rotate} 2s linear infinite;
`;

const Loading = () => (
  <LoaderWrapper>
    <Loader src={loadingGif} alt="Carregando..." />
  </LoaderWrapper>
);

export default Loading;

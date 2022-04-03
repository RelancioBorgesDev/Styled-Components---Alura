import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components';
import {corPrimaria} from '../UI/Variaveis.js';

const btnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${({primary}) => primary ?  "white" : corPrimaria};
  color: ${({primary}) => primary ? "corPrimaria" : "white"};
`

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <btnCabecalho primary className="btn-secundario" href="https://google.com">
          Ajuda
        </btnCabecalho>
        <btnCabecalho  className="btn-primario" href="https://google.com">
          Sair
        </btnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;

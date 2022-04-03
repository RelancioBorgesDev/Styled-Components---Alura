import React from 'react';
import {Box} from '../UI/index.js'
import {extratoLista} from '../../info.js'

function Extrato() {
  return(
    <Box>
        {extratoLista.updates.map(({id, type, from, value, date}) => {
            return (
                <div key={id}>

                </div>
            )
        })}
    </Box>
  );
}

export default Extrato;
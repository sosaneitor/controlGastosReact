import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto, 
    valido, 
    setValido}) => {
  return (
    <header>
        <h1>FinanzApp </h1>

        {valido ? (
            <ControlPresupuesto
                gastos={gastos}
                setGastos={setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setValido={setValido}
            
            /> 
        ):(
            
            <NuevoPresupuesto
             presupuesto={presupuesto}
             setPresupuesto={setPresupuesto}
             setValido={setValido}
            />
        )}

    </header>
  )
}

export default Header

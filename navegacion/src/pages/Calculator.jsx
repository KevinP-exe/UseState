import React, { useState } from 'react';
import '../components/Calculator.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };
    
    const handleMultiplicar = () => {
        const multiplicacion = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicacion);
    };
            
    const handleDividir = () => {
        const division = parseFloat(num1) / parseFloat(num2);
        setResultado(division);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSumar}>Sumar</button>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleMultiplicar}>Multiplicar</button>
            <button onClick={handleDividir}>Dividir</button>
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
};

export default Calculadora;
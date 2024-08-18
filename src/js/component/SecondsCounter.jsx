import React from 'react';
import ReactDOM from 'react-dom';

function SecondCounter(props) {
  const MAX_DIGITS = 6; // Ajusta el número de dígitos que quieres mostrar
  let counter = 0; // Inicializa el contador

  // Función que actualiza y muestra el contador
  function updateCounter() {
    counter++;
    const formattedCounter = String(counter).padStart(MAX_DIGITS, '0');
    const pCounter = document.getElementById("counter")
    const comment = document.getElementById("finish")
    const resetButton = document.getElementById("button")
    
    if (counter == props.seconds) {
      pCounter.innerText = formattedCounter;
      clearInterval(interval);
      comment.innerHTML = "<strong>Done</strong>"
      
    } else {
      pCounter.innerText = formattedCounter;
    }
  }


  // Configura el intervalo para llamar a updateCounter cada segundo
  const interval = setInterval(updateCounter, 1000); // 1000ms = 1 segundo

  // Renderiza el contenido inicial
  return (
    <div className='h-100 bg-dark d-flex text-light justify-content-center align-items-center' style={{ textAlign: 'center', fontSize: '24px' }}>
      <h1><svg className='bg-light rounded-5 me-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
        <path path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 37.039062 10.990234 A 1.0001 1.0001 0 0 0 36.265625 11.322266 L 26.183594 22.244141 A 3 3 0 0 0 25 22 A 3 3 0 0 0 22 25 A 3 3 0 0 0 25 28 A 3 3 0 0 0 25.5 27.958984 L 29.125 34.486328 A 1.0010694 1.0010694 0 1 0 30.875 33.513672 L 27.246094 26.984375 A 3 3 0 0 0 28 25 A 3 3 0 0 0 27.652344 23.599609 L 37.734375 12.677734 A 1.0001 1.0001 0 0 0 37.039062 10.990234 z"></path>
        </svg>
      </h1>
      <p className='my-auto' style={{fontSize:"45px"}} id="counter">{String(counter).padStart(MAX_DIGITS, '0')}</p>
      <span className='fs-2 my-auto ms-3' id='finish'></span>
    {/* <button className='btn btn-primary ms-3 my-auto' onClick={reset} id='button'> Reset</button> */}

    </div>
    
  );
}

export default SecondCounter


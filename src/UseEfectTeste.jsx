import { useEffectTeste, useState } from 'react'

import './App.css'

function useEffectTeste() {
  const [nome, setNome] = useState('JOÃO')

  useEffect (() => {

    console.log('Meu useEffect rodou!')

  }, [nome])

  return (
    <>
      <h1>{nome}</h1>
      <button onClick={e => setNome('Rodrigo')}>Atualizar</button>
    </>
  )
}

export default useEffectTeste

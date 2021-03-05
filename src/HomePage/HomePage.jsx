import React, { useCallback}          from 'react';
import Button         from '@material-ui/core/Button';

const HomePage = () => {

  const send = useCallback((message)=>{
    window.ipcRenderer.send('asynchronous-message', message)
  },[])

  return (
    <Button variant="contained" color="primary" onClick={()=>send("Ola Mundo Porra")}>Clique</Button>
  );
}

export default HomePage;
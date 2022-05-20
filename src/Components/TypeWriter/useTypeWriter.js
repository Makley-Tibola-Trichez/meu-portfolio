import * as React from 'react';


const useTypeWriter = (text) => {
  
  const [currentText, setCurrentText] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (text[currentText.length]) {
        setCurrentText(currentText + text[currentText.length]);
      } else {
        clearInterval(interval);
      }

    }, 100);
    return () => clearInterval(interval);
  }, [currentText, text]);

  return {
    currentText
  };
}


export default useTypeWriter;
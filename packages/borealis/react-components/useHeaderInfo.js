import React from 'react';

if(!React.useState){
   return;
}

const HeaderContext = React.createContext({});

HeaderProvider = ({ children }) => {
  const [title, setTitle] = React.useState('');
  const [showBack, setShowBack] = React.useState(false);
  return (
    <HeaderContext.Provider
      value={{
        title,
        setTitle: newTitle => {
          setTitle(newTitle);
          document.title = newTitle;
        },
        showBack,
        setShowBack,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderInfo = () => {
  const { title, setTitle, showBack, setShowBack } = React.useContext(HeaderContext);
  return {
    title,
    setTitle,
    showBack,
    setShowBack,
  };
};

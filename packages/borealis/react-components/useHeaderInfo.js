import React, { useContext, useState } from 'react';

const HeaderContext = React.createContext({});

HeaderProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [showBack, setShowBack] = useState(false);
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
  const { title, setTitle, showBack, setShowBack } = useContext(HeaderContext);
  return {
    title,
    setTitle,
    showBack,
    setShowBack,
  };
};

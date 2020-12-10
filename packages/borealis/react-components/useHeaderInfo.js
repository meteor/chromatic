import React from 'react';

// Only available for new react versions, otherwise this component is not defined
if (!React.createContext) {
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

export const useHeaderInfo = (newTitle, newShowBack) => {
  const { title, setTitle, showBack, setShowBack } = React.useContext(
    HeaderContext
  );
  React.useEffect(() => {
    if (newTitle) {
      setTitle(newTitle);
    }
    if (newShowBack !== null) {
      setShowBack(newShowBack);
    }
  });

  return {
    title,
    setTitle,
    showBack,
    setShowBack,
  };
};

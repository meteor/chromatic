import React from 'react';

// Only available for new react versions, otherwise this component is not defined
if (!React.createContext) {
  return;
}

const HeaderContext = React.createContext({});

HeaderProvider = ({ children }) => {
  const [title, setTitle] = React.useState('');
  const [showBack, setShowBack] = React.useState(false);
  const [label, setLabel] = React.useState('Back');
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
        label,
        setLabel
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderInfo = (newTitle, newShowBack, newLabel) => {
  const { title, setTitle, showBack, setShowBack, label, setLabel } = React.useContext(
    HeaderContext
  );
  React.useEffect(() => {
    if (newTitle) {
      setTitle(newTitle);
    }
    if (newShowBack !== null) {
      setShowBack(newShowBack);
    }
    if (newLabel) {
      setLabel(newLabel);
    }
  });

  return {
    title,
    label,
    setTitle,
    showBack,
    setShowBack,
  };
};

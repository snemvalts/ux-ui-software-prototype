import * as React from "react";
import {useContext, useState} from "react";


export const AppStateContext = React.createContext([{}, () => {}])


export const useAppState = () => {
    const [state, setState] = useContext(AppStateContext);

    return [state, setState];
}

export const AppStateProvider = (props) => {
  const [state, setState] = useState({uc: 1, cart: 0, loggedInUser: null});
  return (
    <AppStateContext.Provider value={[state,setState]}>
      { props.children }
    </AppStateContext.Provider>
  );
};

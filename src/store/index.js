import LoginStore from './LoginStore';
import { createContext } from 'react';

const stores = {
  loginStore: new LoginStore()
}

const StoresContext = createContext(stores);

export {
  stores,
  StoresContext
}


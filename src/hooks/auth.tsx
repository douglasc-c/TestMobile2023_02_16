import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Alert } from 'react-native';

// import api from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}


interface AuthContextData {
  user: User;
  isLoading: boolean;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  setLoadingTrue: () => void;
  setLoadingFalse: () => void;
  CleanUpStates: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);
  const [isLoading, setLoading] = useState(false);
  const [username, setUserName] = useState('');
  const [clean, setClean] = useState();


  function setLoadingTrue() {
    setLoading(true);
  }

  function setLoadingFalse() {
    setLoading(false);
  }

  const fakeApiResponse: { data: { user: User } } = {
    data: {
      user: {
        id: '1',
        name: 'Usuário de Teste',
        email: 'teste@example.com',
      }
    }
  };

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    setLoading(true);
    try {
      
      const { user } = fakeApiResponse.data;
      
      setData(user);
    } catch (error) {
      console.log(error);
      Alert.alert('Usuário ou senha incorreto');
    } finally {
      setLoading(false);
    }
  }


  function CleanUpStates() {
    // setData(clean);
  }

  return (
    <AuthContext.Provider
      value={{
        user: data,
        isLoading: isLoading,
        signIn: signIn,
        CleanUpStates,
        setLoadingTrue,
        setLoadingFalse,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

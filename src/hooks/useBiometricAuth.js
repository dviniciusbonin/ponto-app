import { LogBox } from "react-native";

// Refact 
LogBox.ignoreLogs(["Fingerprint operation canceled by user."]);
LogBox.ignoreLogs(["Cancelar"]);

import {
    authenticateAsync,
    hasHardwareAsync,
    isEnrolledAsync,
    cancelAuthenticate
  } from "expo-local-authentication";
  import { useState, useEffect } from "react";
  
  export default function useBiometricAuth() {
    const [isCompatible, setIsCompatible] = useState(false);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
  
    const intialize = async () => {
      setIsCompatible(await hasHardwareAsync());
      setIsEnrolled(await isEnrolledAsync());
    };
  
    const authorize = async () => {
      // device is not compatible or user has not registered biometrics
      if (!isEnrolled || !isCompatible ) return false;
  
      // check for auth
      const result = await authenticateAsync({
        promptMessage: 'Confirme com sua biometria',
        cancelLabel: 'Cancelar',
        disableDeviceFallback: true
      });

      if(!result.success) {
        await cancelAuthenticate()
      }

      setIsAuth(result.success);
  
      return result;
    };

    const cancel = async() => {
      await cancelAuthenticate();
    }
  
    useEffect(() => {
      intialize();
    }, []);
  
    return { isAuth, isCompatible, isEnrolled, authorize, cancel };
  }
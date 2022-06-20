import {
    authenticateAsync,
    hasHardwareAsync,
    isEnrolledAsync
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
      if (!isCompatible || !isEnrolled) return false;
  
      // check for auth
      const result = await authenticateAsync({
        promptMessage: 'Confirme com sua biometria',
        cancelLabel: 'Cancelar'
      });

      setIsAuth(result.success);
  
      return result;
    };
  
    useEffect(() => {
      intialize();
    }, []);
  
    return { isAuth, isCompatible, isEnrolled, authorize };
  }
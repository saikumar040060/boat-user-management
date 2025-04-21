import { createContext, useContext, useState, ReactNode } from 'react';
import apiClient from '../api/apiClient';


type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactContextType = {
  submitContact: (formData: ContactFormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (formData: ContactFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      await apiClient.post('/api/contacts', formData);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to submit contact form');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <ContactContext.Provider value={{ submitContact, isLoading, error, clearError }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};
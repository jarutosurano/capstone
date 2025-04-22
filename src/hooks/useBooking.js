import { useState, useCallback } from 'react';

export const useBooking = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    if (!formData.guests || formData.guests < 1) {
      newErrors.guests = 'Number of guests must be at least 1';
    }

    if (!formData.occasion) {
      newErrors.occasion = 'Occasion is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return {
    formData,
    errors,
    validateForm,
    handleChange,
    setFormData
  };
};
import { useEffect, useState } from 'react'

// Debounce function to optimize search functions
export const useDebounce = (value, delay) => {
  // Initializing the state
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Updates debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

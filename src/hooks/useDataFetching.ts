import { useState, useEffect } from "react";
import apiService from "../services/apiService";

// Generic hook for fetching data
export function useDataFetching<T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction();
        setData(result);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
}

// Hook for fetching all items
export function useItems() {
  return useDataFetching(apiService.getItems);
}

// Hook for fetching a single item by ID
export function useItem(id: number) {
  return useDataFetching(() => apiService.getItemById(id), [id]);
}

export default {
  useDataFetching,
  useItems,
  useItem,
};

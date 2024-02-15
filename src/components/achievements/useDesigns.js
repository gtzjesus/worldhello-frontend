import { useQuery } from '@tanstack/react-query';
import { getDesigns } from '../../services/apiDesigns';

export default function useDesigns() {
  const {
    isLoading,
    data: designs,
    error,
  } = useQuery({
    queryKey: ['designs'],
    queryFn: getDesigns,
  });
  return { isLoading, error, designs };
}

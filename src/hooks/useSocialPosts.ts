import { useEffect, useState } from 'react';
import { getSocialPosts, SocialPost } from '@/services/socialService';

export function useSocialPosts() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getSocialPosts();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar posts das redes sociais:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return { posts, loading };
}

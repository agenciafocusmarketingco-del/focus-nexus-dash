import { supabase } from '@/integrations/supabase/client';
import { notificationService } from './notificationService';

/**
 * Service for handling file operations
 */
export const fileService = {
  /**
   * Upload file to Supabase Storage
   */
  uploadFile: async (
    bucket: string, 
    filePath: string, 
    file: File,
    options?: { 
      onProgress?: (progress: number) => void;
      maxSize?: number;
    }
  ) => {
    try {
      const maxSize = options?.maxSize || 5 * 1024 * 1024; // 5MB default
      
      if (file.size > maxSize) {
        throw new Error(`Arquivo muito grande. Tamanho máximo: ${maxSize / 1024 / 1024}MB`);
      }

      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          upsert: true
        });

      if (error) throw error;

      notificationService.success("Upload concluído!", "Arquivo enviado com sucesso");
      return { data, error: null };

    } catch (error: any) {
      notificationService.error("Erro no upload", error.message);
      return { data: null, error };
    }
  },

  /**
   * Get public URL for file
   */
  getPublicUrl: (bucket: string, filePath: string) => {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);
    
    return data.publicUrl;
  },

  /**
   * Delete file from storage
   */
  deleteFile: async (bucket: string, filePath: string) => {
    try {
      const { error } = await supabase.storage
        .from(bucket)
        .remove([filePath]);

      if (error) throw error;

      notificationService.success("Arquivo removido", "O arquivo foi deletado com sucesso");
      return { error: null };

    } catch (error: any) {
      notificationService.error("Erro ao deletar", error.message);
      return { error };
    }
  },

  /**
   * Download file
   */
  downloadFile: async (bucket: string, filePath: string) => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .download(filePath);

      if (error) throw error;

      // Create download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = filePath.split('/').pop() || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      notificationService.success("Download iniciado!", "O arquivo está sendo baixado");
      return { data, error: null };

    } catch (error: any) {
      notificationService.error("Erro no download", error.message);
      return { data: null, error };
    }
  },

  /**
   * Validate file type
   */
  validateFile: (file: File, allowedTypes: string[]) => {
    if (!allowedTypes.includes(file.type)) {
      const allowedExtensions = allowedTypes.join(', ');
      throw new Error(`Tipo de arquivo não permitido. Tipos aceitos: ${allowedExtensions}`);
    }
    return true;
  },

  /**
   * Format file size
   */
  formatFileSize: (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
};
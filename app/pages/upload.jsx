"use client"
import { useState } from 'react';
import { supabase } from '@/app/utils/supabaseClient';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (e) => {
    e.preventDefault();
    setUploading(true);

    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const { data, error } = await supabase.storage
      .from('paisaje') // Reemplaza con el nombre de tu bucket en Supabase
      .upload(`/${file.name}`, file);
    
    

    if (error) {
      console.error(error);
      alert('Error uploading file!');
    } else {
      alert('File uploaded successfully!');
      console.log(data)
    }

    setUploading(false);
  };

  return (
    <form 
    className='bg-gray-700 p-5 rounded-lg flex flex-col justify-center items-center '
    onSubmit={uploadFile}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        disabled={uploading}
      />
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
}

"use client";
// pages/index.js
import { useState, useEffect } from 'react';
import { supabase } from '@/app/utils/supabaseClient';
import "@/app/globals.css"

export default function Home() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      const { data, error } = await supabase
        .storage
        .from('paisaje')
        .list('', { /* Opcional: filtros */ });

      if (error) {
        console.error('Error fetching files:', error);
      } else {
        const urls = data.map((file) => {
          const { data: publicURL } = supabase
            .storage
            .from('paisaje')
            .getPublicUrl(file.name);
          return { name: file.name, url: publicURL.publicUrl };
        });
        setFiles(urls);
      }
    }

    fetchFiles();
  }, []);

  const renderFile = (file) => {
    const fileType = file.name.split('.').pop();

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
      return (
        <img
          src={file.url}
          alt={file.name}
          className="file-image"
        />
      );
    } else if (['mp4', 'webm', 'ogg'].includes(fileType)) {
      return (
        <video controls className="file-video">
          <source src={file.url} type={`video/${fileType}`} />
          Your browser does not support the video tag.
        </video>
      );
    } else if (['doc', 'docx'].includes(fileType)) {
      return (
        <a
          href={file.url}
          download
          className="file-link"
        >
          Download {file.name}
        </a>
      );
    } else {
      return (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="file-link file-link-green"
        >
          Open {file.name}
        </a>
      );
    }
  };

  return (
    <div className="files-container">
      <h1 className="files-title">Files</h1>
      <div className="files-grid">
        {files.map((file) => (
          <div key={file.name} className="file-item">
            {renderFile(file)}
          </div>
        ))}
      </div>
    </div>
  );
}

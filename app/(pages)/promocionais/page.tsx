"use client";
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './p.css'

const VideoPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play();
      video.muted = false;
      video.addEventListener('ended', () => {
        router.push('/');
        setTimeout(() => {
            window.location.reload();
          }, 1000);
      });
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <video ref={videoRef} className="w-full h-full" controls autoPlay>
        <source src="https://s3.ricioconsultas.com.br/ricioconsultas/0803(1)(1).mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default VideoPage;
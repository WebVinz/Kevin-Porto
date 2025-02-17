import React, { useRef, useEffect } from "react";

const Stars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    const numStars = 200; // Jumlah bintang

    // Generate bintang dengan posisi acak
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
        speed: Math.random() * 0.5 + 0.2, // Kecepatan acak
      });
    }

    // Gambar bintang di canvas
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }
    }

    // Animasi bintang bergerak ke bawah
    function animateStars() {
      for (let star of stars) {
        star.y += star.speed; // Geser ke bawah
        if (star.y > canvas.height) {
          star.y = 0; // Reset ke atas layar
          star.x = Math.random() * canvas.width;
        }
      }
      drawStars();
      requestAnimationFrame(animateStars);
    }

    animateStars(); // Jalankan animasi saat pertama kali di-mount
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10"></canvas>;
};

export default Stars;

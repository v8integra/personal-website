// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 5;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.005,
  color: '#ffffff'
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 2;

// Mouse movement effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX / window.innerWidth - 0.5;
  mouseY = event.clientY / window.innerHeight - 0.5;
});

// Animation
function animate() {
  requestAnimationFrame(animate);

  particlesMesh.rotation.y += 0.001;
  particlesMesh.rotation.x += 0.001;

  // Smooth camera movement based on mouse position
  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
  camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;

  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.to('.hero h1', {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.5
});

gsap.to('.hero p', {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.8
});

// Section title animation
gsap.to('.section-title', {
  scrollTrigger: {
    trigger: '.section-title',
    start: 'top bottom-=100',
    toggleActions: 'play none none reverse'
  },
  opacity: 1,
  duration: 1
});

// Project cards animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: i * 0.2
  });
});

// About section animations
gsap.to('.about-image', {
  scrollTrigger: {
    trigger: '.about-image',
    start: 'top bottom-=100',
    toggleActions: 'play none none reverse'
  },
  opacity: 1,
  x: 0,
  duration: 1
});

gsap.to('.about-content', {
  scrollTrigger: {
    trigger: '.about-content',
    start: 'top bottom-=100',
    toggleActions: 'play none none reverse'
  },
  opacity: 1,
  x: 0,
  duration: 1,
  delay: 0.3
});

// Skills animation
gsap.utils.toArray('.skill-item').forEach((skill, i) => {
  gsap.to(skill, {
    scrollTrigger: {
      trigger: skill,
      start: 'top bottom-=50',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    delay: i * 0.1
  });
});

// Timeline animation
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top bottom-=50',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: i * 0.2
  });
});
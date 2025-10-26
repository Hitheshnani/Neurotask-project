console.log('Testing tsx...');
import('./server/index.ts').then(() => {
  console.log('Server module loaded successfully');
}).catch((err) => {
  console.error('Error loading server:', err);
});

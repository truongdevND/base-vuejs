export default function auth(to, from, next) {
    const isAuthenticated = localStorage.getItem('authToken'); 
    if (isAuthenticated) {
      next();
    } else {
      next('/login'); 
    }
  }
  
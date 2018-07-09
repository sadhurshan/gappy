// Initialize your app
var myApp = new Framework7({
  // App root element
  root: '#myApp',
  theme: 'auto',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },],

  view:{
    // ex domCache
    stackPages:true,
    // looks better with js
    animateWithJS:true
  },

  material: true
  // ... other parameters
});
var mainView = app.views.create('.view-main');

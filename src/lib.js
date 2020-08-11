export const handleNavigate = (path) => (e) => {
  window.history.pushState({}, path, window.location.origin + path);
};

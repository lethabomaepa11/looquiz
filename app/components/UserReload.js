export default window.onbeforeunload = function() {
    return "Are you sure you want to leave this page? Your changes may not be saved.";
};
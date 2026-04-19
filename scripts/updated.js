const version = "B";
if (localStorage.version) {
    if (localStorage.version<version) {
        localStorage.version=version;
        location.reload(true);
    }
}
else {
    localStorage.version=version;
    location.reload(true)
}
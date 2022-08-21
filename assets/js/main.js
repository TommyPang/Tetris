function download(id) {
    let cnt = parseInt($(id).text());
    $(id).text(cnt+1);
}
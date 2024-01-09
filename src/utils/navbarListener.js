var executed = false

function navbarListener() {
    if (!executed) {
        var head = document.getElementsByTagName('head')[0]
        var script = document.createElement('script')
        script.text = `
            $(document).ready(function(){
                $(".navbar a").on("click", function(){
                    $(".navbar").find(".active").removeClass("active");
                    $(this).parent().addClass("active");
                });
            });
        `
        head.appendChild(script)
        executed = true;
    }
}

export default navbarListener;
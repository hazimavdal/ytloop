if (this.$auto_re_player == null) {

    let el = document.getElementsByClassName("ytp-play-button")

    let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type == "attributes") {
                replay()
            }
        });
    });

    function replay() {
        if (el[0].title == "Replay") {
            el[0].click()
        }
    }

    function start() {
        this.replay()
        observer.observe(el[0], {
            attributes: true
        });
        console.log("Autoplay is on")
    }

    function stop() {
        observer.disconnect()
        console.log("Autoplay is off")
    }

    this.$auto_re_player = {
        start,
        replay,
        stop
    }
}
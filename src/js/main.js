function exec(c) {
    chrome.tabs.executeScript({
        code: c
    });
}

$(document).ready(function () {
    let chk = $('#toggle')

    chrome.tabs.executeScript({
        file: "js/autoplayer.js"
    });

    chrome.storage.sync.get(['autoreplay'], function (result) {
        chk[0].checked = result.autoreplay;
        if (chk[0].checked) {
            exec('this.$auto_re_player.start()')
        }
    });

    chk.change(function (e) {
        let action = chk[0].checked ? 'start' : 'stop'

        exec(`this.$auto_re_player.${action}()`)

        chrome.storage.sync.set({ 'autoreplay': chk[0].checked }, function () {
            console.log('Replay is ' + chk[0].checked ? "On" : "Off");
        });
    })
})
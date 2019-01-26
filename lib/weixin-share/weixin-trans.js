// require： jquery.qrcode.js
$(document).ready(function() {
	var btn = $(".share_weixin");
	var e, o, d = "share_weixin_qrcode_dialog",
	s = function(t, n) {
		t.empty().qrcode({width: t.width(), height: t.height(), text: n});
	},
	h = function(x) {
        if (e = $("#" + d), o = $("#" + d + "_bg"), e.length < 1) {
            var n = '<div id="' + d + '_bg" class="weixin_popup_bg"></div>',
            i = ['<div id="' + d + '" class="weixin_popup">', '<div class="weixin_popup_head">', "<span>分享到微信朋友圈</span>", '<a href="#" onclick="return false;" class="weixin_popup_close">&times;</a>', "</div>", '<div id="' + d + '_qr" class="weixin_popup_main"></div>', '<div class="weixin_popup_foot">使用“扫一扫”即可将网页分享至朋友圈</div>', "</div>"].join("");
            o = $(n).appendTo("body"),
            e = $(i).appendTo("body"),
            l()
        }
       	s(e.find("#" + d + "_qr"), x),
        b()
    },
    l = function() {
        e.find(".weixin_popup_close").click(g),
        $("body").on("keydown",
        function(n) {
            27 == n.keyCode && g()
        })
    },
    b = function() {
        e.show(),
        o.show()
    },
    g = function() {
        e.hide(),
        o.hide()
    };
    btn.on("click", function() {
        h(btn.data("url"));
    });
});
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5671: function(n, e) {
        var t, i;
        void 0 !== (i = "function" == typeof (t = function() {
            var n = function() {}
              , e = {}
              , t = {}
              , i = {};
            function r(n, e) {
                if (n) {
                    var r = i[n];
                    if (t[n] = e,
                    r)
                        for (; r.length; )
                            r[0](n, e),
                            r.splice(0, 1)
                }
            }
            function o(e, t) {
                e.call && (e = {
                    success: e
                }),
                t.length ? (e.error || n)(t) : (e.success || n)(e)
            }
            function c(t, i, c) {
                var a, s;
                if (i && i.trim && (a = i),
                s = (a ? c : i) || {},
                a) {
                    if (a in e)
                        throw "LoadJS";
                    e[a] = !0
                }
                function l(e, i) {
                    !function(e, t, i) {
                        var r, o, c = (e = e.push ? e : [e]).length, a = c, s = [];
                        for (o = 0,
                        r = function(n, e, i) {
                            if ("e" == e && s.push(n),
                            "b" == e) {
                                if (!i)
                                    return;
                                s.push(n)
                            }
                            --c || t(s)
                        }
                        ; o < a; o++)
                            !function e(t, i, r, o) {
                                var c, a, s = document, l = r.async, u = (r.numRetries || 0) + 1, d = r.before || n, p = t.replace(/[\?|#].*$/, ""), h = t.replace(/^(css|img)!/, "");
                                o = o || 0,
                                /(^css!|\.css$)/.test(p) ? ((a = s.createElement("link")).rel = "stylesheet",
                                a.href = h,
                                (c = "hideFocus"in a) && a.relList && (c = 0,
                                a.rel = "preload",
                                a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p) ? (a = s.createElement("img")).src = h : ((a = s.createElement("script")).src = t,
                                a.async = void 0 === l || l),
                                a.onload = a.onerror = a.onbeforeload = function(n) {
                                    var s = n.type[0];
                                    if (c)
                                        try {
                                            a.sheet.cssText.length || (s = "e")
                                        } catch (n) {
                                            18 != n.code && (s = "e")
                                        }
                                    if ("e" == s) {
                                        if ((o += 1) < u)
                                            return e(t, i, r, o)
                                    } else if ("preload" == a.rel && "style" == a.as)
                                        return a.rel = "stylesheet";
                                    i(t, s, n.defaultPrevented)
                                }
                                ,
                                !1 !== d(t, a) && s.head.appendChild(a)
                            }(e[o], r, i)
                    }(t, function(n) {
                        o(s, n),
                        e && o({
                            success: e,
                            error: i
                        }, n),
                        r(a, n)
                    }, s)
                }
                if (s.returnPromise)
                    return new Promise(l);
                l()
            }
            return c.ready = function(n, e) {
                return function(n, e) {
                    n = n.push ? n : [n];
                    var r, o, c, a = [], s = n.length, l = s;
                    for (r = function(n, t) {
                        t.length && a.push(n),
                        --l || e(a)
                    }
                    ; s--; ) {
                        if (c = t[o = n[s]]) {
                            r(o, c);
                            continue
                        }
                        (i[o] = i[o] || []).push(r)
                    }
                }(n, function(n) {
                    o(e, n)
                }),
                c
            }
            ,
            c.done = function(n) {
                r(n, [])
            }
            ,
            c.reset = function() {
                e = {},
                t = {},
                i = {}
            }
            ,
            c.isDefined = function(n) {
                return n in e
            }
            ,
            c
        }
        ) ? t.apply(e, []) : t) && (n.exports = i)
    },
    8312: function(n, e, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(224)
        }
        ])
    },
    224: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            default: function() {
                return ew
            }
        });
        var i, r, o = t(5893), c = t(5675), a = t.n(c), s = {
            src: "/_next/static/media/TelegramBlack.925c8836.png",
            height: 61,
            width: 61,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX////////////////////////////////////////////////Vd7HLAAAADHRSTlMfBCcWwZZtOvaFoU5E+/PYAAAACXBIWXMAAAsSAAALEgHS3X78AAAAM0lEQVR4nBXKyRGAQADDMDvZE/rvl0FvoSQoJikR0qybwp7jDIB3Pmc2EPdY9M8QRAvVDxcRAKK/F23sAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }, l = {
            src: "/_next/static/media/CoinGecko.adc5a776.svg",
            height: 280,
            width: 280,
            blurWidth: 0,
            blurHeight: 0
        }, u = {
            src: "/_next/static/media/Dextool.aa684d06.svg",
            height: 280,
            width: 280,
            blurWidth: 0,
            blurHeight: 0
        }, d = {
            src: "/_next/static/media/CMC.e3aed6b9.png",
            height: 280,
            width: 280,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX////////////////////////////////////////+/v4QXqyPAAAAC3RSTlMBd4QqFSGgPZNUysZPp0QAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicNcvJDcAwDMRArlZX0n/BhgOE7yGAi1uGFAnEmCeg5HdbRa26tQktmPnxt2EDBxd4AKGLz7qNAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }, p = {
            src: "/_next/static/media/TiktokWhite.b02bde1c.svg",
            height: 512,
            width: 512,
            blurWidth: 0,
            blurHeight: 0
        }, h = {
            src: "/_next/static/media/InstagramWhite.43d2b4b7.svg",
            height: 512,
            width: 512,
            blurWidth: 0,
            blurHeight: 0
        };
        (i = r || (r = {}))[i.TELEGRAM = 0] = "TELEGRAM",
        i[i.TWITTER = 1] = "TWITTER",
        i[i.DISCORD = 2] = "DISCORD",
        i[i.DEXSCREENER = 3] = "DEXSCREENER",
        i[i.DEXTOOL = 4] = "DEXTOOL",
        i[i.COINGECKO = 5] = "COINGECKO",
        i[i.COINMARKETCAP = 6] = "COINMARKETCAP",
        i[i.INSTAGRAM = 7] = "INSTAGRAM",
        i[i.TIKTOK = 8] = "TIKTOK";
        let f = {
            label: "DexTool",
            type: r.DEXTOOL,
            url: "https://www.dextools.io/app/en/solana/pair-explorer/FvMZrD1qC66Zw8VPrW15xN1N5owUPqpQgNQ5oH18mR4E?t=1710448031372",
            whiteIcon: u,
            blackIcon: u,
            comingSoon: !1
        }
          , g = {
            label: "CoinGecko",
            type: r.COINGECKO,
            url: "https://www.coingecko.com/en/coins/mumu-the-bull-3",
            whiteIcon: l,
            blackIcon: l,
            comingSoon: !1
        }
          , m = {
            label: "Telegram",
            type: r.TELEGRAM,
            url: "https://t.me/MumuTheBullPortal",
            whiteIcon: s,
            blackIcon: s,
            comingSoon: !1
        }
          , x = {
            label: "Twitter",
            type: r.TWITTER,
            url: "https://twitter.com/mumu_bull",
            whiteIcon: {
                src: "/_next/static/media/TwitterWhite.01b8eea0.svg",
                height: 20,
                width: 20,
                blurWidth: 0,
                blurHeight: 0
            },
            blackIcon: {
                src: "/_next/static/media/TwitterBlack.ad068329.svg",
                height: 26,
                width: 26,
                blurWidth: 0,
                blurHeight: 0
            },
            comingSoon: !1
        };
        r.DISCORD;
        let b = {
            label: "Dexscreener",
            type: r.DISCORD,
            url: "https://dexscreener.com/solana/fvmzrd1qc66zw8vprw15xn1n5owupqpqgnq5oh18mr4e",
            whiteIcon: {
                src: "/_next/static/media/DexscreenerWhite.a6fee09f.svg",
                height: 192,
                width: 192,
                blurWidth: 0,
                blurHeight: 0
            },
            blackIcon: {
                src: "/_next/static/media/DexscreenerBlack.18ae2bb7.svg",
                height: 192,
                width: 192,
                blurWidth: 0,
                blurHeight: 0
            },
            comingSoon: !1
        }
          , w = {
            label: "CoinMarketCap",
            type: r.COINMARKETCAP,
            url: "https://coinmarketcap.com/currencies/mumu-ing/",
            whiteIcon: d,
            blackIcon: d,
            comingSoon: !1
        }
          , v = {
            label: "Instagram",
            type: r.INSTAGRAM,
            url: "https://instagram.com/mumuthebull",
            whiteIcon: h,
            blackIcon: h,
            comingSoon: !1
        }
          , A = {
            label: "Tiktok",
            type: r.TIKTOK,
            url: "https://www.tiktok.com/@mumu_bull?_t=8njMKvz1dNn&_r=1",
            whiteIcon: p,
            blackIcon: p,
            comingSoon: !1
        }
          , k = [m, x, g, w, b, f, v, A];
        var y = t(579)
          , j = t(2729)
          , Z = t(9521)
          , C = t(7544);
        function I() {
            let n = (0,
            j._)(["\n  position: fixed;\n  width: 100vw;\n  bottom: 0;\n  left: 0;\n  background-color: ", ";\n\n  display: flex;\n  justify-content: center;\n"]);
            return I = function() {
                return n
            }
            ,
            n
        }
        function _() {
            let n = (0,
            j._)(["\n  width: 90%;\n  padding: 12px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: ", ") {\n    justify-content: space-between;\n    padding: 12px 24px;\n    width: 80%;\n  }\n"]);
            return _ = function() {
                return n
            }
            ,
            n
        }
        function P() {
            let n = (0,
            j._)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  letter-spacing: 0.25px;\n\n  @media screen and (min-width: ", ") {\n    font-size: 32px;\n  }\n"]);
            return P = function() {
                return n
            }
            ,
            n
        }
        function E() {
            let n = (0,
            j._)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: flex-end;\n\n  gap: 16px;\n"]);
            return E = function() {
                return n
            }
            ,
            n
        }
        function T() {
            let n = (0,
            j._)(["\n  position: relative;\n\n  cursor: pointer;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  background: ", ";\n  border-radius: 50%;\n  padding: 4px;\n\n  @media screen and (min-width: ", ") {\n    padding: 8px;\n\n    transition-duration: 500ms;\n    cursor: pointer;\n\n    &:hover {\n      transform: scale(1.2);\n      transition-duration: 500ms;\n    }\n  }\n"]);
            return T = function() {
                return n
            }
            ,
            n
        }
        function S() {
            let n = (0,
            j._)(["\n  position: relative;\n  height: 18px;\n  width: 18px;\n\n  @media screen and (min-width: ", ") {\n    height: 24px;\n    width: 24px;\n  }\n"]);
            return S = function() {
                return n
            }
            ,
            n
        }
        let M = Z.ZP.footer.withConfig({
            componentId: "sc-65cbe882-0"
        })(I(), C.Z.colors.cloudWhite)
          , z = Z.ZP.div.withConfig({
            componentId: "sc-65cbe882-1"
        })(_(), C.Z.breakpoints.large)
          , O = Z.ZP.h2.withConfig({
            componentId: "sc-65cbe882-2"
        })(P(), C.Z.breakpoints.large)
          , R = Z.ZP.div.withConfig({
            componentId: "sc-65cbe882-3"
        })(E())
          , W = Z.ZP.a.withConfig({
            componentId: "sc-65cbe882-4"
        })(T(), C.Z.colors.black1, C.Z.breakpoints.large)
          , D = Z.ZP.div.withConfig({
            componentId: "sc-65cbe882-5"
        })(S(), C.Z.breakpoints.large);
        var N = ()=>{
            let {windowDimensions: n, LARGE_SCREEN_SIZE: e} = (0,
            y.Z)();
            return (0,
            o.jsx)(M, {
                children: (0,
                o.jsxs)(z, {
                    children: [n.width >= e && (0,
                    o.jsx)(O, {
                        children: "$MUMU"
                    }), (0,
                    o.jsx)(R, {
                        children: k.map(n=>n.comingSoon ? (0,
                        o.jsx)(W, {
                            children: (0,
                            o.jsx)(D, {
                                children: (0,
                                o.jsx)(a(), {
                                    src: n.whiteIcon,
                                    alt: n.label,
                                    fill: !0
                                })
                            })
                        }, n.label) : (0,
                        o.jsx)(W, {
                            href: n.url,
                            target: "_blank",
                            children: (0,
                            o.jsx)(D, {
                                children: (0,
                                o.jsx)(a(), {
                                    src: n.whiteIcon,
                                    alt: n.label,
                                    fill: !0
                                })
                            })
                        }, n.label))
                    })]
                })
            })
        }
          , K = t(9886);
        function B() {
            let n = (0,
            j._)(['\n  position: relative;\n  width: 100vw;\n  background-image: url("./assets/BackdropMobile.jpeg");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  aspect-ratio: 1 / 1.522;\n\n  // margin-top: calc(53px + ', "px);\n  margin-top: 40px;\n\n  @media screen and (min-width: ", ') {\n    background-image: url("./assets/Backdrop.svg");\n    aspect-ratio: 1 / 0.7;\n\n    // margin-top: calc(114px);\n    margin-top: 45px;\n  }\n']);
            return B = function() {
                return n
            }
            ,
            n
        }
        let G = Z.ZP.section.withConfig({
            componentId: "sc-4e9b18bb-0"
        })(B(), K.Z.COMINGSOON, C.Z.breakpoints.medium);
        var H = ()=>(0,
        o.jsx)(G, {});
        function L() {
            let n = (0,
            j._)(["\n  font-style: normal;\n  font-weight: 800;\n  font-size: 56px;\n  line-height: 68px;\n  letter-spacing: 0.7px;\n\n  @media screen and (min-width: ", ") {\n    font-size: 80px;\n    line-height: 98px;\n    letter-spacing: 1px;\n  }\n"]);
            return L = function() {
                return n
            }
            ,
            n
        }
        function U() {
            let n = (0,
            j._)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 28px;\n\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n\n  color: ", ";\n\n  text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.67);\n\n  @media screen and (min-width: ", ") {\n    font-size: 44px;\n    line-height: 44px;\n    letter-spacing: 1px;\n  }\n"]);
            return U = function() {
                return n
            }
            ,
            n
        }
        function V() {
            let n = (0,
            j._)(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 125%;\n  letter-spacing: 1px;\n\n  color: ", ";\n\n  @media screen and (min-width: ", ") {\n    font-size: 23px;\n  }\n"]);
            return V = function() {
                return n
            }
            ,
            n
        }
        function Q() {
            let n = (0,
            j._)(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 125%;\n  letter-spacing: 1px;\n  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.71);\n\n  color: ", ";\n\n  @media screen and (min-width: ", ") {\n    font-size: 20px;\n  }\n"]);
            return Q = function() {
                return n
            }
            ,
            n
        }
        Z.ZP.h2.withConfig({
            componentId: "sc-f51d53f2-0"
        })(L(), C.Z.breakpoints.medium),
        Z.ZP.h3.withConfig({
            componentId: "sc-f51d53f2-1"
        })(U(), C.Z.colors.white, C.Z.breakpoints.medium);
        let X = Z.ZP.p.withConfig({
            componentId: "sc-f51d53f2-2"
        })(V(), C.Z.colors.black1, C.Z.breakpoints.medium);
        function q() {
            let n = (0,
            j._)(["\n  position: relative;\n\n  width: 100vw;\n  padding: 36px 0;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n\n  @media screen and (min-width: ", ") {\n    padding: 48px 0;\n  }\n"]);
            return q = function() {
                return n
            }
            ,
            n
        }
        function F() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 80%;\n  max-width: ", ";\n  margin: 0 auto;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);
            return F = function() {
                return n
            }
            ,
            n
        }
        function J() {
            let n = (0,
            j._)(["\n  text-align: center;\n  font-size: 30px;\n\n  @media screen and (min-width: ", ") {\n    text-align: left;\n    font-size: 54px;\n  }\n"]);
            return J = function() {
                return n
            }
            ,
            n
        }
        Z.ZP.p.withConfig({
            componentId: "sc-f51d53f2-3"
        })(Q(), C.Z.colors.white, C.Z.breakpoints.medium);
        let Y = Z.ZP.section.withConfig({
            componentId: "sc-b7a71944-0"
        })(q(), C.Z.colors.cloudWhite, C.Z.breakpoints.large)
          , $ = Z.ZP.div.withConfig({
            componentId: "sc-b7a71944-1"
        })(F(), C.Z.breakpoints.xlarge)
          , nn = (0,
        Z.ZP)(X).withConfig({
            componentId: "sc-b7a71944-2"
        })(J(), C.Z.breakpoints.medium);
        var ne = ()=>(0,
        o.jsx)(Y, {
            children: (0,
            o.jsx)($, {
                children: (0,
                o.jsxs)(nn, {
                    children: ["Mumu is a muuvement to unite everyone in crypto. Backed by number go up technology, the bull born from the meme we all know and love is here to lead the charge. Launched with the starting supply of the U.S. dollar, mutoshi and his delinquents are on a mission to dethrone the establishment and forge the ultimate decentralized currency.", (0,
                    o.jsx)("br", {}), (0,
                    o.jsx)("br", {}), "The memecoin to rule them all. Join the stampede today."]
                })
            })
        });
        function nt() {
            let n = (0,
            j._)(['\n  position: relative;\n  width: 100vw;\n  background-image: url("./assets/Gallery.jpeg");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  aspect-ratio: 1 / 1.428;\n']);
            return nt = function() {
                return n
            }
            ,
            n
        }
        let ni = Z.ZP.section.withConfig({
            componentId: "sc-83fcaaa9-0"
        })(nt());
        var nr = ()=>(0,
        o.jsx)(ni, {})
          , no = {
            src: "/_next/static/media/solscan.011c3fba.svg",
            height: 280,
            width: 280,
            blurWidth: 0,
            blurHeight: 0
        };
        function nc() {
            let n = (0,
            j._)(["\n  position: relative;\n\n  width: 100vw;\n  padding: 36px 0;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n\n  @media screen and (min-width: ", ") {\n    padding: 48px 0;\n  }\n"]);
            return nc = function() {
                return n
            }
            ,
            n
        }
        function na() {
            let n = (0,
            j._)(["\n  position: relative;\n  margin: 0 auto;\n\n  background-color: ", ";\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n\n  padding: 8px 12px;\n  gap: 4px;\n\n  @media screen and (min-width: ", ") {\n    padding: 12px 32px;\n    gap: 12px;\n  }\n"]);
            return na = function() {
                return n
            }
            ,
            n
        }
        function ns() {
            let n = (0,
            j._)(["\n  text-align: center;\n  font-size: 12px;\n  font-weight: 800;\n  color: ", ";\n  white-space: nowrap;\n\n  @media screen and (min-width: ", ") {\n    text-align: left;\n    font-size: 32px;\n  }\n"]);
            return ns = function() {
                return n
            }
            ,
            n
        }
        function nl() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 14px;\n  aspect-ratio: 1/1;\n\n  @media screen and (min-width: ", ") {\n    width: 32px;\n  }\n"]);
            return nl = function() {
                return n
            }
            ,
            n
        }
        let nu = Z.ZP.section.withConfig({
            componentId: "sc-b7bc0670-0"
        })(nc(), C.Z.colors.cloudWhite, C.Z.breakpoints.large)
          , nd = Z.ZP.a.withConfig({
            componentId: "sc-b7bc0670-1"
        })(na(), C.Z.colors.black1, C.Z.breakpoints.medium)
          , np = (0,
        Z.ZP)(X).withConfig({
            componentId: "sc-b7bc0670-2"
        })(ns(), C.Z.colors.cloudWhite, C.Z.breakpoints.medium)
          , nh = Z.ZP.div.withConfig({
            componentId: "sc-b7bc0670-3"
        })(nl(), C.Z.breakpoints.medium);
        var nf = ()=>(0,
        o.jsx)(nu, {
            children: (0,
            o.jsxs)(nd, {
                href: "https://solscan.io/token/5LafQUrVco6o7KMz42eqVEJ9LW31StPyGjeeu5sKoMtA",
                target: "_blank",
                children: [(0,
                o.jsx)(nh, {
                    children: (0,
                    o.jsx)(a(), {
                        src: no,
                        alt: "solscan",
                        fill: !0
                    })
                }), (0,
                o.jsx)(np, {
                    children: "CA: 5LafQUrVco6o7KMz42eqVEJ9LW31StPyGjeeu5sKoMtA"
                })]
            })
        })
          , ng = t(7294)
          , nm = t(5671)
          , nx = t.n(nm)
          , nb = "twttr"
          , nw = !!("undefined" != typeof window && window.document && window.document.createElement);
        function nv(n, e) {
            return n === e ? 0 !== n || 0 !== e || 1 / n == 1 / e : n != n && e != e
        }
        function nA(n) {
            var e = (0,
            ng.useRef)();
            return !function(n, e) {
                if (nv(n, e))
                    return !0;
                if ("object" != typeof n || null === n || "object" != typeof e || null === e)
                    return !1;
                var t = Object.keys(n)
                  , i = Object.keys(e);
                if (t.length !== i.length)
                    return !1;
                for (var r = 0; r < t.length; r++)
                    if (!Object.prototype.hasOwnProperty.call(e, t[r]) || !nv(n[t[r]], e[t[r]]))
                        return !1;
                return !0
            }(n, e.current) && (e.current = n),
            e.current
        }
        function nk(n) {
            return "object" == typeof n ? Object.assign({}, n) : n
        }
        var ny = "twdiv"
          , nj = function(n) {
            var e = n.dataSource
              , t = n.options
              , i = n.onLoad
              , r = n.renderError
              , o = function(n, e, t, i) {
                var r = (0,
                ng.useState)(null)
                  , o = r[0]
                  , c = r[1]
                  , a = (0,
                ng.useRef)(null);
                if (!nw)
                    return {
                        ref: a,
                        error: o
                    };
                var s = [n, nA(e), nA(t)];
                return (0,
                ng.useEffect)(function() {
                    c(null);
                    var r = !1;
                    if (a.current) {
                        if ((o = a.current) && o.querySelectorAll("*").forEach(function(n) {
                            n.hasAttribute(ny) && n.remove()
                        }),
                        !a || !a.current)
                            return;
                        var o, s = document.createElement("div");
                        s.setAttribute(ny, "yes"),
                        a.current.appendChild(s),
                        new Promise(function(n, e) {
                            var t = function() {
                                return e(Error("Could not load remote twitter widgets js"))
                            };
                            nx().isDefined(nb) || nx()("https://platform.twitter.com/widgets.js", nb),
                            nx().ready(nb, {
                                success: function() {
                                    var e = window[nb];
                                    e && e.widgets || t(),
                                    n(e.widgets)
                                },
                                error: t
                            })
                        }
                        ).then(function(i) {
                            return i[n](nk(e), s, nk(t))
                        }).then(function(n) {
                            if (!n && !r)
                                throw Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");
                            if (a && a.current) {
                                if (r) {
                                    s && s.remove();
                                    return
                                }
                                i && i()
                            }
                        }).catch(function(n) {
                            console.error(n),
                            c(n)
                        })
                    }
                    return function() {
                        r = !0
                    }
                }, s),
                {
                    ref: a,
                    error: o
                }
            }("createTimeline", e, t, i)
              , c = o.ref
              , a = o.error;
            return ng.createElement("div", {
                ref: c
            }, a && r && r(a))
        };
        function nZ() {
            let n = (0,
            j._)(["\n  position: relative;\n  padding: 36px 0;\n\n  height: 572px;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  background-color: ", ';\n  background-image: url("./assets/Background.png");\n  background-size: cover;\n  background-position: center;\n\n  @media screen and (min-width: ', ") {\n    padding: 48px 0;\n  }\n"]);
            return nZ = function() {
                return n
            }
            ,
            n
        }
        function nC() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 80%;\n  max-width: ", ";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);
            return nC = function() {
                return n
            }
            ,
            n
        }
        let nI = Z.ZP.section.withConfig({
            componentId: "sc-2f587128-0"
        })(nZ(), C.Z.colors.cloudWhite, C.Z.breakpoints.large);
        Z.ZP.div.withConfig({
            componentId: "sc-2f587128-1"
        })(nC(), C.Z.breakpoints.xlarge);
        var n_ = ()=>{
            let {windowDimensions: n, MEDIUM_SCREEN_SIZE: e, LARGE_SCREEN_SIZE: t} = (0,
            y.Z)();
            return n.width < e ? (0,
            o.jsx)(nI, {
                children: (0,
                o.jsx)(nj, {
                    dataSource: {
                        sourceType: "profile",
                        screenName: "mumu_bull"
                    },
                    options: {
                        height: "500",
                        width: "300"
                    }
                })
            }) : n.width < t ? (0,
            o.jsx)(nI, {
                children: (0,
                o.jsx)(nj, {
                    dataSource: {
                        sourceType: "profile",
                        screenName: "mumu_bull"
                    },
                    options: {
                        height: "500",
                        width: "1000"
                    }
                })
            }) : (0,
            o.jsx)(nI, {
                children: (0,
                o.jsx)(nj, {
                    dataSource: {
                        sourceType: "profile",
                        screenName: "mumu_bull"
                    },
                    options: {
                        height: "500",
                        width: "1200"
                    }
                })
            })
        }
        ;
        function nP() {
            let n = (0,
            j._)(["\n  position: relative;\n  padding: 36px 0;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: ", ") {\n    padding: 48px 0;\n  }\n"]);
            return nP = function() {
                return n
            }
            ,
            n
        }
        function nE() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 80%;\n  max-width: ", ";\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);
            return nE = function() {
                return n
            }
            ,
            n
        }
        function nT() {
            let n = (0,
            j._)(["\n  width: 100%;\n  text-align: center;\n  font-size: 30px;\n\n  @media screen and (min-width: ", ") {\n    text-align: center;\n    font-size: 54px;\n  }\n"]);
            return nT = function() {
                return n
            }
            ,
            n
        }
        function nS() {
            let n = (0,
            j._)(["\n  width: 100%;\n  margin: 24px 0;\n"]);
            return nS = function() {
                return n
            }
            ,
            n
        }
        function nM() {
            let n = (0,
            j._)(["\n  text-align: left;\n  font-size: 30px;\n\n  @media screen and (min-width: ", ") {\n    font-size: 32px;\n  }\n"]);
            return nM = function() {
                return n
            }
            ,
            n
        }
        function nz() {
            let n = (0,
            j._)(["\n  text-align: center;\n  font-size: 14px;\n  font-weight: 800;\n\n  @media screen and (min-width: ", ") {\n    text-align: left;\n    font-size: 32px;\n  }\n"]);
            return nz = function() {
                return n
            }
            ,
            n
        }
        let nO = Z.ZP.section.withConfig({
            componentId: "sc-2d10b3ee-0"
        })(nP(), C.Z.breakpoints.large)
          , nR = Z.ZP.div.withConfig({
            componentId: "sc-2d10b3ee-1"
        })(nE(), C.Z.breakpoints.xlarge)
          , nW = (0,
        Z.ZP)(X).withConfig({
            componentId: "sc-2d10b3ee-2"
        })(nT(), C.Z.breakpoints.medium)
          , nD = Z.ZP.ul.withConfig({
            componentId: "sc-2d10b3ee-3"
        })(nS())
          , nN = Z.ZP.ol.withConfig({
            componentId: "sc-2d10b3ee-4"
        })(nM(), C.Z.breakpoints.medium)
          , nK = Z.ZP.label.withConfig({
            componentId: "sc-2d10b3ee-5"
        })(nz(), C.Z.breakpoints.medium);
        var nB = ()=>(0,
        o.jsx)(nO, {
            children: (0,
            o.jsxs)(nR, {
                children: [(0,
                o.jsx)(nW, {
                    children: "HOW DO I BUY $MUMU?"
                }), (0,
                o.jsxs)(nD, {
                    children: [(0,
                    o.jsx)(nN, {
                        children: "1. Convert some money into Solana ($SOL) through a centralized exchange like Binance or Coinbase."
                    }), (0,
                    o.jsxs)(nN, {
                        children: ["2. Create a brand new wallet with", " ", (0,
                        o.jsx)("a", {
                            href: "https://phantom.app/",
                            target: "_blank",
                            children: "Phantom App"
                        }), ", keep your seed phrase safe, write it down on a piece of paper you can keep safety!"]
                    }), (0,
                    o.jsx)(nN, {
                        children: "3. Copy the Solana wallet address and send some Solana from your exchange account to your phantom wallet address."
                    }), (0,
                    o.jsxs)(nN, {
                        children: ["4. Now visit an exchange platform such as", " ", (0,
                        o.jsx)("a", {
                            href: "https://raydium.io",
                            target: "_blank",
                            children: "Raydium"
                        }), " ", "(via our buy button if you're having trouble) and head over to 'Swap.' Connect your phantom wallet when prompted."]
                    }), (0,
                    o.jsxs)(nN, {
                        children: ["5. Swap the Solana in your wallet for Mumu, you can find Mumu as an option by pasting in the contract address below:", (0,
                        o.jsx)("br", {}), (0,
                        o.jsx)(nK, {
                            children: "5LafQUrVco6o7KMz42eqVEJ9LW31StPyGjeeu5sKoMtA"
                        })]
                    })]
                }), (0,
                o.jsx)(nW, {
                    children: "Congratulations, you are now a future MULLIONAIRE."
                })]
            })
        });
        function nG() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 100vw;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n"]);
            return nG = function() {
                return n
            }
            ,
            n
        }
        function nH() {
            let n = (0,
            j._)(['\n  background-image: url("./assets/mumu-spam.png");\n  aspect-ratio: 5.48 / 1;\n']);
            return nH = function() {
                return n
            }
            ,
            n
        }
        function nL() {
            let n = (0,
            j._)(['\n  background-image: url("./assets/mumu4.jpeg");\n  aspect-ratio: 1.428 / 1;\n']);
            return nL = function() {
                return n
            }
            ,
            n
        }
        function nU() {
            let n = (0,
            j._)(['\n  background-image: url("./assets/mumu5.jpeg");\n  aspect-ratio: 1 / 1.428;\n']);
            return nU = function() {
                return n
            }
            ,
            n
        }
        let nV = Z.ZP.section.withConfig({
            componentId: "sc-8b2d5359-0"
        })(nG())
          , nQ = (0,
        Z.ZP)(nV).withConfig({
            componentId: "sc-8b2d5359-1"
        })(nH());
        (0,
        Z.ZP)(nV).withConfig({
            componentId: "sc-8b2d5359-2"
        })(nL()),
        (0,
        Z.ZP)(nV).withConfig({
            componentId: "sc-8b2d5359-3"
        })(nU());
        var nX = ()=>(0,
        o.jsx)(o.Fragment, {
            children: (0,
            o.jsx)(nQ, {})
        });
        function nq() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 100vw;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n"]);
            return nq = function() {
                return n
            }
            ,
            n
        }
        function nF() {
            let n = (0,
            j._)(['\n  background-image: url("./assets/mumu3.jpeg");\n  aspect-ratio: 1 / 1.428;\n']);
            return nF = function() {
                return n
            }
            ,
            n
        }
        function nJ() {
            let n = (0,
            j._)(['\n  background-image: url("./assets/mumu4.jpeg");\n  aspect-ratio: 1.428 / 1;\n']);
            return nJ = function() {
                return n
            }
            ,
            n
        }
        function nY() {
            let n = (0,
            j._)(['\n  background-image: url("./assets/mumu5.jpeg");\n  aspect-ratio: 1 / 1.428;\n']);
            return nY = function() {
                return n
            }
            ,
            n
        }
        let n$ = Z.ZP.section.withConfig({
            componentId: "sc-107beb19-0"
        })(nq());
        (0,
        Z.ZP)(n$).withConfig({
            componentId: "sc-107beb19-1"
        })(nF());
        let n0 = (0,
        Z.ZP)(n$).withConfig({
            componentId: "sc-107beb19-2"
        })(nJ());
        (0,
        Z.ZP)(n$).withConfig({
            componentId: "sc-107beb19-3"
        })(nY());
        var n1 = ()=>(0,
        o.jsx)(n0, {})
          , n2 = {
            src: "/_next/static/media/Zebec.5b737a76.svg",
            height: 1080,
            width: 1105,
            blurWidth: 0,
            blurHeight: 0
        }
          , n5 = {
            src: "/_next/static/media/HelloMoon.a87cf525.svg",
            height: 24,
            width: 136,
            blurWidth: 0,
            blurHeight: 0
        }
          , n8 = {
            src: "/_next/static/media/HeyWallet.c8189e16.svg",
            height: 533,
            width: 2405,
            blurWidth: 0,
            blurHeight: 0
        }
          , n4 = {
            src: "/_next/static/media/Subber.22583107.svg",
            height: 345,
            width: 1309,
            blurWidth: 0,
            blurHeight: 0
        }
          , n3 = {
            src: "/_next/static/media/AssetDash.86edfba0.svg",
            height: 2e3,
            width: 2e3,
            blurWidth: 0,
            blurHeight: 0
        };
        function n6() {
            let n = (0,
            j._)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 24px 0;\n  gap: 24px;\n\n  @media screen and (min-width: ", ") {\n    margin: 48px 0;\n  }\n"]);
            return n6 = function() {
                return n
            }
            ,
            n
        }
        function n7() {
            let n = (0,
            j._)(["\n  width: 100%;\n  text-align: center;\n  font-size: 30px;\n\n  @media screen and (min-width: ", ") {\n    text-align: center;\n    font-size: 54px;\n  }\n"]);
            return n7 = function() {
                return n
            }
            ,
            n
        }
        function n9() {
            let n = (0,
            j._)(["\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n\n  @media screen and (min-width: ", ') {\n    gap: 48px;\n\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-areas:\n      "box1 box1 box1 box1 box2 box2 box2 box2 box3 box3 box3 box3"\n      "empt1 empt1 box4 box4 box4 empt2 empt2 box5 box5 box5 empt3 empt3";\n\n    grid-template-rows: 1fr 1fr;\n    justify-items: center;\n  }\n']);
            return n9 = function() {
                return n
            }
            ,
            n
        }
        let en = Z.ZP.section.withConfig({
            componentId: "sc-62c20d45-0"
        })(n6(), C.Z.breakpoints.medium)
          , ee = (0,
        Z.ZP)(X).withConfig({
            componentId: "sc-62c20d45-1"
        })(n7(), C.Z.breakpoints.medium)
          , et = Z.ZP.div.withConfig({
            componentId: "sc-62c20d45-2"
        })(n9(), C.Z.breakpoints.medium);
        var ei = ()=>(0,
        o.jsxs)(en, {
            children: [(0,
            o.jsx)(ee, {
                children: "Partners"
            }), (0,
            o.jsxs)(et, {
                children: [(0,
                o.jsx)("a", {
                    style: {
                        position: "relative",
                        height: "50px",
                        aspectRatio: "1/1",
                        gridArea: "box1"
                    },
                    href: "https://twitter.com/Zebec_HQ/status/1772669995555725626?s=20",
                    target: "_blank",
                    children: (0,
                    o.jsx)(a(), {
                        src: n2,
                        alt: "zebec",
                        fill: !0
                    })
                }), (0,
                o.jsx)("a", {
                    style: {
                        position: "relative",
                        height: "50px",
                        aspectRatio: "3.79/1",
                        gridArea: "box2"
                    },
                    href: "https://www.subber.xyz/mumuthebull/allowlist/mumuthebull",
                    target: "_blank",
                    children: (0,
                    o.jsx)(a(), {
                        src: n4,
                        alt: "subber",
                        fill: !0
                    })
                }), (0,
                o.jsx)("a", {
                    style: {
                        position: "relative",
                        height: "50px",
                        aspectRatio: "1/1",
                        gridArea: "box3"
                    },
                    href: "https://swap.assetdash.com/sol-mumu",
                    target: "_blank",
                    children: (0,
                    o.jsx)(a(), {
                        src: n3,
                        alt: "assetdash",
                        fill: !0
                    })
                }), (0,
                o.jsx)("a", {
                    style: {
                        position: "relative",
                        height: "50px",
                        aspectRatio: "4.51/1",
                        gridArea: "box4"
                    },
                    href: "https://twitter.com/hey_wallet/status/1769855401615638548?s=20",
                    target: "_blank",
                    children: (0,
                    o.jsx)(a(), {
                        src: n8,
                        alt: "heywallet",
                        fill: !0
                    })
                }), (0,
                o.jsx)("a", {
                    style: {
                        position: "relative",
                        height: "50px",
                        aspectRatio: "5.68/1",
                        gridArea: "box5",
                        filter: "invert(1)"
                    },
                    href: "https://twitter.com/hellomoon_io/status/1770106990972305711?s=46&t=kuUK0MP5PAyK9lXrY6K9Iw",
                    target: "_blank",
                    children: (0,
                    o.jsx)(a(), {
                        src: n5,
                        alt: "hellomoon",
                        fill: !0
                    })
                })]
            })]
        });
        function er() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 100%;\n  padding: 36px 0;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n\n  background-color: ", ';\n  background-image: url("./assets/Background.png");\n  background-size: cover;\n  background-position: center;\n\n  @media screen and (min-width: ', ") {\n    padding: 48px 0;\n  }\n"]);
            return er = function() {
                return n
            }
            ,
            n
        }
        function eo() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 80%;\n  max-width: ", ";\n"]);
            return eo = function() {
                return n
            }
            ,
            n
        }
        function ec() {
            let n = (0,
            j._)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */\n"]);
            return ec = function() {
                return n
            }
            ,
            n
        }
        let ea = Z.ZP.section.withConfig({
            componentId: "sc-3597b161-0"
        })(er(), C.Z.colors.cloudWhite, C.Z.breakpoints.large)
          , es = Z.ZP.div.withConfig({
            componentId: "sc-3597b161-1"
        })(eo(), C.Z.breakpoints.xlarge)
          , el = Z.ZP.div.withConfig({
            componentId: "sc-3597b161-2"
        })(ec());
        var eu = ()=>(0,
        o.jsx)(ea, {
            children: (0,
            o.jsx)(es, {
                children: (0,
                o.jsx)(el, {
                    children: (0,
                    o.jsx)("iframe", {
                        style: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%"
                        },
                        width: "90%",
                        height: "90%",
                        src: "https://www.youtube.com/embed/FCGfNyAgsxs?si=APN61PZnpEr0VD1x&controls=0",
                        title: "YouTube video player",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        allowFullScreen: !0
                    })
                })
            })
        });
        function ed() {
            let n = (0,
            j._)(['\n  position: relative;\n  width: 100vw;\n  background-image: url("./assets/OkxBanner.png");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  aspect-ratio: 1.687 / 1;\n']);
            return ed = function() {
                return n
            }
            ,
            n
        }
        function ep() {
            let n = (0,
            j._)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);
            return ep = function() {
                return n
            }
            ,
            n
        }
        function eh() {
            let n = (0,
            j._)(["\n  border-radius: 999px;\n  background: ", ";\n\n  color: ", ";\n\n  gap: 10px;\n  padding: 8px 18px;\n\n  font-size: 18px;\n\n  @media screen and (min-width: ", ") {\n    padding: 16px 32px;\n    font-size: 52px;\n  }\n"]);
            return eh = function() {
                return n
            }
            ,
            n
        }
        let ef = Z.ZP.section.withConfig({
            componentId: "sc-41b54ac2-0"
        })(ed())
          , eg = Z.ZP.div.withConfig({
            componentId: "sc-41b54ac2-1"
        })(ep())
          , em = Z.ZP.a.withConfig({
            componentId: "sc-41b54ac2-2"
        })(eh(), C.Z.colors.black1, C.Z.colors.cloudWhite, C.Z.breakpoints.large);
        var ex = ()=>(0,
        o.jsx)(ef, {
            children: (0,
            o.jsx)(eg, {
                children: (0,
                o.jsx)(em, {
                    href: "https://www.okx.com/web3/dex-swap#inputChain=501&inputCurrency=11111111111111111111111111111111&outputChain=501&outputCurrency=5LafQUrVco6o7KMz42eqVEJ9LW31StPyGjeeu5sKoMtA",
                    target: "_blank",
                    children: "BUY IN OKX DEX"
                })
            })
        })
          , eb = ()=>(0,
        o.jsxs)("div", {
            style: {
                marginBottom: "100px"
            },
            children: [(0,
            o.jsx)(H, {}), (0,
            o.jsx)(eu, {}), (0,
            o.jsx)(nf, {}), (0,
            o.jsx)(nX, {}), (0,
            o.jsx)(ne, {}), (0,
            o.jsx)(ex, {}), (0,
            o.jsx)(n_, {}), (0,
            o.jsx)(n1, {}), (0,
            o.jsx)(nB, {}), (0,
            o.jsx)(nr, {}), (0,
            o.jsx)(ei, {}), (0,
            o.jsx)(N, {})]
        });
        function ew() {
            return (0,
            o.jsx)(eb, {})
        }
    },
    9886: function(n, e) {
        "use strict";
        e.Z = {
            COMINGSOON: 45
        }
    }
}, function(n) {
    n.O(0, [774, 888, 179], function() {
        return n(n.s = 8312)
    }),
    _N_E = n.O()
}
]);

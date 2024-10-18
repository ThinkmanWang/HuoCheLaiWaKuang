(() => {
	var e = {
			871: () => {
				var e = document.createElement("style");
				e.innerHTML = "\n\t".concat("\n\tcanvas{\n\t\ttouch-action: none;\n\t\t-webkit-touch-callout: none;\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\tuser-select: none;\n\t}\n", "\n"), document.head.appendChild(e)
			},
			721: () => {
				Promise.allSettled = Promise.allSettled || function(e) {
					return Promise.all(e.map((function(e) {
						return e.then((function(e) {
								return {
									status: "fulfilled",
									value: e
								}
							}))
							.catch((function(e) {
								return {
									status: "rejected",
									reason: e
								}
							}))
					})))
				}
			}
		},
		t = {};

	function n(i) {
		var o = t[i];
		if (void 0 !== o) return o.exports;
		var r = t[i] = {
			exports: {}
		};
		return e[i](r, r.exports, n), r.exports
	}(() => {
		"use strict";
		const e = {
			ready: "pokiAppReady",
			adblocked: "pokiAppAdblocked",
			startLoading: "pokiAppStartLoading",
			ads: {
				completed: "pokiAdsCompleted",
				error: "pokiAdsError",
				impression: "pokiAdsImpression",
				durationChange: "pokiAdsDurationChange",
				limit: "pokiAdsLimit",
				ready: "pokiAdsReady",
				requested: "pokiAdsRequested",
				prebidRequested: "pokiAdsPrebidRequested",
				skipped: "pokiAdsSkipped",
				started: "pokiAdsStarted",
				stopped: "pokiAdsStopped",
				busy: "pokiAdsBusy",
				position: {
					preroll: "PP",
					midroll: "PM",
					rewarded: "PR",
					display: "DP"
				},
				video: {
					clicked: "pokiVideoAdsClicked",
					firstQuartile: "pokiVideoAdsFirstQuartile",
					midPoint: "pokiVideoAdsMidPoint",
					thirdQuartile: "pokiVideoAdsThirdQuartile",
					error: "pokiVideoAdsError",
					loaderError: "pokiVideoAdsLoaderError",
					paused: "pokiVideoAdsPauseTriggered",
					resumed: "pokiVideoAdsResumedTriggered",
					progress: "pokiVideoAdsProgress",
					buffering: "pokiVideoAdsBuffering",
					startHouseAdFlow: "pokiVideoAdsStartHouseAdFlow"
				},
				display: {
					error: "pokiDisplayAdsError"
				},
				extendedVideoError: "pokiAdsExtendedVideoError"
			},
			info: {
				messages: {
					timeLimit: "The ad-request was not processed, because of a time constraint",
					prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll (PokiSDK.commercialBreak before PokiSDK.gameplayStart)",
					disabled: "The ad-request was cancelled, because we've disabled this format for this specific configuration"
				}
			},
			playtest: {
				startVideo: "pokiPlaytestStartVideo",
				stopVideo: "pokiPlaytestStopVideo"
			},
			message: {
				event: "pokiMessageEvent",
				sdkDetails: "pokiMessageSdkDetails",
				setPokiURLParams: "pokiMessageSetPokiURLParams",
				sendGameScreenshot: "pokiMessageSendScreenshot",
				sendGameRawScreenshot: "pokiMessageSendRawScreenshot",
				sendUploadScreenshot: "pokiMessageSendUploadScreenshot",
				sendCommand: "pokiMessageSendCommand",
				sendInspectorEvent: "pokiMessageInspectorEvent",
				sendInspectorCookies: "pokiMessageSendInspectorCookies",
				sendInspectorConsole: "pokiMessageSendInspectorConsole",
				sendInspectorBadBehavior: "pokiMessageSendInspectorBadBehavior"
			},
			tracking: {
				custom: "pokiTrackingCustom",
				measure: "pokiTrackingMeasure",
				debugTrueInProduction: "pokiMessageDebugTrueProduction",
				screen: {
					gameplayStart: "pokiTrackingScreenGameplayStart",
					gameplayStop: "pokiTrackingScreenGameplayStop",
					gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
					commercialBreak: "pokiTrackingScreenCommercialBreak",
					rewardedBreak: "pokiTrackingScreenRewardedBreak",
					firstRound: "pokiTrackingScreenFirstRound",
					displayAd: "pokiTrackingScreenDisplayAdRequest",
					destroyAd: "pokiTrackingScreenDisplayAdDestroy",
					playerActive: "pokiTrackingScreenPlayerActive"
				},
				playtest: {
					showModal: "pokiTrackingPlaytestShowModal",
					accepted: "pokiTrackingPlaytestAccepted",
					rejected: "pokiTrackingPlaytestRejected",
					noCanvas: "pokiTrackingPlaytestNoCanvas",
					notLoaded: "pokiTrackingPlaytestNotLoaded",
					starting: "pokiTrackingPlaytestStarting",
					closed: "pokiTrackingPlaytestClosed",
					error: "pokiTrackingPlaytestError"
				},
				sdk: {
					status: {
						initialized: "pokiTrackingSdkStatusInitialized",
						failed: "pokiTrackingSdkStatusFailed"
					}
				},
				ads: {
					status: {
						busy: "pokiTrackingAdsStatusBusy",
						completed: "pokiTrackingAdsStatusCompleted",
						error: "pokiTrackingAdsStatusError",
						impression: "pokiTrackingAdsStatusImpression",
						limit: "pokiTrackingAdsStatusLimit",
						ready: "pokiTrackingAdsStatusReady",
						requested: "pokiTrackingAdsStatusRequested",
						prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
						skipped: "pokiTrackingAdsStatusSkipped",
						started: "pokiTrackingAdsStatusStarted",
						buffering: "pokiTrackingAdsStatusBuffering"
					},
					video: {
						clicked: "pokiTrackingAdsVideoClicked",
						error: "pokiTrackingAdsVideoError",
						loaderError: "pokiTrackingAdsVideoLoaderError",
						progress: "pokiTrackingAdsVideoProgress",
						paused: "pokiTrackingAdsVideoPaused",
						resumed: "pokiTrackingAdsVideoResumed",
						extendedVideoError: "pokiTrackingAdsVideoExtendedVideoError"
					},
					display: {
						requested: "pokiTrackingScreenDisplayAdRequested",
						impression: "pokiTrackingScreenDisplayAdImpression"
					},
					rewardedWeb: {
						request: "pokiTrackingRewardedWebRequest",
						ready: "pokiTrackingRewardedWebReady",
						impression: "pokiTrackingRewardedWebImpression",
						closedGranted: "pokiTrackingRewardedWebClosedGranted",
						closedDeclined: "pokiTrackingRewardedWebclosedDeclined",
						empty: "pokiTrackingRewardedWebEmpty"
					}
				}
			}
		};

		function t(e) {
			var t = new RegExp("".concat(e, "=([^;]+)(?:;|$)"))
				.exec(document.cookie);
			return t ? t[1] : ""
		}

		function i(e, t, n) {
			document.cookie = "".concat(e, "=")
				.concat(t, "; path=/; samesite=lax; max-age=")
				.concat(Math.min(n || 15552e3, 15552e3))
		}

		function o() {
			for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++) t = String.fromCharCode(255 & e) + t, e >>= 8;
			if (window.crypto && crypto.getRandomValues && Uint32Array) {
				var i = new Uint32Array(12);
				crypto.getRandomValues(i);
				for (var o = 0; o < 12; o++) t += String.fromCharCode(255 & i[o])
			} else
				for (var r = 0; r < 12; r++) t += String.fromCharCode(Math.floor(256 * Math.random()));
			return btoa(t)
				.replace(/\+/g, "-")
				.replace(/\//g, "_")
				.replace(/=/g, "")
		}

		function r(e, t, n) {
			console.error(e);
			var i = [{
				k: "where",
				v: t
			}, {
				k: "error",
				v: e.name && e.message ? "".concat(e.name, ": ")
					.concat(e.message) : JSON.stringify(e)
			}];
			if (void 0 !== n) {
				var o = n;
				"string" != typeof e && (o = JSON.stringify(e)), i.push({
					k: "extra",
					v: o
				})
			}! function(e, t) {
				fetch(e, {
						method: "POST",
						headers: {
							"Content-Type": "text/plain"
						},
						body: t,
						mode: "no-cors",
						keepalive: !0,
						credentials: "omit"
					})
					.catch((function(n) {
						console.error(n);
						try {
							var i = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
							i.open("POST", e, !0), i.setRequestHeader("Content-Type", "text/plain"), i.send(t)
						} catch (e) {}
					}))
			}("https://t.poki.io/l", JSON.stringify({
				c: "observer-error",
				ve: 7,
				d: i
			}))
		}
		window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
		var a = "poki_session";
		window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
		var s = ["poki.at", "poki.be", "poki.by", "poki.ch", "poki.cn", "poki.co.id", "poki.co.il", "poki.com.br", "poki.com", "poki.cz", "poki.de", "poki.dk", "poki.fi", "poki.it", "poki.jp", "poki.nl", "poki.pl", "poki.pt", "poki.se", "www.trochoi.net"];

		function d() {
			try {
				var e = new URL(document.referrer)
					.hostname;
				return s.indexOf(e) > -1 ? "poki" : e
			} catch (e) {}
			return ""
		}

		function c(e, t) {
			if (!e) return !1;
			if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
			if (!e.tab_id) return !1;
			if (!e.expire || Date.now() > e.expire) return !1;
			if (e.expire > Date.now() + 18e5) return !1;
			if (t) {
				if (void 0 !== e.referrer_domain) {
					var n = d();
					if ("poki" !== n && n !== e.referrer_domain) return !1
				}
				var i = new URLSearchParams(window.location.search);
				if (["gclid", "msclkid", "yclid", "ttclid", "fbclid", "utm_campaign", "campaign", "adgroup", "creative", "utm_term"].some((function(e) {
					return i.has(e)
				})) || "web_app_manifest" === i.get("utm_source") || "bing" === i.get("utm_source") || "cpc" === i.get("utm_medium") || "rtb-cpm" === i.get("utm_medium")) return !1
			}
			return !0
		}

		function l() {
			var e = null;
			c(window[window._pokiSessionGlobalName], !1) && (e = window[window._pokiSessionGlobalName]);
			try {
				var t = sessionStorage.getItem(a);
				if (t) {
					var n = JSON.parse(t);
					c(n, !0) && (!e || n.depth > e.depth) && (e = n)
				}
			} catch (e) {
				try {
					r(e, "getSession", sessionStorage.getItem(a))
				} catch (t) {
					r(e, "getSession", t)
				}
			}
			return e
		}

		function u() {
			var e = 0;
			window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].count && (e = window[window._pokiSessionGlobalName].count);
			try {
				var n = sessionStorage.getItem(a);
				if (n) {
					var i = JSON.parse(n);
					i && i.count && i.count > e && (e = i.count)
				}
			} catch (e) {
				try {
					r(e, "getPreviousSessionCount", sessionStorage.getItem(a))
				} catch (t) {
					r(e, "getPreviousSessionCount", t)
				}
			}
			try {
				var o = t(a);
				if (o) {
					var s = JSON.parse(o);
					s && s.count && s.count > e && (e = s.count)
				}
			} catch (e) {
				try {
					r(e, "getPreviousSessionCount", t(a))
				} catch (t) {
					r(e, "getPreviousSessionCount", t)
				}
			}
			return e
		}

		function p() {
			if (window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].tab_id) return window[window._pokiSessionGlobalName].tab_id;
			try {
				var e = sessionStorage.getItem(a);
				if (e) {
					var t = JSON.parse(e);
					if (t && t.tab_id) return t.tab_id
				}
			} catch (e) {}
			return o()
		}

		function A() {
			var e = 0,
				n = l();
			n && (e = n.depth);
			try {
				var i = t(a);
				if (i) {
					var o = JSON.parse(i);
					!c(o, !0) || n && o.id !== n.id || (e = Math.max(e, o.depth))
				}
			} catch (e) {
				var s = null;
				try {
					s = t(a) || null
				} catch (e) {}
				r(e, "getSessionDepth", s)
			}
			return e
		}
		const h = function(e, t) {
			var n = !1;
			return Object.keys(t)
				.forEach((function(i) {
					t[i] === e && (n = !0)
				})), n
		};
		var f = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "GB", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO"];

		function v(e) {
			return f.includes(e)
		}
		const m = function(e, t) {
				var n;
				if ("undefined" == typeof window && !t) return "";
				e = e.replace(/[\[]/, "\\[")
					.replace(/[\]]/, "\\]");
				var i = new RegExp("(?:[\\?&]|^)".concat(e, "=([^&#]*)"))
					.exec(t || (null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.search) || "");
				return null === i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "))
			},
			g = function() {
				return "undefined" != typeof navigator && /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(navigator.userAgent)
			},
			y = function() {
				return "undefined" != typeof navigator && /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
			};
		var w, b, k = m("url_referrer") || "",
			x = {
				bot: "1" === m("bot"),
				categories: m("categories") || "",
				device: g() ? "mobile" : y() ? "tablet" : "desktop",
				experiment: m("experiment") || "",
				forceAd: m("force_ad") || !1,
				isPokiIframe: (parseInt(m("site_id"), 10) || 0) > 0,
				siteID: parseInt(m("site_id"), 10) || 3,
				tag: m("tag") || "",
				versionID: m("game_version_id"),
				debugMode: "true" === m("pokiDebug"),
				logMode: "" !== m("pokiLogging"),
				testVideos: "true" === m("testVideos"),
				referrer: k,
				isPlayground: !!window.isPokiPlayground,
				isInspector: "inspector-uploads.poki-user-content.com" === (null === (w = null === window || void 0 === window ? void 0 : window.location) || void 0 === w ? void 0 : w.host) || (null === (b = null === document || void 0 === document ? void 0 : document.referrer) || void 0 === b ? void 0 : b.includes("inspector.poki.dev")) || "1" === m("inspector"),
				houseAdsOnly: !1,
				ccpaApplies: m("ccpaApplies"),
				country: (m("country") || "")
					.toUpperCase(),
				gameID: m("game_id"),
				gdprApplies: v((m("country") || "")
					.toUpperCase()),
				contentGameID: void 0,
				specialCondition: m("special_condition"),
				iabcat: void 0,
				nonPersonalized: "y" === m("nonPersonalized"),
				familyFriendly: "y" === m("familyFriendly"),
				kioskMode: "y" === m("kioskMode") || !!(null === window || void 0 === window ? void 0 : window.kioskMode),
				forceBidder: m("force_bidder") || "",
				cloudSaveGames: "y" === m("cloudsavegames")
			},
			I = function(e, t) {
				x[e] = t
			};
		const E = x;
		const S = function() {
			function t() {}
			return t.sendMessage = function(t, n, i) {
				if (void 0 === i && (i = window.parent), !h(t, e.message)) {
					var o = Object.keys(e.message)
						.map((function(e) {
							return "poki.message.".concat(e)
						}));
					throw new TypeError("Argument 'type' must be one of ".concat(o.join(", ")))
				}
				var r = n || {};
				E.gameID && E.versionID && (r.pokifordevs = {
					game_id: E.gameID,
					game_version_id: E.versionID
				}), null == i || i.postMessage({
					type: t,
					content: r
				}, "*")
			}, t
		}();
		var C = function() {
			function e() {}
			return e.debug = !1, e.log = !1, e.init = function(t, n) {
				var i, o, r = window.location.hostname;
				void 0 === t && ("test" === (null === (o = null === (i = null === window || void 0 === window ? void 0 : window.process) || void 0 === i ? void 0 : i.env) || void 0 === o ? void 0 : o.NODE_ENV) ? (t = !1, void 0 === n && (n = !1)) : "localhost" === r || "127.0.0.1" === r || "[::1]" === r || "launch.playcanvas.com" === r ? (t = !0, void 0 === n && (n = !1)) : (t = !1, void 0 === n && (n = !1))), E.isInspector ? (t = !0, n = !0) : r.endsWith(".poki-gdn.com") && (t = !1, n = !1), E.debugMode && (t = !0), E.logMode && (n = !0), void 0 === n && (n = t), e.debug = t, e.log = n
			}, e
		}();
		const _ = C;
		var T = function(e) {
			var t = new Array;
			return Object.keys(e)
				.forEach((function(n) {
					"object" == typeof e[n] ? t = t.concat(T(e[n])) : t.push(e[n])
				})), t
		};
		const P = T;
		var B = function() {
				return B = Object.assign || function(e) {
					for (var t, n = 1, i = arguments.length; n < i; n++)
						for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}, B.apply(this, arguments)
			},
			D = function() {
				function e() {}
				return e.clearEventListeners = function() {
					this.listeners = {}
				}, e.removeEventListener = function(e, t) {
					if (Object.prototype.hasOwnProperty.call(this.listeners, e)) {
						var n = this.listeners[e].indexOf(t); - 1 !== n && this.listeners[e].splice(n, 1)
					}
				}, e.addEventListener = function(e, t, n) {
					var i = this;
					if (void 0 === n && (n = !1), n = !!n, Object.prototype.hasOwnProperty.call(this.listeners, e) || (this.listeners[e] = []), n) {
						var o = function(n) {
							i.removeEventListener.bind(i)(e, o), t(n)
						};
						this.listeners[e].push(o)
					} else this.listeners[e].push(t)
				}, e.dispatchEvent = function(e, t) {
					var n, i;
					void 0 === t && (t = {}), _.debug && "test" !== (null === (i = null === (n = null === window || void 0 === window ? void 0 : window.process) || void 0 === n ? void 0 : n.env) || void 0 === i ? void 0 : i.NODE_ENV) && console.info(e, t);
					for (var o = Object.keys(this.listeners), r = 0; r < o.length; r++) {
						var a = o[r];
						if (e === a)
							for (var s = this.listeners[a], d = 0; d < s.length; d++) s[d](B(B({}, this.videoDataAnnotations), t))
					}
				}, e.addVideoDataAnnotations = function(e) {
					this.videoDataAnnotations = B(B({}, this.videoDataAnnotations), e)
				}, e.getVideoDataAnnotations = function() {
					return this.videoDataAnnotations
				}, e.clearVideoDataAnnotations = function() {
					this.videoDataAnnotations = {}
				}, e.listeners = {}, e.videoDataAnnotations = {}, e
			}();
		const M = D;
		var L = function() {
			return L = Object.assign || function(e) {
				for (var t, n = 1, i = arguments.length; n < i; n++)
					for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}, L.apply(this, arguments)
		};
		const z = function(e) {
			var t;
			if ("undefined" != typeof window && "undefined" != typeof fetch) {
				var n = M.getVideoDataAnnotations(),
					i = e.size;
				(null === (t = e.event) || void 0 === t ? void 0 : t.startsWith("video-")) && (i = "640x360v");
				var o = L(L({}, e), {
					size: i,
					opportunity_id: e.opportunityId || n.opportunityId,
					ad_unit_path: e.adUnitPath || n.adUnitPath,
					p4d_game_id: E.gameID,
					p4d_version_id: E.versionID,
					bidder: e.bidder || n.bidder,
					bid: e.bid || n.bid || 0,
					error_code: e.errorCode,
					creative_id: e.creativeId || n.creativeId,
					experiment: E.experiment
				});
				console.log("PokiAdServer Tracking: ", o) 
			}
		};
		const R = function(e, t) {
			return void 0 === t && (t = !1), new Promise((function(n, i) {
				var o = document.createElement("script");
				o.type = t ? "module" : "text/javascript", o.async = !0, o.src = e;
				var r = function() {
					o.readyState && "loaded" !== o.readyState && "complete" !== o.readyState || (n(), o.onload = null, o.onreadystatechange = null)
				};
				o.onload = r, o.onreadystatechange = r, o.onerror = i, document.head.appendChild(o)
			}))
		};

		function O(e) {
			switch (Object.prototype.toString.call(e)) {
				case "[object Error]":
				case "[object Exception]":
				case "[object DOMException]":
					return !0;
				default:
					return e instanceof Error
			}
		}

		function j(e) {
			try {
				var t = new WeakSet;
				return JSON.stringify(e, (function(e, n) {
					if ("object" == typeof n && null !== n) {
						if (t.has(n)) return "[Circular]";
						t.add(n)
					}
					return n
				}))
			} catch (t) {
				try {
					return e.toString()
				} catch (e) {
					return "[Object]"
				}
			}
		}
		var N, G = [],
			U = function(e) {
				var t = !1,
					n = 0;
				return function(i) {
					if (t) n++;
					else {
						t = !0, setTimeout((function() {
							t = !1
						}), e);
						var o = n;
						n = 0, i(o)
					}
				}
			}(100),
			V = console.error,
			H = ["Audio callback had starved sending audio by"],
			F = !1,
			q = Math.random()
			.toString(36)
			.substr(2, 9);

		function Q(e, t) {
			void 0 === t && (t = !0), E.gameID && !E.isPlayground ? U((function(t) {
				try {
					var n = e.message || j(e);
					G.push({
						n: e.name,
						m: n,
						s: JSON.stringify(e.stack)
					}), N && N({
						name: e.name,
						message: n,
						stack: e.stack
					});
					var i = JSON.stringify({
							gid: E.gameID,
							vid: E.versionID,
							ve: 7,
							n: e.name,
							m: n + (t ? " (skipped ".concat(t, " errors)") : ""),
							s: JSON.stringify(e.stack),
							ui: q
						}),
						o = "https://t.poki.io/ge";
					if (navigator.sendBeacon) navigator.sendBeacon(o, i);
					else {
						var r = new XMLHttpRequest;
						r.open("POST", o, !0), r.send(i)
					}
				} catch (e) {
					console.error(e)
				}
			})) : t && console.log(e)
		}

		function W(e) {
			O(e.reason) ? Q(e.reason) : Q({
				name: "unhandledrejection",
				message: JSON.stringify(e.reason) || j(e)
			})
		}

		function X(e) {
			O(e.error) ? Q(e.error) : Q(e)
		}

		function Z() {
			if (!F) {
				F = !0, window.addEventListener("unhandledrejection", W), window.addEventListener("error", X);
				try {
					console.error = function() {
						for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
						var n = j(e);
						H.some((function(e) {
							return n.includes(e)
						})) || Q({
							name: "console.error",
							message: n
						}, !1), V.apply(console, e)
					}
				} catch (e) {}
			}
		}

		function J() {
			if (F) {
				F = !1, window.removeEventListener("unhandledrejection", W), window.removeEventListener("error", X);
				try {
					console.error = V
				} catch (e) {}
			}
		}
		"undefined" == typeof window || E.isPlayground || Z();
		const Y = function() {
			for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++) t = String.fromCharCode(255 & e) + t, e >>= 8;
			if (window.crypto && crypto.getRandomValues && Uint32Array) {
				var i = new Uint32Array(12);
				crypto.getRandomValues(i);
				for (n = 0; n < 12; n++) t += String.fromCharCode(255 & i[n])
			} else
				for (n = 0; n < 12; n++) t += String.fromCharCode(Math.floor(256 * Math.random()));
			return btoa(t)
				.replace(/\+/g, "-")
				.replace(/\//g, "_")
				.replace(/=/g, "")
		};
		var K = window.requestAnimationFrame;

		function $(e) {
			return Math.round(100 * e) / 100
		}
		var ee = function() {
				function e(e) {
					var t = this;
					this.seconds = [], this.frameCounter = 0, Math.random() > e || (this.nextSecond = performance.now() + 1e3, K((function() {
						t.frame()
					})))
				}
				return e.prototype.frame = function() {
					for (var e = this, t = performance.now(); t >= this.nextSecond;) this.seconds.unshift(this.frameCounter), this.seconds.length > 10 && this.seconds.pop(), this.frameCounter = 0, this.nextSecond += 1e3;
					this.frameCounter++, K((function() {
						e.frame()
					}))
				}, e.prototype.stats = function() {
					var e = this;
					if (0 !== this.seconds.length) {
						var t = Math.min.apply(Math, this.seconds),
							n = Math.max.apply(Math, this.seconds),
							i = $(this.seconds.reduce((function(e, t) {
								return e + t
							}), 0) / this.seconds.length),
							o = $(this.seconds.slice(1)
								.map((function(t, n) {
									return Math.abs(t - e.seconds[n])
								}))
								.reduce((function(e, t) {
									return e + t
								}), 0) / (this.seconds.length - 1));
						return isNaN(o) && (o = 0), "".concat(t, "|")
							.concat(n, "|")
							.concat(i, "|")
							.concat(o)
					}
				}, e
			}(),
			te = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			ne = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			ie = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var i, o = 0, r = t.length; o < r; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
				return e.concat(i || Array.prototype.slice.call(t))
			},
			oe = Math.random()
			.toString(36)
			.substr(2, 9);

		function re() {
			return te(this, void 0, void 0, (function() {
				var e, t, n;
				return ne(this, (function(i) {
					switch (i.label) {
						case 0:
							return [4, window.cookieStore.getAll()];
						case 1:
							return e = i.sent(), window.indexedDB.databases ? [4, window.indexedDB.databases()] : [3, 3];
						case 2:
							return n = i.sent(), [3, 4];
						case 3:
							n = [], i.label = 4;
						case 4:
							return t = n, [2, ie(ie(ie([], e.map((function(e) {
									return {
										name: e.name,
										expire_seconds: Math.round((e.expires - Date.now()) / 1e3),
										type: "cookie",
										domain: e.domain
									}
								})), !0), Object.keys(window.localStorage)
								.map((function(e) {
									return {
										name: e,
										expire_seconds: 15552e3,
										type: "localStorage"
									}
								})), !0), t.map((function(e) {
								return {
									name: e.name,
									expire_seconds: 0,
									type: "idb"
								}
							})), !0)]
					}
				}))
			}))
		}
		var ae = function() {
			function e() {}
			return e.collectAndLog = function() {
				return te(this, void 0, void 0, (function() {
					var e, t;
					return ne(this, (function(n) {
						switch (n.label) {
							case 0:
								return n.trys.push([0, 2, , 3]), t = {}, [4, re()];
							case 1:
								return t.cookies = n.sent(), t.p4d_game_id = E.gameID, t.user_id = oe, e = t, window.fetch("https://t.poki.io/game-cookies", {
										method: "post",
										body: JSON.stringify(e)
									})
									.catch(), [3, 3];
							case 2:
								return n.sent(), [3, 3];
							case 3:
								return [2]
						}
					}))
				}))
			}, e.trackSavegames = function() {
				window.cookieStore && window.cookieStore.getAll && E.gameID && (Math.random() > .01 || navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1 || (e.collectAndLog(), setInterval(e.collectAndLog, 12e4)))
			}, e
		}();
		const se = ae;
		var de = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			ce = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			le = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var i, o = 0, r = t.length; o < r; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
				return e.concat(i || Array.prototype.slice.call(t))
			};
		var ue, pe = (ue = 0, function() {
			return ue += 1, "u".concat("0000".concat((0 | Math.pow(36 * Math.random(), 4))
						.toString(36))
					.slice(-4))
				.concat(ue)
		});

		function Ae(e) {
			for (var t = [], n = 0, i = e.length; n < i; n++) t.push(e[n]);
			return t
		}

		function he(e) {
			return "style" in e
		}
		var fe = function(e, t) {
				if (e instanceof t) return !0;
				var n = Object.getPrototypeOf(e);
				return null !== n && (n.constructor.name === t.name || fe(n, t))
			},
			ve = new Set(["cx", "cy", "x", "y", "r", "rx", "ry", "d", "fill", "alignment-baseline", "baseline-shift", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-rendering", "dominant-baseline", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "glyph-orientation-horizontal", "glyph-orientation-vertical", "lighting-color", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "vector-effect"]),
			me = {
				html: void 0,
				svg: void 0
			};

		function ge(e, t) {
			var n;
			void 0 === t && (t = {});
			var i = fe(e, SVGElement) ? "svg" : "html",
				o = me[i];
			if (o) return o;
			var r = null !== (n = t.includeStyleProperties) && void 0 !== n ? n : Ae(window.getComputedStyle(document.documentElement)),
				a = "html" === i ? r.filter((function(e) {
					return !ve.has(e)
				})) : le([], r, !0);
			return me[i] = a, a
		}

		function ye(e, t) {
			var n = (e.ownerDocument.defaultView || window)
				.getComputedStyle(e)
				.getPropertyValue(t);
			return n ? parseFloat(n.replace("px", "")) : 0
		}

		function we(e, t) {
			void 0 === t && (t = {});
			var n, i, o, r = t.width || (i = ye(n = e, "border-left-width"), o = ye(n, "border-right-width"), n.clientWidth + i + o),
				a = t.height || function(e) {
					var t = ye(e, "border-top-width"),
						n = ye(e, "border-bottom-width");
					return e.clientHeight + t + n
				}(e);
			return {
				width: r,
				height: a
			}
		}
		var be = 16384;

		function ke(e) {
			return new Promise((function(t, n) {
				var i = new Image;
				i.decode = function() {
					return t(i)
				}, i.onload = function() {
					return t(i)
				}, i.onerror = n, i.crossOrigin = "anonymous", i.decoding = "async", i.src = e
			}))
		}

		function xe(e) {
			return de(this, void 0, void 0, (function() {
				return ce(this, (function(t) {
					return [2, Promise.resolve()
						.then((function() {
							return (new XMLSerializer)
								.serializeToString(e)
						}))
						.then(encodeURIComponent)
						.then((function(e) {
							return "data:image/svg+xml;charset=utf-8,".concat(e)
						}))
					]
				}))
			}))
		}

		function Ie(e, t, n) {
			return de(this, void 0, void 0, (function() {
				var i, o, r;
				return ce(this, (function(a) {
					return i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"), r = document.createElementNS(i, "foreignObject"), o.setAttribute("width", "".concat(t)), o.setAttribute("height", "".concat(n)), o.setAttribute("viewBox", "0 0 ".concat(t, " ")
						.concat(n)), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("externalResourcesRequired", "true"), o.appendChild(r), r.appendChild(e), [2, xe(o)]
				}))
			}))
		}

		function Ee(e, t, n, i) {
			var o = ".".concat(e, ":")
				.concat(t),
				r = n.cssText ? function(e) {
					var t = e.getPropertyValue("content");
					return "".concat(e.cssText, " content: '")
						.concat(t.replace(/'|"/g, ""), "';")
				}(n) : function(e, t) {
					return ge(document.documentElement, t)
						.map((function(t) {
							var n = e.getPropertyValue(t),
								i = e.getPropertyPriority(t);
							return "".concat(t, ": ")
								.concat(n)
								.concat(i ? " !important" : "", ";")
						}))
						.join(" ")
				}(n, i);
			return document.createTextNode("".concat(o, "{")
				.concat(r, "}"))
		}

		function Se(e, t, n, i) {
			var o = window.getComputedStyle(e, n),
				r = o.getPropertyValue("content");
			if ("" !== r && "none" !== r) {
				var a = pe();
				try {
					t.className = "".concat(t.className, " ")
						.concat(a)
				} catch (e) {
					return
				}
				var s = document.createElement("style");
				s.appendChild(Ee(a, n, o, i)), t.appendChild(s)
			}
		}
		var Ce = "application/font-woff",
			_e = "image/jpeg",
			Te = {
				woff: Ce,
				woff2: Ce,
				ttf: "application/font-truetype",
				eot: "application/vnd.ms-fontobject",
				png: "image/png",
				jpg: _e,
				jpeg: _e,
				gif: "image/gif",
				tiff: "image/tiff",
				svg: "image/svg+xml",
				webp: "image/webp"
			};

		function Pe(e) {
			var t = function(e) {
					var t = /\.([^./]*?)$/g.exec(e);
					return t ? t[1] : ""
				}(e)
				.toLowerCase();
			return Te[t] || ""
		}
		var Be = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			De = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function Me(e) {
			return -1 !== e.search(/^(data:)/)
		}

		function Le(e, t) {
			return "data:".concat(t, ";base64,")
				.concat(e)
		}

		function ze(e, t, n) {
			return Be(this, void 0, void 0, (function() {
				var i, o;
				return De(this, (function(r) {
					switch (r.label) {
						case 0:
							return [4, fetch(e, t)];
						case 1:
							if (404 === (i = r.sent())
								.status) throw new Error('Resource "'.concat(i.url, '" not found'));
							return [4, i.blob()];
						case 2:
							return o = r.sent(), [2, new Promise((function(e, t) {
								var r = new FileReader;
								r.onerror = t, r.onloadend = function() {
									try {
										e(n({
											res: i,
											result: r.result
										}))
									} catch (e) {
										t(e)
									}
								}, r.readAsDataURL(o)
							}))]
					}
				}))
			}))
		}
		var Re = {};

		function Oe(e, t, n) {
			return Be(this, void 0, void 0, (function() {
				var i, o, r, a, s;
				return De(this, (function(d) {
					switch (d.label) {
						case 0:
							if (i = function(e, t, n) {
								var i = e.replace(/\?.*/, "");
								return n && (i = e), /ttf|otf|eot|woff2?/i.test(i) && (i = i.replace(/.*\//, "")), t ? "[".concat(t, "]")
									.concat(i) : i
							}(e, t, n.includeQueryParams), null != Re[i]) return [2, Re[i]];
							n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date)
								.getTime()), d.label = 1;
						case 1:
							return d.trys.push([1, 3, , 4]), [4, ze(e, n.fetchRequestInit, (function(e) {
								var n = e.res,
									i = e.result;
								return t || (t = n.headers.get("Content-Type") || ""),
									function(e) {
										return e.split(/,/)[1]
									}(i)
							}))];
						case 2:
							return r = d.sent(), o = Le(r, t), [3, 4];
						case 3:
							return a = d.sent(), o = n.imagePlaceholder || "", s = "Failed to fetch resource: ".concat(e), a && (s = "string" == typeof a ? a : a.message), s && console.warn(s), [3, 4];
						case 4:
							return Re[i] = o, [2, o]
					}
				}))
			}))
		}
		var je = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			Ne = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function Ge(e) {
			return je(this, void 0, void 0, (function() {
				var t, n;
				return Ne(this, (function(i) {
					switch (i.label) {
						case 0:
							try {
								if (e.getContext("2d")) return [2, ke(e.toDataURL())]
							} catch (e) {}
							return 0 === e.width || 0 === e.height ? [2, ke("data:,")] : ((t = document.createElement("canvas")
									.getContext("2d", {
										alpha: !0
									}))
								.canvas.width = e.width, t.canvas.height = e.height, n = t.getImageData(0, 0, t.canvas.width, t.canvas.height), [4, new Promise((function(i) {
									try {
										requestAnimationFrame((function() {
											var o = document.createElement("canvas")
												.getContext("webgl2"),
												r = o.createTexture(),
												a = o.createFramebuffer();
											o.bindTexture(o.TEXTURE_2D, r), o.bindFramebuffer(o.FRAMEBUFFER, a), o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, e), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, r, 0), o.readPixels(0, 0, e.width, e.height, o.RGBA, o.UNSIGNED_BYTE, new Uint8Array(n.data.buffer)), t.putImageData(n, 0, 0), o.deleteTexture(r), o.deleteFramebuffer(a);
											var s = o.getExtension("WEBGL_lose_context");
											s && s.loseContext(), i(t.canvas.toDataURL())
										}))
									} catch (e) {
										i("data:,")
									}
								}))]);
						case 1:
							return [2, ke(i.sent())]
					}
				}))
			}))
		}

		function Ue(e, t) {
			return je(this, void 0, void 0, (function() {
				var n, i, o, r;
				return Ne(this, (function(a) {
					switch (a.label) {
						case 0:
							return e.currentSrc ? (n = document.createElement("canvas"), i = n.getContext("2d"), n.width = e.clientWidth, n.height = e.clientHeight, null == i || i.drawImage(e, 0, 0, n.width, n.height), [2, ke(n.toDataURL())]) : (o = e.poster, r = Pe(o), [4, Oe(o, r, t)]);
						case 1:
							return [2, ke(a.sent())]
					}
				}))
			}))
		}

		function Ve(e, t) {
			return je(this, void 0, void 0, (function() {
				var n;
				return Ne(this, (function(i) {
					switch (i.label) {
						case 0:
							return i.trys.push([0, 3, , 4]), (null === (n = null == e ? void 0 : e.contentDocument) || void 0 === n ? void 0 : n.body) ? [4, Qe(e.contentDocument.body, t, !0)] : [3, 2];
						case 1:
							return [2, i.sent()];
						case 2:
							return [3, 4];
						case 3:
							return i.sent(), [3, 4];
						case 4:
							return [2, e.cloneNode(!1)]
					}
				}))
			}))
		}
		var He = function(e) {
				var t;
				return "SLOT" === (null === (t = e.tagName) || void 0 === t ? void 0 : t.toUpperCase())
			},
			Fe = function(e) {
				return null != e.tagName && "SVG" === e.tagName.toUpperCase()
			};

		function qe(e, t, n) {
			return function(e, t, n) {
				var i = t.style;
				if (i) {
					var o = window.getComputedStyle(e);
					o.cssText ? (i.cssText = o.cssText, i.transformOrigin = o.transformOrigin) : ge(e, n)
						.forEach((function(n) {
							var r = o.getPropertyValue(n);
							if ("font-size" === n && r.endsWith("px")) {
								var a = Math.floor(parseFloat(r.substring(0, r.length - 2))) - .1;
								r = "".concat(a, "px")
							}
							fe(e, HTMLIFrameElement) && "display" === n && "inline" === r && (r = "block"), "d" === n && t.getAttribute("d") && (r = "path(".concat(t.getAttribute("d"), ")")), i.setProperty(n, r, o.getPropertyPriority(n))
						}))
				}
			}(e, t, n), fe(e, HTMLElement) && fe(t, HTMLElement) && (function(e, t) {
				fe(e, HTMLTextAreaElement) && (t.innerHTML = e.value), fe(e, HTMLInputElement) && t.setAttribute("value", e.value)
			}(e, t), function(e, t) {
				if (fe(e, HTMLSelectElement)) {
					var n = t,
						i = Array.from(n.children)
						.find((function(t) {
							return e.value === t.getAttribute("value")
						}));
					i && i.setAttribute("selected", "")
				}
			}(e, t), function(e, t, n) {
				Se(e, t, ":before", n), Se(e, t, ":after", n)
			}(e, t, n), n.patchScroll) ? function(e, t) {
				if (0 === e.scrollTop && 0 === e.scrollLeft || !t.children) return t;
				for (var n = 0; n < t.children.length; n += 1) {
					var i = t.children[n];
					if (i.children) {
						var o = i.style.transform,
							r = new DOMMatrix(o),
							a = r.a,
							s = r.b,
							d = r.c,
							c = r.d;
						r.a = 1, r.b = 0, r.c = 0, r.d = 1, r.translateSelf(-e.scrollLeft, -e.scrollTop), r.a = a, r.b = s, r.c = d, r.d = c, i.style.transform = r.toString()
					}
				}
				return t
			}(e, t) : t
		}

		function Qe(e, t, n) {
			return je(this, void 0, void 0, (function() {
				return Ne(this, (function(i) {
					return n || !t.filter || t.filter(e) ? he(e) ? [2, Promise.resolve(e)
						.then((function(e) {
							return function(e, t) {
								return je(this, void 0, void 0, (function() {
									return Ne(this, (function(n) {
										return fe(e, HTMLCanvasElement) ? [2, Ge(e)] : fe(e, HTMLVideoElement) ? [2, Ue(e, t)] : fe(e, HTMLIFrameElement) ? [2, Ve(e, t)] : [2, e.cloneNode(Fe(e))]
									}))
								}))
							}(e, t)
						}))
						.then((function(n) {
							return function(e, t, n) {
								return je(this, void 0, void 0, (function() {
									var i, o, r;
									return Ne(this, (function(a) {
										switch (a.label) {
											case 0:
												return Fe(t) ? [2, t] : (i = [], 0 === (i = He(e) && e.assignedNodes ? Ae(e.assignedNodes()) : fe(e, HTMLIFrameElement) && (null === (o = e.contentDocument) || void 0 === o ? void 0 : o.body) ? Ae(e.contentDocument.body.childNodes) : Ae(("shadowRoot" in e && null !== (r = e.shadowRoot) && void 0 !== r ? r : e)
														.childNodes))
													.length || fe(e, HTMLVideoElement) ? [2, t] : [4, i.reduce((function(e, i) {
														return e.then((function() {
																return Qe(i, n)
															}))
															.then((function(e) {
																e && t.appendChild(e)
															}))
													}), Promise.resolve())]);
											case 1:
												return a.sent(), [2, t]
										}
									}))
								}))
							}(e, n, t)
						}))
						.then((function(n) {
							return qe(e, n, t)
						}))
						.then((function(e) {
							return function(e, t) {
								return je(this, void 0, void 0, (function() {
									var n, i, o, r, a, s, d, c, l, u, p, A, h;
									return Ne(this, (function(f) {
										switch (f.label) {
											case 0:
												if (0 === (n = e.querySelectorAll ? e.querySelectorAll("use") : [])
													.length) return [2, e];
												i = {}, h = 0, f.label = 1;
											case 1:
												return h < n.length ? (o = n[h], (r = o.getAttribute("xlink:href")) ? (a = e.querySelector(r), s = document.querySelector(r), a || !s || i[r] ? [3, 3] : (d = i, c = r, [4, Qe(s, t, !0)])) : [3, 3]) : [3, 4];
											case 2:
												d[c] = f.sent(), f.label = 3;
											case 3:
												return h++, [3, 1];
											case 4:
												if ((l = Object.values(i))
													.length) {
													for (u = "http://www.w3.org/1999/xhtml", (p = document.createElementNS(u, "svg"))
														.setAttribute("xmlns", u), p.style.position = "absolute", p.style.width = "0", p.style.height = "0", p.style.overflow = "hidden", p.style.display = "none", A = document.createElementNS(u, "defs"), p.appendChild(A), h = 0; h < l.length; h++) A.appendChild(l[h]);
													e.appendChild(p)
												}
												return [2, e]
										}
									}))
								}))
							}(e, t)
						}))
					] : [2, e.cloneNode(!1)] : [2, null]
				}))
			}))
		}
		var We = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			Xe = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			Ze = /url\((['"]?)([^'"]+?)\1\)/g,
			Je = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
			Ye = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

		function Ke(e, t, n, i, o) {
			return We(this, void 0, void 0, (function() {
				var r, a, s, d;
				return Xe(this, (function(c) {
					switch (c.label) {
						case 0:
							return c.trys.push([0, 5, , 6]), r = n ? function(e, t) {
								if (e.match(/^[a-z]+:\/\//i)) return e;
								if (e.match(/^\/\//)) return window.location.protocol + e;
								if (e.match(/^[a-z]+:/i)) return e;
								var n = document.implementation.createHTMLDocument(),
									i = n.createElement("base"),
									o = n.createElement("a");
								return n.head.appendChild(i), n.body.appendChild(o), t && (i.href = t), o.href = e, o.href
							}(t, n) : t, a = Pe(t), s = void 0, o ? [4, o(r)] : [3, 2];
						case 1:
							return d = c.sent(), s = Le(d, a), [3, 4];
						case 2:
							return [4, Oe(r, a, i)];
						case 3:
							s = c.sent(), c.label = 4;
						case 4:
							return [2, e.replace((l = t, u = l.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1"), new RegExp("(url\\(['\"]?)(".concat(u, ")(['\"]?\\))"), "g")), "$1".concat(s, "$3"))];
						case 5:
							return c.sent(), [3, 6];
						case 6:
							return [2, e]
					}
					var l, u
				}))
			}))
		}

		function $e(e) {
			return -1 !== e.search(Ze)
		}

		function et(e, t, n) {
			return We(this, void 0, void 0, (function() {
				var i, o;
				return Xe(this, (function(r) {
					return $e(e) ? (i = function(e, t) {
						var n = t.preferredFontFormat;
						return n ? e.replace(Ye, (function(e) {
							for (;;) {
								var t = Je.exec(e) || [],
									i = t[0],
									o = t[2];
								if (!o) return "";
								if (o === n) return "src: ".concat(i, ";")
							}
						})) : e
					}(e, n), o = function(e) {
						var t = [];
						return e.replace(Ze, (function(e, n, i) {
							return t.push(i), e
						})), t.filter((function(e) {
							return !Me(e)
						}))
					}(i), [2, o.reduce((function(e, i) {
						return e.then((function(e) {
							return Ke(e, i, t, n)
						}))
					}), Promise.resolve(i))]) : [2, e]
				}))
			}))
		}
		var tt = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			nt = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function it(e, t, n) {
			return tt(this, void 0, void 0, (function() {
				var i, o, r;
				return nt(this, (function(a) {
					switch (a.label) {
						case 0:
							return (i = null === (r = t.style) || void 0 === r ? void 0 : r.getPropertyValue(e)) ? [4, et(i, null, n)] : [3, 2];
						case 1:
							return o = a.sent(), t.style.setProperty(e, o, t.style.getPropertyPriority(e)), [2, !0];
						case 2:
							return [2, !1]
					}
				}))
			}))
		}

		function ot(e, t) {
			return tt(this, void 0, void 0, (function() {
				return nt(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, it("background", e, t)];
						case 1:
							return n.sent() ? [3, 3] : [4, it("background-image", e, t)];
						case 2:
							n.sent(), n.label = 3;
						case 3:
							return [4, it("mask", e, t)];
						case 4:
							return n.sent() ? [3, 6] : [4, it("mask-image", e, t)];
						case 5:
							n.sent(), n.label = 6;
						case 6:
							return [2]
					}
				}))
			}))
		}

		function rt(e, t) {
			return tt(this, void 0, void 0, (function() {
				var n, i, o, r;
				return nt(this, (function(a) {
					switch (a.label) {
						case 0:
							return n = fe(e, HTMLImageElement), i = fe(e, SVGImageElement), n && !Me(e.src) || i && !Me(e.href.baseVal) ? [4, Oe(o = n ? e.src : e.href.baseVal, Pe(o), t)] : [2];
						case 1:
							return r = a.sent(), [4, new Promise((function(t, i) {
								e.onload = t, e.onerror = i;
								var o = e;
								o.decode && (o.decode = t), "lazy" === o.loading && (o.loading = "eager"), n ? (e.srcset = "", e.src = r) : e.href.baseVal = r
							}))];
						case 2:
							return a.sent(), [2]
					}
				}))
			}))
		}

		function at(e, t) {
			return tt(this, void 0, void 0, (function() {
				var n, i;
				return nt(this, (function(o) {
					switch (o.label) {
						case 0:
							return n = Ae(e.childNodes), i = n.map((function(e) {
								return st(e, t)
							})), [4, Promise.all(i)
								.then((function() {
									return e
								}))
							];
						case 1:
							return o.sent(), [2]
					}
				}))
			}))
		}

		function st(e, t) {
			return tt(this, void 0, void 0, (function() {
				return nt(this, (function(n) {
					switch (n.label) {
						case 0:
							return he(e) ? [4, ot(e, t)] : [3, 4];
						case 1:
							return n.sent(), [4, rt(e, t)];
						case 2:
							return n.sent(), [4, at(e, t)];
						case 3:
							n.sent(), n.label = 4;
						case 4:
							return [2]
					}
				}))
			}))
		}
		var dt = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			ct = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			lt = {};

		function ut(e) {
			return dt(this, void 0, void 0, (function() {
				var t, n;
				return ct(this, (function(i) {
					switch (i.label) {
						case 0:
							return null != (t = lt[e]) ? [2, t] : [4, fetch(e)];
						case 1:
							return [4, i.sent()
								.text()
							];
						case 2:
							return n = i.sent(), t = {
								url: e,
								cssText: n
							}, lt[e] = t, [2, t]
					}
				}))
			}))
		}

		function pt(e, t) {
			return dt(this, void 0, void 0, (function() {
				var n, i, o, r, a = this;
				return ct(this, (function(s) {
					return n = e.cssText, i = /url\(["']?([^"')]+)["']?\)/g, o = n.match(/url\([^)]+\)/g) || [], r = o.map((function(o) {
						return dt(a, void 0, void 0, (function() {
							var r;
							return ct(this, (function(a) {
								return (r = o.replace(i, "$1"))
									.startsWith("https://") || (r = new URL(r, e.url)
										.href), [2, ze(r, t.fetchRequestInit, (function(e) {
										var t = e.result;
										return n = n.replace(o, "url(".concat(t, ")")), [o, t]
									}))]
							}))
						}))
					})), [2, Promise.all(r)
						.then((function() {
							return n
						}))
					]
				}))
			}))
		}

		function At(e) {
			if (null == e) return [];
			for (var t = [], n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ""), i = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");;) {
				if (null === (a = i.exec(n))) break;
				t.push(a[0])
			}
			n = n.replace(i, "");
			for (var o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, r = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");;) {
				var a;
				if (null === (a = o.exec(n))) {
					if (null === (a = r.exec(n))) break;
					o.lastIndex = r.lastIndex
				} else r.lastIndex = o.lastIndex;
				t.push(a[0])
			}
			return t
		}

		function ht(e, t) {
			return dt(this, void 0, void 0, (function() {
				var n, i;
				return ct(this, (function(o) {
					return n = [], i = [], e.forEach((function(n) {
						if ("cssRules" in n) try {
							Ae(n.cssRules || [])
								.forEach((function(e, o) {
									if (e instanceof CSSImportRule) {
										var r = o + 1,
											a = ut(e.href)
											.then((function(e) {
												return pt(e, t)
											}))
											.then((function(e) {
												return At(e)
													.forEach((function(e) {
														try {
															n.insertRule(e, e.startsWith("@import") ? r += 1 : n.cssRules.length)
														} catch (t) {
															console.error("Error inserting rule from remote css", {
																rule2: e,
																error: t
															})
														}
													}))
											}))
											.catch((function(e) {
												console.error("Error loading remote css", e.toString())
											}));
										i.push(a)
									}
								}))
						} catch (r) {
							var o = e.find((function(e) {
								return null == e.href
							})) || document.styleSheets[0];
							null != n.href && i.push(ut(n.href)
								.then((function(e) {
									return pt(e, t)
								}))
								.then((function(e) {
									return At(e)
										.forEach((function(e) {
											o.insertRule(e, o.cssRules.length)
										}))
								}))
								.catch((function(e) {
									console.error("Error loading remote stylesheet", e)
								}))), console.error("Error inlining remote css file", r)
						}
					})), [2, Promise.all(i)
						.then((function() {
							return e.forEach((function(e) {
								if ("cssRules" in e) try {
									Ae(e.cssRules || [])
										.forEach((function(e) {
											n.push(e)
										}))
								} catch (t) {
									console.error("Error while reading CSS rules from ".concat(e.href), t)
								}
							})), n
						}))
					]
				}))
			}))
		}

		function ft(e) {
			return e.filter((function(e) {
					return e instanceof CSSFontFaceRule
				}))
				.filter((function(e) {
					return $e(e.style.getPropertyValue("src"))
				}))
		}

		function vt(e, t) {
			return dt(this, void 0, void 0, (function() {
				return ct(this, (function(n) {
					switch (n.label) {
						case 0:
							if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
							return [4, ht(Ae(e.ownerDocument.styleSheets), t)];
						case 1:
							return [2, ft(n.sent())]
					}
				}))
			}))
		}

		function mt(e, t) {
			return dt(this, void 0, void 0, (function() {
				var n;
				return ct(this, (function(i) {
					switch (i.label) {
						case 0:
							return [4, vt(e, t)];
						case 1:
							return n = i.sent(), [4, Promise.all(n.map((function(e) {
								var n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
								return et(e.cssText, n, t)
							})))];
						case 2:
							return [2, i.sent()
								.join("\n")
							]
					}
				}))
			}))
		}

		function gt(e, t) {
			return dt(this, void 0, void 0, (function() {
				var n, i, o, r, a;
				return ct(this, (function(s) {
					switch (s.label) {
						case 0:
							return null == t.fontEmbedCSS ? [3, 1] : (i = t.fontEmbedCSS, [3, 5]);
						case 1:
							return t.skipFonts ? (o = null, [3, 4]) : [3, 2];
						case 2:
							return [4, mt(e, t)];
						case 3:
							o = s.sent(), s.label = 4;
						case 4:
							i = o, s.label = 5;
						case 5:
							return (n = i) && (r = document.createElement("style"), a = document.createTextNode(n), r.appendChild(a), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r)), [2]
					}
				}))
			}))
		}
		var yt = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			wt = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function bt(e) {
			return yt(this, arguments, void 0, (function(e, t) {
				var n, i, o, r;
				return void 0 === t && (t = {}), wt(this, (function(a) {
					switch (a.label) {
						case 0:
							return n = we(e, t), i = n.width, o = n.height, [4, Qe(e, t, !0)];
						case 1:
							return [4, gt(r = a.sent(), t)];
						case 2:
							return a.sent(), [4, st(r, t)];
						case 3:
							return a.sent(),
								function(e, t) {
									var n = e.style;
									t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = "".concat(t.width, "px")), t.height && (n.height = "".concat(t.height, "px"));
									var i = t.style;
									null != i && Object.keys(i)
										.forEach((function(e) {
											n[e] = i[e]
										}))
								}(r, t), [4, Ie(r, i, o)];
						case 4:
							return [2, a.sent()]
					}
				}))
			}))
		}

		function kt(e) {
			return yt(this, arguments, void 0, (function(e, t) {
				var n, i, o, r, a, s, d, c, l;
				return void 0 === t && (t = {}), wt(this, (function(u) {
					switch (u.label) {
						case 0:
							return n = we(e, t), i = n.width, o = n.height, [4, bt(e, t)];
						case 1:
							return [4, ke(u.sent())];
						case 2:
							return r = u.sent(), a = document.createElement("canvas"), s = a.getContext("2d"), d = window.devicePixelRatio || 1, c = t.canvasWidth || i, l = t.canvasHeight || o, a.width = c * d, a.height = l * d, t.skipAutoScale || function(e) {
								(e.width > be || e.height > be) && (e.width > be && e.height > be ? e.width > e.height ? (e.height *= be / e.width, e.width = be) : (e.width *= be / e.height, e.height = be) : e.width > be ? (e.height *= be / e.width, e.width = be) : (e.width *= be / e.height, e.height = be))
							}(a), a.style.width = "".concat(c), a.style.height = "".concat(l), t.backgroundColor && (s.fillStyle = t.backgroundColor, s.fillRect(0, 0, a.width, a.height)), s.drawImage(r, 0, 0, a.width, a.height), [2, a]
					}
				}))
			}))
		}

		function xt(e) {
			return yt(this, arguments, void 0, (function(e, t) {
				return void 0 === t && (t = {}), wt(this, (function(n) {
					switch (n.label) {
						case 0:
							return [4, kt(e, t)];
						case 1:
							return [2, n.sent()
								.toDataURL()
							]
					}
				}))
			}))
		}
		var It = "pokiSdkContainer",
			Et = "pokiSdkFixed",
			St = "pokiSdkOverlay",
			Ct = "pokiSdkHidden",
			_t = "pokiSdkInsideContainer",
			Tt = "pokiSdkPauseButtonContainer",
			Pt = "pokiSdkPauseButton",
			Bt = "pokiSdkPauseButtonBG",
			Dt = "pokiSdkStartAdButton",
			Mt = "pokiSdkProgressBar",
			Lt = "pokiSdkProgressContainer",
			zt = "pokiSdkSpinnerContainer",
			Rt = "pokiSdkVideoContainer",
			Ot = "pokiSdkVisible",
			jt = "pokiSDKAdContainer",
			Nt = "pokiSDKHouseAdContainer",
			Gt = "\n.".concat(It, " {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.")
			.concat(It, ".")
			.concat(Et, " {\n\tposition: fixed;\n}\n\n.")
			.concat(It, ".")
			.concat(Ot, " {\n\tdisplay: block;\n}\n\n.")
			.concat(It, ".")
			.concat(Ct, ",\n.")
			.concat(zt, ".")
			.concat(Ct, " {\n\tdisplay: none;\n}\n\n.")
			.concat(It, ".")
			.concat(Ct, ",\n.")
			.concat(zt, " {\n\tpointer-events: none;\n}\n\n.")
			.concat(zt, " {\n\tz-index: 10;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url('https://a.poki-cdn.com/images/thumb_anim_2x.gif') 50% 50% no-repeat;\n\tuser-select: none;\n}\n\n.")
			.concat(_t, " {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.")
			.concat(It, ".")
			.concat(Ot, " .")
			.concat(_t, " {\n\topacity: 1;\n}\n\n.")
			.concat(jt, ", .")
			.concat(Rt, " {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.")
			.concat(Dt, " {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 15pt 'Arial', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.")
			.concat(Tt, " {\n\tcursor:pointer;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n\n.")
			.concat(Bt, " {\n    content: '';\n    background: rgba(0, 43, 80, 0.5);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\tz-index: 11;\n}\n\n.")
			.concat(Tt, ":hover .")
			.concat(Bt, " {\n\tbackground: rgba(0, 43, 80, 0.7);\n}\n\n.")
			.concat(Pt, " {\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 12;\n}\n\n.")
			.concat(Pt, ":before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: block;\n\tborder: 2px solid #fff;\n\tborder-radius: 50%;\n\tuser-select: none;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\ttransition: background-color 0.5s ease;\n\tanimation: 1s linear infinite pokiPulse;\n\tz-index: 12;\n}\n\n.")
			.concat(Pt, ":after {\n\tcontent: '';\n\tposition: absolute;\n\tdisplay: block;\n\tbox-sizing: border-box;\n\tborder-color: transparent transparent transparent #fff;\n\tborder-style: solid;\n\tborder-width: 26px 0 26px 40px;\n\tpointer-events: none;\n\tanimation: 1s linear infinite pokiPulse;\n\tleft: 6px;\n\tz-index: 12;\n}\n\n@keyframes pokiPulse {\n\t0% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n\t70% {\n\t\ttransform: translate(-50%, -50%) scale(1.1);\n\t}\n\t100% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n}\n\n.")
			.concat(Lt, " {\n\tbackground: #B8C7DD;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.")
			.concat(Mt, " {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #FFDC00;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.")
			.concat(Mt, ".")
			.concat(Ot, ", .")
			.concat(Tt, ".")
			.concat(Ot, ", .")
			.concat(Dt, ".")
			.concat(Ot, " {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.")
			.concat(Mt, ".")
			.concat(Ct, ", .")
			.concat(Tt, ".")
			.concat(Ct, ", .")
			.concat(Dt, ".")
			.concat(Ct, " {\n\tdisplay: none;\n\tpointer-events: none;\n}\n\n.")
			.concat(jt, " .")
			.concat(Nt, " {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tcursor: pointer;\n}\n\n"),
			Ut = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			Vt = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			Ht = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var i, o = 0, r = t.length; o < r; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
				return e.concat(i || Array.prototype.slice.call(t))
			},
			Ft = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return Ut(void 0, Ht([], e, !0), void 0, (function(e) {
					var t;
					return void 0 === e && (e = null), Vt(this, (function(n) {
						switch (n.label) {
							case 0:
								return [4, Xt()];
							case 1:
								return (t = n.sent()) && t.length > 10 ? e ? [4, Qt(t, e)] : [3, 3] : [3, 5];
							case 2:
								t = n.sent(), n.label = 3;
							case 3:
								return [4, qt({
									screenshot: t
								})];
							case 4:
								return [2, n.sent()];
							case 5:
								return [2, null]
						}
					}))
				}))
			},
			qt = function(e) {
				return Ut(void 0, void 0, void 0, (function() {
					var t, n, i, o;
					return Vt(this, (function(r) {
						switch (r.label) {
							case 0:
								return t = e.screenshot, "https://api.poki.io/screenshot", n = "https://poki-user-content.com/", [4, fetch("https://api.poki.io/screenshot", {
									method: "POST",
									headers: {
										"Content-Type": "application/json"
									},
									body: JSON.stringify({
										data: t,
										p4d_game_id: E.gameID,
										p4d_version_id: E.versionID,
										country: E.country
									})
								})];
							case 1:
								i = r.sent(), r.label = 2;
							case 2:
								return r.trys.push([2, 5, , 6]), 200 !== i.status ? [3, 4] : [4, i.json()];
							case 3:
								return o = r.sent(), [2, n + o.source];
							case 4:
								return [3, 6];
							case 5:
								return r.sent(), [3, 6];
							case 6:
								return [2, null]
						}
					}))
				}))
			},
			Qt = function(e, t) {
				return Ut(void 0, void 0, void 0, (function() {
					var n, i, o, r, a, s, d, c, l, u, p, A, h, f, v, m, g, y, w, b, k, x, I;
					return Vt(this, (function(E) {
						switch (E.label) {
							case 0:
								return n = t.title, i = t.thumbnail, (o = new Image)
									.crossOrigin = "Anonymous", r = new Promise((function(e) {
										o.onload = function() {
											return e(o)
										}
									})), o.src = e, (a = new Image)
									.crossOrigin = "Anonymous", s = new Promise((function(e) {
										a.onload = function() {
											return e(a)
										}
									})), a.src = "https://a.poki-cdn.com/images/screenshot-frame.png", (d = new Image)
									.crossOrigin = "Anonymous", c = new Promise((function(e) {
										d.onload = function() {
											return e(d)
										}
									})), 128, d.src = "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=".concat(128, ",height=")
									.concat(128, ",fit=cover,f=auto/")
									.concat(i), l = new FontFace("TorusBold", "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)"), u = l.load(), [4, Promise.all([r, s, c, u])];
							case 1:
								return p = E.sent(), A = p[0], h = p[1], f = p[2], v = p[3], (m = document.createElement("canvas"))
									.width = A.width, m.height = A.height, (g = m.getContext("2d"))
									.drawImage(A, 0, 0), y = m.width / h.width, w = h.height * y, b = m.height - w, g.drawImage(h, 0, b, m.width, w), k = f.height * y, Wt(g, f, 64 * y, b + 20 * y, k, k, 24 * y), document.fonts.add(v), x = 226 * y, I = b + 68 * y, g.textAlign = "left", g.textBaseline = "top", g.fillStyle = "#002b50", g.font = "700 ".concat(56 * y, "px TorusBold,sans-serif"), g.fillText(n, x, I), [2, m.toDataURL()]
						}
					}))
				}))
			},
			Wt = function(e, t, n, i, o, r, a) {
				e.save(), e.beginPath();
				var s = n + o,
					d = i + r;
				e.moveTo(n + a, i), e.lineTo(s - a, i), e.quadraticCurveTo(s, i, s, i + a), e.lineTo(s, d - a), e.quadraticCurveTo(s, d, s - a, d), e.lineTo(n + a, d), e.quadraticCurveTo(n, d, n, d - a), e.lineTo(n, i + a), e.quadraticCurveTo(n, i, n + a, i), e.closePath(), e.clip(), e.drawImage(t, n, i, o, r), e.restore()
			},
			Xt = function() {
				return Ut(void 0, void 0, void 0, (function() {
					var e, t, n, i, o;
					return Vt(this, (function(r) {
						switch (r.label) {
							case 0:
								return e = function(e) {
									var t;
									return !["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"].includes(e.nodeName) && (!("IMG" === e.nodeName && !e.getAttribute("src")) && !(null === (t = e.classList) || void 0 === t ? void 0 : t.contains(It)))
								}, t = document.body.style.minWidth, n = document.body.style.minHeight, document.body.style.minWidth = "100%", document.body.style.minHeight = "100%", [4, xt(document.body, {
									filter: e,
									width: window.innerWidth,
									height: window.innerHeight,
									backgroundColor: "#fff"
								})];
							case 1:
								return (i = r.sent()) && i.length < 10 ? (o = document.body.style.position, document.body.style.position = "fixed", [4, xt(document.body, {
									filter: e,
									width: window.innerWidth,
									height: window.innerHeight,
									backgroundColor: "#fff"
								})]) : [3, 3];
							case 2:
								i = r.sent(), document.body.style.position = o, r.label = 3;
							case 3:
								return document.body.style.minWidth = t, document.body.style.minHeight = n, [2, i]
						}
					}))
				}))
			},
			Zt = function(e) {
				return Ut(void 0, void 0, void 0, (function() {
					var t, n, i, o, r, a, s;
					return Vt(this, (function(d) {
						switch (d.label) {
							case 0:
								t = ["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"], e || t.push("CANVAS"), n = function(e) {
									var n, i;
									return !t.includes(e.nodeName) && (!("IMG" === e.nodeName && !e.getAttribute("src")) && (!(null === (n = e.classList) || void 0 === n ? void 0 : n.contains(It)) && "true" !== (null === (i = e.getAttribute) || void 0 === i ? void 0 : i.call(e, "data-poki-playtest-skip"))))
								}, i = document.body.style.minWidth, o = document.body.style.minHeight, r = document.body.style.backgroundColor, document.body.style.minWidth = "100%", document.body.style.minHeight = "100%", document.body.style.backgroundColor = "transparent", d.label = 1;
							case 1:
								return d.trys.push([1, 3, , 4]), [4, bt(document.body, {
									filter: n,
									width: window.innerWidth,
									height: window.innerHeight
								})];
							case 2:
								return a = d.sent(), [3, 4];
							case 3:
								return s = d.sent(), console.error(s), [3, 4];
							case 4:
								return document.body.style.minWidth = i, document.body.style.minHeight = o, document.body.style.backgroundColor = r, [2, a]
						}
					}))
				}))
			};

		function Jt() {
			var e;
			try {
				e = performance.getEntriesByType("resource")
					.map((function(e) {
						return e.transferSize
					}))
					.reduce((function(e, t) {
						return e + t
					})), e += performance.getEntriesByType("navigation")[0].transferSize
			} catch (e) {}
			return e
		}
		const Yt = function() {
			return "undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent)
		};
		var Kt = "MacIntel" === window.navigator.platform && void 0 !== window.navigator.standalone && navigator.maxTouchPoints > 1,
			$t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
			en = g() || y() || Kt,
			tn = !1,
			nn = new Image;
		nn.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAADE2lDQ1BJQ0MgcHJvZmlsZQAAeNp9kk9s21Qcxz+2X92qCh4qYRqoqnIAKqoNma6gbkAhadI/tOuyJB1t4IDrOHUSx7ZsZyw9IuAIk+AAJ1BXCQ4cOMDWgZDQDttlEoi/EkIc0DQuO1ExTYIqHOKsOfEu7/s++r7v7/d+eiB2DN93BNB0o6Awn0mtrZdTg38i8TAjPMghwwz9dD6/DNDb+5YEd35GAvjhmOH7zpWvPt3rnJoYe2f/8/GxV3N3+f81XLFCE/gX5C9NP4hA2QXyr0V+BGIISAZr62UQo0Bys6t1ILnR1VkgGZQKsyDWgJRpGxUQ54GjG318s083nZYZ9zAGJIJWYRXQQDofNopLsX7LNHJF4H6Q3rOtxWVAgLTjR5lC7PmkGsytxp5Ldmuhl3OtFi2WYv1jw1sqAMMg/WGGs+XeXXdj5TSQAOl2q7GajvndipXN9TyBV4g9srpll14CVJBHwnPFHDAC8pEte3Yl5hN148V87NctZz6uKz/rR/nT9+o6K8vAYZDnrPDgjZFdWuhq+ZUoKPXuOtXa3GKcec4OFgqxft138su9TCPIzQNJkN+23NVil8vbFSO7FOd8JkbFjHhOTIuMmBEvkKVGiI+DRZ08Bi4RBg4OxsCtge85hYdLjQiPoO9k0SJgiRp1LBy2pDMUMbGxCGjifZG8uvNTYnfoekSRBvUuF0kxLdLiefGMeEqcIE2VmvwQBvX3vfbJszYZajhUCGlwk4BmdaZ98qytX9cv6lf0X/Tb+o7yobKr3FC+Vi6TwcKK/fdqa0PaMS2tTWhJbVAb1R4lR4MAA5cVbtImIuIOZQxCHDxcdUodV6fUx0mp42pWPaE+qT7dNxuDNkUa3CKgCX1/VwIS8ayngFFm8fBpE1BjE5uIFGn8eMYpFnExeYKjpJhEZ5Lja+vlVDdu7wwSIB2+ccC8bZj+G5QLB2zjA7j8Jhz59YA98hEcegMufesbgQGAAsjVKvz1Mdy3Dg98B8Mvh9Xjk93uExkY+L3T2XsMBt+F/Qudzj/bnc7+RVB+g2/c/wD2jOYIAU+O+QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQpSURBVHjapFZLLFx9FD9z74x2COod72eQUCLSSGhrPOoRFhY23xcaYtdWx6O0lSbNJxQpY6ZtpG2w6aIWFgRhiIVHLBoiLLxJBB2PIMSMx2B6zr+9k2lSH6Mnubn/3HPv75zzO68rSklJKQoPD1fs7u6CwWCAs7MzEIlExvv5+Tl7TufT09PfdPSc9CR6vR54ngd+YWFhxMrK6lZgYKBaq9UaPza9kwjgpjoSQU86juOAx/PLxcXFu9bW1qd+fn5DBwcHfw0ox8tyfn4+3tLSUu/v7z+k0+n+CvA5AdJD9DQBPT1B0GFTT80B5PAsIWVcXBxT9PT0vJmYmHjh5OQE1xEC5MlKU1MTtLa2sofd3d1Vk5OT1wJlScHLIicnB+Lj45nrg4ODFH6ira2tztvbe4Q4NYfDMgJMS0uDoKAgFvrx8TEMDw8DJuqBjY2NlkAPDw+vxqHol0YsFhvdrqqqguLiYnZWq9Vvp6ennzk4OFwpZPFFitraWmakpqaGEvWWnMDiV+zs7FyalAuluroaioqKhOzXzczMFF/mKXdZCHV1dcbwe3t7a+fm5uT/B8pdhRcKv6CgQCgp5ezsbAGBCgkxG5Ckvr4eCgsL2bmvr68eh0r+nzzlzClahUIBcrlc8PQdltVTe3v73zzlzO0EpVIJZWVlAqeqpaWlJ6aectfp18rKSmhoaBDq9D2CPrazs2Oeii/7mKY01SMNX+qWlZUV2NzcBBx1gF0E+/v7BPohNjZWjFNKJaZO+VO2BNne3obk5GRYX1/Xb2xsSC56b2BgQImGpRd6mJeXB1lZWay3iSMcaQxMKpVuHx0d6XASLXt6eq7iLllFL1fRO42Hh8eeEVBYNjQYSktLobm5Gdra2piH7e3tgIOXNT/2eTb2dndXVxckJSXByckJ0Nnd3R0QEHiM+BWGLFGpVGBhYQGRkZFnHR0dLFnEGYWL1mFtbQ3GxsaIT9uKioqvBI4UgEajgeXlZXB1dWW8klUt0djS0mJITEzU0UTCLaiJiIhQ0xmtGkhwJRDR7GpsbJRRcvAbyM/PBy8vL2a4pKSEVin/HN+/QdMa0y9BS98x5HsxMTHv+vv7X+N0EaWmpoKvry84OjpSQdPwvY27/DNFEBAQwAAp20QbhVyKBymFiB98y8jIuB8VFbVKSxvJd8a+vYOh6mUyGd/Z2Qmjo6OwtbXlhpwthYWFTe7t7TFKcAX/nIf4F8DA0tPTW3De/Yt8GMgaJSchIeE/9OjR+Pi4JDg42FgBPj4+A7gevru4uBj/LJydnRmPRP5NtP6xvLz8H+KSwCg5tEcwlE38VWkQgHBFDGVnZydlZmbK3Nzc+smoRCJh7wuVIs7NzX2IJfEFC5d1A2WPSoE2A/3vREdHv5+amgoPCQn5FBoa+oWooMzSu6blJsgPAQYACgtfMJolu7EAAAAASUVORK5CYII=", nn.onload = function() {
			tn = !0
		};
		var on = function() {
				function e(e) {
					var t = this;
					this.image = null, this.ready = !1, this.drawSize = 0, this.previousMouseDown = !1, this.mouseDrawSizeClickIncrease = 20, this.minimumClickSize = 60, this.maximumClickSize = 100, this.holdMouseSize = 40, this.sizeDecrease = 2, this.image = new Image, this.image.src = e, this.image.onload = function() {
						t.ready = !0
					}
				}
				return e.prototype.update = function(e) {
					e && !this.previousMouseDown && (this.drawSize += this.mouseDrawSizeClickIncrease, this.drawSize = Math.min(Math.max(this.drawSize, this.minimumClickSize), this.maximumClickSize)), this.drawSize -= this.sizeDecrease, this.drawSize = e ? Math.max(this.drawSize, this.holdMouseSize) : Math.max(this.drawSize, 0), this.previousMouseDown = e
				}, e.prototype.draw = function(e, t, n) {
					var i = this.drawSize / 2,
						o = t - i,
						r = n - i;
					e.drawImage(this.image, 0, 0, this.image.width, this.image.height, o, r, this.drawSize, this.drawSize)
				}, e.prototype.destroy = function() {
					this.image = null, this.ready = !1
				}, e
			}(),
			rn = new on("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArGSURBVHgBvVlbbFxHGZ451z273rXXsWt7k5RESpwoJqQpqdI2hTiNeQDaB0COoAIkHgolECQuEpc+eA0SD6ihBKrmIU+FloK3SJFIoWpDurmASy5qIbEJJaI0TryRb3vzXs5lZpg5O7N79vTs2gkVRxrP8dkzM9988/3/P/MfCN6HixACxwGA6fFxaXB2AGYTGRgfGCCJTIak6e/DY2N4jL4GISTgf7wguMPLBTk+rloj39srK+TDsqrvkSD4kARAlyTBGHsHYVKg1bsIo+sEgb+Zjnk69NpT6bGxMftOwd8uYDg6OiGte2Rdf2zLzq+rmv7VkAI7dRkAnSJVaJFpjxDWOsYUEqLFocVEAFRpMR0yYznOmepy/kfvHD14LZVKodsCsNoXk8mkZO38Yq/Wn0jquv5EhwpAWAHAoGBDtGgcsMTBuoABB0xvLFpMWioOAGValmkxbfRCaak0/pOPxa6tlvFVAR4dHZW3fOdX3zI07cmYBjujFGwHBRumdYiC1ChglQGGNcCssNEJqRXGsM0BM5ZLTq0ULQAKJpkplys/3jH78rEDBw6wObYFLq+AFY4mk9rWL/z0F7Gw/v3eEAytCQHQrQMQp6VTqxXGdkSpMS5Yd5mn9zpfAVYb/H+2GkxC7qrIsBMo6iMzxqa7doTzr50/fx7dMcMHJ6b6ezZseSluyHsYyC4OMMLlwICotAdVrmlXsCs6xi7NVBagJgvBNJMFY5rJokBZztGyWAUga5LL5euXR5769I550ILplgx//NAhffPw5891h+VdvQYAPXqNWQY6ptZYDQewyKShcj2L2r3nE2OyYc9lLiGhe9mdKOxD4Z4HNtrSr996K+2sGvBwMqk8+JkfHuky1E/2UgkIGXTREuXLz5aXgW3Sr0fHopa55xC1EgBWGCq7MJDu1u55oGertP7VS5dO4BUBM2/QP/Ltx2ORcJKB7WaAuV5jQgqcVTG4cGWilribgJ7/pdqjOpveNl4ZMR04UNklDW0v7V+vTKbT6SZpSH7A5d1f2xwNh5+Mc8NiEohyw3KXXeHG4mERegYVF/QVwbbCQbJVMbiBshWLcfvo4mNGdPUHc9tG72rLMIteZ7Pqkbih7OkJNQAzZusS4Iyy5YewMePV+EfxjggsQRMl9WADdWB0Rfete/iVdPo5HMjwd19ZGDQ09TGmU1Ei3BsIrfo1J4Bwh9A8OAgA7fEmjC3GuM7dYJgbc5TXRkj9SnnnQBPLdYZZcOjf/9jPug15O9Nt3OMNDG5cXgmIpfaChh6g0PM88PL2ARvtGLuI8mkTHh2VCHp4vXpKaLnOcGRoSA2p8kfrzt/HrOwDKwZYiVHiK8A3QcmjaTegcFfJXCbDoemhJ2ZnQUi0cwEz7fbu/+awpkjrhCGISCTACqtuB84Lxg/MvyLiR2EHwuUJ0AKHocJY52e/MSyau4BpDJc0Rd/nuivJEwA8EQy2AbaaXUugnnkteXy3CDgMeIgTF1LVe9kusQ44Hh+hgOXtutTQapMMQINdYWBwFYDagfdKRLDslYcqN4DLurYHgJRcB2xZGVmSpbvr4RQ2bxWF028FFraZAPG1IZ42TX1AT1AB3INwPJKifDA+NKQIwLAUpr9BuF4WeuKmKGbNem9lUN77dtolvucAtJ64N6TzQ0Gnc92oMUwNDkQ7DLp/hjExQxjQcdAgQfekRd3Kvb1nHNh8X6ulKI4xsQLocqlAIonO60voj0ABdStDCvLDrdqRoPehry17IefucyBVAqRGF2cPC6wl9rzkB+kH1I61Vs/aaZk9E3voZsPERTleI9WVxI3LGYIIKSB+pMEcuDjigIBBVvIK7TTvBS2eYX5D+NiYRzy28ScI3SyULPck4jKsrzUItsyr7EebnwzYy8g361ZAVgIV9E5QMHHDMmicThx+gLVtdCPqQHfxXYaL9i3HqZYnTX66tXkRcd0rj1aurRW4VvJo0jRp7CNEaoDxyQrDhBxryrYlTPMZhDFMPrJxIzaXly9XnVr+wEaN8xebsVgiQIINxg+ulYG289WINFICgjA3j0FLeSn35677hhymBlfIV65cwfN/+O3ZKiIFdkCs8KQHA25zHQWdv4MMDwYw6H/WBJo0ki0if8HGrojioNm5l58/t2bpPDUzUrO8kZER3KWp1Uoh/8syT3SwRlVcWxaHNJaLkGbWWmnar9GgwFI3cB9YttIlm+Oomn9VwnZlamobqTNM98L4JlxrLr155liRJzlYA3EcdyWCm0G3c2sk4N4vF+zVqwDryQq5iRaKIf/23w+jxWV7aGjUbeoCZsiHOqfR8tU3b5XzhefzVu1l0bDMDUB4EOxjO4jdoPv6JDyuU2zUKx6i2NgFNn5x+bhz5dy/jIc2WzRmNACzPijlCKugeuPsH58uWKSYt2tJDgG6ghryEKD9xuVn2c+0mCTyMGsKCXBm2biMsEIFZUrvTB2WOsLl7MmTdROqnzhSqQO4e3O36czM3MgvLjyTM2kmxuKN+azLvHObH2H8bo+A1qHXm2dzSLMEirx/NibLArE6v3DrmcKFU/+UF5FNM5z1Q2jTqfkTu3eTTNkG5uULU/qmnX1QD233bobYwFLAqYPwP36JEM/yuwHBA9bkXsCbrlriKaulbO6F2d8ffTrioOLc3EVreno6GHA6/ToY2nAawA6dZKcuToa37dpDZCUBAxgTGhQ+2vvMGwAcn8uyUEOvQqtsJZcoqwsMbMW+OvObZ7/s2FK+uICqqdSzTclBX+ZnHExNvY5PXPwTcYhBUG7+jDQwuJemj3oIbA0Ke4Ah3ABqc6AmB1oVYBH3ABYHW60xu1iqXpw7ffxLShXMgUKuPDgIbH/mJ9AzTUxMyJOTQFuQ342qNo4PfOrxsc7u+Ofco7/G8wbisKo0En1iww89Pgx5tO5Pahc8oPNUBjd/d2y8RJxc3FxTymbjJrWr96Re5RaAwRtvvESyloZVrOH8Py5Mgrs+sOBoka0OkKLu8nIGhbsTcd/yhlSnsfxMq0WnIYGsWZPBYoUUc/PzR/59/OhhyVYLSlguL9/qDwTbkmFxDQ8nlegg0DpoigCqSiR+z0ODXVvvPRSJRh+N8sRgmKda6+cv2JyBr8sDNyYh/G0pl31x8dyrP89nrmWIHSo5EakEbqyzJiZGcatPCG0Bs50cTQHILMlCd/whyTHCCFpGdNv9m2Lb7z8YNoz7dFUeMDzfOLzZSKZ1sVW0kPAMpFjJzr84/5dTz+HZ/8zZGFUcKJcH+8wKfZ0GiCRuh6ktYHGxFOzs7ICsKI5ekfOGBSxdMWXdArLat//RB8Nr+ncrhrFFUZS1sqr2Q0nqcAFjvEwwKdpm9W2rlL9YzeamF0+fmEQEm1CRLGsZmdFeuarkuqqJRAatBHbVgNlVYzsl9/ffUkpGRSPzuZDd2aE4FlEMIqsEO7Ij0f21ItOUgUwwYlxbQCUAOxg6qgYwItDBFWRLKrSUSJ+F52bsDRv2OsnkPnFWWPFaNWAPcjiaSknxk1kqgIyapXkZQ8UKMVSZFCzXiE2JSPQrA7AUh4QwBYojGMo2QpJlR0zgZBPAAXQrkEqNUkZv7wPj7QOu46ZeezwppdNAGhychYnECLw0O+0mO7oqkVq/ffTbCJKx4yjYNK/gRCLhWj5den8E//9fLKHI2Gd6Z4U+ce8BK+y39+n6L5YV4ArrvzyVAAAAAElFTkSuQmCC"),
			an = new on("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdZdEcIwDAfwZAqQgAQs4AAHIAEHzAlSWgfMARZAQUjZ9rDbR5M22f+uzdaX30OvaREUIaIDlxuPVCMiRrAOIw+a5zngrsiYlwmWQWwwIVKHKZEyrBDRYZWIDDNCtjFjZBlzQsaEZCB/HLm+wTfnhqcT+OfawD75Jijy+IBvuv/M+3Qnv4QJyQst2Wf1LFli2e5ggYn7XQ2m7uAlWPGdpMGqb1kJZvZuaN2RDBakCIIi1Hf6y/DbaR6QP+1P5pe98AyNAAAAAElFTkSuQmCC");

		function sn(e, t, n, i, o, r) {
			if (tn && r && nn) {
				var a = Math.max(i, o);
				if (function(e, t, n, i, o, r) {
					[rn, an].forEach((function(a) {
						if (a.ready && r) {
							var s = a === rn ? t : n;
							a.update(s);
							var d = e.x * i,
								c = e.y * o;
							a.draw(r, d, c)
						}
					}))
				}(e, t, n, i, o, r), !en) {
					var s = .5 * a;
					r.drawImage(nn, 0, 0, nn.width, nn.height, e.x * i, e.y * o, nn.width * s, nn.height * s)
				}
			}
		}
		var dn = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			cn = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			ln = "Game tab in background",
			un = !0,
			pn = [],
			An = null,
			hn = document.createElement("canvas"),
			fn = null,
			vn = null,
			mn = null,
			gn = 0,
			yn = [],
			wn = [],
			bn = [],
			kn = [],
			xn = 24;
		(g() || y() || Kt) && (xn = 12), hn.setAttribute("data-poki-no-playtest", "true"), hn.addEventListener("webglcontextlost", (function() {
			console.info("%cPOKI_PLAYTEST:%c streamCanvas context lost", "font-weight: bold", ""), hn = document.createElement("canvas"), fn = null
		}));
		var In = {
				x: 0,
				y: 0
			},
			En = !1,
			Sn = !1,
			Cn = !1,
			_n = !1,
			Tn = "",
			Pn = 1,
			Bn = 1,
			Dn = -1,
			Mn = -1;

		function Ln(e) {
			if (null !== An && pn.length) {
				var t = pn[0],
					n = t.width / An.width,
					i = t.height / An.height,
					o = (e.clientX - An.left) * n,
					r = (e.clientY - An.top) * i;
				In.x = Math.max(0, Math.min(o, t.width)), In.y = Math.max(0, Math.min(r, t.height))
			}
		}
		var zn = function(e) {
				pn.length && hn && Ln(e)
			},
			Rn = function(e) {
				pn.length && hn && (0 === e.button ? (En = !0, Sn = !1) : 2 === e.button ? (Cn = !0, _n = !1) : 1 === e.button && (En = !0, Sn = !1, Cn = !0, _n = !1), Ln(e))
			},
			On = function(e) {
				0 === e.button ? Sn = !0 : 2 === e.button ? _n = !0 : 1 === e.button && (Sn = !0, _n = !0)
			};

		function jn() {
			var e = Tn;
			e && hn && fn && (fn.fillStyle = "rgba(255, 255, 255, 0.5)", fn.fillRect(0, 0, hn.width, hn.height), fn.font = "48px Arial", fn.fillStyle = "#009cff", fn.textAlign = "center", fn.fillText(e, hn.width / 2, hn.height / 2))
		}

		function Nn(e) {
			if (hn && pn.length) {
				var t = pn[0],
					n = t.width,
					i = t.height;
				if (n !== Dn || i !== Mn || e) {
					Dn = n, Mn = i;
					var o = (An = t.getBoundingClientRect())
						.width,
						r = An.height;
					0 !== o && 0 !== r || (o = n, r = i);
					var a = g() || y(),
						s = Kt ? 1024 : a ? 640 : 1280,
						d = Math.min(s / o, s / r, 1);
					o = Math.round(o * d), r = Math.round(r * d), Pn = o / n, Bn = r / i, e || hn.width !== o || hn.height !== r ? (hn.width = o, hn.height = r, console.info("%cPOKI_PLAYTEST:%c capturing at ".concat(o, "x")
						.concat(r, " (")
						.concat(n, "x")
						.concat(i, ")"), "font-weight: bold", "")) : console.info("%cPOKI_PLAYTEST:%c resize but video unchanged ".concat(o, "x")
						.concat(r, " (")
						.concat(n, "x")
						.concat(i, ")"), "font-weight: bold", "")
				}
			}
		}

		function Gn(e) {
			for (var t = 0; t < e.length; t++)
				if (!document.body.contains(e[t])) {
					if (e[t].pokiHtmlDummyCanvas) continue;
					return !1
				} return !0
		}

		function Un(e) {
			return dn(this, void 0, void 0, (function() {
				var t, n, i;
				return cn(this, (function(o) {
					switch (o.label) {
						case 0:
							if (!hn) return [2];
							if (vn || (vn = document.createElement("canvas"), 0 === pn.length ? (vn.width = hn.width, vn.height = hn.height) : (vn.width = pn[0].width, vn.height = pn[0].height), vn.addEventListener("contextlost", (function() {
								vn = null, mn = null
							}))), !mn && !(mn = vn.getContext("2d"))) return [2];
							o.label = 1;
						case 1:
							return o.trys.push([1, 5, , 6]), performance.now(), [4, Zt(e)];
						case 2:
							return (t = o.sent()) && t.length > 10 ? [4, new Promise((function(e, n) {
								var i = new Image;
								i.decode = function() {
									return e(i)
								}, i.onload = function() {
									return e(i)
								}, i.onerror = n, i.crossOrigin = "anonymous", i.decoding = "async", i.src = t
							}))] : [3, 4];
						case 3:
							n = o.sent(), requestAnimationFrame((function() {
								vn && mn && (mn.clearRect(0, 0, vn.width, vn.height), mn.drawImage(n, 0, 0, n.width, n.height, 0, 0, vn.width, vn.height), gn = 0)
							})), o.label = 4;
						case 4:
							return [3, 6];
						case 5:
							return i = o.sent(), console.error("%cPOKI_PLAYTEST:%c ui canvas error", "font-weight: bold", "", i.name, i.message, i.stack), gn++, ti.__playtestCaptureHTML === Kn && gn > 10 && (un = !0), [3, 6];
						case 6:
							return [2]
					}
				}))
			}))
		}

		function Vn(e) {
			Tn = e
		}

		function Hn(e) {
			if (!un) {
				pn = e;
				for (var t = 0; t < yn.length; t++) yn[t].stop();
				for (t = 0; t < wn.length; t++) wn[t].readable.cancel();
				for (t = 0; t < bn.length; t++) bn[t].cancel();
				for (t = 0; t < kn.length; t++) kn[t].close();
				if (yn = [], wn = [], bn = [], kn = [], 0 !== pn.length) try {
					if ($t) {
						var n = function(e) {
							var t = pn[e].captureStream(xn)
								.getVideoTracks()[0];
							yn.push(t), kn.push(null);
							var n = new Blob(["self.onmessage=(async({data:{track:e}})=>{if(!e)return;const a=new MediaStreamTrackProcessor({track:e}).readable.getReader(),s=()=>{a.read().then(({done:e,value:a})=>{e?a.close():(postMessage(a),a.close(),s())})};s()});"], {
									type: "application/javascript"
								}),
								i = new Worker(URL.createObjectURL(n));
							i.onmessage = function(t) {
								var n = t.data;
								kn.length <= e || (null !== kn[e] && kn[e].close(), kn[e] = n)
							};
							try {
								i.postMessage({
									track: t
								})
							} catch (e) {
								console.error("%cPOKI_PLAYTEST:%c worker error", "font-weight: bold", "", e), un = !0
							}
						};
						for (t = 0; t < pn.length; t++) n(t)
					} else {
						var i = function(e) {
							var t = pn[e].captureStream(xn)
								.getVideoTracks()[0],
								n = new window.MediaStreamTrackProcessor(t),
								i = n.readable.getReader();
							yn.push(t), wn.push(n), bn.push(i), kn.push(null);
							var o = function() {
								i.read()
									.then((function(t) {
										var n = t.done,
											i = t.value;
										n || kn.length <= e ? i.close() : (null !== kn[e] && kn[e].close(), kn[e] = i, o())
									}))
							};
							o()
						};
						for (t = 0; t < pn.length; t++) i(t)
					}
					Nn(!0)
				} catch (e) {
					console.error("%cPOKI_PLAYTEST:%c setPlaytestSoureCanvasses error", "font-weight: bold", "", e), un = !0
				}
			}
		}

		function Fn() {
			var e = ti.__playtestCanvas;
			if ((null == e ? void 0 : e.length) && Gn(e)) return e;
			var t = 0,
				n = Array.from(document.getElementsByTagName("canvas")),
				i = [];
			if (n.forEach((function(e) {
				if ("true" !== e.getAttribute("data-poki-no-playtest")) {
					var n = getComputedStyle(e),
						o = n.width,
						r = n.height,
						a = parseInt(o, 10) * parseInt(r, 10);
					a >= t && function(e) {
						if (!e) return !1;
						for (var t = e, n = !0; t && t !== document.body;) {
							var i = window.getComputedStyle(t);
							if ("none" === i.display) return !1;
							if ("hidden" === i.visibility) return !1;
							if (n && (0 === t.offsetWidth || 0 === t.offsetHeight)) return !1;
							"absolute" === i.position && (n = !1), t = t.parentElement
						}
						var o = e.getBoundingClientRect(),
							r = window.innerHeight || document.documentElement.clientHeight,
							a = window.innerWidth || document.documentElement.clientWidth;
						return !(o.right < 0 || o.bottom < 0 || o.left > a || o.top > r)
					}(e) && (a > t && (i = []), i.push({
						canvas: e,
						style: n,
						index: i.length
					}), t = a)
				}
			})), 0 === i.length) {
				if (ti.__playtestCaptureHTML === Kn) {
					var o = document.createElement("canvas");
					return o.width = window.innerWidth, o.height = window.innerHeight, o.setAttribute("data-poki-html-canvas", "true"), o.pokiHtmlDummyCanvas = !0, [o]
				}
				return []
			}
			return i.sort((function(e, t) {
				var n = parseInt(e.style.zIndex, 10) || 0,
					i = parseInt(t.style.zIndex, 10) || 0;
				return n < i ? -1 : n > i ? 1 : e.index - t.index
			})), i.map((function(e) {
				return e.canvas
			}))
		}

		function qn(e) {
			if (!hn) return null;
			un = !1, Hn(e), Nn(!0);
			var t, n = hn.captureStream(xn);
			window.addEventListener("pointermove", zn, {
				capture: !0,
				passive: !0
			}), window.addEventListener("pointerdown", Rn, {
				capture: !0,
				passive: !0
			}), window.addEventListener("pointerup", On, {
				capture: !0,
				passive: !0
			}), window.addEventListener("contextmenu", On, {
				capture: !0,
				passive: !0
			});
			var i, o = 0;
			if (ti.__playtestCaptureHTML === Kn) {
				var r = 0;
				t = setInterval((function() {
					if (hn) {
						var e = !!pn[0].pokiHtmlDummyCanvas;
						!e || pn[0].width === window.innerWidth && pn[0].height === window.innerHeight || (pn[0].width = window.innerWidth, pn[0].height = window.innerHeight);
						var t = !1;
						if (e && document.getElementsByTagName("canvas")
							.length > 0 && (t = !0), !t) {
							var n = function(e) {
								for (var t = 3 & e.length, n = e.length - t, i = 3432918353, o = 461845907, r = 0, a = 0, s = 0; s < n;) a = 255 & e.charCodeAt(s) | (255 & e.charCodeAt(++s)) << 8 | (255 & e.charCodeAt(++s)) << 16 | (255 & e.charCodeAt(++s)) << 24, ++s, r = 5 * (r = (r ^= a = (65535 & (a = (a = (65535 & a) * i + (((a >>> 16) * i & 65535) << 16) & 4294967295) << 15 | a >>> 17)) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295) << 13 | r >>> 19) + 3864292196 & 4294967295;
								switch (a = 0, t) {
									case 3:
										a ^= (255 & e.charCodeAt(s + 2)) << 16;
									case 2:
										a ^= (255 & e.charCodeAt(s + 1)) << 8;
									case 1:
										r ^= a = (65535 & (a = (a = (65535 & (a ^= 255 & e.charCodeAt(s))) * i + (((a >>> 16) * i & 65535) << 16) & 4294967295) << 15 | a >>> 17)) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295
								}
								return r ^= e.length, r = 2246822507 * (65535 & (r ^= r >>> 16)) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r = 3266489909 * (65535 & (r ^= r >>> 13)) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^= r >>> 16) >>> 0
							}(document.body.innerHTML);
							r !== n && (r = n, t = !0)
						}
						t && Un(e)
					}
				}), 1e3)
			}
			var a = function() {
				if (un || !hn || !pn.length || o > 10) return console.info("%cPOKI_PLAYTEST:%c crashed", "font-weight: bold", "", un, !hn, !pn.length, o), window.removeEventListener("pointermove", zn), window.removeEventListener("pointerdown", Rn), window.removeEventListener("pointerup", On), window.removeEventListener("contextmenu", On), clearInterval(t), ti.__playtestCaptureHTML = "", hn = null, fn = null, vn = null, mn = null, Hn([]), rn.destroy(), an.destroy(), void clearInterval(i);
				if (!Gn(pn)) return console.info("%cPOKI_PLAYTEST:%c source canvasses not in DOM", "font-weight: bold", ""), void((pn = Fn())
					.length || (console.info("%cPOKI_PLAYTEST:%c no source canvasses found", "font-weight: bold", ""), o++, setTimeout(a, 100)));
				if (!fn && !(fn = hn.getContext("2d"))) return console.info("%cPOKI_PLAYTEST:%c streamCanvas context creation failed", "font-weight: bold", ""), o++, void setTimeout(a, 100);
				o = 0, Nn(!1), ti.__playtestCaptureHTML === Yn ? (ti.__playtestCaptureHTML = "", Un(!1)) : ti.__playtestCaptureHTML === $n && (ti.__playtestCaptureHTML = "", vn = null, mn = null), fn.clearRect(0, 0, hn.width, hn.height);
				for (var e = 0; e < kn.length; e++) {
					var n = kn[e];
					null !== n && fn.drawImage(n, 0, 0, n.displayWidth, n.displayHeight, 0, 0, hn.width, hn.height)
				}
				vn && fn.drawImage(vn, 0, 0, vn.width, vn.height, 0, 0, hn.width, hn.height), sn(In, En, Cn, Pn, Bn, fn), En && Sn && (En = !1, Sn = !1), Cn && _n && (Cn = !1, _n = !1), jn()
			};
			return i = setInterval(a, 1e3 / xn), window.addEventListener("visibilitychange", (function() {
				console.info("%cPOKI_PLAYTEST:%c visibility change", "font-weight: bold", "", document.visibilityState), "visible" === document.visibilityState ? Tn === ln && (Tn = "") : (Tn = ln, jn())
			})), window.addEventListener("resize", (function() {
				console.info("%cPOKI_PLAYTEST:%c resize", "font-weight: bold", "", window.innerWidth, window.innerHeight)
			})), window.addEventListener("orientationchange", (function(e) {
				var t, n, i;
				console.info("%cPOKI_PLAYTEST:%c orientationchange", "font-weight: bold", "", null === (i = null === (n = null === (t = null == e ? void 0 : e.target) || void 0 === t ? void 0 : t.screen) || void 0 === n ? void 0 : n.orientation) || void 0 === i ? void 0 : i.type)
			})), screen.orientation.addEventListener("change", (function(e) {
				var t;
				console.info("%cPOKI_PLAYTEST:%c orientation change", "font-weight: bold", "", null === (t = e.target) || void 0 === t ? void 0 : t.type)
			})), n
		}
		var Qn = new RegExp("(".concat(["WebView", "(iPhone|iPod|iPad)(?!.*Safari)", "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})", "Linux; U; Android"].join("|"), ")"), "ig");

		function Wn() {
			window.navigator.userAgent.match(Qn) && !E.isPlayground && document.addEventListener("touchmove", (function(e) {
				return e.preventDefault(), e.returnValue = !1, !1
			}), {
				passive: !1
			})
		}
		var Xn = function() {
				return Xn = Object.assign || function(e) {
					for (var t, n = 1, i = arguments.length; n < i; n++)
						for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}, Xn.apply(this, arguments)
			},
			Zn = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			Jn = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			Yn = "once",
			Kn = "on",
			$n = "off",
			ei = function() {
				function t(n) {
					var i = this;
					this.gameStarted = !1, this.duringGameplay = !1, this.fpsStats = new ee(.01), this.lastInteractionTime = 0, this.lastGamePlayStop = 0, this.badEventsCounter = 0, this.asyncScreenshotLoader = function() {
						window.addEventListener("message", (function(t) {
							return Zn(i, void 0, void 0, (function() {
								var n;
								return Jn(this, (function(i) {
									switch (i.label) {
										case 0:
											return "pokiGenerateScreenshot" !== t.data.type ? [3, 1] : (o = t.data, Ut(void 0, void 0, void 0, (function() {
												var t, n, i, r, a;
												return Vt(this, (function(s) {
													switch (s.label) {
														case 0:
															return t = o.hasFrame, n = null, t ? (i = o.title, r = o.thumbnail, [4, Ft({
																title: i,
																thumbnail: r
															})]) : [3, 2];
														case 1:
															return n = s.sent(), [3, 4];
														case 2:
															return [4, Ft()];
														case 3:
															n = s.sent(), s.label = 4;
														case 4:
															return a = {
																screenshot: n,
																errors: G
															}, o.callback && (a.callback = o.callback), S.sendMessage(e.message.sendGameScreenshot, {
																data: a
															}), [2]
													}
												}))
											})), [3, 4]);
										case 1:
											return "pokiGenerateRawScreenshot" !== t.data.type ? [3, 2] : (Ut(void 0, void 0, void 0, (function() {
												var t;
												return Vt(this, (function(n) {
													switch (n.label) {
														case 0:
															return [4, Xt()];
														case 1:
															return t = n.sent(), S.sendMessage(e.message.sendGameRawScreenshot, {
																data: {
																	screenshot: t
																}
															}), [2]
													}
												}))
											})), [3, 4]);
										case 2:
											return "pokiUploadScreenshot" !== t.data.type ? [3, 4] : [4, qt(t.data)];
										case 3:
											n = i.sent(), S.sendMessage(e.message.sendUploadScreenshot, {
												data: {
													screenshot: n
												}
											}), i.label = 4;
										case 4:
											return [2]
									}
									var o
								}))
							}))
						}), !1)
					}, this.setupInspector = function() {
						var t = 0;
						if (window.addEventListener("message", (function(n) {
							return Zn(i, void 0, void 0, (function() {
								return Jn(this, (function(i) {
									var o, r;
									return "pokiInspectorRequestCookies" === n.data.type ? re()
										.then((function(t) {
											S.sendMessage(e.message.sendInspectorCookies, {
												data: {
													cookies: t
												}
											}), S.sendMessage(e.message.sendInspectorEvent, {
												event: "cookies",
												data: {
													cookies: t
												}
											})
										})) : "pokiInspectorSetFPS" === n.data.type && (t = n.data.fps || 0) && (o = performance.now(), r = function() {
											if (t) {
												for (var e = o + 1e3 / t; !((o = performance.now()) >= e););
												requestAnimationFrame(r)
											}
										}, requestAnimationFrame(r)), [2]
								}))
							}))
						}), !1), "desktop" !== E.device) try {
							var n = function(t) {
								var n = console[t];
								console[t] = function() {
									for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
									S.sendMessage(e.message.sendInspectorConsole, {
										data: {
											level: t,
											args: j(i)
										}
									}), S.sendMessage(e.message.sendInspectorEvent, {
										event: "console",
										data: {
											level: t,
											args: j(i)
										}
									}), n.apply(console, i)
								}
							};
							n("log"), n("warn"), n("error")
						} catch (e) {}
					}, this.initWithVideoHB = function() {
						return i.init()
					}, this.setDebug = function(t) {
						void 0 === t && (t = !0), window.location.hostname.endsWith("poki-gdn.com") ? t && Pi.track(e.tracking.debugTrueInProduction) : (_.debug = t, _.log = null != t ? t : _.log, t ? J() : Z())
					}, this.setLogging = function(e) {
						_.log = e
					}, this.gameLoadingFinished = function() {
						var t, n, i, o;
						clearInterval(window.pokiCancelProgressInterval), Pi.track(e.tracking.screen.gameLoadingFinished, {
							transferSize: Jt(),
							trackers: (i = window, o = [], "function" != typeof i.ga && "function" != typeof i.gtag || o.push("ga"), i.mixpanel && "function" == typeof i.mixpanel.track && o.push("mixpanel"), "function" == typeof i.GameAnalytics && o.push("gameanalytics"), (i.kongregateAPI || i.kongregate) && o.push("kongregate"), i.FlurryAgent && o.push("flurry"), i.Countly && o.push("countly"), i.amplitude && o.push("amplitude"), o)
								.join(","),
							error_session_id: q,
							now: Math.round(null === (n = null === (t = window.performance) || void 0 === t ? void 0 : t.now) || void 0 === n ? void 0 : n.call(t)) || void 0
						})
					}, this.gameplayStart = function(t) {
						if (i.ignoreEvents()) _.debug && console.error("gameplayStart ignored because of too many events");
						else {
							i.duringGameplay = !0, i.gameStarted || (i.gameStarted = !0, Pi.track(e.tracking.screen.firstRound), i.monetization.startStartAdsAfterTimer());
							var n = i.badEventsCounter;
							setTimeout((function() {
								var o;
								performance.now() - i.lastInteractionTime < 5e3 && (o = i.lastInteractionEvent), Pi.track(e.tracking.screen.gameplayStart, Xn(Xn({}, t), {
									fps: i.fpsStats.stats(),
									badEvents: n,
									interaction: o
								}))
							}), 0), clearTimeout(i.playerActiveTimeout), i.playerActiveTimeout = setTimeout((function() {
								window.addEventListener("pointermove", i.__playerIsActiveEvent), document.addEventListener("keydown", i.__playerIsActiveEvent)
							}), 6e5), i.lastGamePlayStop && (i.lastGamePlayStop > performance.now() - 50 && i.badEventsCounter++, i.lastGamePlayStop = 0)
						}
					}, this.gameplayStop = function(t) {
						i.ignoreEvents() ? _.debug && console.error("gameplayStop ignored because of too many events") : (i.duringGameplay = !1, Pi.track(e.tracking.screen.gameplayStop, Xn(Xn({}, t), {
							fps: i.fpsStats.stats()
						})), clearTimeout(i.playerActiveTimeout), window.removeEventListener("pointermove", i.__playerIsActiveEvent), document.removeEventListener("keydown", i.__playerIsActiveEvent), i.lastGamePlayStop = performance.now())
					}, this.measure = function(t, n, i) {
						void 0 === n && (n = ""), void 0 === i && (i = ""), Pi.track(e.tracking.measure, {
							category: "".concat(t),
							action: "".concat(n),
							label: "".concat(i),
							p4d_game_id: E.gameID,
							p4d_version_id: E.versionID
						})
					}, this.customEvent = function(t, n, o) {
						void 0 === o && (o = {}), t && n ? (t = String(t), n = String(n), o = Xn({}, o), "game" === t && "segment" === n && o.segment && i.measure(o.segment), Pi.track(e.tracking.custom, {
							eventNoun: t,
							eventVerb: n,
							eventData: o
						})) : i.error("customEvent", "customEvent needs at least a noun and a verb")
					}, this.commercialBreak = function(t) {
						return new Promise((function(n) {
							if (i.ignoreEvents()) return _.debug && console.error("commercialBreak ignored because of too many events"), void n();
							var o = i.gameStarted ? e.ads.position.midroll : e.ads.position.preroll;
							i.monetization.requestAd({
								position: o,
								onFinish: n,
								onStart: t
							})
						}))
					}, this.rewardedBreak = function(t, n, o, r) {
						return new Promise((function(a) {
							var s, d = {};
							"function" == typeof t ? (s = t, void 0 !== n && (d.category = n), void 0 !== o && (d.details = o), void 0 !== r && (d.placement = r)) : (void 0 !== t && (d.category = t), void 0 !== n && (d.details = n), void 0 !== o && (d.placement = o)), setTimeout((function() {
								d.category && performance.now() - i.lastInteractionTime < 500 && (d.from = i.lastInteractionEvent);
								var t = e.ads.position.rewarded;
								i.monetization.requestAd({
									position: t,
									onFinish: function(e) {
										a(!!(null == e ? void 0 : e.rewardAllowed))
									},
									onStart: s,
									rewardedKVs: d
								})
							}), 0)
						}))
					}, this.displayAd = function(t, n, o, r) {
						var a = Y();
						Pi.track(e.tracking.screen.displayAd, {
							size: n,
							opportunityId: a,
							duringGameplay: i.duringGameplay
						});
						var s = {
							container: t,
							opportunityId: a,
							size: n,
							duringGameplay: i.duringGameplay,
							onCanDestroy: o,
							onDisplayRendered: r
						};
						i.monetization.displayAd(s)
					}, this.isAdBlocked = function() {
						return !1
					}, this.muteAd = function() {
						i.monetization.muteAd()
					}, this.logError = function(e) {
						i.captureError(e)
					}, this.setPlaytestCanvas = function(e) {
						return i.playtestSetCanvas(e)
					}, this.playtestSetCanvas = function(e) {
						e ? (t.__playtestCanvas = [].concat(e), Hn(t.__playtestCanvas)) : t.__playtestCanvas = []
					}, this.playtestCaptureHtmlOnce = function() {
						t.__playtestCaptureHTML = Yn
					}, this.playtestCaptureHtmlOn = function() {
						t.__playtestCaptureHTML = Kn
					}, this.playtestCaptureHtmlOff = function() {
						t.__playtestCaptureHTML = $n
					}, this.getIsoLanguage = function() {
						return m("iso_lang")
					}, this.shareableURL = function(t) {
						return void 0 === t && (t = {}), new Promise((function(n, i) {
							var o = new URLSearchParams,
								r = Object.keys(t);
							if (E.isPokiIframe || E.isInspector) {
								var a = m("poki_url");
								r.forEach((function(e) {
									void 0 !== t[e] && null !== t[e] && o.set("gd".concat(e), t[e])
								})), n("".concat(a, "?")
									.concat(o.toString())), S.sendMessage(e.message.setPokiURLParams, {
									params: t
								})
							} else window.self === window.top ? (r.forEach((function(e) {
								void 0 !== t[e] && null !== t[e] && o.set("".concat(e), t[e])
							})), n("".concat(window.location.origin)
								.concat(window.location.pathname, "?")
								.concat(o.toString()))) : i(new Error("shareableURL only works on Poki or a top level frame"))
						}))
					}, this.getURLParam = function(e) {
						return m("gd".concat(e)) || m(e)
					}, this.captureError = function(e) {
						Q(e)
					}, this.getLanguage = function() {
						return navigator.language.toLowerCase()
							.split("-")[0]
					}, this.generateScreenshot = function() {
						return Zn(i, void 0, void 0, (function() {
							return Jn(this, (function(e) {
								return [2, Ft()]
							}))
						}))
					}, this.enableEventTracking = function(e) {
						window.top === window && Pi.setupObserverWithCMP(e || 0)
					}, this.error = function(e, t) {
						console.error("PokiSDK.".concat(e, ": ")
							.concat(t))
					}, this.__playerIsActiveEvent = function() {
						window.removeEventListener("pointermove", i.__playerIsActiveEvent), document.removeEventListener("keydown", i.__playerIsActiveEvent), Pi.track(e.tracking.screen.playerActive), i.playerActiveTimeout = setTimeout((function() {
							window.addEventListener("pointermove", i.__playerIsActiveEvent), document.addEventListener("keydown", i.__playerIsActiveEvent)
						}), 6e5)
					}, this.__interactionEvent = function(e) {
						"pointerdown" === e.type ? i.lastInteractionEvent = "pointerdown" : "keydown" === e.type ? i.lastInteractionEvent = "keydown-".concat(e.code) : i.lastInteractionEvent = "unknown", i.lastInteractionTime = performance.now()
					}, this.setDebugTouchOverlayController = function() {}, this.gameInteractive = function() {}, this.gameLoadingProgress = function() {}, this.gameLoadingStart = function() {}, this.getLeaderboard = function() {
						return Promise.resolve([])
					}, this.happyTime = function() {}, this.sendHighscore = function() {}, this.setPlayerAge = function() {}, this.roundStart = function() {}, this.roundEnd = function() {}, this.monetization = n, this.SDK = this.monetization, Wn(), setInterval((function() {
						i.badEventsCounter = Math.max(i.badEventsCounter - 1, 0)
					}), 1e3)
				}
				return t.prototype.init = function(t) {
					var n = this;
					return void 0 === t && (t = {}), window.addEventListener("pointerdown", this.__interactionEvent), document.addEventListener("keydown", this.__interactionEvent), new Promise((function(i) {
						n.monetization.init(Xn({
							onReady: function() {
								m("preroll") && n.monetization.forcePreroll(), i()
							}
						}, t)), n.asyncScreenshotLoader(), E.isInspector && n.setupInspector(), document.location.search.length <= 1 && (S.sendMessage(e.message.sendInspectorBadBehavior, {
							data: {
								behavior: "rewrite_query_params"
							}
						}), S.sendMessage(e.message.sendInspectorEvent, {
							event: "bad-behavior",
							data: {
								behavior: "rewrite_query_params"
							}
						})), S.sendMessage(e.message.sdkDetails, {
							version: "464b02925e0e991c91b4771ee90d315413716c08"
						})
					}))
				}, t.prototype.ignoreEvents = function() {
					return this.badEventsCounter >= 10
				}, t.prototype.destroyAd = function(e) {
					this.monetization.destroyAd(e)
				}, t.prototype.setVolume = function(e) {
					this.monetization.setVolume(e)
				}, t.__playtestCaptureHTML = "", t
			}();
		const ti = ei;
		var ni = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			ii = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			oi = '\n\t<template id="poki-playtest-template-markup">\n\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup-wrapper" id="poki-playtest-popup-wrapper">\n\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup">\n\t\t\t\t<header class="poki-playtest-popup-scope-reset poki-playtest-popup__header">\n\t\t\t\t\t<img class="poki-playtest-popup-scope-reset poki-playtest-popup__header__img" width="36" height="36" src="https://a.poki-cdn.com/playtest/playtest-icon.svg" alt="Lab icon">\n\t\t\t\t\t<h2 class="poki-playtest-popup-scope-reset poki-playtest-popup__header__title">Hey there, adventurer</h2>\n\t\t\t\t</header>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__content">\n\t\t\t\t\t<p>You found a mystery game and have been selected to test it out! When you join the playtest, we&apos;ll record your gameplay to see all the fun (and maybe some goofy) moments you encounter. This helps the developer figure out what rocks and what needs a little extra magic in their game. Don&apos;t worry, your gameplay recording will be deleted after 30 days.</p>\n\t\t\t\t\t<p>And hey, if you&apos;re not feeling it, no biggie - you can refuse the playtest and still play the game just like normal. For more information, please read our <a href="https://a.poki-cdn.com/playtest/2024.05.08_Poki_Playtest_Privacy_Statement.pdf" download="2024-05-08 Poki Playtest Privacy Statement.pdf" target="_blank">Privacy Statement Playtest</a>.</p>\n\t\t\t\t\t<h3>Do you consent to join the playtest of <span id="poki-playtest-popup-game-title">%GAME_TITLE%</span>?</h3>\n\t\t\t\t\t<p><small>Please note that this game has been uploaded independently by this game&apos;s developer and has not yet been verified by the Poki team. If you run into any trouble, contact us at <strong><a href="mailto:hello@poki.com">hello@poki.com</a></strong></small></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__actions">\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-reject" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">No, thanks</button>\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-resolve" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">Yes, let\'s go</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</template>\n',
			ri = '\n\t.poki-playtest-popup {\n\t\tall: unset;\n\n\t\t& *,\n\t\t& *::before,\n\t\t& *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\n\t.poki-playtest-popup {\n\t\tborder-radius: 16px;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 60px 24px 0px rgba(93, 107, 132, 0.03), 0px 34px 20px 0px rgba(93, 107, 132, 0.09), 0px 15px 15px 0px rgba(93, 107, 132, 0.15), 0px 4px 8px 0px rgba(93, 107, 132, 0.18);\n\n\t\tdisplay: flex;\n\t\tmax-width: 480px;\n\t\tmin-width: 320px;\n\t\twidth: 100%;\n\t\tpadding: 8px 0 16px 0;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 16px;\n\t\tcolor: #002B50;\n\n\t\tposition: fixed;\n\t\tz-index: 99999;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\t.poki-playtest-popup__header {\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tpadding: 8px 16px 16px;\n\t\t\talign-items: center;\n\t\t\tgap: 12px;\n\t\t\tborder-bottom: 2px solid #F0F5FC;\n\t}\n\n\t.poki-playtest-popup__header__img {\n\t\tall: unset;\n\t}\n\n\t.poki-playtest-popup__header__title {\n\t\tfont: 700 24px/1.16 Torus, sans-serif;\n\t\tmargin: 0;\n\t}\n\n\t.poki-playtest-popup__content {\n\t\tfont: 400 14px/1.57 "Proxima Nova", sans-serif;\n\t\tpadding: 0 16px;\n\n\t\ta {\n\t\t\tcolor: #0074E0;\n\t\t\tpointer-events: auto;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: #009CFF;\n\t\t\t}\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 8px 0 0;\n\n\t\t\t&:first-child {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\n\t\t\tsmall {\n\t\t\t\tall: unset;\n\t\t\t}\n\n\t\t\t&:has(small) {\n\t\t\t\tcolor: #5D6B84;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 1.33;\n\t\t\t\tletter-spacing: 0.3px;\n\t\t\t}\n\t\t}\n\n\t\th3 {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1.5;\n\t\t\tmargin: 16px 0 14px;\n\t\t}\n\t}\n\n\t.poki-playtest-popup__actions {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tpadding: 8px 16px 0;\n\t\tgap: 16px;\n\t\tjustify-content: center;\n\t}\n\n\t.poki-playtest-popup__button {\n\t\tdisplay: flex;\n\t\tpadding: 7px 24px 9px;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex: 1 0 0;\n\t\tborder-radius: 24px;\n\t\tbackground: #009CFF;\n\t\tcursor: pointer;\n\t\tpointer-events: auto;\n\n\t\tcolor: #FFF;\n\t\tfont: 700 16px/1.25 Torus, sans-serif;\n\n\t\t&:hover {\n\t\t\tbackground-color: #0074E0;\n\t\t}\n\t}\n\n\t.poki-playtest-popup-wrapper {\n\t\tall: unset;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground: #002B50AF;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 99998;\n\t}\n\n\t.poki-playtest-popup-scope-reset {\n\t\tletter-spacing: normal;\n\t\ttext-align: left;\n\t\ttext-decoration: none;\n\t\ttext-indent: 0;\n\t\ttext-shadow: none;\n\t\ttext-transform: none;\n\t\twhite-space: normal;\n\t\tword-spacing: normal;\n\t}\n';

		function ai() {
			var e, t, n, i = document.getElementById("poki-playtest-popup-reject"),
				o = document.getElementById("poki-playtest-popup-resolve");
			null == i || i.removeEventListener("pointerdown", ai), null == o || o.removeEventListener("pointerdown", ai), null === (e = document.getElementById("poki-playtest-popup-wrapper")) || void 0 === e || e.remove(), null === (t = document.getElementById("poki-playtest-template-markup")) || void 0 === t || t.remove(), null === (n = document.getElementById("poki-playtest-template-style")) || void 0 === n || n.remove()
		}

		function si(e) {
			e.stopImmediatePropagation()
		}

		function di(e) {
			var t = e.gameTitle,
				n = e.rejectCallback,
				i = e.resolveCallback,
				o = document.body;
			! function(e) {
				var t = document.createElement("template");
				t.innerHTML = oi, e.appendChild(t.content);
				var n = document.createElement("style");
				n.innerHTML = ri, n.id = "poki-playtest-template-style", e.appendChild(n)
			}(o);
			var r = document.getElementById("poki-playtest-template-markup")
				.content.cloneNode(!0);
			r.querySelector("#poki-playtest-popup-game-title")
				.textContent = t,
				function() {
					return ni(this, void 0, void 0, (function() {
						var e, t, n, i, o, r, a;
						return ii(this, (function(s) {
							switch (s.label) {
								case 0:
									return e = new FontFace("ProximaNova", "url(https://a.poki-cdn.com/fonts/proxima-nova-regular-latin.woff2)")
										.load(), t = new FontFace("ProximaNova", "url(https://a.poki-cdn.com/fonts/proxima-nova-bold-latin.woff2)", {
											weight: "bold"
										})
										.load(), n = new FontFace("Torus", "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)")
										.load(), [4, Promise.all([e, t, n])];
								case 1:
									return i = s.sent(), o = i[0], r = i[1], a = i[2], document.fonts.add(o), document.fonts.add(r), document.fonts.add(a), [2]
							}
						}))
					}))
				}()
				.then((function() {
					o.appendChild(r),
						function(e) {
							var t = e.rejectCallback,
								n = e.resolveCallback,
								i = document.getElementById("poki-playtest-popup-reject"),
								o = document.getElementById("poki-playtest-popup-resolve");
							null == i || i.addEventListener("pointerdown", (function() {
								ai(), t()
							})), null == o || o.addEventListener("pointerdown", (function() {
								ai(), n()
							}));
							var r = document.getElementById("poki-playtest-popup-wrapper");
							r && ["pointerdown", "pointerup", "pointermove", "click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "contextmenu", "dragstart"].forEach((function(e) {
								return r.addEventListener(e, si)
							}))
						}({
							rejectCallback: n,
							resolveCallback: i
						})
				}))
		}

		function ci(e) {
			for (var t = [], n = 0, i = 0; i < e.length; i++)
				if (n > 0) n--;
				else {
					var o = e[i];
					if ("string" == typeof o) n = (o.match(/%c/g) || [])
						.length, t.push(o.replace(/%c/g, ""));
					else try {
						t.push(String(o))
					} catch (e) {
						t.push("<".concat(e.message, ">"))
					}
				} return t.join(" ")
		}
		var li, ui = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			pi = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			Ai = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var i, o = 0, r = t.length; o < r; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
				return e.concat(i || Array.prototype.slice.call(t))
			},
			hi = function(e, t) {},
			fi = [],
			vi = null,
			mi = 0,
			gi = Ai(Ai([], Object.values(e.tracking.screen), !0), [e.tracking.ads.status.completed, e.tracking.ads.status.error, e.tracking.ads.status.limit, e.tracking.ads.video.progress], !1),
			yi = ((li = {})[e.tracking.screen.commercialBreak] = "commercialBreak", li[e.tracking.screen.gameLoadingFinished] = "gameLoadingFinished", li[e.tracking.screen.gameplayStart] = "gameplayStart", li[e.tracking.screen.gameplayStop] = "gameplayStop", li[e.tracking.screen.rewardedBreak] = "rewardedBreak", li),
			wi = [],
			bi = [];
		try {
			var ki = function(e) {
				var t = console[e];
				console[e] = function() {
					for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
					t.apply(console, n), bi && bi.push({
						timeMs: performance.now(),
						level: e,
						message: ci(n)
					})
				}, wi.push((function() {
					console[e] = t
				}))
			};
			ki("log"), ki("info"), ki("warn"), ki("error")
		} catch (e) {}

		function xi() {
			fi = null, wi.forEach((function(e) {
				return e()
			})), wi = [], bi = null
		}

		function Ii(t, n) {
			console.info("%cPOKI_PLAYTEST:%c start recording using codec", "font-weight: bold", "", n);
			var i = qn(t);
			i && ((vi = new WebSocket("wss://playtest-recorder.poki.io/ws"))
				.addEventListener("error", (function() {
					Pi.track(e.tracking.playtest.error, {
						message: "websocket error"
					}), console.info("%cPOKI_PLAYTEST:%c error", "font-weight: bold", "")
				})), vi.addEventListener("open", (function() {
					if (vi) {
						if (vi.readyState === vi.OPEN) {
							var o = void 0;
							try {
								var r = document.createElement("canvas"),
									a = {
										powerPreference: "high-performance",
										failIfMajorPerformanceCaveat: !1
									},
									s = r.getContext("webgl2", a);
								if (s || (s = r.getContext("webgl", a)) || (s = r.getContext("experimental-webgl", a)), s) {
									var d = s,
										c = d.getExtension("WEBGL_debug_renderer_info");
									c && (o = d.getParameter(c.UNMASKED_RENDERER_WEBGL)), o || (o = d.getParameter(d.RENDERER))
								}
							} catch (e) {}
							var l = JSON.stringify({
								type: "save",
								game_id: E.gameID,
								version_id: E.versionID,
								webgl_renderer: o,
								sdk_version: "464b02925e0e991c91b4771ee90d315413716c08",
								cpus: navigator.hardwareConcurrency,
								device_pixel_ratio: window.devicePixelRatio || 1,
								canvasses: t.length
							});
							vi.send(l), console.info("%cPOKI_PLAYTEST:%c websocket open", "font-weight: bold", "", l)
						}
						var u = new MediaRecorder(i, {
								mimeType: n,
								videoBitsPerSecond: 5e5
							}),
							p = performance.now(),
							A = function(e) {
								return Math.round((e || performance.now()) - p)
							};
						u.addEventListener("stop", (function() {
							console.info("%cPOKI_PLAYTEST:%c recording stopped", "font-weight: bold", "")
						})), u.addEventListener("error", (function(e) {
							console.error("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e.error)
						})), u.addEventListener("dataavailable", (function(e) {
							e.data.size > 0 && (vi && vi.readyState === vi.OPEN && vi.send(e.data))
						})), u.start(250);
						var h = {},
							f = !1;
						document.addEventListener("keydown", (function(e) {
							h[e.code] || (h[e.code] = !0, f = !0)
						})), document.addEventListener("keyup", (function(e) {
							h[e.code] && (h[e.code] = !1, f = !0)
						}));
						var v = setInterval((function() {
							var e = Object.keys(h);
							f && e.length > 0 && vi && vi.readyState === vi.OPEN && vi.send(JSON.stringify({
								type: "keyboard",
								offset: A(),
								keys: h
							})), f = !1, e.forEach((function(e) {
								h[e] || delete h[e]
							}))
						}), 50);
						hi = function(e, t) {
							if (vi && vi.readyState === vi.OPEN) {
								vi.send(j({
									type: "sdk-event",
									offset: A(t),
									event: e
								}));
								var n = yi[e];
								n && vi.send(j({
									type: "console",
									offset: A(t),
									level: "log",
									message: "PokiSDK.".concat(n, "()")
								}))
							}
						}, null !== fi && (fi.forEach((function(e) {
							hi(e.event, e.timeMs)
						})), fi = null), N = function(e) {
							vi && vi.readyState === vi.OPEN && vi.send(JSON.stringify({
								type: "error",
								offset: A(),
								error: e
							}))
						}, wi.forEach((function(e) {
							return e()
						})), wi = [];
						try {
							var m = function(e) {
								var t = console[e];
								console[e] = function() {
									for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
									t.apply(console, n), vi && vi.readyState === vi.OPEN && vi.send(JSON.stringify({
										type: "console",
										offset: A(),
										level: e,
										message: ci(n)
									}))
								}, wi.push((function() {
									console[e] = t
								}))
							};
							m("log"), m("info"), m("warn"), m("error")
						} catch (e) {}
						bi && (bi.forEach((function(e) {
							vi && vi.readyState === vi.OPEN && vi.send(JSON.stringify({
								type: "console",
								offset: A(e.timeMs),
								level: e.level,
								message: e.message
							}))
						})), bi = null), ti.__playtestCaptureHTML === Kn && vi.send(JSON.stringify({
							type: "console",
							offset: A(),
							level: "log",
							message: "No canvas found, using HTML capture"
						}));
						var g = function(t) {
							var n = t.position;
							if (vi && vi.readyState === vi.OPEN) {
								var i = e.tracking.screen.commercialBreak,
									o = "Commercial Break";
								n === e.ads.position.rewarded && (i = e.tracking.screen.rewardedBreak, o = "Rewarded Break"), Vn(o), vi.send(JSON.stringify({
									type: "sdk-event",
									offset: A(),
									event: i
								}))
							}
						};
						M.addEventListener(e.playtest.startVideo, g);
						var y = function() {
							Vn("")
						};
						M.addEventListener(e.playtest.stopVideo, y);
						var w = new ee(1),
							b = setInterval((function() {
								vi && vi.readyState === vi.OPEN && vi.send(JSON.stringify({
									type: "fps",
									offset: A(),
									stats: w.stats()
								}))
							}), 1e3);
						vi.addEventListener("close", (function(t) {
							console.info("%cPOKI_PLAYTEST:%c websocket closed", "font-weight: bold", "", t), hi = function() {}, M.removeEventListener(e.playtest.startVideo, g), M.removeEventListener(e.playtest.stopVideo, y), clearInterval(v), clearInterval(b), u.stop(), un = !0, vi = null, xi(), Pi.track(e.tracking.playtest.closed, {
								reason: "".concat(t.reason, ":")
									.concat(t.code, ":")
									.concat(t.wasClean)
							})
						}))
					}
				})))
		}

		function Ei(t, n) {
			var i;
			n ? (Pi.track(e.tracking.playtest.showModal, {
					show: !0
				}), console.info("%cPOKI_PLAYTEST:%c init", "font-weight: bold", "", n), (i = (null == t ? void 0 : t.gameTitle) || "this game", new Promise((function(e, t) {
					return ui(void 0, void 0, void 0, (function() {
						return pi(this, (function(n) {
							return console.info("%cPOKI_PLAYTEST:%c showing consent screen", "font-weight: bold", ""), di({
								rejectCallback: t,
								resolveCallback: e,
								gameTitle: i
							}), [2]
						}))
					}))
				})))
				.then((function() {
					Pi.track(e.tracking.playtest.accepted);
					var t = performance.now() + 12e4,
						i = setInterval((function() {
							var o = performance.now();
							! function() {
								var e = window;
								if (e.pc && (e.pc.app || e.pc.AppBase)) return !0;
								if (e.c3_runtimeInterface) return !0;
								if (e._dmJSDeviceShared) return !0;
								if (e.g_WebAudioContext) return !0;
								if (e.unityGame) return !0;
								return !1
							}() && mi && o - mi > 1e4 && (Pi.track(e.tracking.playtest.noCanvas), console.info("%cPOKI_PLAYTEST:%c no canvas found, switch to HTML capture", "font-weight: bold", ""), ti.__playtestCaptureHTML = Kn);
							var r = Fn();
							if (r.length) {
								clearInterval(i), Pi.track(e.tracking.playtest.starting);
								try {
									Ii(r, n)
								} catch (e) {}
							}
							o > t && (Pi.track(e.tracking.playtest.notLoaded), clearInterval(i), console.info("%cPOKI_PLAYTEST:%c no gameLoadingFinished within 2 minutes", "font-weight: bold", ""), xi())
						}), 1e3)
				}))
				.catch((function(t) {
					Pi.track(e.tracking.playtest.rejected), console.info("%cPOKI_PLAYTEST:%c rejected", "font-weight: bold", "", t), xi()
				}))) : xi()
		}
		var Si = function() {
				return Si = Object.assign || function(e) {
					for (var t, n = 1, i = arguments.length; n < i; n++)
						for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}, Si.apply(this, arguments)
			},
			Ci = P(e.tracking),
			_i = window,
			Ti = function() {
				function n() {}
				return n.track = function(t, i) {
					var o, r;
					void 0 === i && (i = {});
					var a = Si({}, i);
					if (-1 === Ci.indexOf(t)) throw new TypeError("Invalid 'event', must be one of ".concat(Ci.join(", ")));
					if ("object" != typeof a) throw new TypeError("Invalid data, must be an object");
					var s = M.getVideoDataAnnotations();
					if (null == s ? void 0 : s.pokiAdServer) switch (t) {
						case e.tracking.ads.status.started:
							var d = s.creativeId;
							M.addVideoDataAnnotations({
								houseAdId: d
							}), a.houseAdId = d;
							break;
						case e.tracking.ads.status.impression:
							d = null == a ? void 0 : a.creativeId;
							z(Si(Si({}, a), {
								event: "video-impression",
								creativeId: d
							})), M.addVideoDataAnnotations({
								houseAdId: d
							}), a.houseAdId = d;
							break;
						case e.tracking.ads.video.error:
							z(Si(Si({}, a), {
								event: "video-error",
								errorCode: null == a ? void 0 : a.errorCode
							}));
							break;
						case e.tracking.ads.video.loaderError:
							z(Si(Si({}, a), {
								event: "video-adsloader-error",
								errorCode: null == a ? void 0 : a.errorCode
							}));
							break;
						case e.tracking.ads.status.completed:
							z(Si(Si({}, a), {
								event: "video-complete"
							}))
					}
					if (t.includes("pokiTrackingRewardedWeb") && (a = s), _.log) {
						if ("test" === (null === (r = null === (o = null === window || void 0 === window ? void 0 : window.process) || void 0 === o ? void 0 : o.env) || void 0 === r ? void 0 : r.NODE_ENV)) return;
						Object.keys(a)
							.length ? console.info("%cPOKI_TRACKER:%c Tracked event '".concat(t, "' with data:"), "font-weight: bold", "", a) : console.info("%cPOKI_TRACKER:%c Tracked event '".concat(t, "'"), "font-weight: bold", "")
					}! function(t) {
						if (t.event === e.tracking.screen.gameLoadingFinished && (mi = performance.now()), gi.includes(t.event)) try {
							hi(t.event), null !== fi && fi.push({
								event: t.event,
								timeMs: performance.now()
							})
						} catch (e) {
							console.error("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e)
						}
					}({
						event: t,
						data: a
					}), n.logToObserver ? n.pushEvent("sdk", "message", {
						content: {
							event: t,
							data: a,
							pokifordevs: {
								game_id: E.gameID,
								game_version_id: void 0
							}
						},
						type: e.message.event
					}) : S.sendMessage(e.message.event, {
						event: t,
						data: a
					})
				}, n.setupDefaultEvents = function() {
					var t, i = ((t = {})[e.ready] = e.tracking.sdk.status.initialized, t[e.adblocked] = e.tracking.sdk.status.failed, t[e.ads.busy] = e.tracking.ads.status.busy, t[e.ads.completed] = e.tracking.ads.status.completed, t[e.ads.error] = e.tracking.ads.status.error, t[e.ads.impression] = e.tracking.ads.status.impression, t[e.ads.limit] = e.tracking.ads.status.limit, t[e.ads.ready] = e.tracking.ads.status.ready, t[e.ads.requested] = e.tracking.ads.status.requested, t[e.ads.prebidRequested] = e.tracking.ads.status.prebidRequested, t[e.ads.skipped] = e.tracking.ads.status.skipped, t[e.ads.started] = e.tracking.ads.status.started, t[e.ads.video.clicked] = e.tracking.ads.video.clicked, t[e.ads.video.error] = e.tracking.ads.video.error, t[e.ads.video.loaderError] = e.tracking.ads.video.loaderError, t[e.ads.video.buffering] = e.tracking.ads.status.buffering, t[e.ads.video.progress] = e.tracking.ads.video.progress, t[e.ads.video.paused] = e.tracking.ads.video.paused, t[e.ads.video.resumed] = e.tracking.ads.video.resumed, t[e.ads.extendedVideoError] = e.tracking.ads.video.extendedVideoError, t);
					Object.keys(i)
						.forEach((function(e) {
							M.addEventListener(e, (function(t) {
								n.track(i[e], t)
							}))
						}))
				}, n.pushEvent = function(e, t, n) {
					_i.pokiGTM.push({
						event: "".concat(e, "-")
							.concat(t),
						eventNoun: e,
						eventVerb: t,
						eventData: n || {}
					})
				}, n.setRequireConsent = function(e) {
					n.cmpRequired = e, n.setupObserverIfCMP()
				}, n.setupObserverWithCMP = function(e) {
					n.cmpIndex = e, n.setupObserverIfCMP()
				}, n.setupObserverIfCMP = function() {
					if (void 0 !== n.cmpRequired && void 0 !== n.cmpIndex)
						if (n.cmpRequired) {
							if (!window.__tcfapi) return void console.error("POKI-SDK: enableEventTracking: a CMP is required but no CMP is present.");
							window.__tcfapi("addEventListener", 2, (function(e, t) {
								!t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || (window.__tcfapi("getNonIABVendorConsents", 2, (function(e) {
									e && e.nonIabVendorConsents && e.nonIabVendorConsents[n.cmpIndex || 0] && n.setupObserver()
								})), window.__tcfapi("removeEventListener", 2, (function() {}), e.listenerId))
							}))
						} else n.setupObserver()
				}, n.setupObserver = function() {
					_i._pokiSessionGlobalName = "pokiSession", _i._pokiUserGlobalName = "pokiUser", _i._pokiContextGlobalName = "pokiContext", _i._pokiTrackerGlobalName = "pokiTracker",
						function(e, n, s) {
							var h = null;
							try {
								(h = l()) ? (h.previous_page.path = h.page.path, h.previous_page.type = h.page.type, h.previous_page.id = h.page.id, h.previous_page.start = h.page.start, h.previous_page.pageview_id = h.page.pageview_id, h.page.path = e, h.page.type = n, h.page.id = s, h.page.start = Date.now(), h.page.pageview_id = o(), h.depth = A() + 1, h.expire = Date.now() + 18e5) : h = function(e, n, s) {
									try {
										var l = t(a);
										if (l) {
											var h = JSON.parse(l);
											if (c(h, !0)) return h.previous_page.path = h.page.path, h.previous_page.type = h.page.type, h.previous_page.id = h.page.id, h.previous_page.start = h.page.start, h.previous_page.pageview_id = h.page.pageview_id, h.page.path = e, h.page.type = n, h.page.id = s, h.page.start = Date.now(), h.page.pageview_id = o(), h.depth = A() + 1, h.expire = Date.now() + 18e5, h.tab_id = p(), i(a, JSON.stringify(h)), h
										}
									} catch (e) {
										var f = null;
										try {
											f = t(a) || null
										} catch (e) {}
										r(e, "getSessionDepth", f)
									}
									var v = o();
									return {
										id: o(),
										expire: Date.now() + 18e5,
										tab_id: p(),
										depth: 1,
										count: u() + 1,
										page: {
											path: e,
											type: n,
											id: s,
											start: Date.now(),
											pageview_id: v
										},
										previous_page: {},
										landing_page: {
											path: e,
											type: n,
											id: s,
											start: Date.now(),
											pageview_id: v
										},
										referrer_domain: d()
									}
								}(e, n, s), h.count > 1 && (i("poki_uid_new", "0"), window[window._pokiUserGlobalName] && (window[window._pokiUserGlobalName].is_new = !1));
								var f = JSON.stringify(h);
								try {
									sessionStorage.setItem(a, f)
								} catch (e) {
									r(e, "updateSession-1")
								}
								window[window._pokiSessionGlobalName] = h;
								try {
									i(a, f)
								} catch (e) {
									r(e, "updateSession-4")
								}
							} catch (e) {
								r(e, "updateSession-2")
							}
						}(window.location.pathname, "external", E.contentGameID),
						function() {
							var e, n, r = null === (e = window[window._pokiUserGlobalName]) || void 0 === e ? void 0 : e.id,
								a = (null === (n = window[window._pokiUserGlobalName]) || void 0 === n ? void 0 : n.is_new) || !1;
							r || (r = t("poki_uid"), a = "1" === t("poki_uid_new")), r && function(e) {
								if (!/^[A-Za-z0-9-_]+$/.test(e)) return !1;
								try {
									return 16 === atob(e.replace(/-/g, "+")
											.replace(/_/g, "/"))
										.length
								} catch (e) {
									return !1
								}
							}(r) || (r = o(), a = !0), i("poki_uid", r), i("poki_uid_new", a ? "1" : "0"), window[window._pokiUserGlobalName] = {
								id: r,
								is_new: a
							}
						}(), _i[_i._pokiContextGlobalName] = {
							tag: null,
							site: {
								id: null,
								domain: window.location.hostname,
								prefix: ""
							},
							page: {
								id: E.contentGameID,
								type: "external",
								path: window.location.pathname,
								pageview_id: o()
							},
							user: _i[_i._pokiUserGlobalName],
							session: _i[_i._pokiSessionGlobalName]
						}, _i.pokiGTM = _i.pokiGTM || [], R("https://a.poki-cdn.com/t2.js"), n.logToObserver = !0
				}, n.logToObserver = !1, n.cmpRequired = void 0, n.cmpIndex = void 0, n
			}();
		const Pi = Ti;
		n(721);

		function Bi(e) {
			if (document.body && document.body.appendChild) {
				var t = document.createElement("iframe");
				t.style.display = "none", document.body.appendChild(t), t.contentWindow && (t.contentWindow.document.open(), t.contentWindow.document.write("<script>".concat(e, "<\/script>")), t.contentWindow.document.close())
			} else document.addEventListener("DOMContentLoaded", (function() {
				Bi(e)
			}))
		}

		function Di() {
			Bi("\nwindow.addEventListener('storage', function(event) {\n\ttry {\n\t\tconst key = event.key;\n\n\t\t// key is null when localStorage.clear() is called.\n\t\tif (key === null) {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'clear',\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t\treturn;\n\t\t}\n\n\t\t// newValue is null when localStorage.removeItem() is called.\n\t\tif (event.newValue === null) {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'delete',\n\t\t\t\t\tkey,\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t} else {\n\t\t\twindow.top.postMessage({\n\t\t\t\ttype: 'mutateSaveGame',\n\t\t\t\tcontent: {\n\t\t\t\t\taction: 'set',\n\t\t\t\t\tkey,\n\t\t\t\t\tvalue: event.newValue,\n\t\t\t\t},\n\t\t\t}, '*');\n\t\t}\n\t} catch (e) {}\n});\n")
		}
		var Mi, Li, zi = function() {
				E.isPokiIframe && (setTimeout(se.trackSavegames, 1e4), (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) || E.cloudSaveGames) && Di())
			},
			Ri = !1,
			Oi = !1,
			ji = 0,
			Ni = function() {
				ji++, Mi = setTimeout(Ni, 100 * ji), window.__tcfapi && window.__tcfapi("ping", 2, (function(e, t) {
					t && (null == e ? void 0 : e.cmpLoaded) && (Ri = !0, clearTimeout(Mi))
				}))
			},
			Gi = function() {
				ji++, Li = setTimeout(Gi, 100 * ji), window.__uspapi && window.__uspapi("uspPing", 1, (function() {
					Oi = !0, clearInterval(Li)
				}))
			},
			Ui = function() {
				E.gdprApplies ? (Pi.setRequireConsent(!0), function() {
					if (!(window.__tcfapi || E.isPlayground || E.familyFriendly)) {
						var e = window.top,
							t = {};
						window.__tcfapi = function(n, i, o, r) {
							var a = "".concat(Math.random()),
								s = {
									__tcfapiCall: {
										command: n,
										parameter: r,
										version: i,
										callId: a
									}
								};
							t[a] = o, e.postMessage(s, "*")
						}, window.addEventListener("message", (function(e) {
							var n = {};
							try {
								n = "string" == typeof e.data ? JSON.parse(e.data) : e.data
							} catch (e) {}
							var i = n.__tcfapiReturn;
							i && "function" == typeof t[i.callId] && (t[i.callId](i.returnValue, i.success), t[i.callId] = null)
						}), !1)
					}
				}(), Ni(), setTimeout((function() {
					Ri || E.isPlayground || E.isPokiIframe || console.error("GDPR - No __tcfapi callback after 2s, verify implementation!")
				}), 2e3)) : Pi.setRequireConsent(!1), E.ccpaApplies && (! function() {
					if (!(window.__uspapi || E.isPlayground || E.familyFriendly)) {
						var e = window.top,
							t = {};
						window.__uspapi = function(n, i, o) {
							var r = "".concat(Math.random()),
								a = {
									__uspapiCall: {
										command: n,
										version: i,
										callId: r
									}
								};
							t[r] = o, e.postMessage(a, "*")
						}, window.addEventListener("message", (function(e) {
							var n = e && e.data && e.data.__uspapiReturn;
							n && n.callId && "function" == typeof t[n.callId] && (t[n.callId](n.returnValue, n.success), t[n.callId] = null)
						}), !1)
					}
				}(), Gi(), setTimeout((function() {
					Oi || E.isPlayground || E.isPokiIframe || console.error("USPrivacy - No __uspapi callback after 2s, verify implementation!")
				}), 2e3))
			},
			Vi = function() {
				return E.gdprApplies && !Ri && !_.debug && !E.familyFriendly
			},
			Hi = function() {
				return E.ccpaApplies && !Oi && !_.debug && !E.familyFriendly
			};
		const Fi = function(e) {
			return e instanceof Array ? e : [e]
		};
		var qi = 21682198607;
		const Qi = {
			adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1",
			adTiming: {
				preroll: !1,
				timeBetweenAds: 12e4,
				timePerTry: 7e3,
				startAdsAfter: 12e4
			},
			waterfallRetries: 2
		};
		var Wi = function() {
			function t(t) {
				void 0 === t && (t = {}), this.setTimings(t), this.timingIdx = {
					timePerTry: 0
				}, this.timers = {
					timePerTry: void 0,
					timeBetweenAds: void 0,
					startAdsAfter: void 0
				}, (null == t ? void 0 : t.fake) || (M.addEventListener(e.ads.requested, this.startTimeBetweenAdsTimer.bind(this)), M.addEventListener(e.ads.completed, this.startTimeBetweenAdsTimer.bind(this)), M.addEventListener(e.ads.stopped, this.startTimeBetweenAdsTimer.bind(this)))
			}
			return t.prototype.setTimings = function(e) {
				var t = Qi.adTiming,
					n = e.preroll,
					i = void 0 === n ? t.preroll : n,
					o = e.timePerTry,
					r = void 0 === o ? t.timePerTry : o,
					a = e.timeBetweenAds,
					s = void 0 === a ? t.timeBetweenAds : a,
					d = e.startAdsAfter,
					c = void 0 === d ? t.startAdsAfter : d;
				this.timings = {
					preroll: !1 !== i,
					timePerTry: Fi(r),
					timeBetweenAds: s,
					startAdsAfter: c
				}
			}, t.prototype.resetAll = function() {
				this.timingIdx = {
					timePerTry: 0
				}, this.stopTimer("timePerTry"), this.stopTimer("timeBetweenAds"), this.stopTimer("startAdsAfter")
			}, t.prototype.startTimeBetweenAdsTimer = function() {
				this.startTimer("timeBetweenAds")
			}, t.prototype.startStartAdsAfterTimer = function() {
				this.startTimer("startAdsAfter")
			}, t.prototype.requestPossible = function() {
				return !this.timers.timeBetweenAds && !this.timers.startAdsAfter
			}, t.prototype.startWaterfallTimer = function(e) {
				this.startTimer("timePerTry", e)
			}, t.prototype.stopWaterfallTimer = function() {
				this.stopTimer("timePerTry")
			}, t.prototype.nextWaterfallTimer = function() {
				this.nextTiming("timePerTry")
			}, t.prototype.resetWaterfallTimerIdx = function() {
				this.resetTimingIdx("timePerTry")
			}, t.prototype.stopTimer = function(e) {
				this.timers[e] && (clearTimeout(this.timers[e]), this.timers[e] = void 0)
			}, t.prototype.startTimer = function(e, t) {
				var n = this;
				void 0 === t && (t = function() {}), this.getTiming(e) <= 0 ? t() : (this.timers[e] && clearTimeout(this.timers[e]), this.timers[e] = window.setTimeout((function() {
					n.stopTimer(e), t()
				}), this.getTiming(e)))
			}, t.prototype.getTiming = function(e) {
				var t = this.timings[e];
				return t instanceof Array ? t[this.timingIdx[e]] : t
			}, t.prototype.nextTiming = function(e) {
				if (void 0 === this.timingIdx[e]) throw new Error("AdTimings Error: ".concat(e, " does not have multiple timers"));
				this.timingIdx[e] = (this.timingIdx[e] + 1) % this.timings[e].length
			}, t.prototype.resetTimingIdx = function(e) {
				if (void 0 === this.timingIdx[e]) throw new Error("AdTimings Error: ".concat(e, " does not have multiple timers"));
				this.timingIdx[e] = 0
			}, t.prototype.prerollPossible = function() {
				return this.timings.preroll
			}, t
		}();
		const Xi = Wi,
			Zi = function() {
				var e = new URL(window.location.href);
				e.hash = "";
				var t = [];
				return e.searchParams.forEach((function(e, n) {
					return t.push(n)
				})), t.forEach((function(t) {
					e.searchParams.delete(t)
				})), e.toString()
			};
		var Ji = ["AU", "CA", "IE", "NZ", "US", "GB"],
			Yi = ["AT", "BE", "DK", "FI", "FR", "DE", "JA", "NO", "NL", "SA", "ES", "SE", "CH", "AE", "IT"],
			Ki = ["BR", "CL", "CZ", "HU", "PL", "PT", "RU", "SK", "TH"];

		function $i() {
			var e = E.country;
			return "US" === e ? 1.49 : Ji.includes(e) ? .49 : .15
		}
		var eo = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			to = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function no() {
			var e = "https://api.poki.com/ads/houseads/video/vast";
			E.kioskMode && (e += "?rand=".concat(Math.random()));
			var t = new URL(e);
			return t.searchParams.append("game_id", E.gameID), t.searchParams.append("site", "".concat(E.siteID)), t.href
		}
		var io = {
				v_k0treo: 2.5,
				v_qr1wxs: 7.5,
				v_9diccg: 19,
				v_13q0xkw: .25,
				v_dn33ls: 1,
				v_z07u2o: 1.5,
				v_1400iyo: 2.25,
				v_9w8kxs: 3,
				v_ufej9c: 3.5,
				v_10960ao: 4.25,
				v_1ksbym8: 4.75,
				v_1ag9340: 5.25,
				v_1tbhh4w: 5.75,
				v_jjcgzk: 6.5,
				v_brnu9s: 7,
				v_1wscef4: 7.75,
				v_q22xhc: 8.5,
				v_f8irk0: 9,
				v_1rik45c: 9.75,
				v_lxhyww: 10.5,
				v_a9z0u8: 11,
				v_1yhiww0: 11.75,
				v_10mwg74: 12.25,
				v_1ji4u80: 12.75,
				v_wm2c5c: 13.5,
				v_2na6tc: 14,
				v_1myzri8: 14.75,
				v_3pzm68: 6,
				v_16kerr4: 6.25,
				v_1mdrmkg: 6.75,
				v_1ga0k5c: 7.25,
				v_5iwz5s: 8,
				v_12tk934: 8.25,
				v_1hsybr4: 8.75,
				v_1cj61hc: 9.25,
				v_y3r5kw: 9.5,
				v_94ow0: 10,
				v_15woqgw: 10.25,
				v_1orx4hs: 10.75,
				v_1d4e6f4: 11.25,
				v_t57ev4: 11.5,
				v_783hmo: 12,
				v_m7hkao: 12.5,
				v_hmo9hc: 13,
				v_19djnr4: 13.25,
				v_1twpm2o: 13.75,
				v_17zlou8: 14.25,
				v_ign1mo: 14.5,
				v_ccvz7k: 15,
				v_1f7b4sg: 15.25,
				v_snq4g0: 15.5,
				v_5wnf28: 16,
				v_137aozk: 16.25,
				v_1j0njsw: 16.75,
				v_1b8yx34: 17.25,
				v_yhhlhc: 17.5,
				v_25swe8: 18,
				v_15081z4: 18.25,
				v_1pje0ao: 18.75,
				v_1eptudc: 19.25,
				v_1xl28e8: 19.75,
				v_gfliio: 21,
				v_3y3sao: 22,
				v_ixhuyo: 22.5,
				v_ro52io: 23.5,
				v_qa73ls: 24.5,
				v_emo5j4: 25,
				v_yq5fk: 26,
				v_aobxts: 27,
				v_6shmgw: 28,
				v_natgqo: 28.5,
				v_x0f94w: 29.5,
				v_d2hfr4: 31,
				v_dch14w: 33,
				v_1jyadc: 34,
				v_8p5tz4: 36,
				v_fwv9xc: 37,
				v_c60r9c: 39,
				v_58awow: 40,
				v_bbcow: 42,
				v_a0x534: 43,
				v_hdmdq8: 45,
				v_2e8b28: 46,
				v_5nljb4: 48,
				v_1wr0n4: 50,
				v_pam1og: .5,
				v_1ipf08w: .75,
				v_1axqdj4: 1.25,
				v_1qr38cg: 1.75,
				v_15ldds: 2,
				v_1q248w0: 2.75,
				v_1eelatc: 3.25,
				v_1x9tou8: 3.75,
				v_8iam0w: 4,
				v_nhooow: 4.5,
				v_fq01z4: 5,
				v_w0u77k: 5.5,
				v_1vi5a0w: 15.75,
				v_orvt34: 16.5,
				v_dybn5s: 17,
				v_1q8czr4: 17.75,
				v_l11af4: 18.5,
				v_uqn2tc: 19.5,
				v_7zkdfk: 20,
				v_o7a58g: 20.5,
				v_vezl6o: 21.5,
				v_b5t88w: 23,
				v_4x2d4w: 24,
				v_xhwjk0: 25.5,
				v_lhw3r4: 26.5,
				v_tjkbuo: 27.5,
				v_h72ebk: 29,
				v_31n3sw: 30,
				v_64rl6o: 32,
				v_9lmigw: 35,
				v_3fdjpc: 38,
				v_fapfcw: 41,
				v_7o0lc0: 44,
				v_clbdvk: 47,
				v_ee8qv4: 49
			},
			oo = {
				"11s3rwg": 2.49,
				"1uhxr0g": 2.87,
				qr1wxs: 7.5,
				"15xxon4": .01,
				o6no5c: .02,
				fb0nwg: .04,
				"1etkow0": .05,
				x2aoe8: .06,
				"1wkupds": .07,
				"11i46io": .09,
				jqu60w: .1,
				"1j9e70g": .11,
				"1adr6rk": .13,
				smh69s: .14,
				"1s5179c": .15,
				"8naeps": .16,
				qekf7k: .18,
				"1px4g74": .19,
				hixeyo: .2,
				za7fgg: .22,
				"1ysrgg0": .23,
				lyqx34: .26,
				"16hwveo": 1.13,
				"1fdjvnk": 1.17,
				"2jjcao": 1.2,
				"1jtdds0": 1.23,
				t6gd1c: 1.26,
				"65e29s": 1.28,
				"1nf83r4": 1.31,
				wsb30g: 1.34,
				jgukn4: 1.38,
				al7ke8: 1.4,
				"1a3rlds": 1.41,
				"8datc0": 1.44,
				"1pn4utc": 1.47,
				z07u2o: 1.5,
				"13g1c74": 1.53,
				ct4bgg: 1.56,
				ukeby8: 1.58,
				mspp8g: 1.62,
				"1dfmpz4": 1.65,
				lm6m8: 1.68,
				icw740: 1.7,
				"18zt7uo": 1.73,
				"79cfsw": 1.76,
				"1oj6ha8": 1.79,
				"1xethj4": 1.83,
				"12c2yo0": 1.85,
				bp5xxc: 1.88,
				"1syzzeo": 1.91,
				ncow00: 1.94,
				"1dzlwqo": 1.97,
				"15ldds": 2,
				"10o5edc": 2.009999,
				a18dmo: 2.04,
				"1rb2f40": 2.069999,
				pkln28: 2.1,
				"1g7insw": 2.13,
				"12w25fk": 2.17,
				c954ow: 2.2,
				"1brp5og": 2.21,
				"1400iyo": 2.25,
				v4dips: 2.3,
				hsx0cg: 2.34,
				"18fu134": 2.37,
				"167xa0w": 2.41,
				"1f3ka9s": 2.45,
				"1d5n4lc": 1.01,
				"1uwx534": 1.03,
				bml8g: 1.04,
				i2wlq8: 1.06,
				"979lhc": 1.08,
				"18ptmgw": 1.09,
				"1qh3myo": 1.11,
				"6zcuf4": 1.12,
				oqmuww: 1.14,
				fuzuo0: 1.16,
				xm9v5s: 1.18,
				"1x4tw5c": 1.19,
				"1223da8": 1.21,
				katcsg: 1.22,
				bf6cjk: 1.24,
				"1axqdj4": 1.25,
				"1sp0e0w": 1.27,
				"15ny39c": 1.29,
				nwo2rk: 1.3,
				f112io: 1.32,
				"1ejl3i8": 1.33,
				"1pkk5c": 1.36,
				"1184l4w": 1.37,
				"1izelmo": 1.39,
				schkw0: 1.42,
				"1rv1lvk": 1.43,
				"17vuubk": 1.45,
				q4ktts: 1.46,
				h8xtkw: 1.48,
				"1yirv28": 1.51,
				"3xhb7k": 1.52,
				lorbpc: 1.54,
				"1l7bcow": 1.55,
				"1cbocg0": 1.57,
				"1u2ycxs": 1.59,
				"51foqo": 1.6,
				"14jzpq8": 1.61,
				"1mb9q80": 1.63,
				dx2ozk: 1.64,
				vocphc: 1.66,
				"1v6wqgw": 1.67,
				"10467ls": 1.69,
				"1hvg83k": 1.71,
				"9h96v4": 1.72,
				r8j7cw: 1.74,
				"1qr38cg": 1.75,
				"16rwgsg": 1.77,
				p0mgao: 1.78,
				g4zg1s: 1.8,
				"1fnjh1c": 1.81,
				xw9gjk: 1.82,
				"2tixog": 1.84,
				kksy68: 1.86,
				"1k3cz5s": 1.87,
				"1b7pyww": 1.89,
				tgfyf4: 1.9,
				"5levi8": 1.92,
				"153ywhs": 1.93,
				"1mv8wzk": 1.95,
				eh1vr4: 1.96,
				w8bw8w: 1.98,
				iwvdvk: 2.02,
				"1iffev4": 2.029999,
				"19jsem8": 2.049999,
				rsie4g: 2.06,
				"7tbmkg": 2.08,
				"17bvnk0": 2.089999,
				"1p35o1s": 2.11,
				goymtc: 2.12,
				"1xysoao": 2.15,
				"3di4g0": 2.16,
				l4s4xs: 2.18,
				"1knc5xc": 2.19,
				u0f56o: 2.22,
				"1tiz668": 2.23,
				"4hghz4": 2.24,
				m8qigw: 2.26,
				dd3i80: 2.28,
				"1cvnj7k": 2.29,
				"1umxjpc": 2.31,
				"1mzuo": 2.32,
				zk70u8: 2.33,
				"1hbh1c0": 2.35,
				"8xa03k": 2.36,
				qok0lc: 2.38,
				"1q741kw": 2.39,
				"6pd91c": 2.4,
				ogn9j4: 2.42,
				"1wuuark": 2.47,
				k0treo: 2.5,
				"1jjdse8": 2.51,
				swgrnk: 2.54,
				"162xhc0": 2.57,
				fg0glc: 2.6,
				l11af4: 18.5,
				"9diccg": 19,
				"7zkdfk": 20,
				gfliio: 21,
				b5t88w: 23,
				"4x2d4w": 24,
				emo5j4: 25,
				aobxts: 27,
				"6shmgw": 28,
				"31n3sw": 30,
				"64rl6o": 32,
				dch14w: 33,
				"9lmigw": 35,
				"1yv9csg": 5.35,
				o42yo: 6.8,
				q22xhc: 8.5,
				d2hfr4: 31,
				"1np7p4w": .03,
				"1zk5j4": .08,
				av75s0: .12,
				"185ufpc": .17,
				"1h1hfy8": .21,
				"47gwlc": .24,
				d33wu8: .28,
				uudxc0: .3,
				"14tzb40": .33,
				e72adc: .36,
				"1vgwbuo": .39,
				"10e5szk": .41,
				"1i5fthc": .43,
				"1r12tq8": .47,
				pam1og: .5,
				gez1fk: .52,
				"1xot2ww": .55,
				kusjk0: .58,
				bz5jb4: .6,
				tqfjsw: .62,
				"5vegw0": .64,
				"1n58idc": .67,
				wibhmo: .7,
				"1fkyrk": .72,
				"1ipf08w": .75,
				s2hzi8: .78,
				pul8g0: .82,
				"1ghi96o": .85,
				"3nhpts": .88,
				lerqbk: .9,
				uaeqkg: .94,
				"14a04cg": .97,
				dn33ls: 1,
				ved43k: 1.02,
				zu6m80: 1.05,
				"1hlgmps": 1.07,
				qyjlz4: 1.1,
				"1lhay2o": .27,
				"1clnxts": .29,
				"1ucxybk": .31,
				"5bfa4g": .32,
				n2pam8: .34,
				"1ml9bls": .35,
				"1dpmbcw": .37,
				vycav4: .38,
				vls00: .4,
				imvshs: .42,
				"9r8s8w": .44,
				"199st8g": .45,
				"7jc16o": .48,
				"171w268": .49,
				"1ot62o0": .51,
				"1fxj2f4": .53,
				y691xc: .54,
				"33ij28": .56,
				"12m2k1s": .57,
				"1kdckjk": .59,
				"1t8zksg": .63,
				"15dyhvk": .65,
				nmohds: .66,
				er1h4w: .68,
				"1e9li4g": .69,
				"1w0vim8": .71,
				"10y4zr4": .73,
				j6uz9c: .74,
				ab7z0g: .76,
				"19ts000": .77,
				"1rl20hs": .79,
				"83b7y8": .8,
				"17lv8xs": .81,
				"1pd59fk": .83,
				gyy874: .84,
				yq88ow: .86,
				"1y8s9og": .87,
				"1361qtc": .89,
				"1kxbrb4": .91,
				"1c1or28": .93,
				"1tsyrk0": .95,
				"4rg3cw": .96,
				miq3uo: .98,
				"1m1a4u8": .99,
				"11x3klc": 5.05,
				"1nrplhc": 5.15,
				"1ag9340": 5.25,
				qh2bk0: 5.3,
				"14wh7gg": 5.45,
				w0u77k: 5.5,
				"7ltxj4": 5.6,
				kxafwg: 5.7,
				"1tbhh4w": 5.75,
				"110mw3k": 5.85,
				"1pfn5s0": 5.95,
				"3pzm68": 6,
				ml8074: 6.1,
				"1uzf1fk": 6.15,
				"16kerr4": 6.25,
				"1jvva4g": 6.35,
				"67vym8": 6.4,
				jjcgzk: 6.5,
				hbfpxc: 6.6,
				"13ij8jk": 6.65,
				"1mdrmkg": 6.75,
				p34cn4: 6.9,
				"1xhbdvk": 6.95,
				"1ihxb7k": 7.15,
				"1ga0k5c": 7.25,
				dflekg: 7.4,
				"1o1p6v4": 7.55,
				"2c1n9c": 7.6,
				"1wscef4": 7.75,
				zhp4hs: 7.9,
				"5iwz5s": 8,
				f8irk0: 9,
				y3r5kw: 9.5,
				lxhyww: 10.5,
				a9z0u8: 11,
				"783hmo": 12,
				m7hkao: 12.5,
				wm2c5c: 13.5,
				"2na6tc": 14,
				ign1mo: 14.5,
				snq4g0: 15.5,
				"5wnf28": 16,
				dybn5s: 17,
				yhhlhc: 17.5,
				testbid: 0,
				"1nz7aio": 2.43,
				xca9s0: 2.46,
				b56r5s: 2.52,
				obngu8: 2.58,
				"24jy80": 2.64,
				"1jedzpc": 2.67,
				"18au8e8": 2.73,
				hnx7nk: 2.76,
				"13v0q9s": 2.81,
				"10lkow": 2.96,
				"156gsu8": 7.05,
				"1tlh2io": 7.35,
				"1aq8ohs": 7.65,
				"1losn40": 7.95,
				"1sf0sn4": 2.55,
				"1eykhkw": 2.61,
				srgyyo: 2.7,
				"1yxr94w": 2.79,
				d83pj4: 2.84,
				n7p3b4: 2.9,
				"1dum41s": 2.93,
				"1iafm68": 2.99,
				"7vtiww": 7.2,
				b2outc: 7.8,
				"13q0xkw": .25,
				riisqo: .46,
				"1bhpkao": .61,
				cj4q2o: .92,
				"1o96vwg": 1.15,
				"1wav400": 1.35,
				"1grhukg": 1.49,
				"1vqvx8g": 1.99,
				yg8nb4: 2.14,
				"1lrajgg": 2.27,
				fl09a8: 2.44,
				"1h6h8n4": 2.77,
				"1m69xj4": 3.55,
				rdj01s: 4.3,
				"29jqww": 2.48,
				"1anqs5c": 2.53,
				"6kdgcg": 2.56,
				"1nu7hts": 2.59,
				"1wpui2o": 2.63,
				jvtyps: 2.66,
				"1sa0zy8": 2.71,
				"1q248w0": 2.75,
				"4cgpa8": 2.8,
				"1cqnqio": 2.85,
				"5gf2tc": 2.88,
				ec2328: 2.92,
				"1vlw4jk": 2.95,
				"9w8kxs": 3,
				"176vuv4": 3.05,
				"1kicd8g": 3.15,
				jbury8: 3.3,
				h3y0w0: 3.4,
				gmdxc: 3.6,
				ovmnls: 3.7,
				"15sxvy8": 3.85,
				"1j4eebk": 3.95,
				"1gwhn9c": 4.05,
				e22hog: 4.2,
				"1oo69z4": 4.35,
				nhooow: 4.5,
				"17gvg8w": 4.65,
				"1ksbym8": 4.75,
				hxwt1c: 4.9,
				t1gkcg: 5.1,
				"2221vk": 5.2,
				d5lt6o: 5.4,
				"1i7xpts": 5.55,
				"1g00yrk": 5.65,
				etjdhc: 5.8,
				s4zvuo: 5.9,
				"1c46neo": 6.05,
				"99rhts": 6.2,
				xorri8: 6.3,
				"1em2zuo": 6.45,
				"1rxji80": 6.55,
				umw8ao: 6.7,
				"192b474": 6.85,
				brnu9s: 7,
				x7ah34: 2.62,
				"11n3z7k": 2.65,
				b06ygw: 2.68,
				"1aiqzgg": 2.69,
				"8sa7eo": 2.72,
				qjk7wg: 2.74,
				zf785c: 2.78,
				m3qps0: 2.82,
				"1lmaqrk": 2.83,
				uzdq0w: 2.86,
				"14yz3sw": 2.89,
				"1mq94ao": 2.91,
				w3c3k0: 2.94,
				"10j5log": 2.97,
				irvl6o: 2.98,
				yb8um8: 3.1,
				"60e9kw": 3.2,
				"1eelatc": 3.25,
				"1rq1t6o": 3.35,
				"13b1ji8": 3.45,
				ufej9c: 3.5,
				"18utf5s": 3.65,
				"1x9tou8": 3.75,
				bk658g: 3.8,
				wxavpc: 3.9,
				"8iam0w": 4,
				ltr4e8: 4.099999,
				"1u7y5mo": 4.15,
				"10960ao": 4.25,
				"2yiqdc": 4.4,
				"1bcprls": 4.45,
				"1vvvpxc": 4.55,
				a686bk: 4.6,
				yl8g00: 4.7,
				"4mgao0": 4.8,
				"1d0nbwg": 4.85,
				"1qc3u9s": 4.95,
				fq01z4: 5,
				watslc: 7.1,
				l7a1a8: 7.3,
				zmox6o: 7.45,
				oe5d6o: 7.7,
				"18dc4qo": 7.85,
				"94ow0": 10,
				t57ev4: 11.5,
				hmo9hc: 13,
				ccvz7k: 15,
				orvt34: 16.5,
				"25swe8": 18,
				uqn2tc: 19.5,
				"3y3sao": 22,
				yq5fk: 26,
				h72ebk: 29,
				"1jyadc": 34,
				testBid: 50
			},
			ro = {
				hgfim8: "Amazon - DistrictM",
				qc2iv4: "Amazon - Magnite",
				"183cjcw": "Amazon - AppNexus",
				"8ksidc": "Amazon - OpenX",
				"1s2jaww": "Amazon - PubMatic",
				"1pumjuo": "Amazon - EMX",
				"12jknpc": "Amazon - Conversant UAM",
				"1kauo74": "Amazon - Amobee DSP",
				"15bglj4": "Amazon - PubMatic UAM APAC",
				"5swkjk": "Amazon - PubMatic UAM EU",
				"1d32f4": "Amazon - Simpli.fi",
				ksan7k: "Amazon - Index Exchange",
				urw0zk: "Amazon - Smaato",
				"1dn4f0g": "Amazon - AdGeneration",
				vvueio: "Amazon - DMX",
				"1veefi8": "Amazon - Yieldmo",
				"1i2xx4w": "Amazon - Yahoo Japan",
				rg0we8: "Amazon - UnrulyX_SSP_APS",
				y3r5kw: "Amazon - Verizon Media Group",
				"1xmb6kg": "Amazon - GumGum UAM",
				"1t6hog0": "Amazon - Acuity",
				"1n2qm0w": "Amazon - Sharethrough",
				j4d2ww: "Amazon - EMX UAM",
				"1imx3wg": "Amazon - LoopMe_UAM",
				z7pj40: "Amazon - Pulsepoint",
				p845c0: "Amazon - SmartRTB+"
			};

		function ao(e) {
			return ro[e] || "Amazon"
		}
		var so, co = [],
			lo = function(e) {
				var t;
				return co.includes(e) || co.includes("www.".concat(e)) || (null === (t = null == e ? void 0 : e.includes) || void 0 === t ? void 0 : t.call(e, "game"))
			};

		function uo() {
			var e;
			return so && (e = so.join(";")), so = void 0, e
		}
		const po = function() {
			return "undefined" != typeof navigator && /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent)
		};
		var Ao = {
				desktop: {
					"160x600": "pHhFwvUCUJQKwwA7iy4fAk2F",
					"300x250": "c3GnFrB8rylhgQwXfD5VTq8P",
					"320x50": "9DvtR4XBxhm8JoliuTxyVz3L",
					"728x90": "v6NMslR400yh8RzvRiRLpwvH",
					"970x250": "EWsiZSpdRTxOym1GzRvUmzNW",
					midroll: "4Hy6nGZMC66xUwMP5cl1hCTE",
					rewarded: "dNQuJjmJrj6ZdQMVxklBfduh"
				},
				tablet: {
					"320x50": "f8V9c0yVZENi5WNpSqvEgunY",
					midroll: "zFsaqtEiGSRs5zXx8U3N3IzK",
					rewarded: "3e3zEB2v1HZGMtSTr9bVm1op"
				},
				mobile: {
					"320x50": "jJuityvxj0Xu0AKku01W2eKX",
					midroll: "zFsaqtEiGSRs5zXx8U3N3IzK",
					rewarded: "qqlfsqZLNfx0YdnQoeTTx13y"
				}
			},
			ho = {
				desktop: {
					"160x600": "2969680-9",
					"300x250": "2969676-15",
					"320x50": "2969674-43",
					"728x90": "2969668-2",
					"970x250": "2969678-57",
					midroll: 2969664,
					rewarded: 2969666
				},
				tablet: {
					"320x50": "2969690-43",
					midroll: 3344110,
					rewarded: 2969688
				},
				mobile: {
					"320x50": "2969684-43",
					midroll: 3344110,
					rewarded: 2969682
				}
			},
			fo = {
				desktop: {
					"160x600": "5883917",
					"300x250": "5883918",
					"320x50": "5883919",
					"728x90": "5883920",
					"970x250": "5883921",
					midroll: "5883925",
					rewarded: "5883926"
				},
				tablet: {
					"320x50": "5883924",
					midroll: "5883927",
					rewarded: "5883929"
				},
				mobile: {
					"320x50": "5883923",
					midroll: "5883927",
					rewarded: "5883928"
				}
			},
			vo = {
				desktop: {
					"160x600": "1097600",
					"300x250": "1097601",
					"320x50": "1097602",
					"728x90": "1097603",
					"970x250": "1097604",
					midroll: "1097608",
					rewarded: "1097609"
				},
				tablet: {
					"320x50": "1097607",
					midroll: "1097611",
					rewarded: "1097612"
				},
				mobile: {
					"320x50": "1097606",
					midroll: "1097611",
					rewarded: "1097610"
				}
			},
			mo = {
				desktop: {
					"160x600": "EcE3bPtcQ7",
					"300x250": "z4419hyP3D",
					"320x50": "iO0r99GJyD",
					"728x90": "eNHLwil1Sz",
					"970x250": "VV8quyp9Uc",
					midroll: "r2YIBgLder",
					rewarded: "qphbf73F9j"
				},
				tablet: {
					"320x50": "USm2WyRzQM",
					midroll: "vzAXcywC8m",
					rewarded: "lLev33Pjr2"
				},
				mobile: {
					"320x50": "EZVAmOVfTC",
					midroll: "vzAXcywC8m",
					rewarded: "STZwixwqOK"
				}
			},
			go = {
				desktop: {
					"160x600": "32576856",
					"300x250": "32576857",
					"320x50": "32576858",
					"728x90": "32576859",
					"970x250": "32576860",
					midroll: "32576861",
					rewarded: "32576862"
				},
				tablet: {
					"320x50": "32576994",
					midroll: "32577001",
					rewarded: "32577002"
				},
				mobile: {
					"320x50": "32576993",
					midroll: "32577001",
					rewarded: "32577000"
				}
			},
			yo = {
				desktop: {
					"160x600": "desktop_ingame_160x600",
					"300x250": "desktop_ingame_300x250",
					"320x50": "desktop_ingame_320x50",
					"728x90": "desktop_ingame_728x90",
					"970x250": "desktop_ingame_970x250",
					midroll: "desktop_ingame_midroll_1",
					rewarded: "desktop_ingame_roll_1"
				},
				tablet: {
					"320x50": "tablet_ingame_320x50",
					midroll: "mobile_ingame_midroll_1",
					rewarded: "tablet_ingame_roll_1"
				},
				mobile: {
					"320x50": "mobile_ingame_320x50",
					midroll: "mobile_ingame_midroll_1",
					rewarded: "mobile_ingame_roll_1"
				}
			},
			wo = yo,
			bo = {
				desktop: {
					"160x600": "560728446",
					"300x250": "560728447",
					"320x50": "560728448",
					"728x90": "560728449",
					"970x250": "560728450",
					midroll: "560728512",
					rewarded: "560728513"
				},
				tablet: {
					"320x50": "560728453",
					midroll: "560728515",
					rewarded: "560728516"
				},
				mobile: {
					"320x50": "560728452",
					midroll: "560728515",
					rewarded: "560728514"
				}
			},
			ko = "lcpgaTLqkd6gRi8AVtVr0gLe",
			xo = "PIsUL8EJvXXA1thcFkCPWdhi",
			Io = "KQ3P2qVndkjlesGkzM5Rknma",
			Eo = "Ydwhf5DPoJBinldgPdkD9okm";
		var So, Co = function() {
				return Co = Object.assign || function(e) {
					for (var t, n = 1, i = arguments.length; n < i; n++)
						for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}, Co.apply(this, arguments)
			},
			_o = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var i, o = 0, r = t.length; o < r; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
				return e.concat(i || Array.prototype.slice.call(t))
			},
			To = ["IAB7-3", "IAB7-5", "IAB7-8", "IAB7-9", "IAB7-10", "IAB7-11", "IAB7-14", "IAB7-17", "IAB7-18", "IAB7-19", "IAB7-21", "IAB7-22", "IAB7-24", "IAB7-25", "IAB7-26", "IAB7-27", "IAB7-28", "IAB7-29", "IAB7-30", "IAB7-31", "IAB7-34", "IAB7-37", "IAB7-39", "IAB7-41", "IAB7-42", "IAB7-43", "IAB7-44", "IAB7-45", "IAB8-5", "IAB8-18", "IAB9-9", "IAB11-1", "IAB11-4", "IAB11-5", "IAB14-1", "IAB14-2", "IAB14-3", "IAB15-5", "IAB17-18", "IAB18-2", "IAB23", "IAB23-1", "IAB23-2", "IAB23-3", "IAB23-4", "IAB23-5", "IAB23-6", "IAB23-7", "IAB23-8", "IAB23-9", "IAB23-10", "IAB24", "IAB25", "IAB25-1", "IAB25-2", "IAB25-3", "IAB25-4", "IAB25-5", "IAB25-6", "IAB25-7", "IAB26", "IAB26-1", "IAB26-2", "IAB26-3", "IAB26-4"],
			Po = "rewarded",
			Bo = "video",
			Do = !1,
			Mo = {},
			Lo = !1,
			zo = function() {
				return Do
			},
			Ro = function() {
				return Lo
			},
			Oo = function(e, t) {
				if (void 0 === So && (So = function(e) {
					var t, n, i = E.country,
						o = null === (n = null === (t = null == e ? void 0 : e[i]) || void 0 === t ? void 0 : t.video) || void 0 === n ? void 0 : n.amazon;
					return !!o && Math.random() > o
				}(t)), !So && (Mo = e, window.apstag)) try {
					var n = function(e) {
						_.debug && console.log("Configure A9 with APS CCPA Privacy mode:", "".concat(E.ccpaApplies ? "on" : "off"), e);
						var t = Co(Co(Co({
							pubID: "e32f1423-28bc-43ed-8ab0-5ae6b4449cf8",
							adServer: "googletag",
							videoAdServer: "GAM"
						}, E.gdprApplies ? {
							gdpr: {
								cmpTimeout: 1e4
							}
						} : {}), E.ccpaApplies ? {
							params: {
								aps_privacy: e || "1--"
							}
						} : {}), {
							signals: Mo
						});
						window.apstag.init(t, (function() {
							Do = !0
						}))
					};
					E.ccpaApplies ? window.__uspapi("uspPing", 1, (function() {
						window.__uspapi("getUSPData", 1, (function(e, t) {
							var i;
							if (t) {
								var o = (null === (i = null == e ? void 0 : e.uspString) || void 0 === i ? void 0 : i.charAt(2)) || "N";
								"-" === o && (o = "N"), n("1Y".concat(o))
							} else n("1YN")
						}))
					})) : n("1--")
				} catch (e) {
					Do = !1, window.apstag = void 0
				}
			},
			jo = function(e, t) {
				var n = {
						"728x90": "/".concat(qi, "/")
							.concat(E.device, "_ingame_728x90/")
							.concat(E.siteID, "_")
							.concat(E.device, "_ingame_728x90"),
						"300x250": "/".concat(qi, "/")
							.concat(E.device, "_ingame_300x250/")
							.concat(E.siteID, "_")
							.concat(E.device, "_ingame_300x250"),
						"970x250": "/".concat(qi, "/")
							.concat(E.device, "_ingame_970x250/")
							.concat(E.siteID, "_")
							.concat(E.device, "_ingame_970x250"),
						"160x600": "/".concat(qi, "/")
							.concat(E.device, "_ingame_160x600/")
							.concat(E.siteID, "_")
							.concat(E.device, "_ingame_160x600"),
						"320x50": "/".concat(qi, "/")
							.concat(E.device, "_ingame_320x50/")
							.concat(E.siteID, "_")
							.concat(E.device, "_ingame_320x50"),
						"728x90_external": "/".concat(qi, "/external_")
							.concat(E.device, "_display_ingame/external_")
							.concat(E.device, "_ingame_728x90"),
						"300x250_external": "/".concat(qi, "/external_")
							.concat(E.device, "_display_ingame/external_")
							.concat(E.device, "_ingame_300x250"),
						"970x250_external": "/".concat(qi, "/external_")
							.concat(E.device, "_display_ingame/external_")
							.concat(E.device, "_ingame_970x250"),
						"160x600_external": "/".concat(qi, "/external_")
							.concat(E.device, "_display_ingame/external_")
							.concat(E.device, "_ingame_160x600"),
						"320x50_external": "/".concat(qi, "/external_")
							.concat(E.device, "_display_ingame/external_")
							.concat(E.device, "_ingame_320x50")
					},
					i = function(e) {
						var t = po() || g() || y() ? ["video/mp4", "application/javascript"] : ["video/mp4", "video/webm", "video/ogg", "application/javascript"],
							n = Co(Co({
								mimes: t,
								minduration: 1,
								protocols: [2, 3, 5, 6, 7, 8, 11, 12, 13, 14],
								w: 640,
								h: 480,
								placement: 1,
								linearity: 1,
								boxingallowed: 1,
								pos: 1,
								api: [2, 7, 8]
							}, e ? {
								maxduration: 30,
								maxextended: 10
							} : {
								maxduration: 15
							}), {
								playbackmethod: [3],
								skip: 0,
								startdelay: -1
							});
						return {
							bids: [{
								bidder: "appnexus",
								params: {
									placementId: e ? go[E.device].rewarded : go[E.device].midroll,
									supplyType: "web"
								}
							}, {
								bidder: "openx",
								params: {
									delDomain: "poki-d.openx.net",
									unit: e ? bo[E.device].rewarded : bo[E.device].midroll
								}
							}, {
								bidder: "ix",
								params: {
									siteId: e ? vo[E.device].rewarded : vo[E.device].midroll,
									video: {}
								}
							}, {
								bidder: "richaudience",
								params: {
									pid: e ? mo[E.device].rewarded : mo[E.device].midroll,
									supplyType: "site"
								}
							}, {
								bidder: "onetag",
								params: {
									pubId: "6da09f566a9dc06",
									ext: {
										placement_name: e ? yo[E.device].rewarded : yo[E.device].midroll
									}
								}
							}, {
								bidder: "rubicon",
								params: {
									accountId: 18608,
									siteId: 498726,
									zoneId: e ? ho[E.device].rewarded : ho[E.device].midroll,
									position: "atf",
									video: {
										size_id: 204
									},
									bcat: To
								}
							}, {
								bidder: "pubmatic",
								params: {
									publisherId: "156838",
									adSlot: e ? fo[E.device].rewarded : fo[E.device].midroll,
									bcat: To
								}
							}, {
								bidder: "sharethrough",
								params: {
									pkey: e ? Ao[E.device].rewarded : Ao[E.device].midroll,
									bcat: To
								}
							}],
							mediaTypes: {
								video: Co({
									context: "instream",
									playerSize: [640, 480],
									plcmt: 1
								}, n)
							}
						}
					},
					o = i(!0),
					r = i(!1),
					a = location.hostname.replace(".", "-"),
					s = [{
						code: Bo,
						mediaTypes: r.mediaTypes,
						bids: _o([], r.bids, !0)
					}, {
						code: Po,
						mediaTypes: o.mediaTypes,
						bids: _o([], o.bids, !0)
					}, {
						code: n["728x90"],
						mediaTypes: {
							banner: {
								sizes: [
									[728, 90]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: go[E.device]["728x90"]
							}
						}, {
							bidder: "openx",
							params: {
								delDomain: "poki-d.openx.net",
								unit: bo[E.device]["728x90"]
							}
						}, {
							bidder: "ix",
							params: {
								siteId: vo[E.device]["728x90"]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: fo[E.device]["728x90"],
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: 498726,
								zoneId: ho[E.device]["728x90"],
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06",
								ext: {
									placement_name: yo[E.device]["728x90"]
								}
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: mo[E.device]["728x90"],
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Ao[E.device]["728x90"],
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_728x90_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: "poki-com",
								placement: wo[E.device]["728x90"],
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["300x250"],
						mediaTypes: {
							banner: {
								sizes: [
									[300, 250]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: go[E.device]["300x250"]
							}
						}, {
							bidder: "openx",
							params: {
								delDomain: "poki-d.openx.net",
								unit: bo[E.device]["300x250"]
							}
						}, {
							bidder: "ix",
							params: {
								siteId: vo[E.device]["300x250"]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: fo[E.device]["300x250"],
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: 498726,
								zoneId: ho[E.device]["300x250"],
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06",
								ext: {
									placement_name: yo[E.device]["300x250"]
								}
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: mo[E.device]["300x250"],
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Ao[E.device]["300x250"],
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_300x250_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: "poki-com",
								placement: wo[E.device]["300x250"],
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["970x250"],
						mediaTypes: {
							banner: {
								sizes: [
									[970, 250]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: go[E.device]["970x250"]
							}
						}, {
							bidder: "openx",
							params: {
								delDomain: "poki-d.openx.net",
								unit: bo[E.device]["970x250"]
							}
						}, {
							bidder: "ix",
							params: {
								siteId: vo[E.device]["970x250"]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: fo[E.device]["970x250"],
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: 498726,
								zoneId: ho[E.device]["970x250"]
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06",
								ext: {
									placement_name: yo[E.device]["970x250"]
								}
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: mo[E.device]["970x250"],
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Ao[E.device]["970x250"],
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_970x250_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: "poki-com",
								placement: wo[E.device]["970x250"],
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["160x600"],
						mediaTypes: {
							banner: {
								sizes: [
									[160, 600]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: go[E.device]["160x600"]
							}
						}, {
							bidder: "openx",
							params: {
								delDomain: "poki-d.openx.net",
								unit: bo[E.device]["160x600"]
							}
						}, {
							bidder: "ix",
							params: {
								siteId: vo[E.device]["160x600"]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: fo[E.device]["160x600"],
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: 498726,
								zoneId: ho[E.device]["160x600"],
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06",
								ext: {
									placement_name: yo[E.device]["160x600"]
								}
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: mo[E.device]["160x600"],
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Ao[E.device]["160x600"],
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_160x600_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: "poki-com",
								placement: wo[E.device]["160x600"],
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["320x50"],
						mediaTypes: {
							banner: {
								sizes: [
									[320, 50]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: go[E.device]["320x50"]
							}
						}, {
							bidder: "openx",
							params: {
								delDomain: "poki-d.openx.net",
								unit: bo[E.device]["320x50"]
							}
						}, {
							bidder: "ix",
							params: {
								siteId: vo[E.device]["320x50"]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: fo[E.device]["320x50"],
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: 498726,
								zoneId: ho[E.device]["320x50"],
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06",
								ext: {
									placement_name: yo[E.device]["320x50"]
								}
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: mo[E.device]["320x50"],
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Ao[E.device]["320x50"],
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_320x50_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: "poki-com",
								placement: wo[E.device]["320x50"],
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["728x90_external"],
						mediaTypes: {
							banner: {
								sizes: [
									[728, 90]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: "20973406"
							}
						}, {
							bidder: "openx",
							params: {
								unit: "543885656",
								delDomain: "poki-d.openx.net"
							}
						}, {
							bidder: "ix",
							params: {
								siteId: "268177",
								placementId: "625562",
								size: [728, 90]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: "3457872",
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: "362566",
								zoneId: "1962680-2",
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06"
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: "MP_gIE1VDieUi",
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Eo,
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_728x90_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: a,
								placement: "external_".concat(E.device, "_display_ingame"),
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["300x250_external"],
						mediaTypes: {
							banner: {
								sizes: [
									[300, 250]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: "20973408"
							}
						}, {
							bidder: "openx",
							params: {
								unit: "543885657",
								delDomain: "poki-d.openx.net"
							}
						}, {
							bidder: "ix",
							params: {
								siteId: "625564",
								size: [300, 250]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: "3457874",
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: "362566",
								zoneId: "1962680-15",
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06"
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: "MP_gIE1VDieUi",
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Io,
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_300x250_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: a,
								placement: "external_".concat(E.device, "_display_ingame"),
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["970x250_external"],
						mediaTypes: {
							banner: {
								sizes: [
									[970, 250]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: "20973415"
							}
						}, {
							bidder: "openx",
							params: {
								unit: "543885650",
								delDomain: "poki-d.openx.net"
							}
						}, {
							bidder: "ix",
							params: {
								siteId: "625560",
								size: [970, 250]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: "3457879",
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: "362566",
								zoneId: "1962680-57",
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06"
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: "MP_gIE1VDieUi",
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: xo,
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_970x250_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: a,
								placement: "external_".concat(E.device, "_display_ingame"),
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["160x600_external"],
						mediaTypes: {
							banner: {
								sizes: [
									[160, 600]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: "20973407"
							}
						}, {
							bidder: "openx",
							params: {
								unit: "543885653",
								delDomain: "poki-d.openx.net"
							}
						}, {
							bidder: "ix",
							params: {
								siteId: "625563",
								size: [160, 600]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: "3457877",
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: "362566",
								zoneId: "1962680-9",
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06"
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: "MP_gIE1VDieUi",
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: ko,
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_160x600_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: a,
								placement: "external_".concat(E.device, "_display_ingame"),
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}, {
						code: n["320x50_external"],
						mediaTypes: {
							banner: {
								sizes: [
									[320, 50]
								]
							}
						},
						bids: [{
							bidder: "appnexus",
							params: {
								placementId: "20973413"
							}
						}, {
							bidder: "openx",
							params: {
								unit: "543885649",
								delDomain: "poki-d.openx.net"
							}
						}, {
							bidder: "ix",
							params: {
								siteId: "625559",
								size: [320, 50]
							}
						}, {
							bidder: "pubmatic",
							params: {
								publisherId: "156838",
								adSlot: "3457875",
								bcat: To
							}
						}, {
							bidder: "rubicon",
							params: {
								accountId: 18608,
								siteId: "362566",
								zoneId: "1962680-43",
								bcat: To
							}
						}, {
							bidder: "onetag",
							params: {
								pubId: "6da09f566a9dc06"
							}
						}, {
							bidder: "richaudience",
							params: {
								pid: "MP_gIE1VDieUi",
								supplyType: "site"
							}
						}, {
							bidder: "sharethrough",
							params: {
								pkey: Io,
								bcat: To
							}
						}, {
							bidder: "triplelift",
							params: {
								inventoryCode: "Poki_320x50_Prebid"
							}
						}, {
							bidder: "adagio",
							params: {
								organizationId: "1155",
								site: a,
								placement: "external_".concat(E.device, "_display_ingame"),
								environment: E.device,
								useAdUnitCodeAsAdUnitElementId: !0,
								pagetype: "game",
								category: "games"
							}
						}]
					}],
					d = Co(Co({
						debug: !1,
						enableSendAllBids: !0,
						usePrebidCache: !0,
						bidderTimeout: 1500,
						enableTIDs: !0,
						eventHistoryTTL: 90,
						priceGranularity: {
							buckets: [{
								precision: 2,
								min: .01,
								max: 3,
								increment: .01
							}, {
								precision: 2,
								min: 3,
								max: 8,
								increment: .05
							}, {
								precision: 2,
								min: 8,
								max: 20,
								increment: .5
							}, {
								precision: 2,
								min: 20,
								max: 45,
								increment: 1
							}]
						},
						currency: {
							adServerCurrency: "EUR",
							defaultRates: {
								EUR: {
									EUR: 1,
									GBP: .84,
									USD: 1.02
								},
								GBP: {
									EUR: 1.2,
									GBP: 1,
									USD: 1.22
								},
								USD: {
									EUR: .98,
									GBP: .82,
									USD: 1
								}
							}
						},
						cache: {
							url: "https://prebid.adnxs.com/pbc/v1/cache"
						},
						targetingControls: {
							allowTargetingKeys: ["BIDDER", "AD_ID", "PRICE_BUCKET", "SIZE", "DEAL", "SOURCE", "FORMAT", "UUID", "CACHE_ID", "CACHE_HOST", "ADOMAIN"],
							allowSendAllBidsTargetingKeys: ["BIDDER", "AD_ID", "PRICE_BUCKET", "SIZE", "DEAL", "SOURCE", "FORMAT", "UUID", "CACHE_ID", "CACHE_HOST", "ADOMAIN"]
						},
						ortb2: {
							site: {
								name: "Poki",
								page: Zi()
							},
							device: Co({}, window.innerWidth && window.innerHeight ? {
								w: window.innerWidth,
								h: window.innerHeight
							} : {}),
							bcat: To
						},
						pageUrl: Zi(),
						userSync: {
							filterSettings: {
								all: {
									bidders: "*",
									filter: "include"
								}
							},
							syncsPerBidder: 1e3,
							syncDelay: 100,
							userIds: [{
								name: "pubCommonId",
								storage: {
									type: "cookie",
									name: "poki_pubcid",
									expires: 180
								}
							}]
						}
					}, E.gdprApplies ? {
						consentManagement: {
							gdpr: {
								cmpApi: "iab",
								timeout: 8e3,
								defaultGdprScope: !0
							}
						}
					} : {}), E.ccpaApplies ? {
						consentManagement: {
							usp: {
								cmpApi: "iab",
								timeout: 8e3
							}
						}
					} : {});
				window.pbjs.que.push((function() {
					var n;
					Lo = !0;
					var i, o = Co(Co({
						floors: {
							data: {
								currency: "EUR",
								schema: {
									fields: ["mediaType"]
								},
								values: {
									banner: (i = E.country, Ji.includes(i) ? .13 : Yi.includes(i) ? .07 : Ki.includes(i) ? .04 : .03),
									video: $i()
								}
							}
						}
					}, d), e.config);
					0 === (null === (n = Object.keys(o.floors)) || void 0 === n ? void 0 : n.length) && (console.log("disabled floor module"), null == o || delete o.floors), window.pbjs.addAdUnits(function(e, t) {
						var n, i, o = E.country,
							r = null == t ? void 0 : t[o];
						if (!r) return e;
						for (var a = 0; a <= e.length; a++)
							for (var s = e[a], d = r[(null === (n = null == s ? void 0 : s.mediaTypes) || void 0 === n ? void 0 : n.video) ? "video" : "display"] || {}, c = (null === (i = null == s ? void 0 : s.bids) || void 0 === i ? void 0 : i.length) - 1; c >= 0; c--) {
								var l = s.bids[c],
									u = Math.random();
								d[l.bidder] && u > d[l.bidder] && e[a].bids.splice(c, 1)
							}
						return e
					}(e.adUnits || s, t)), window.pbjs.setConfig(o);
					var r = function(e) {
						var t = function(e) {
							return function(t, n) {
								var i, o, r, a = null === (o = null === (i = null == n ? void 0 : n.meta) || void 0 === i ? void 0 : i.advertiserDomains) || void 0 === o ? void 0 : o.find(lo);
								return !a && "richaudience" === n.bidderCode && lo(null == n ? void 0 : n.meta) && (a = n.meta), a ? (so || (so = []), so.push("".concat(e, ":")
									.concat(a, ":")
									.concat(t.toFixed(4), ":")
									.concat((null === (r = null == n ? void 0 : n.meta) || void 0 === r ? void 0 : r.primaryCatId) || "-")), console.warn("Blocked ad: ", n), 0) : t
							}
						}(e);
						return function(n, i, o) {
							var r;
							if (void 0 !== (null === (r = null == o ? void 0 : o.mediaTypes) || void 0 === r ? void 0 : r.banner)) {
								["ix", "richaudience", "pubmatic", "sharethrough"].includes(e) && (n *= .95)
							}
							return E.forceBidder === e && (n = 45), t(n, i)
						}
					};
					window.pbjs.bidderSettings = {
						standard: {
							storageAllowed: !0
						},
						appnexus: {
							bidCpmAdjustment: r("appnexus")
						},
						openx: {
							bidCpmAdjustment: r("openx")
						},
						ix: {
							bidCpmAdjustment: r("ix")
						},
						richaudience: {
							bidCpmAdjustment: r("richaudience")
						},
						onetag: {
							bidCpmAdjustment: r("onetag")
						},
						rubicon: {
							bidCpmAdjustment: r("rubicon")
						},
						pubmatic: {
							bidCpmAdjustment: r("pubmatic")
						},
						sharethrough: {
							bidCpmAdjustment: r("sharethrough")
						},
						triplelift: {
							bidCpmAdjustment: r("triplelift")
						},
						adagio: {
							bidCpmAdjustment: r("adagio")
						}
					}
				}))
			};

		function No(t, n, i, o, r, a) {
			var s, d = r ? "nope" : n,
				c = Zi(),
				l = o ? Po : Bo,
				u = 0,
				p = function() {
					var o, p, A, h;
					if (!(--u > 0)) try {
						var f = d,
							v = void 0;
						if (Ro()) {
							M.dispatchEvent(e.ads.prebidRequested, {
								blocked: uo()
							});
							var g = window.pbjs.adUnits.filter((function(e) {
								return e.code === l
							}))[0];
							if ("undefined" === g) return console.error("Video-ad-unit not found, did you give it the adunit.code='video' value?"), void t.requestAd(d);
							f = null === (p = null === (o = window.pbjs.adServers.dfp.buildVideoUrl({
								adUnit: g,
								params: {
									iu: m("iu", n),
									sz: "640x360|640x480",
									output: "vast",
									cust_params: i,
									description_url: c,
									url: c,
									nofb: 1,
									max_ad_duration: 15e3
								}
							})) || void 0 === o ? void 0 : o.replace("&max_ad_duration=15000", "")) || void 0 === p ? void 0 : p.replace("&min_ad_duration=1000", "");
							var y = window.pbjs.getHighestCpmBids(l);
							if (y.length > 0 && (v = y[0]), v) {
								var w = null === (h = null === (A = v.meta) || void 0 === A ? void 0 : A.advertiserDomains) || void 0 === h ? void 0 : h.join(",");
								"richaudience" === v.bidderCode && (w = v.meta), M.addVideoDataAnnotations({
									adDomain: w,
									HBAdDomain: w,
									HBBidder: v.bidderCode,
									HBAdId: v.adId,
									HBCreativeId: v.creativeId
								}), Math.random() < .01 && M.addVideoDataAnnotations({
									HBVastXML: JSON.stringify(v.vastXml),
									HBVastUrl: v.vastUrl
								}), window.pbjs.markWinningBidAsUsed({
									adId: v.adId
								})
							}
						}
						if (s) {
							s.startsWith("%26") && (s = s.substring(3)), f = f.replace("cust_params=", "cust_params=".concat(s, "%26"));
							var b = decodeURIComponent(s),
								k = m("amznp", b);
							M.addVideoDataAnnotations({
								APSBidder: ao(k)
							})
						}
						if (r) {
							if (s) {
								var x = function(e) {
									var t = decodeURIComponent(e),
										n = m("amznbid", t);
									if (!n) return null;
									var i = io[n];
									if (!i) return null;
									var o = m("amzniid", t);
									return {
										bid: i,
										vast: "https://aax.amazon-adsystem.com/e/dtb/vast?b=".concat(o, "&rnd=")
											.concat(Math.round(1e10 * Math.random()), "&pp=")
											.concat(n)
									}
								}(s);
								x && (!v || !v.videoCacheKey || v.cpm < x.bid) && (v = {
									cpm: x.bid,
									vast: x.vast,
									bidder: "amazon",
									videoCacheKey: "amazon"
								})
							}
							if (1 === a || v && v.videoCacheKey && !(v.cpm < $i()) || (v = {
								cpm: $i(),
								vast: no(),
								bidder: "poki",
								videoCacheKey: "poki"
							}), !v || !v.videoCacheKey) return void M.dispatchEvent(1 === a ? e.ads.video.error : e.ads.completed, {
								rewardAllowed: !1
							});
							switch (v.bidder) {
								case "onetag":
									f = "https://onetag-sys.com/invocation/?key=".concat(v.videoCacheKey);
									break;
								case "rubicon":
									f = "https://prebid-server.rubiconproject.com/cache?uuid=".concat(v.videoCacheKey);
									break;
								case "spotx":
									f = "https://search.spotxchange.com/ad/vast.html?key=".concat(v.videoCacheKey);
									break;
								case "amazon":
								case "poki":
									f = v.vast;
									break;
								default:
									f = "https://prebid.adnxs.com/pbc/v1/cache?uuid=".concat(v.videoCacheKey)
							}
							z({
								event: "video-ready",
								bidder: null == v ? void 0 : v.bidder,
								bid: null == v ? void 0 : v.cpm
							}), M.addVideoDataAnnotations({
								p4d_game_id: E.gameID,
								p4d_version_id: E.versionID,
								bidder: null == v ? void 0 : v.bidder,
								bid: null == v ? void 0 : v.cpm
							})
						}
						M.addVideoDataAnnotations({
							pokiAdServer: r,
							adTagUrl: f
						}), v ? M.addVideoDataAnnotations({
							prebidBidder: null == v ? void 0 : v.bidder,
							prebidBid: null == v ? void 0 : v.cpm
						}) : M.addVideoDataAnnotations({
							prebidBidder: void 0,
							prebidBid: void 0
						}), t.requestAd(f)
					} catch (e) {
						t.requestAd(d)
					}
				};
			if (zo() && u++, Ro() && u++, zo()) try {
				window.apstag.fetchBids({
					slots: [{
						slotID: o ? "Rewarded" : "Midroll",
						mediaType: "video"
					}],
					timeout: 1500
				}, (function(e) {
					e.length > 0 && (s = e[0].encodedQsParams), p()
				}))
			} catch (e) {
				p()
			}
			r && z({
				event: "video-request"
			}), Ro() && window.pbjs.que.push((function() {
				window.pbjs.requestBids({
					adUnitCodes: [l],
					bidsBackHandler: function() {
						p()
					}
				})
			})), zo() || Ro() || p()
		}

		function Go() {
			return !("yes" !== m("poki-ad-server")) && (console.log("DEBUG: Only running Poki-ad-server"), !0)
		}
		var Uo, Vo = !1,
			Ho = E.testVideos,
			Fo = E.device,
			qo = function() {
				return Ho ? "/6062/sanghan_rweb_ad_unit" : "/".concat(qi, "/")
					.concat(Fo, "_ingame_rewarded_google/")
					.concat(E.siteID, "_")
					.concat(Fo, "_ingame_rewarded_google")
			},
			Qo = function(t) {
				"desktop" === Fo || (null === document || void 0 === document ? void 0 : document.fullscreenElement) ? M.dispatchEvent(e.ads.video.startHouseAdFlow) : window.googletag.cmd.push((function() {
					Pi.track(e.tracking.ads.rewardedWeb.request),
						function(e) {
							googletag.defineOutOfPageSlot && (Uo && googletag.destroySlots([Uo]), Uo = googletag.defineOutOfPageSlot(qo(), googletag.enums.OutOfPageFormat.REWARDED)
								.addService(googletag.pubads()), googletag.enableServices(), Object.keys(e)
								.forEach((function(t) {
									var n, i = e[t];
									"" !== i && (null === (n = null == Uo ? void 0 : Uo.setTargeting) || void 0 === n || n.call(Uo, t, i))
								})))
						}(t), Uo ? window.googletag.cmd.push((function() {
							window.googletag.display(Uo)
						})) : M.dispatchEvent(e.ads.video.startHouseAdFlow)
				}))
			},
			Wo = function() {
				function t(t, n) {
					void 0 === n && (n = {});
					var i = this;
					this.retries = 0, this.running = !1, this.ima = t, this.country = E.country || "ZZ", this.usePokiAdserver = Go(), this.totalRetries = n.totalRetries || Qi.waterfallRetries || 1, this.timing = n.timing || new Xi(Qi.adTiming), M.addEventListener(e.ads.video.error, this.moveThroughWaterfall.bind(this)), M.addEventListener(e.ads.video.loaderError, this.moveThroughWaterfall.bind(this)), M.addEventListener(e.ads.ready, this.timing.stopWaterfallTimer.bind(this.timing)), M.addEventListener(e.ads.started, this.stopWaterfall.bind(this)), M.addEventListener(e.ads.video.startHouseAdFlow, (function() {
						i.startHouseAdFlow()
					}))
				}
				return t.prototype.moveThroughWaterfall = function() {
					if (this.runningBackfill) return this.runningBackfill = !1, void M.dispatchEvent(e.ads.error, {
						message: "Backfilling failed",
						rewardAllowed: !1
					});
					if (!1 !== this.running) {
						var t = this.totalRetries;
						if (this.timing.stopWaterfallTimer(), this.retries < t) return this.timing.nextWaterfallTimer(), void this.requestAd();
						this.running = !1, this.timing.resetWaterfallTimerIdx(), this.rewarded ? Qo(this.criteria) : M.dispatchEvent(e.ads.error, {
							message: "No ads"
						})
					}
				}, t.prototype.cutOffWaterfall = function() {
					this.ima.tearDown(), this.moveThroughWaterfall()
				}, t.prototype.startHouseAdFlow = function() {
					var e = no();
					M.addVideoDataAnnotations({
						pokiAdServer: !0,
						adTagUrl: e,
						bidder: "poki",
						bid: 0
					}), z({
						event: "video-request"
					}), this.ima.requestAd(e), this.runningBackfill = !0
				}, t.prototype.start = function(t, n) {
					void 0 === t && (t = {}), this.running = !0, this.retries = 0, this.criteria = t, this.timing.resetWaterfallTimerIdx(), this.rewarded = n === e.ads.position.rewarded, this.adUnitPaths = function(t) {
						var n = E.device,
							i = "midroll";
						if (m("noFill") || _.debug) return ["junk", "junk"];
						t === e.ads.position.rewarded && (i = "rewarded");
						var o = "/".concat(qi, "/");
						return E.isPokiIframe || E.isPlayground ? ["".concat(o)
							.concat(n, "_ingame_")
							.concat(i, "_1/")
							.concat(E.siteID, "_")
							.concat(n, "_ingame_")
							.concat(i, "_1"), "".concat(o)
							.concat(n, "_ingame_")
							.concat(i, "_2/")
							.concat(E.siteID, "_")
							.concat(n, "_ingame_")
							.concat(i, "_2")
						] : ["".concat(o, "external_")
							.concat(n, "_video_1/external_")
							.concat(n, "_ingame_")
							.concat(i, "_1"), "".concat(o, "external_")
							.concat(n, "_video_2/external_")
							.concat(n, "_ingame_")
							.concat(i, "_2")
						]
					}(n), this.requestAd()
				}, t.prototype.requestAd = function() {
					this.timing.startWaterfallTimer(this.cutOffWaterfall.bind(this)), this.retries++, this.criteria.waterfall = this.retries, this.runningBackfill = !1;
					var t = (this.retries - 1) % this.adUnitPaths.length,
						n = this.adUnitPaths[t],
						i = "https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=".concat(n, "&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast4");
					E.familyFriendly && (i += "&tfcd=1&tfua=1&rdp=1&npa=1"), E.nonPersonalized && (i += "&npa=1"), i += "&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1";
					var o = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 970;
					this.criteria.billboards_fit = o ? "yes" : "no";
					var r, a, s = function(e) {
						var t = encodeURIComponent(Zi());
						return (e = (e = e.split("{url}")
									.join(t))
								.split("{descriptionUrl}")
								.join(t))
							.split("{timestamp}")
							.join((new Date)
								.getTime()
								.toString())
					}(i) + (r = this.criteria, a = "", Object.keys(r)
						.forEach((function(e) {
							if (Object.prototype.hasOwnProperty.call(r, e)) {
								var t = r[e];
								Array.isArray(t) && (t = t.join()), a += "".concat(e, "=")
									.concat(t, "&")
							}
						})), a = encodeURIComponent(a), "&cust_params=".concat(a));
					M.addVideoDataAnnotations({
						adUnitPath: n,
						adTagUrl: s,
						waterfall: this.retries,
						size: "640x360v",
						ab: this.criteria.ab
					}), M.dispatchEvent(e.ads.requested), _.debug || E.houseAdsOnly ? (console.debug("adRequest started in house-ad mode (".concat(this.retries, "/")
						.concat(this.totalRetries, ")")), this.startHouseAdFlow()) : this.usePokiAdserver ? (console.debug("adRequest started with Prebid Video enabled (".concat(this.retries, "/")
						.concat(this.totalRetries, ")")), No(this.ima, s, this.criteria, this.rewarded, !0, this.retries)) : 1 === this.retries ? (console.debug("adRequest started with Prebid Video enabled (".concat(this.retries, "/")
						.concat(this.totalRetries, ")")), No(this.ima, s, this.criteria, this.rewarded, !1, this.retries)) : (console.debug("adRequest started in plain mode (".concat(this.retries, "/")
						.concat(this.totalRetries, ")")), this.ima.requestAd(s))
				}, t.prototype.isRunning = function() {
					return this.running
				}, t.prototype.stopWaterfall = function() {
					this.running = !1, this.timing.stopWaterfallTimer(), this.timing.resetWaterfallTimerIdx()
				}, t
			}();
		const Xo = Wo;
		var Zo = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var i, o = 0, r = t.length; o < r; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
				return e.concat(i || Array.prototype.slice.call(t))
			},
			Jo = function() {
				function t(t) {
					var n = this;
					this.storedQueue = [], this.progressCallback = t, this.reset(), M.addEventListener(e.ads.video.progress, (function(e) {
						var t = 100 - n.currentProgress,
							i = e.currentTime / e.duration * t;
						i < t && n.progressCallback(n.currentProgress + i)
					})), this.initializeNoProgressFix()
				}
				return t.prototype.queueFakeProgress = function(e, t, n) {
					var i = this;
					this.storedQueue.push({
						progressToFake: e,
						duration: t,
						stopEvent: n
					}), M.addEventListener(n, (function() {
						i.eventWatcher[n] = !0, i.currentProgress = i.startProgress + e, i.startProgress = i.currentProgress, i.progressCallback(i.currentProgress), i.activeQueue.shift(), i.activeQueue.length > 0 ? i.continue() : i.pause()
					}))
				}, t.prototype.fakeProgress = function(e, t, n) {
					this.activeQueue.push({
						progressToFake: e,
						duration: t,
						stopEvent: n
					}), this.fakeProgressEvents = !0, this.continue()
				}, t.prototype.start = function() {
					this.activeQueue.length > 0 || (this.activeQueue = Zo([], this.storedQueue, !0), this.active = !0, this.continue())
				}, t.prototype.continue = function() {
					if (this.activeQueue.length > 0 && !this.tickInterval) {
						this.startTime = Date.now();
						this.tickInterval = window.setInterval(this.tick.bind(this), 50), this.active = !0
					}
				}, t.prototype.pause = function() {
					this.clearInterval()
				}, t.prototype.tick = function() {
					var t = this.activeQueue[0],
						n = Date.now() - this.startTime,
						i = Math.min(n / t.duration, 1);
					this.currentProgress = this.startProgress + t.progressToFake * i, this.fakeProgressEvents && M.dispatchEvent(e.ads.video.progress, {
						duration: t.duration / 1e3,
						currentTime: n / 1e3
					}), this.progressCallback(this.currentProgress), (this.eventWatcher[t.stopEvent] || 1 === i) && this.pause()
				}, t.prototype.clearInterval = function() {
					this.tickInterval && (clearInterval(this.tickInterval), this.tickInterval = 0)
				}, t.prototype.initializeNoProgressFix = function() {
					var t = this;
					M.addEventListener(e.ads.started, (function(n) {
						t.progressWatcherTimeout = window.setTimeout((function() {
							if (t.active) {
								var i = 100 - t.currentProgress,
									o = 1e3 * n.duration - 1e3;
								t.fakeProgress(i, o, e.ads.completed)
							}
						}), 1e3)
					})), M.addEventListener(e.ads.video.progress, (function() {
						t.progressWatcherTimeout && (clearTimeout(t.progressWatcherTimeout), t.progressWatcherTimeout = 0)
					}))
				}, t.prototype.reset = function() {
					this.eventWatcher = {}, this.startProgress = 0, this.startTime = 0, this.currentProgress = 0, this.activeQueue = [], this.active = !1, this.fakeProgressEvents = !1, this.clearInterval()
				}, t.prototype.fakeItTillTheEnd = function(t) {
					var n = 100 - this.currentProgress;
					this.fakeProgress(n, 1e3 * t, e.ads.completed)
				}, t
			}();
		const Yo = Jo;
		var Ko, $o = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			er = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function tr() {
			return $o(this, void 0, void 0, (function() {
				var e;
				return er(this, (function(t) {
					switch (t.label) {
						case 0:
							Ko || ((Ko = document.createElement("video"))
								.setAttribute("playsinline", "playsinline"), (e = document.createElement("source"))
								.src = "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw", Ko.appendChild(e)), t.label = 1;
						case 1:
							return t.trys.push([1, 3, , 4]), [4, Ko.play()];
						case 2:
							return t.sent(), [2, !0];
						case 3:
							return t.sent(), [2, !1];
						case 4:
							return [2]
					}
				}))
			}))
		}
		var nr = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			ir = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function or(e) {
			e.classList.add(Ct), e.classList.remove(Ot)
		}

		function rr(e) {
			e.classList.add(Ot), e.classList.remove(Ct)
		}
		var ar = function() {
			function t(t) {
				var n = this;
				if (this.progressFaker = new Yo((function(e) {
					return n.updateProgressBar(e)
				})), this.progressFaker.queueFakeProgress(20, 2e3, e.ads.started), this.createElements(t.wrapper), "undefined" != typeof window && document) {
					var i = document.createElement("style");
					i.innerHTML = Gt, document.head.appendChild(i)
				}
			}
			return t.prototype.updateProgressBar = function(e) {
				this.progressBar.style.width = "".concat(e, "%")
			}, t.prototype.setupEvents = function(e) {
				this.monetization = e
			}, t.prototype.hide = function() {
				var e;
				null === (e = this.destroyHouseAds) || void 0 === e || e.call(this), or(this.containerDiv), or(this.progressContainer), this.hidePauseButton(), or(this.startAdButton), this.containerDiv.classList.remove(St), this.progressBar.style.width = "0%", this.progressFaker.reset()
			}, t.prototype.hideSpinner = function() {
				or(this.spinnerContainer)
			}, t.prototype.show = function() {
				this.containerDiv.classList.add(St), rr(this.containerDiv), rr(this.spinnerContainer), rr(this.progressContainer), this.progressFaker.start()
			}, t.prototype.getVideoBounds = function() {
				return this.adContainer.getBoundingClientRect()
			}, t.prototype.getAdContainer = function() {
				return this.adContainer
			}, t.prototype.getVideoContainer = function() {
				return this.videoContainer
			}, t.prototype.showPauseButton = function() {
				rr(this.pauseButtonContainer), this.monetization && this.pauseButtonContainer.addEventListener("click", this.monetization.resumeAd.bind(this.monetization))
			}, t.prototype.hidePauseButton = function() {
				or(this.pauseButtonContainer), this.monetization && this.pauseButtonContainer.removeEventListener("click", this.monetization.resumeAd.bind(this.monetization))
			}, t.prototype.showStartAdButton = function() {
				rr(this.startAdButton), this.monetization && this.startAdButton.addEventListener("click", this.monetization.startAdClicked.bind(this.monetization))
			}, t.prototype.hideStartAdButton = function() {
				or(this.startAdButton), this.monetization && this.startAdButton.removeEventListener("click", this.monetization.startAdClicked.bind(this.monetization))
			}, t.prototype.createElements = function(e) {
				var t = this;
				this.containerDiv = document.createElement("div"), this.insideContainer = document.createElement("div"), this.pauseButtonContainer = document.createElement("div"), this.pauseButton = document.createElement("div"), this.pauseButtonBG = document.createElement("div"), this.startAdButton = document.createElement("div"), this.progressBar = document.createElement("div"), this.progressContainer = document.createElement("div"), this.spinnerContainer = document.createElement("div"), this.adContainer = document.createElement("div"), this.videoContainer = document.createElement("video"), this.adContainer.id = "pokiSDKAdContainer", this.videoContainer.id = "pokiSDKVideoContainer", this.containerDiv.className = It, this.insideContainer.className = _t, this.pauseButtonContainer.className = Tt, this.pauseButton.className = Pt, this.pauseButtonBG.className = Bt, this.pauseButtonContainer.appendChild(this.pauseButton), this.pauseButtonContainer.appendChild(this.pauseButtonBG), this.startAdButton.className = Dt, this.startAdButton.innerHTML = "Tap anywhere to play ad", this.progressBar.className = Mt, this.progressContainer.className = Lt, this.spinnerContainer.className = zt, this.adContainer.className = jt, this.videoContainer.className = Rt, this.hide(), this.videoContainer.setAttribute("playsinline", "playsinline"), this.videoContainer.setAttribute("muted", "muted"), this.containerDiv.appendChild(this.insideContainer), this.containerDiv.appendChild(this.spinnerContainer), this.insideContainer.appendChild(this.progressContainer), this.insideContainer.appendChild(this.videoContainer), this.insideContainer.appendChild(this.adContainer), this.containerDiv.appendChild(this.pauseButtonContainer), this.containerDiv.appendChild(this.startAdButton), this.progressContainer.appendChild(this.progressBar);
				var n = e || null,
					i = function() {
						if (n || (n = document.body), n)
							if (n.appendChild(t.containerDiv), n === document.body) t.containerDiv.classList.add(Et);
							else {
								var e = window.getComputedStyle(n)
									.position;
								e && -1 !== ["absolute", "fixed", "relative"].indexOf(e) || (n.style.position = "relative")
							}
						else window.requestAnimationFrame(i)
					};
				!n || n instanceof HTMLElement || (n = null, console.error("POKI-SDK: wrapper is not a HTMLElement, falling back to document.body")), i()
			}, t.prototype.startNonIMAFallbackVideo = function(t) {
				return nr(this, void 0, void 0, (function() {
					var n, i, o, r, a = this;
					return ir(this, (function(s) {
						return (n = document.createElement("video"))
							.id = "pokiSDKHouseAdContainer", n.className = Nt, n.playsInline = !0, n.muted = Yt() || Kt, n.src = t.videoUrl, i = !1, o = function() {
								t.clickThrough && window.open(t.clickThrough), M.dispatchEvent(e.ads.video.clicked, {
									creativeId: "HouseAd"
								}), i = !0, n.pause(), r()
							}, this.insideContainer.addEventListener("click", o), r = function(t) {
								a.destroyHouseAds = void 0, a.hide(), a.insideContainer.removeChild(n), a.insideContainer.removeEventListener("click", o), t || M.dispatchEvent(e.ads.completed, {
									rewardAllowed: i
								})
							}, this.destroyHouseAds = function() {
								return r(!0)
							}, n.onabort = function() {
								return r()
							}, n.onerror = function() {
								return r()
							}, n.onerror = function() {
								return r()
							}, n.onplaying = function() {
								M.dispatchEvent(e.ads.started, {
									creativeId: "HouseAd",
									duration: t.duration,
									skip: -1
								}), M.dispatchEvent(e.ads.impression), a.progressFaker.fakeItTillTheEnd(t.duration)
							}, n.onended = function() {
								i = !0, r()
							}, this.insideContainer.appendChild(n), tr() || (n.muted = !0), n.play()
							.catch((function() {
								return r()
							})), [2]
					}))
				}))
			}, t
		}();
		const sr = ar;

		function dr(e) {
			var t, n;
			return 0 !== e.length && ((null === (n = null === (t = null === window || void 0 === window ? void 0 : window.pbjs) || void 0 === t ? void 0 : t.getAllWinningBids) || void 0 === n ? void 0 : n.call(t)) || [])
				.map((function(e) {
					return e.vastXml || ""
				}))
				.filter((function(e) {
					return e
				}))
				.some((function(t) {
					return e.some((function(e) {
						return t.includes(e)
					}))
				}))
		}
		var cr = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			lr = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			ur = function() {
				function t(e) {
					this.bannerTimeout = null, this.allowedToPlayAd = !1, this.runningAd = !1, this.completeOnce = !1, this.videoStarted = !1, this.currentWidth = 640, this.currentHeight = 480, this.currentRequestIsMuted = !1, this.volume = 1, this.videoElement = document.getElementById("pokiSDKVideoContainer"), this.adsManager = null, this.volume = e, this.initAdDisplayContainer(), this.initAdsLoader()
				}
				return t.prototype.initAdDisplayContainer = function() {
					this.adDisplayContainer || window.google && (this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("pokiSDKAdContainer"), this.videoElement))
				}, t.prototype.initAdsLoader = function() {
					var e = this;
					this.adsLoader || window.google && (this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsLoader.getSettings()
						.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), this.adsLoader.getSettings()
						.setDisableCustomPlaybackForIOS10Plus(!0), this.adsLoader.getSettings()
						.setNumRedirects(8), this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdLoaderError, !1, this), this.videoElement.addEventListener("onended", (function() {
							return e.adsLoader.contentComplete()
						})))
				}, t.prototype.requestAd = function(e) {
					return cr(this, void 0, void 0, (function() {
						var t, n, i;
						return lr(this, (function(o) {
							switch (o.label) {
								case 0:
									return this.runningAd ? [2] : (this.runningAd = !0, this.completeOnce = !0, this.videoStarted = !1, this.adDisplayContainer.initialize(), this.videoElement.src = "", t = (null === (i = null === document || void 0 === document ? void 0 : document.getElementById("pokiDebugVASTResponse")) || void 0 === i ? void 0 : i.value) || "", n = new google.ima.AdsRequest, t ? n.adsResponse = t : n.adTagUrl = e, n.linearAdSlotWidth = this.currentWidth, n.linearAdSlotHeight = this.currentHeight, n.nonLinearAdSlotWidth = this.currentWidth, n.nonLinearAdSlotHeight = this.currentHeight, n.forceNonLinearFullSlot = !0, [4, tr()]);
								case 1:
									return o.sent() ? (n.setAdWillPlayMuted(!1), this.currentRequestIsMuted = !1) : (n.setAdWillPlayMuted(!0), this.currentRequestIsMuted = !0), this.allowedToPlayAd = !0, this.adsLoader.requestAds(n, {
										adTagUrl: e
									}), [2]
							}
						}))
					}))
				}, t.prototype.resize = function(e, t) {
					this.currentWidth = e, this.currentHeight = t, this.adsManager && this.adsManager.resize(e, t, null === window || void 0 === window ? void 0 : window.google.ima.ViewMode.NORMAL)
				}, t.prototype.onAdsManagerLoaded = function(t) {
					var n = new google.ima.AdsRenderingSettings;
					n.enablePreloading = !0, n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.mimeTypes = po() || g() || y() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"], n.loadVideoTimeout = 8e3, this.adsManager = t.getAdsManager(this.videoElement, n), this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume))), this.currentRequestIsMuted && this.adsManager.setVolume(0), this.allowedToPlayAd ? (this.attachAdEvents(), M.dispatchEvent(e.ads.ready)) : this.tearDown()
				}, t.prototype.setVolume = function(e) {
					this.volume = e, this.adsManager && this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume)))
				}, t.prototype.startPlayback = function() {
					try {
						this.adsManager.init(this.currentWidth, this.currentHeight, google.ima.ViewMode.NORMAL), this.adsManager.start()
					} catch (e) {
						return this.tearDown(), !1
					}
					return !0
				}, t.prototype.startIOSPlayback = function() {
					this.adsManager.start()
				}, t.prototype.stopPlayback = function() {
					this.tearDown()
				}, t.prototype.resumeAd = function() {
					M.dispatchEvent(e.ads.video.resumed), this.adsManager && this.adsManager.resume()
				}, t.prototype.tearDown = function() {
					this.adsManager && (this.adsManager.stop(), this.adsManager.destroy(), this.adsManager = null), null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout), this.bannerTimeout = null), this.adsLoader && (this.adsLoader.contentComplete(), this.adsLoader.destroy(), this.adsLoader = null, this.initAdsLoader()), this.completeOnce = !1, this.runningAd = !1
				}, t.prototype.attachAdEvents = function() {
					var e = this,
						t = google.ima.AdEvent.Type;
					this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this), [t.AD_PROGRESS, t.ALL_ADS_COMPLETED, t.CLICK, t.COMPLETE, t.IMPRESSION, t.PAUSED, t.SKIPPED, t.STARTED, t.USER_CLOSE, t.AD_BUFFERING, t.LOG].forEach((function(t) {
						e.adsManager.addEventListener(t, e.onAdEvent, !1, e)
					}))
				}, t.prototype.onAdEvent = function(t) {
					var n, i, o, r, a, s, d, c, l, u = this,
						p = t.getAd();
					switch (t.type) {
						case google.ima.AdEvent.Type.AD_PROGRESS:
							M.dispatchEvent(e.ads.video.progress, t.getAdData());
							break;
						case google.ima.AdEvent.Type.STARTED:
							t.remainingTime = this.adsManager.getRemainingTime(), t.remainingTime <= 0 && (t.remainingTime = 15), this.videoStarted = !0, p.isLinear() || (this.bannerTimeout = window.setTimeout((function() {
								u.completeOnce && (u.completeOnce = !1, M.dispatchEvent(e.ads.completed, {
									rewardAllowed: u.videoStarted && t.rewardAllowed
								})), u.tearDown()
							}), 1e3 * (t.remainingTime + 1))), M.addVideoDataAnnotations({
								creativeId: p.getCreativeId(),
								duration: p.getDuration(),
								skip: p.getSkipTimeOffset()
							});
							try {
								var A = [(null === (n = null == p ? void 0 : p.getWrapperAdIds) || void 0 === n ? void 0 : n.call(p)) || [], (null === (i = null == p ? void 0 : p.getWrapperCreativeIds) || void 0 === i ? void 0 : i.call(p)) || []].flat(1 / 0);
								M.addVideoDataAnnotations({
									IMAAdID: null === (o = null == p ? void 0 : p.getAdId) || void 0 === o ? void 0 : o.call(p),
									IMAAdSystem: null === (r = null == p ? void 0 : p.getAdSystem) || void 0 === r ? void 0 : r.call(p),
									IMAContentType: null === (a = null == p ? void 0 : p.getContentType) || void 0 === a ? void 0 : a.call(p),
									IMATitle: null === (s = null == p ? void 0 : p.getTitle) || void 0 === s ? void 0 : s.call(p),
									IMAUniversalAdIDRegistry: null === (d = null == p ? void 0 : p.getUniversalAdIdRegistry) || void 0 === d ? void 0 : d.call(p),
									IMAUniversalAdIDValue: null === (c = null == p ? void 0 : p.getUniversalAdIdValue) || void 0 === c ? void 0 : c.call(p),
									IMAUniversalAdIDs: JSON.stringify(null === (l = null == p ? void 0 : p.getUniversalAdIds) || void 0 === l ? void 0 : l.call(p)),
									IMAWrapperIDs: A,
									HBPrebidLikelyWon: dr(A)
								})
							} catch (e) {}
							M.dispatchEvent(e.ads.started, {});
							break;
						case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
						case google.ima.AdEvent.Type.COMPLETE:
							this.completeOnce && (this.completeOnce = !1, M.dispatchEvent(e.ads.completed, {
								rewardAllowed: this.videoStarted
							})), this.tearDown();
							break;
						case google.ima.AdEvent.Type.USER_CLOSE:
							this.completeOnce && (this.completeOnce = !1, M.dispatchEvent(e.ads.completed, {
								rewardAllowed: !1
							})), this.tearDown();
							break;
						case google.ima.AdEvent.Type.PAUSED:
							this.adsManager.pause(), M.dispatchEvent(e.ads.video.paused);
							break;
						case google.ima.AdEvent.Type.AD_BUFFERING:
							M.dispatchEvent(e.ads.video.buffering);
							break;
						case google.ima.AdEvent.Type.CLICK:
							M.dispatchEvent(e.ads.video.clicked);
							break;
						case google.ima.AdEvent.Type.SKIPPED:
							M.dispatchEvent(e.ads.skipped), this.completeOnce && (this.completeOnce = !1, M.dispatchEvent(e.ads.completed, {
								rewardAllowed: this.videoStarted
							})), document.activeElement && document.activeElement.blur();
							break;
						case google.ima.AdEvent.Type.IMPRESSION:
							M.dispatchEvent(e.ads.impression, {
								creativeId: p.getCreativeId()
							})
					}
				}, t.prototype.onAdLoaderError = function(t) {
					this.tearDown();
					var n = null == t ? void 0 : t.getError(),
						i = (null == n ? void 0 : n.toString()) || "Unknown",
						o = (null == n ? void 0 : n.getErrorCode()) || 0;
					M.dispatchEvent(e.ads.video.loaderError, {
						message: i,
						errorCode: o
					})
				}, t.prototype.onAdError = function(t) {
					this.tearDown();
					var n = null == t ? void 0 : t.getError(),
						i = (null == n ? void 0 : n.toString()) || "Unknown",
						o = (null == n ? void 0 : n.getErrorCode()) || 0;
					M.dispatchEvent(e.ads.video.error, {
						message: i,
						errorCode: o,
						context: null == t ? void 0 : t.getUserRequestContext()
					})
				}, t.prototype.muteAd = function() {
					void 0 !== this.adsManager && null != this.adsManager && this.adsManager.setVolume(0)
				}, t.prototype.isAdRunning = function() {
					return this.runningAd
				}, t
			}();
		const pr = ur;
		var Ar = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			hr = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};
		const fr = function() {
			var e = window.location.pathname;
			"/" !== e[0] && (e = "/".concat(e));
			var t = "";
			window.top !== window && (t = encodeURIComponent(document.referrer));
			var n = encodeURIComponent("".concat(window.location.protocol, "//")
					.concat(window.location.host)
					.concat(e)
					.concat(window.location.search)),
				i = "https://devs-api.poki.com/gameinfo/@sdk?href=".concat(n, "&referrer=")
				.concat(t);
			return fetch(i, {
					method: "GET",
					headers: {
						"Content-Type": "text/plain"
					}
				})
				.then((function(e) {
					return Ar(void 0, void 0, void 0, (function() {
						var t;
						return hr(this, (function(n) {
							switch (n.label) {
								case 0:
									return e.status >= 200 && e.status < 400 ? [4, e.json()] : [3, 2];
								case 1:
									return (t = n.sent())
										.game_id ? [2, {
											gameID: t.game_id,
											gameTitle: t.game_name,
											playtestRecord: t.playtest_record,
											playtestVersion: t.playtest_version,
											playtestDeviceCategory: t.playtest_device_category,
											cachedContentGameID: t.cached_content_game_id,
											specialConditions: t.ad_settings.special_conditions,
											adTiming: {
												preroll: t.ad_settings.preroll,
												timePerTry: t.ad_settings.time_per_try,
												timeBetweenAds: t.ad_settings.time_between_ads,
												startAdsAfter: t.ad_settings.start_ads_after
											}
										}] : [2, void 0];
								case 2:
									throw e
							}
						}))
					}))
				}))
				.catch((function(e) {
					return function(e) {
						return Ar(this, void 0, void 0, (function() {
							var t, n, i, o, r, a, s, d, c, l, u, p;
							return hr(this, (function(A) {
								switch (A.label) {
									case 0:
										console.error(e), A.label = 1;
									case 1:
										return A.trys.push([1, 4, , 5]), "/" !== (t = window.location.pathname)[0] && (t = "/".concat(t)), o = (i = JSON)
											.stringify, l = {
												c: "sdk-p4d-error",
												ve: 7
											}, u = {
												k: "error"
											}, a = (r = JSON)
											.stringify, p = {
												status: e.status
											}, (s = e.json) ? [4, e.json()] : [3, 3];
									case 2:
										s = A.sent(), A.label = 3;
									case 3:
										if (n = o.apply(i, [(l.d = [(u.v = a.apply(r, [(p.json = s, p.body = JSON.stringify({
											href: "".concat(window.location.protocol, "//")
												.concat(window.location.host)
												.concat(t)
												.concat(window.location.search)
										}), p.name = e.name, p.message = e.message, p)]), u)], l)]), d = "https://t.poki.io/l", navigator.sendBeacon) navigator.sendBeacon(d, n);
										else try {
											(c = new XMLHttpRequest)
											.open("POST", d, !0), c.send(n)
										} catch (e) {}
										return [3, 5];
									case 4:
										return A.sent(), [3, 5];
									case 5:
										return [2]
								}
							}))
						}))
					}(e)
				}))
		};
		var vr = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			mr = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function gr() {
			return vr(this, void 0, void 0, (function() {
				var e, t, n, i;
				return mr(this, (function(o) {
					switch (o.label) {
						case 0:
							return o.trys.push([0, 3, , 4]), [4, fetch("https://geo.poki.io/", {
								method: "GET",
								headers: {
									"Content-Type": "text/plain"
								}
							})];
						case 1:
							return [4, o.sent()
								.json()
							];
						case 2:
							return e = o.sent(), t = e.ISO, n = e.ccpaApplies, [2, {
								ISO: t,
								ccpaApplies: n
							}];
						case 3:
							return i = o.sent(), console.error(i), [2, {
								ISO: "ZZ",
								ccpaApplies: !1
							}];
						case 4:
							return [2]
					}
				}))
			}))
		}
		var yr = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			wr = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function br() {
			return yr(this, void 0, void 0, (function() {
				var e, t, n, i, o, r, a;
				return wr(this, (function(s) {
					switch (s.label) {
						case 0:
							if ("test" === (null === (a = null === (r = null === window || void 0 === window ? void 0 : window.process) || void 0 === r ? void 0 : r.env) || void 0 === a ? void 0 : a.NODE_ENV)) return [2, {
								blocklist: [],
								countryExclusion: [],
								bidderLimitation: {}
							}];
							s.label = 1;
						case 1:
							return s.trys.push([1, 4, , 5]), [4, fetch("https://api.poki.com/ads/settings", {
								method: "GET",
								headers: {
									"Content-Type": "application/json"
								}
							})];
						case 2:
							return [4, s.sent()
								.json()
							];
						case 3:
							return e = s.sent(), t = e.blocklist, n = e.country_exclusion, i = e.bidder_limitation, [2, {
								blocklist: (null == t ? void 0 : t.split(/[\r\n]+/)) || [],
								countryExclusion: (n.split(",") || [])
									.map((function(e) {
										return e.toUpperCase()
									})),
								bidderLimitation: JSON.parse(i || "{}")
							}];
						case 4:
							return o = s.sent(), console.error(o), [2, {
								blocklist: [],
								countryExclusion: [],
								bidderLimitation: {}
							}];
						case 5:
							return [2]
					}
				}))
			}))
		}
		var kr = function() {
			return kr = Object.assign || function(e) {
				for (var t, n = 1, i = arguments.length; n < i; n++)
					for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}, kr.apply(this, arguments)
		};
		var xr = function() {
			function t() {
				this.slotMap = new Map, this.totalRefreshNumber = {}, this.requestAd = function(t) {
					var n;
					Pi.track(e.tracking.ads.display.requested, {
						size: t.size,
						opportunityId: t.opportunityId,
						adUnitPath: t.adUnitPath,
						duringGameplay: t.duringGameplay,
						refresh: t.refreshNumber > 0,
						refreshNumber: t.refreshNumber,
						refreshType: (null === (n = t.criteria) || void 0 === n ? void 0 : n.refreshType) || "",
						platformAd: t.platformAd
					});
					var i = 0,
						o = function() {
							if (!(--i > 0)) {
								if (zo()) try {
									window.apstag.setDisplayBids()
								} catch (e) {}
								if (Ro()) try {
									window.pbjs.setTargetingForGPTAsync([t.adUnitPath]), t.pbjsTargetting = window.pbjs.getAdserverTargetingForAdUnitCode([t.adUnitPath])
								} catch (e) {}
								t.refreshNumber > 0 ? window.googletag.pubads()
									.refresh([t.gptSlot]) : window.googletag.display(t.id)
							}
						};
					if (zo() && i++, Ro() && i++, zo()) try {
						window.apstag.fetchBids({
							slots: [{
								slotName: t.adUnitPath,
								slotID: t.id,
								sizes: [
									[t.width, t.height]
								]
							}],
							timeout: 1500
						}, (function() {
							o()
						}))
					} catch (e) {
						o()
					}
					if (Ro()) try {
						window.pbjs.requestBids({
							adUnitCodes: [t.adUnitPath],
							bidsBackHandler: function() {
								o()
							}
						})
					} catch (e) {
						o()
					}
					zo() || Ro() || o()
				}, this.requestHouseAd = function(t, n) {
					var i = kr(kr({}, n), {
						dfpIsBackfill: void 0,
						dfpLineItemId: void 0,
						dfpCampaignId: void 0,
						size: "".concat(t.width, "x")
							.concat(t.height),
						bidder: "poki",
						bid: 0
					});
					z(kr(kr({}, i), {
							event: "request"
						})), fetch("https://api.poki.com/ads/houseads/display/".concat(t.width, "x")
							.concat(t.height, "?game_id=")
							.concat(E.gameID, "&site=")
							.concat(E.siteID))
						.then((function(e) {
							return e.json()
						}))
						.then((function(o) {
							t.innerAdContainer.innerHTML = '<a href="'.concat(o.click_through_url, '" target="_blank"><img src="')
								.concat(o.asset, '" alt="house ad" /></a>'), n.houseAdId = o.id, n.isEmpty = !1, Pi.track(e.tracking.ads.display.impression, n), z(kr(kr({}, i), {
									event: "impression"
								})), setTimeout((function() {
									z(kr(kr({}, i), {
										event: "viewable"
									}))
								}), 1e3)
						}))
						.catch((function() {}))
				}
			}
			return t.enforceFamilyFriendlyFlow = function() {
				window.googletag.cmd.push((function() {
					window.googletag.pubads()
						.setPrivacySettings({
							underAgeOfConsent: !0,
							childDirectedTreatment: !0,
							restrictDataProcessing: !0,
							nonPersonalizedAds: !0
						})
				}))
			}, t.enforceNonPersonalized = function() {
				window.googletag.cmd.push((function() {
					window.googletag.pubads()
						.setPrivacySettings({
							nonPersonalizedAds: !0
						})
				}))
			}, t.prototype.callOnCanDestroy = function(e) {
				var t = this.slotMap.get(e);
				t && !t.onCanDestroyCalled && t.onCanDestroy && (t.onCanDestroyCalled = !0, t.onCanDestroy())
			}, t.prototype.setupSlotRenderEndedListener = function() {
				var t = this;
				window.googletag.cmd.push((function() {
					window.googletag.pubads()
						.addEventListener("slotRenderEnded", (function(n) {
							var i, o, r, a = n.slot.getSlotElementId(),
								s = t.slotMap.get(a);
							if (s && s.gptSlot) {
								var d = "",
									c = "",
									l = "",
									u = "",
									p = "",
									A = !1,
									h = {},
									f = "",
									v = "",
									m = "",
									g = !1,
									y = n.slot;
								try {
									if (y) {
										var w = (null === (i = null == y ? void 0 : y.getResponseInformation) || void 0 === i ? void 0 : i.call(y)) || {};
										d = w.isBackfill, c = w.lineItemId, l = w.campaignId, u = w.creativeId
									}
									f = (h = s.pbjsTargetting || {})
										.hb_bidder, v = h.hb_adomain, m = function(e) {
											var t, n = {
												cpm: 0
											};
											if (void 0 === window.pbjs || !Ro()) return n;
											var i = window.pbjs.getAllWinningBids() || [];
											return ((null === (t = window.pbjs.getBidResponsesForAdUnitCode(e)) || void 0 === t ? void 0 : t.bids) || [])
												.forEach((function(e) {
													!i.find((function(t) {
														return t.adId === e.adId
													})) && e.cpm > n.cpm && (n = e)
												})), n
										}(s.adUnitPath), g = n.isEmpty
								} catch (e) {
									console.error("Error in slotRenderEnded", e)
								}
								try {
									y && (p = function(e) {
										if (!e || "function" != typeof e.indexOf) return null;
										if (-1 !== e.indexOf("amazon-adsystem.com/aax2/apstag")) return null;
										var t = new RegExp('(?:(?:pbjs\\.renderAd\\(document,|adId:*|hb_adid":\\[)|(?:pbadid=)|(?:adId=))[\'"](.*?)["\']', "gi"),
											n = e.replace(/ /g, ""),
											i = t.exec(n);
										return i && i[1] || null
									}((null === (o = null == y ? void 0 : y.getHtml) || void 0 === o ? void 0 : o.call(y)) || ""), A = !!p)
								} catch (e) {
									console.error("Error in slotRenderEnded", e)
								}
								var b = parseFloat(h.hb_pb);
								isNaN(b) && (b = void 0);
								var k = {
									size: s.size,
									opportunityId: s.opportunityId,
									refresh: s.refreshNumber > 0,
									refreshNumber: s.refreshNumber,
									refreshType: (null === (r = s.criteria) || void 0 === r ? void 0 : r.refreshType) || "",
									duringGameplay: s.duringGameplay,
									adUnitPath: s.adUnitPath,
									prebidBid: b,
									prebidBidder: f,
									prebidWon: A,
									prebidSecondBid: m.cpm > 0 ? m.cpm : void 0,
									prebidSecondBidder: m.bidder,
									dfpIsBackfill: d,
									dfpLineItemId: c,
									dfpCampaignId: l,
									dfpCreativeId: u,
									isEmpty: g,
									adDomain: v,
									platformAd: s.platformAd,
									blocked: uo()
								};
								s.onDisplayRendered && s.onDisplayRendered(g), g && t.callOnCanDestroy(s.id), g && s.backfillHouseads ? t.requestHouseAd(s, k) : Pi.track(e.tracking.ads.display.impression, k)
							}
						})), window.googletag.pubads()
						.addEventListener("impressionViewable", (function(n) {
							var i, o, r, a, s = n.slot.getSlotElementId();
							((null === (o = null === (i = null == n ? void 0 : n.slot) || void 0 === i ? void 0 : i.getAdUnitPath()) || void 0 === o ? void 0 : o.includes("ingame_rewarded_google")) || (null === (a = null === (r = null == n ? void 0 : n.slot) || void 0 === r ? void 0 : r.getAdUnitPath()) || void 0 === a ? void 0 : a.includes("sanghan_rweb_ad_unit"))) && Pi.track(e.tracking.ads.rewardedWeb.impression), setTimeout((function() {
								t.callOnCanDestroy(s)
							}), 1e3 * Math.random())
						}))
				}))
			}, t.prototype.validateDisplaySettings = function(e) {
				return g() || y() ? ["320x50"].includes(e) : ["970x250", "300x250", "728x90", "160x600", "320x50"].includes(e)
			}, t.prototype.getDisplaySlotConfig = function(e, t, n) {
				var i = t.split("x")
					.map((function(e) {
						return parseInt(e, 10)
					})),
					o = this.getDisplaySlotID(e);
				if (o) {
					var r = this.slotMap.get(o);
					if (r && r.width === i[0] && r.height === i[1]) return r.refreshNumber++, r;
					this.clearAd(e)
				}
				var a = function(e) {
					var t = "/".concat(qi, "/debug-display/debug-display-")
						.concat(e);
					return _.debug || (t = E.isPokiIframe ? "/".concat(qi, "/")
						.concat(E.device, "_ingame_")
						.concat(e, "/")
						.concat(E.siteID, "_")
						.concat(E.device, "_ingame_")
						.concat(e) : "/".concat(qi, "/external_")
						.concat(E.device, "_display_ingame/external_")
						.concat(E.device, "_ingame_")
						.concat(e)), t
				}(t);
				n && (a = n);
				var s = "poki-".concat(Y()),
					d = document.createElement("div");
				return d.id = s, d.className = "poki-ad-slot", d.style.width = "".concat(i[0], "px"), d.style.height = "".concat(i[1], "px"), d.style.overflow = "hidden", d.style.position = "relative", d.setAttribute("data-poki-ad-size", t), {
					id: s,
					adUnitPath: a,
					size: t,
					width: i[0],
					height: i[1],
					refreshNumber: 0,
					onCanDestroyCalled: !1,
					backfillHouseads: !1,
					innerAdContainer: d,
					platformAd: !1,
					criteria: {}
				}
			}, t.prototype.renderAd = function(e) {
				var t, n = this,
					i = e.container,
					o = e.size,
					r = e.opportunityId,
					a = e.criteria,
					s = void 0 === a ? {} : a,
					d = e.adUnitPath,
					c = void 0 === d ? "" : d,
					l = e.duringGameplay,
					u = void 0 !== l && l,
					p = e.onCanDestroy,
					A = void 0 === p ? function() {} : p,
					h = e.onDisplayRendered,
					f = void 0 === h ? function() {} : h,
					v = e.backfillHouseads,
					m = void 0 !== v && v,
					g = e.platformAd,
					y = void 0 !== g && g,
					w = this.getDisplaySlotConfig(i, o, c);
				w.backfillHouseads = m, w.criteria = s, w.platformAd = y, this.slotMap.set(w.id, w), w.opportunityId = r, w.duringGameplay = "function" == typeof u ? u() : u, w.onDisplayRendered = f, w.onCanDestroy = A;
				var b = null;
				w.refreshNumber > 0 && (b = w.innerAdContainer), b || (i.appendChild(w.innerAdContainer), i.setAttribute("data-poki-ad-id", w.id));
				var k = function() {
					var e;
					setTimeout((function() {
						n.callOnCanDestroy(w.id)
					}), 6e3), _.debug ? n.requestHouseAd(w, {
						opportunityId: w.opportunityId,
						refresh: w.refreshNumber > 0,
						refreshNumber: w.refreshNumber,
						refreshType: (null === (e = w.criteria) || void 0 === e ? void 0 : e.refreshType) || "",
						duringGameplay: w.duringGameplay,
						adUnitPath: w.adUnitPath,
						platformAd: w.platformAd
					}) : window.googletag.cmd.push((function() {
						var e = n.slotMap.get(w.id);
						e && e.opportunityId === r && (n.totalRefreshNumber[w.adUnitPath] || (n.totalRefreshNumber[w.adUnitPath] = 0), n.setupGPT(w, kr(kr({}, s), {
							refresh_number: "".concat(w.refreshNumber || 0),
							total_refresh_number: "".concat(n.totalRefreshNumber[w.adUnitPath])
						})), n.totalRefreshNumber[w.adUnitPath]++, n.requestAd(w))
					}))
				};
				null === (t = w.intersectionObserver) || void 0 === t || t.disconnect(), c.includes("mobile_gamebar_320x50") ? k() : (w.intersectionObserver = new window.IntersectionObserver((function(e) {
					var t;
					e[0].isIntersecting && (null === (t = w.intersectionObserver) || void 0 === t || t.disconnect(), k())
				}), {
					threshold: .5
				}), w.intersectionObserver.observe(w.innerAdContainer))
			}, t.prototype.setupGPT = function(e, t) {
				var n;
				e.gptSlot || (160 === e.width && 600 === e.height ? e.gptSlot = window.googletag.defineSlot(e.adUnitPath, [
							[e.width, e.height], "fluid"
						], e.id)
						.addService(window.googletag.pubads()) : e.gptSlot = window.googletag.defineSlot(e.adUnitPath, [e.width, e.height], e.id)
						.addService(window.googletag.pubads())), window.googletag.enableServices(), null === (n = e.gptSlot) || void 0 === n || n.clearTargeting(), Object.keys(t)
					.forEach((function(n) {
						var i, o = t[n];
						o && (null === (i = e.gptSlot) || void 0 === i || i.setTargeting(n, o))
					}))
			}, t.prototype.clearAd = function(t) {
				var n, i, o = this.getDisplaySlotID(t);
				if (o) {
					var r = this.slotMap.get(o) || null;
					if (r) {
						for (r.onCanDestroy && !r.onCanDestroyCalled && console.warn("destroyAd called without waiting for onCanDestroy"), Pi.track(e.tracking.screen.destroyAd, {
							opportunityId: r.opportunityId,
							okToDestroy: r.onCanDestroyCalled,
							platformAd: r.platformAd
						}), null === (n = r.intersectionObserver) || void 0 === n || n.disconnect(), r.gptSlot && (null === (i = null === googletag || void 0 === googletag ? void 0 : googletag.destroySlots) || void 0 === i || i.call(googletag, [r.gptSlot])); t.lastChild;) t.removeChild(t.lastChild);
						t.removeAttribute("data-poki-ad-id"), this.slotMap.delete(r.id)
					}
				} else console.error("destroyAd called on a container without ad")
			}, t.prototype.getDisplaySlotID = function(e) {
				if (!e) return null;
				var t = e.getAttribute("data-poki-ad-id");
				return t || null
			}, t
		}();
		const Ir = xr;
		var Er, Sr = (Er = function(e, t) {
				return Er = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				}, Er(e, t)
			}, function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

				function n() {
					this.constructor = e
				}
				Er(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}),
			Cr = function(t) {
				function n() {
					var e = null !== t && t.apply(this, arguments) || this;
					return e.requestAd = function(t) {
						z({
							event: "request",
							size: t.size,
							opportunityId: t.opportunityId,
							adUnitPath: t.adUnitPath
						});
						var n = 0,
							i = function() {
								--n > 0 || e.allBidsBack(t.id)
							};
						if (zo() && n++, Ro() && n++, zo()) try {
							window.apstag.fetchBids({
								slots: [{
									slotName: t.adUnitPath,
									slotID: t.id,
									sizes: [
										[t.width, t.height]
									]
								}],
								timeout: 1500
							}, (function(e) {
								e && e.length > 0 && (t.amznTargetting = e[0]), i()
							}))
						} catch (e) {
							i()
						}
						if (Ro()) try {
							window.pbjs.requestBids({
								adUnitCodes: [t.adUnitPath],
								bidsBackHandler: function() {
									t.pbjsTargetting = window.pbjs.getAdserverTargetingForAdUnitCode([t.adUnitPath]), i()
								}
							})
						} catch (e) {
							i()
						}
						zo() || Ro() || (t.pbjsTargetting = {}, t.amznTargetting = {}, i())
					}, e.setupGPT = function(e, t) {}, e.setupSlotRenderEndedListener = function() {}, e
				}
				return Sr(n, t), n.prototype.allBidsBack = function(t) {
					var n, i, o, r = this,
						a = this.slotMap.get(t);
					if (a) {
						var s = document.createElement("iframe");
						s.setAttribute("frameborder", "0"), s.setAttribute("scrolling", "no"), s.setAttribute("marginheight", "0"), s.setAttribute("marginwidth", "0"), s.setAttribute("topmargin", "0"), s.setAttribute("leftmargin", "0"), s.setAttribute("allowtransparency", "true"), s.setAttribute("width", "".concat(a.width)), s.setAttribute("height", "".concat(a.height));
						var d = document.getElementById(a.id);
						if (d) {
							d.appendChild(s);
							var c = null === (n = null == s ? void 0 : s.contentWindow) || void 0 === n ? void 0 : n.document;
							if (!c) return console.error("Display error - iframe injection for ad failed", t), void this.clearAd(d.parentNode);
							var l = !0,
								u = a.pbjsTargetting.hb_bidder,
								p = parseFloat(a.pbjsTargetting.hb_pb);
							isNaN(p) && (p = 0);
							var A, h = (A = null === (i = null == a ? void 0 : a.amznTargetting) || void 0 === i ? void 0 : i.amznbid, oo[A] || 0);
							h > p ? (u = ao(null === (o = null == a ? void 0 : a.amznTargetting) || void 0 === o ? void 0 : o.amnzp), p = h, l = !1, this.renderAMZNAd(a.id, d, c)) : this.renderPrebidAd(a.id, d, c);
							var f = !u;
							Pi.track(e.tracking.ads.display.impression, {
								size: a.size,
								opportunityId: a.opportunityId,
								duringGameplay: a.duringGameplay,
								adUnitPath: a.adUnitPath,
								prebidBid: p,
								prebidBidder: u,
								preBidWon: l,
								dfpIsBackfill: !1,
								dfpLineItemId: void 0,
								dfpCampaignId: void 0,
								adDomain: a.pbjsTargetting.hb_adomain,
								isEmpty: f
							}), z({
								event: "impression",
								size: a.size,
								opportunityId: a.opportunityId,
								adUnitPath: a.adUnitPath,
								bidder: u,
								bid: p
							}), a.onDisplayRendered && a.onDisplayRendered(f), f ? this.callOnCanDestroy(a.id) : (a.intersectionObserver = new IntersectionObserver((function(e) {
								e.forEach((function(e) {
									e.isIntersecting ? a.intersectingTimer || (a.intersectingTimer = setTimeout((function() {
										var t;
										null === (t = a.intersectionObserver) || void 0 === t || t.unobserve(e.target), z({
											event: "viewable",
											size: a.size,
											opportunityId: a.opportunityId,
											adUnitPath: a.adUnitPath,
											bidder: u,
											bid: p
										}), r.callOnCanDestroy(a.id)
									}), 1e3)) : a.intersectingTimer && (clearTimeout(a.intersectingTimer), a.intersectingTimer = void 0)
								}))
							}), {
								threshold: .5
							}), a.intersectionObserver.observe(d))
						} else console.error("Display error - container not found", t)
					}
				}, n.prototype.renderPrebidAd = function(e, t, n) {
					var i = this.slotMap.get(e);
					if (i) return i.pbjsTargetting.hb_adid ? void window.pbjs.renderAd(n, i.pbjsTargetting.hb_adid) : (console.error("Display info - prebid nothing to render", e, i.pbjsTargetting), void this.clearAd(t.parentNode))
				}, n.prototype.renderAMZNAd = function(e, t, n) {
					var i, o, r = this.slotMap.get(e);
					if (r) return (null === (i = null == r ? void 0 : r.amznTargetting) || void 0 === i ? void 0 : i.amzniid) ? void window.apstag.renderImp(n, null === (o = null == r ? void 0 : r.amznTargetting) || void 0 === o ? void 0 : o.amzniid) : (console.error("Display info - amazon nothing to render", e, r.pbjsTargetting), void this.clearAd(t.parentNode))
				}, n
			}(Ir);
		const _r = Cr;
		var Tr = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			Pr = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			};

		function Br() {
			return Tr(this, void 0, void 0, (function() {
				var e, t;
				return Pr(this, (function(n) {
					if (e = navigator, !E.isPokiIframe) return [2, !1];
					if (["GB", "NL", "CA"].includes(E.country)) return [2, !1];
					if (e.connection && e.connection.effectiveType && "4g" !== e.connection.effectiveType) return [2, !1];
					if ((null === navigator || void 0 === navigator ? void 0 : navigator.hardwareConcurrency) < 8) return [2, !1];
					if (!document.createElement("canvas")
						.getContext("webgl2", {
							failIfMajorPerformanceCaveat: !0
						})) return [2, !1];
					if ($t) {
						if (!(t = e.userAgent.match(/Version\/([\d]+)/)) || parseInt(t[1], 10) < 18) return [2, !1]
					} else if (void 0 === window.MediaStreamTrackProcessor) return [2, !1];
					return [2, !0]
				}))
			}))
		}
		n(871);
		var Dr = function() {
				return Dr = Object.assign || function(e) {
					for (var t, n = 1, i = arguments.length; n < i; n++)
						for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}, Dr.apply(this, arguments)
			},
			Mr = function(e, t, n, i) {
				return new(n || (n = Promise))((function(o, r) {
					function a(e) {
						try {
							d(i.next(e))
						} catch (e) {
							r(e)
						}
					}

					function s(e) {
						try {
							d(i.throw(e))
						} catch (e) {
							r(e)
						}
					}

					function d(e) {
						var t;
						e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
								e(t)
							})))
							.then(a, s)
					}
					d((i = i.apply(e, t || []))
						.next())
				}))
			},
			Lr = function(e, t) {
				var n, i, o, r, a = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
					return this
				}), r;

				function s(s) {
					return function(d) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; r && (r = 0, s[0] && (a = 0)), a;) try {
								if (n = 1, i && (o = 2 & s[0] ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1]))
									.done) return o;
								switch (i = 0, o && (s = [2 & s[0], o.value]), s[0]) {
									case 0:
									case 1:
										o = s;
										break;
									case 4:
										return a.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										a.label++, i = s[1], s = [0];
										continue;
									case 7:
										s = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
											a = 0;
											continue
										}
										if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
											a.label = s[1];
											break
										}
										if (6 === s[0] && a.label < o[1]) {
											a.label = o[1], o = s;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(s);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								s = t.call(e, a)
							} catch (e) {
								s = [6, e], i = 0
							} finally {
								n = o = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, d])
					}
				}
			},
			zr = function(e, t, n) {
				if (n || 2 === arguments.length)
					for (var i, o = 0, r = t.length; o < r; o++) !i && o in t || (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
				return e.concat(i || Array.prototype.slice.call(t))
			},
			Rr = new Xi(Qi.adTiming),
			Or = function() {
				function t() {
					var t, n, i = this;
					this.autoStartOnReady = !1, this.refreshNumber = ((t = {})[e.ads.position.preroll] = 0, t[e.ads.position.midroll] = 0, t[e.ads.position.rewarded] = 0, t), this.totalRefreshNumber = ((n = {})[e.ads.position.preroll] = 0, n[e.ads.position.midroll] = 0, n[e.ads.position.rewarded] = 0, n), this.criteria = {}, this.handlers = {}, this.initializingPromise = null, this.sdkBooted = !1, this.startAdEnabled = !1, this.startStartAdsAfterTimerOnInit = !1, this.initOptions = {}, this.adSettings = {
						blocklist: [],
						countryExclusion: [],
						bidderLimitation: {}
					}, this.videoRequestInFlight = !1, this.adReady = !1, this.sdkImaError = !1, this.displayOnly = !1, this.strictConsentMode = !1, this.monetizationCoreLoaded = !1, this.GPTRejected = !1, this.IMARejected = !1, this.startLoadingMonetizationCore = function() {
						return i.loadMonetizationCore()
					}, this.configureA9 = function(e) {
						return Oo(e, i.adSettings.bidderLimitation)
					}, this.isAdBlocked = function() {
						return !1
					}, this.sdkNotBootedButCalled = function() {
						return !(!i.strictConsentMode || i.monetizationCoreLoaded) || !i.strictConsentMode && !i.sdkBooted && (console.error("The Poki SDK was not yet booted"), !0)
					}, this.genericCriteria = function() {
						var e = {};
						if (e.tag = E.tag, e.site_id = E.siteID, e.categories = decodeURIComponent(E.categories), e.iabcat = E.iabcat, E.cookieDepL && (e.cookieDepL = E.cookieDepL), E.experiment) {
							var t = decodeURIComponent(E.experiment);
							e.experiment = t, E.contentGameID && (e.expid_content_gameid = "".concat(t, "|")
								.concat(E.contentGameID))
						}
						return E.specialCondition && i.specialConditions && i.specialConditions.includes(E.specialCondition) ? "landing" === E.specialCondition ? e.p4d_game_id_cond = "".concat(E.gameID, "|l") : "crosspromo" === E.specialCondition ? e.p4d_game_id_cond = "".concat(E.gameID, "|cp") : e.p4d_game_id = E.gameID : e.p4d_game_id = E.gameID, e
					}, this.runNonIMAVideoHouseAd = function() {
						M.addVideoDataAnnotations({
							pokiAdServer: !0
						});
						var t = function() {
							return M.dispatchEvent(e.ads.error, {
								message: "HouseAd playback error"
							})
						};
						(function() {
							return eo(this, void 0, void 0, (function() {
								var e, t, n, i, o, r, a, s, d, c, l, u;
								return to(this, (function(p) {
									switch (p.label) {
										case 0:
											return [4, fetch(no())];
										case 1:
											return [4, p.sent()
												.text()
											];
										case 2:
											return e = p.sent(), t = new DOMParser, n = t.parseFromString(e, "text/xml"), i = (null === (c = null === (d = n.querySelector("ClickThrough")) || void 0 === d ? void 0 : d.textContent) || void 0 === c ? void 0 : c.trim()) || "", o = (null === (u = null === (l = n.querySelector("Duration")) || void 0 === l ? void 0 : l.textContent) || void 0 === u ? void 0 : u.trim()) || "00:00:11", r = o.split(":"), a = 60 * +r[0] * 60 + 60 * +r[1] + +r[2], s = "", n.querySelectorAll("MediaFile")
												.forEach((function(e) {
													var t, n = (null === (t = null == e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim()) || "";
													n.includes("advertisement.h264_high.mp4") && (s = n)
												})), E.kioskMode ? [2, {
													duration: a,
													videoUrl: s
												}] : [2, {
													clickThrough: i,
													duration: a,
													videoUrl: s
												}]
									}
								}))
							}))
						})()
						.then((function(e) {
								try {
									i.playerSkin.show(), i.playerSkin.startNonIMAFallbackVideo(e)
								} catch (e) {
									t()
								}
							}))
							.catch((function() {
								S.sendMessage(e.message.sendCommand, {
									event: "adLibrariesNotLoaded"
								}), t()
							}))
					}, window.googletag = window.googletag || {
						cmd: []
					}, window.pbjs = window.pbjs || {
						que: []
					}, this.display = Go() ? new _r : new Ir
				}
				return t.prototype.init = function(e) {
					if (void 0 === e && (e = {}), "undefined" != typeof window) {
						var t = e.onReady,
							n = void 0 === t ? null : t;
						return this.initOptions = e, n && (this.registerHandler("onReady", n), this.registerHandler("onAdblocked", n)), this.sdkBooted ? console.error("Poki SDK has already been initialized") : (this.initializingPromise || ((e.strictConsentMode || E.gdprApplies) && (this.strictConsentMode = !0), this.initializingPromise = this.loadPokiSettings()), this.initializingPromise)
					}
				}, t.prototype.loadPokiSettings = function() {
					var t = this,
						n = this.initOptions,
						i = n.debug,
						o = void 0 === i ? void 0 : i,
						r = n.logging,
						a = void 0 === r ? void 0 : r,
						s = n.wrapper;
					_.init(o, a), _.debug && J(), this.setupDefaultEvents(), Pi.setupDefaultEvents(), zi(), this.playerSkin = new sr({
						wrapper: s
					}), window.addEventListener("resize", this.resizeVideoAd.bind(this), !1);
					var d = fr;
					(_.debug || E.isPlayground) && (d = function() {
						return Promise.resolve()
					});
					var c = E.ccpaApplies,
						l = void 0 !== this.initOptions.isCCPA ? this.initOptions.isCCPA : "" !== c ? "1" === c : void 0,
						u = gr,
						p = (this.initOptions.country || E.country)
						.toUpperCase();
					p && void 0 !== l && (u = function() {
						return Promise.resolve({
							ISO: p,
							ccpaApplies: l
						})
					});
					var A = [d(), u()],
						h = zr(zr([], A, !0), [br()], !1);
					return Promise.allSettled(h)
						.then((function(n) {
							var i, o, r;
							try {
								var a = n[0],
									s = n[1],
									d = n[2];
								if ("fulfilled" === a.status) {
									var c = a.value;
									if (c && (E.gameID || I("gameID", c.gameID), c.cachedContentGameID && I("contentGameID", c.cachedContentGameID), t.setAdTimings(c.adTiming), t.specialConditions = c.specialConditions, function(e) {
											return Tr(this, void 0, void 0, (function() {
												var t, n;
												return Pr(this, (function(i) {
													switch (i.label) {
														case 0:
															return "1" === m("playtest") ? [3, 2] : e.playtestRecord ? e.playtestVersion && e.playtestVersion !== E.versionID ? [2, void 0] : (t = g() || y() || Kt, "desktop" === e.playtestDeviceCategory && t ? [2, void 0] : "mobile" !== e.playtestDeviceCategory || t ? [4, Br()] : [2, void 0]) : [2, void 0];
														case 1:
															if (!i.sent()) return [2, void 0];
															i.label = 2;
														case 2:
															return n = 'video/webm;codecs="vp9"', (Yt() || Kt || $t) && (n = 'video/mp4;codecs="avc1.42000d"'), MediaRecorder.isTypeSupported(n) ? [2, n] : [2, void 0]
													}
												}))
											}))
										}(c)
										.then((function(e) {
											Ei(c, e)
										}))
										.catch((function(e) {
											console.error("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e)
										}))), !(c && c.gameID || _.debug || (null === window || void 0 === window ? void 0 : window.isPokiPlayground) || "test" === (null === (o = null === (i = null === window || void 0 === window ? void 0 : window.process) || void 0 === i ? void 0 : i.env) || void 0 === o ? void 0 : o.NODE_ENV))) {
										console.error("%cALERT", "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", ["Possible Unauthorized Game Hosting Detected❗", "We've noticed that this game, which is part of Poki, is being played on a site that isn't currently allowed.", "If you're a developer who is hosting this game on your site, no worries! Please reach out to us to get your domain approved and we'll hook you up.", "However, if you are hosting this game without proper authorization, be advised: this is a violation of our terms and infringes upon copyright laws. Consider this message as a formal Digital Millennium Copyright Act (DMCA) Takedown Notice. Please remove the game from your site immediately to avoid further action."].join("\n\n"))
									}
								}
								var u = {
									ISO: "ZZ",
									ccpaApplies: !1
								};
								if ("fulfilled" === s.status && (u = s.value), I("country", (p || (null == u ? void 0 : u.ISO) || "ZZ")
									.toUpperCase()), I("gdprApplies", v(E.country)), I("ccpaApplies", void 0 === l ? (null == u ? void 0 : u.ccpaApplies) || !1 : l), E.gdprApplies && (t.strictConsentMode = !0), Ui(), "fulfilled" === d.status) {
									var A = d.value;
									A && (t.adSettings = A)
								}
								r = t.adSettings.blocklist, co = r || [], t.strictConsentMode && M.dispatchEvent(e.ready), E.isPlayground || t.loadMonetizationCore()
							} catch (t) {
								M.dispatchEvent(e.adblocked, {
									message: "".concat(t)
								})
							}
						}))
						.catch((function(t) {
							M.dispatchEvent(e.adblocked, {
								message: "".concat(t)
							})
						}))
				}, t.prototype.loadMonetizationCore = function() {
					return Mr(this, void 0, void 0, (function() {
						var t, n, i, o, r, a, s, d, c, l, u, p, A, h, f, v, m = this;
						return Lr(this, (function(g) {
							switch (g.label) {
								case 0:
									return t = this.initOptions, n = t.prebid, i = void 0 === n ? {} : n, o = t.a9Signals, r = void 0 === o ? {} : o, a = t.volume, s = void 0 === a ? 1 : a, d = t.waterfallRetries, c = t.displayOnly, l = void 0 !== c && c, u = Dr({}, this.initOptions), p = u.nonPersonalized, A = void 0 !== p && p, h = u.familyFriendly, f = void 0 !== h && h, E.isInspector ? (this.strictConsentMode || M.dispatchEvent(e.ready), [2]) : (A = A || !!E.nonPersonalized, f = f || !!E.familyFriendly, I("nonPersonalized", A), I("familyFriendly", f), v = [], this.displayOnly = l, !this.strictConsentMode || E.familyFriendly ? [3, 2] : [4, new Promise((function(e) {
										E.gdprApplies && !_.debug || e();
										var t = 0,
											n = function() {
												if (!Ri) return t++, void setTimeout(n, 50 * t);
												window.__tcfapi("addEventListener", 2, (function(t, n) {
													var i, o;
													n && ["tcloaded", "useractioncomplete"].includes(t.eventStatus) && (null === (o = null === (i = null == t ? void 0 : t.purpose) || void 0 === i ? void 0 : i.consents) || void 0 === o ? void 0 : o[1]) && (t.listenerId && window.__tcfapi("removeEventListener", 2, (function() {}), t.listenerId), e())
												}))
											};
										n()
									}))]);
								case 1:
									g.sent(), g.label = 2;
								case 2:
									return v.push(R("scripts/gpt.js")), l || v.push(R("https://imasdk.googleapis.com/js/sdkloader/ima3.js")), E.familyFriendly || E.nonPersonalized ? (E.familyFriendly && Ir.enforceFamilyFriendlyFlow(), I("nonPersonalized", "true"), Ir.enforceNonPersonalized()) : v.push(R("https://a.poki-cdn.com/prebid/prebid8.48.0.js"), R("https://c.amazon-adsystem.com/aax2/apstag.js")), this.display.setupSlotRenderEndedListener(), [2, Promise.allSettled(v)
										.then((function(t) {
											try {
												var n = t[0],
													o = t[1];
												"rejected" === n.status && (m.GPTRejected = !0), jo(i, m.adSettings.bidderLimitation), Oo(r, m.adSettings.bidderLimitation), window.googletag.cmd.push((function() {
													googletag.pubads()
														.addEventListener("rewardedSlotReady", (function(t) {
															Pi.track(e.tracking.ads.rewardedWeb.ready), t.makeRewardedVisible()
														})), googletag.pubads()
														.addEventListener("rewardedSlotGranted", (function() {
															Vo = !0
														})), googletag.pubads()
														.addEventListener("rewardedSlotClosed", (function() {
															var t, n, i;
															Vo ? Pi.track(e.tracking.ads.rewardedWeb.closedGranted) : Pi.track(e.tracking.ads.rewardedWeb.closedDeclined), (null === (n = null === (t = null === window || void 0 === window ? void 0 : window.location) || void 0 === t ? void 0 : t.toString()) || void 0 === n ? void 0 : n.includes("#goog_rewarded")) && (null === (i = null === window || void 0 === window ? void 0 : window.history) || void 0 === i || i.go(-1)), M.dispatchEvent(e.ads.completed, {
																rewardAllowed: Vo
															})
														})), googletag.pubads()
														.addEventListener("slotRenderEnded", (function(t) {
															var n;
															qo() === (null === (n = null == t ? void 0 : t.slot) || void 0 === n ? void 0 : n.getAdUnitPath()) && t.isEmpty && (Pi.track(e.tracking.ads.rewardedWeb.empty), M.dispatchEvent(e.ads.video.startHouseAdFlow))
														})), googletag.pubads()
														.addEventListener("slotRequested", (function(t) {
															t || (Pi.track(e.tracking.ads.rewardedWeb.empty), M.dispatchEvent(e.ads.video.startHouseAdFlow))
														}))
												})), l || "rejected" !== o.status || (m.IMARejected = !0);
												var a = Dr({}, Qi);
												_.debug && (a.adTiming.startAdsAfter = 0, m.setAdTimings(a.adTiming));
												var c = E.forceAd;
												if (c && (m.setAdTimings({
													preroll: !0,
													timeBetweenAds: 12e4,
													timePerTry: 7e3,
													startAdsAfter: 0
												}), a.customCriteria = Dr(Dr({}, a.customCriteria), {
													force_ad: c
												})), m.criteria = Dr({}, a.customCriteria), m.ima = new pr(s), m.playerSkin.setupEvents(m), m.startStartAdsAfterTimerOnInit && Rr.startStartAdsAfterTimer(), m.waterfall = new Xo(m.ima, {
													timing: Rr,
													totalRetries: d
												}), m.monetizationCoreLoaded = !0, m.GPTRejected && m.IMARejected) return void M.dispatchEvent(e.adblocked, {
													message: "Both core sdks failed to boot"
												});
												m.strictConsentMode || M.dispatchEvent(e.ready)
											} catch (t) {
												M.dispatchEvent(e.adblocked, {
													message: "".concat(t)
												})
											}
										}))
										.catch((function(t) {
											console.error(t), M.dispatchEvent(e.adblocked, {
												message: "".concat(t)
											})
										}))
									]
							}
						}))
					}))
				}, t.prototype.requestAd = function(t) {
					var n, i, o, r, a;
					void 0 === t && (t = {});
					var s = t.autoStart,
						d = void 0 === s || s,
						c = t.onFinish,
						l = void 0 === c ? null : c,
						u = t.onStart,
						p = void 0 === u ? null : u,
						A = t.position,
						f = void 0 === A ? null : A,
						v = {
							opportunityId: Y(),
							position: f
						};
					if (Pi.track(f === e.ads.position.rewarded ? e.tracking.screen.rewardedBreak : e.tracking.screen.commercialBreak, Dr(Dr({}, t.rewardedKVs), v)), this.videoRequestInFlight) l && l({
						type: e.ads.busy,
						rewardAllowed: !1
					});
					else if (this.videoRequestInFlight = !0, this.autoStartOnReady = !1 !== d, M.clearVideoDataAnnotations(), M.addVideoDataAnnotations(v), this.registerHandler("onFinish", (function(t) {
						M.dispatchEvent(e.playtest.stopVideo), l && l(t)
					})), this.registerHandler("onStart", (function(t) {
						M.dispatchEvent(e.playtest.startVideo, {
							position: f
						}), p && p(t)
					})), null !== f && h(f, e.ads.position))
						if (this.displayOnly) M.dispatchEvent(e.ads.error, Dr(Dr({}, v), {
							message: "Video disabled"
						}));
						else {
							if (!this.sdkBooted) return M.dispatchEvent(e.ads.error, Dr(Dr({}, v), {
								message: "Requesting ad on unbooted SDK"
							})), void this.sdkNotBootedButCalled();
							if ((g() || y()) && f !== e.ads.position.rewarded)
								if ("evoworld.io" !== ((null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.hostname) || "")) return void M.dispatchEvent(e.ads.error, Dr(Dr({}, v), {
									message: "Interstitials are disabled on mobile"
								}));
							if ((null === (o = null === (i = this.ima) || void 0 === i ? void 0 : i.isAdRunning) || void 0 === o ? void 0 : o.call(i)) || (null === (a = null === (r = this.waterfall) || void 0 === r ? void 0 : r.isRunning) || void 0 === a ? void 0 : a.call(r))) M.dispatchEvent(e.ads.busy, v);
							else if (f !== e.ads.position.preroll || Rr.prerollPossible())
								if (f === e.ads.position.rewarded || Rr.requestPossible())
									if (f !== e.ads.position.rewarded && this.adSettings.countryExclusion.includes(E.country)) M.dispatchEvent(e.ads.limit, Dr(Dr({}, v), {
										reason: e.info.messages.disabled
									}));
									else {
										if (E.kioskMode) return f === e.ads.position.rewarded ? void this.runNonIMAVideoHouseAd() : void M.dispatchEvent(e.ads.limit, Dr(Dr({}, v), {
											reason: e.info.messages.disabled
										}));
										if (this.strictConsentMode && !this.monetizationCoreLoaded) return f === e.ads.position.rewarded || _.debug ? void this.runNonIMAVideoHouseAd() : void M.dispatchEvent(e.ads.error, Dr(Dr({}, v), {
											messaage: "Ad libraries not yet loaded"
										}));
										if (!this.ima || this.sdkImaError || this.IMARejected) f === e.ads.position.rewarded ? this.runNonIMAVideoHouseAd() : M.dispatchEvent(e.ads.error, Dr(Dr({}, v), {
											message: "Bot, IMA or Adblocker error"
										}));
										else if (Vi()) M.dispatchEvent(e.ads.error, Dr(Dr({}, v), {
											messaage: "No TCFv2 CMP detected, please contact developersupport@poki.com for more information"
										}));
										else if (Hi()) M.dispatchEvent(e.ads.error, Dr(Dr({}, v), {
											messaage: "No USP detected, please contact developersupport@poki.com for more information"
										}));
										else if (this.adReady) M.dispatchEvent(e.ads.ready, v);
										else {
											var m = Dr(Dr(Dr({}, this.genericCriteria()), this.criteria), {
												position: f,
												ab: Math.floor(100 * Math.random())
													.toString(),
												refresh_number: this.refreshNumber[f],
												total_refresh_number: this.totalRefreshNumber[f]
											});
											this.refreshNumber[f]++, this.totalRefreshNumber[f]++, this.playerSkin.show(), this.resizeVideoAd(), this.waterfall.start(m, f)
										}
									}
							else M.dispatchEvent(e.ads.limit, Dr(Dr({}, v), {
								reason: e.info.messages.timeLimit
							}));
							else M.dispatchEvent(e.ads.limit, Dr(Dr({}, v), {
								reason: e.info.messages.prerollLimit
							}))
						}
					else console.error("POKI-SDK: Invalid position")
				}, t.prototype.displayAd = function(e) {
					var t = e.container,
						n = e.size;
					return e.criteria = Dr(Dr(Dr({
						ab: Math.floor(100 * Math.random())
							.toString()
					}, this.genericCriteria()), this.criteria), e.criteria || {}), e.platformAd && (delete e.criteria.p4d_game_id_cond, delete e.criteria.p4d_game_id), !E.kioskMode && (_.debug ? (this.display.renderAd(e), !0) : this.strictConsentMode && !this.monetizationCoreLoaded ? (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "Ad libraries not yet loaded"), !1) : this.GPTRejected ? (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "Bot, IMA or Adblocker error"), !1) : Vi() ? (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "No TCFv2 CMP detected, please contact developersupport@poki.com for more information"), !1) : Hi() ? (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "No USP detected, please contact developersupport@poki.com for more information"), !1) : n ? this.sdkBooted ? t ? void 0 === window.googletag ? (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "Adblocker has been detected"), !1) : this.adSettings.countryExclusion.includes(E.country) ? (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "Country is excluded from ads"), !1) : this.display.validateDisplaySettings(n) ? (this.display.renderAd(e), !0) : (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "Display size ".concat(n, " is not supported on this device")), !1) : (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "Provided container does not exist"), !1) : (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "Requesting ad on unbooted SDK"), this.sdkNotBootedButCalled(), !1) : (console.error("%cPOKI_ADS:%c", "font-weight: bold", "", "No ad size given, usage: displayAd(<container>, <size>)"), !1))
				}, t.prototype.destroyAd = function(e) {
					this.adSettings.countryExclusion.includes(E.country) || (e = e || document.body, this.display.clearAd(e))
				}, t.prototype.startStartAdsAfterTimer = function() {
					this.sdkNotBootedButCalled() ? this.startStartAdsAfterTimerOnInit = !0 : Rr.startStartAdsAfterTimer()
				}, t.prototype.muteAd = function() {
					this.sdkNotBootedButCalled() || this.ima.muteAd()
				}, t.prototype.setVolume = function(e) {
					var t;
					this.sdkNotBootedButCalled() || null === (t = this.ima) || void 0 === t || t.setVolume(e)
				}, t.prototype.forcePreroll = function() {
					if (!this.sdkNotBootedButCalled()) {
						var t = Rr.prerollPossible;
						Rr.prerollPossible = function() {
							return !0
						}, this.requestAd({
							position: e.ads.position.preroll
						}), Rr.prerollPossible = t
					}
				}, t.prototype.resumeAd = function() {
					this.sdkNotBootedButCalled() || (this.playerSkin.hidePauseButton(), this.ima.resumeAd())
				}, t.prototype.startAdClicked = function() {
					this.sdkNotBootedButCalled() || Yt() && this.startAdEnabled && (this.startAdEnabled = !1, this.playerSkin.hideStartAdButton(), this.ima.startIOSPlayback())
				}, t.prototype.stopVideoAd = function() {
					this.playerSkin.hide(), M.dispatchEvent(e.ads.stopped), this.sdkNotBootedButCalled() || (this.waterfall.stopWaterfall(), this.ima.stopPlayback(), Uo && googletag.destroySlots([Uo]))
				}, t.prototype.resizeVideoAd = function() {
					var e = this;
					if (!this.sdkNotBootedButCalled() && this.ima) {
						var t = this.playerSkin.getVideoBounds();
						if (0 === t.width || 0 === t.height) return this.resizeTimeout && clearTimeout(this.resizeTimeout), void(this.resizeTimeout = setTimeout((function() {
							e.resizeVideoAd()
						}), 100));
						this.ima.resize(t.width, t.height)
					}
				}, t.prototype.setAdTimings = function(t) {
					var n;
					void 0 === t && (t = {}), this.refreshNumber = ((n = {})[e.ads.position.preroll] = 0, n[e.ads.position.midroll] = 0, n[e.ads.position.rewarded] = 0, n), Rr.setTimings(t), Rr.resetAll()
				}, t.prototype.setSpecialConditions = function(e) {
					this.specialConditions = e || []
				}, t.prototype.startAd = function() {
					if (!this.sdkNotBootedButCalled())
						if (this.adReady) try {
							this.resizeVideoAd(), this.ima.startPlayback() || this.stopVideoAd()
						} catch (t) {
							M.dispatchEvent(e.ads.error, {
								message: "Playback error"
							})
						} else M.dispatchEvent(e.ads.error, {
							message: "No ads ready to start"
						})
				}, t.prototype.registerHandler = function(e, t) {
					this.handlers[e] = t
				}, t.prototype.callHandler = function(e, t) {
					void 0 === t && (t = void 0), "function" == typeof this.handlers[e] && this.handlers[e](t)
				}, t.prototype.setupDefaultEvents = function() {
					var t = this;
					M.addEventListener(e.ready, (function() {
						t.sdkBooted = !0, t.setVolume(.6), t.callHandler("onReady")
					})), M.addEventListener(e.adblocked, (function() {
						t.sdkBooted = !0, t.sdkImaError = !0
					})), M.addEventListener(e.ads.ready, (function() {
						t.adReady = !0, t.autoStartOnReady && t.startAd()
					})), M.addEventListener(e.ads.started, (function() {
						t.playerSkin.hideSpinner(), t.callHandler("onStart", {
							type: e.ads.limit
						})
					})), M.addEventListener(e.ads.video.paused, (function() {
						t.playerSkin.showPauseButton()
					})), M.addEventListener(e.ads.video.error, (function() {
						var t, n = M.getVideoDataAnnotations();
						(null == n ? void 0 : n.HBVastUrl) && (t = null == n ? void 0 : n.HBVastUrl, R("https://a.poki.com/ads/vast-client-2.js", !0)
							.then((function() {
								if (window.VASTClient) try {
									var n = [],
										i = new window.VASTClient;
									i.getParser()
										.on("VAST-resolved", (function(e) {
											n.push(e)
										})), i.get(t)
										.then((function() {
											M.dispatchEvent(e.ads.extendedVideoError, {
												vastChain: JSON.stringify(n),
												vastResolved: !0
											})
										}))
										.catch((function(t) {
											M.dispatchEvent(e.ads.extendedVideoError, {
												vastChain: JSON.stringify(n),
												vastResolved: !1,
												vastResolveErr: JSON.stringify(t)
											})
										}))
								} catch (e) {
									console.log("Error parsing VAST", e)
								}
							}))
							.catch((function() {})))
					})), M.addEventListener(e.ads.limit, (function() {
						t.videoRequestInFlight = !1, t.callHandler("onFinish", {
							type: e.ads.limit,
							rewardAllowed: !1
						})
					})), M.addEventListener(e.ads.stopped, (function() {
						t.videoRequestInFlight = !1, t.callHandler("onFinish", {
							type: e.ads.stopped,
							rewardAllowed: !1
						})
					})), M.addEventListener(e.ads.error, (function(n) {
						t.videoRequestInFlight = !1, t.callHandler("onFinish", {
							type: e.ads.error,
							rewardAllowed: !!n.rewardAllowed
						})
					})), M.addEventListener(e.ads.busy, (function() {
						t.videoRequestInFlight = !1, t.callHandler("onFinish", {
							type: e.ads.busy,
							rewardAllowed: !1
						})
					})), M.addEventListener(e.ads.completed, (function(n) {
						t.videoRequestInFlight = !1, t.callHandler("onFinish", {
							type: e.ads.completed,
							rewardAllowed: !!n.rewardAllowed
						})
					})), [e.ads.limit, e.ads.stopped, e.ads.error, e.ads.completed].forEach((function(e) {
						M.addEventListener(e, (function() {
							t.playerSkin && t.playerSkin.hide(), t.adReady = !1
						}))
					}))
				}, t
			}();
		var jr = new ti(new Or);
		for (var Nr in jr) window.PokiSDK[Nr] = jr[Nr]
	})()
})();
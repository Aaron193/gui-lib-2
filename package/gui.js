!(function (n) {
	var style = document.createTextNode(`@import url(https://fonts.googleapis.com/css2?family=Kanit&display=swap);:root{--slider-height:27px;--accent:#04aa6d}.GUI_TITLE{color:var(--accent);font-size:22px;font-weight:600;margin-bottom:15px;margin-top:5px;text-align:center}.GUI_ITEM_TITLE_CONTAINER{display:inline-block;margin-right:10px;width:40%}.GUI_LABEL{left:0;margin-right:2%;vertical-align:top;width:40%}.GUI_ITEM_TITLE,.GUI_LABEL{color:var(--accent);display:inline-block}.GUI_ITEM_TITLE{font-size:20px;vertical-align:sub}.__GUI__{background-color:#000;font-family:Kanit,sans-serif;height:unset;padding-bottom:25px;position:absolute;right:0;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:540px}.__GUI__ input[type=range]{-webkit-appearance:none;background:#101010;height:var(--slider-height);margin:0 15px;width:55%}.GUI_SLIDER::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:var(--accent);cursor:pointer;height:var(--slider-height);width:13px}.__GUI__ input[type=checkbox]{cursor:pointer;height:20px;margin:0;vertical-align:middle;width:20px}.GUI_STATS{background:#101010;border:none;color:var(--accent);height:26px;margin-right:10px;outline:none;text-align:center;width:13%}.GUI_COMPONENT{-ms-flex-align:center;align-items:center;border-bottom:2px solid #213e25;display:-ms-flexbox;display:flex;font-size:20px;margin-bottom:5px;margin-left:5px;padding:3px 0 3px 15px}.GUI_FOLDER{background-color:#11171b;border-left:2px solid var(--accent);box-sizing:border-box;color:#f0f0f0;display:block;margin-bottom:10px}.GUI_FOLDER,.GUI_FOLDER_TITLE{font-size:20px;margin-left:10px}.GUI_FOLDER_TITLE{border-bottom:2px solid #213e25;color:var(--accent);cursor:pointer;margin-right:10px;padding-left:15px}.GUI_FOLDER_TITLE:hover{background-color:hsla(0,0%,69%,.5);color:#000}.hide{display:none}input[type=checkbox]{-webkit-appearance:none;appearance:none;background-color:#101010;border:.15em solid var(--accent);border-radius:.15em;color:var(--accent);display:grid;font:inherit;height:1.15em;margin:0;place-content:center;-webkit-transform:translateY(-.075em);-ms-transform:translateY(-.075em);transform:translateY(-.075em);width:1.15em}input[type=checkbox]:before{box-shadow:inset 1em 1em var(--accent);-webkit-clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0,43% 62%);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0,43% 62%);content:"";height:.65em;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:bottom left;-ms-transform-origin:bottom left;transform-origin:bottom left;width:.65em}input[type=checkbox]:checked:before{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}`);
	var CSS = document.createElement('style');
	CSS.type = 'text/css';
	CSS.appendChild(style);
	document.body.appendChild(CSS);
	function e(o) {
		if (t[o]) return t[o].exports;
		var r = (t[o] = { i: o, l: !1, exports: {} });
		return n[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
	}
	var t = {};
	(e.m = n),
		(e.c = t),
		(e.d = function (n, t, o) {
			e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: o });
		}),
		(e.r = function (n) {
			'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(n, '__esModule', { value: !0 });
		}),
		(e.t = function (n, t) {
			if ((1 & t && (n = e(n)), 8 & t)) return n;
			if (4 & t && 'object' == typeof n && n && n.__esModule) return n;
			var o = Object.create(null);
			if ((e.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: n }), 2 & t && 'string' != typeof n))
				for (var r in n)
					e.d(
						o,
						r,
						function (e) {
							return n[e];
						}.bind(null, r)
					);
			return o;
		}),
		(e.n = function (n) {
			var t =
				n && n.__esModule
					? function () {
							return n.default;
					  }
					: function () {
							return n;
					  };
			return e.d(t, 'a', t), t;
		}),
		(e.o = function (n, e) {
			return Object.prototype.hasOwnProperty.call(n, e);
		}),
		(e.p = '/'),
		e((e.s = 'mdyV'));
})({
	GVvd: function (n, e, t) {
		'use strict';
		(function (n, o) {
			function r(n, e) {
				return (
					(function (n) {
						if (Array.isArray(n)) return n;
					})(n) ||
					(function (n, e) {
						var t = null == n ? null : ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
						if (null == t) return;
						var o,
							r,
							i = [],
							_ = !0,
							u = !1;
						try {
							for (t = t.call(n); !(_ = (o = t.next()).done) && (i.push(o.value), !e || i.length !== e); _ = !0);
						} catch (n) {
							(u = !0), (r = n);
						} finally {
							try {
								_ || null == t.return || t.return();
							} finally {
								if (u) throw r;
							}
						}
						return i;
					})(n, e) ||
					(function (n, e) {
						if (!n) return;
						if ('string' == typeof n) return i(n, e);
						var t = Object.prototype.toString.call(n).slice(8, -1);
						'Object' === t && n.constructor && (t = n.constructor.name);
						if ('Map' === t || 'Set' === t) return Array.from(n);
						if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(n, e);
					})(n, e) ||
					(function () {
						throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
					})()
				);
			}
			function i(n, e) {
				(null == e || e > n.length) && (e = n.length);
				for (var t = 0, o = new Array(e); t < e; t++) o[t] = n[t];
				return o;
			}
			function _(e) {
				var t = r(Object(u.a)(!0), 2),
					i = t[0],
					a = t[1],
					s = [];
				return (
					e.content.forEach(function (e) {
						switch (e.type) {
							case _:
							case 'folder':
								s.push(n(_, { content: e.content }));
								break;
							case l.a:
							case 'checkbox':
								s.push(
									n(l.a, {
										name: e.name,
										change: function (n) {
											return e.change(n);
										},
									})
								);
								break;
							case c.a:
							case 'slider':
								s.push(
									n(c.a, {
										name: e.name,
										change: function (n) {
											return e.change(n);
										},
										min: e.opt.min,
										max: e.opt.max,
										step: e.opt.step,
									})
								);
						}
					}),
					n(
						o,
						null,
						n(
							'div',
							{
								onclick: function () {
									a(!i);
								},
								'data-id': 'folder',
								className: 'GUI_FOLDER_TITLE',
							},
							'▼ misc'
						),
						i ? n('div', { className: 'GUI_FOLDER' }, n('div', { className: 'GUI_FOLDER_CONTAINER' }, s)) : null
					)
				);
			}
			t.d(e, 'a', function () {
				return _;
			});
			var u = t('QRet'),
				l = t('szUT'),
				c = t('N446');
		}.call(this, t('hosL').h, t('hosL').Fragment));
	},
	N446: function (n, e, t) {
		'use strict';
		(function (n) {
			function o(n, e) {
				return (
					(function (n) {
						if (Array.isArray(n)) return n;
					})(n) ||
					(function (n, e) {
						var t = null == n ? null : ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
						if (null == t) return;
						var o,
							r,
							i = [],
							_ = !0,
							u = !1;
						try {
							for (t = t.call(n); !(_ = (o = t.next()).done) && (i.push(o.value), !e || i.length !== e); _ = !0);
						} catch (n) {
							(u = !0), (r = n);
						} finally {
							try {
								_ || null == t.return || t.return();
							} finally {
								if (u) throw r;
							}
						}
						return i;
					})(n, e) ||
					(function (n, e) {
						if (!n) return;
						if ('string' == typeof n) return r(n, e);
						var t = Object.prototype.toString.call(n).slice(8, -1);
						'Object' === t && n.constructor && (t = n.constructor.name);
						if ('Map' === t || 'Set' === t) return Array.from(n);
						if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return r(n, e);
					})(n, e) ||
					(function () {
						throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
					})()
				);
			}
			function r(n, e) {
				(null == e || e > n.length) && (e = n.length);
				for (var t = 0, o = new Array(e); t < e; t++) o[t] = n[t];
				return o;
			}
			function i(e) {
				var t = o(Object(_.a)((e.max - e.min) / 2), 2),
					r = t[0],
					i = t[1];
				return n(
					'div',
					{ className: 'GUI_COMPONENT' },
					n('label', { className: 'GUI_LABEL' }, e.name),
					n('input', {
						oninput: function (n) {
							var t = n.target.value;
							e.change(Number(t)), i(t);
						},
						className: 'GUI_SLIDER',
						type: 'range',
						step: e.step,
						min: e.min,
						max: e.max,
					}),
					n('input', { className: 'GUI_STATS', type: 'text', value: r })
				);
			}
			t.d(e, 'a', function () {
				return i;
			});
			var _ = t('QRet');
		}.call(this, t('hosL').h));
	},
	QRet: function (n, e, t) {
		'use strict';
		function o(n, e) {
			f.options.__h && f.options.__h(a, n, p || e), (p = 0);
			var t = a.__H || (a.__H = { __: [], __h: [] });
			return n >= t.__.length && t.__.push({}), t.__[n];
		}
		function r(n) {
			return (
				(p = 1),
				(function (n, e, t) {
					var r = o(c++, 2);
					return (
						(r.t = n),
						r.__c ||
							((r.__ = [
								t ? t(e) : l(void 0, e),
								function (n) {
									var e = r.t(r.__[0], n);
									r.__[0] !== e && ((r.__ = [e, r.__[1]]), r.__c.setState({}));
								},
							]),
							(r.__c = a)),
						r.__
					);
				})(l, n)
			);
		}
		function i() {
			for (var n; (n = d.shift()); )
				if (n.__P)
					try {
						n.__H.__h.forEach(_), n.__H.__h.forEach(u), (n.__H.__h = []);
					} catch (e) {
						(n.__H.__h = []), f.options.__e(e, n.__v);
					}
		}
		function _(n) {
			var e = a,
				t = n.__c;
			'function' == typeof t && ((n.__c = void 0), t()), (a = e);
		}
		function u(n) {
			var e = a;
			(n.__c = n.__()), (a = e);
		}
		function l(n, e) {
			return 'function' == typeof e ? e(n) : e;
		}
		t.d(e, 'a', function () {
			return r;
		});
		var c,
			a,
			s,
			f = t('hosL'),
			p = 0,
			d = [],
			h = f.options.__b,
			m = f.options.__r,
			y = f.options.diffed,
			v = f.options.__c,
			g = f.options.unmount;
		(f.options.__b = function (n) {
			(a = null), h && h(n);
		}),
			(f.options.__r = function (n) {
				m && m(n), (c = 0);
				var e = (a = n.__c).__H;
				e && (e.__h.forEach(_), e.__h.forEach(u), (e.__h = []));
			}),
			(f.options.diffed = function (n) {
				y && y(n);
				var e = n.__c;
				e &&
					e.__H &&
					e.__H.__h.length &&
					((1 !== d.push(e) && s === f.options.requestAnimationFrame) ||
						(
							(s = f.options.requestAnimationFrame) ||
							function (n) {
								var e,
									t = function () {
										clearTimeout(o), b && cancelAnimationFrame(e), setTimeout(n);
									},
									o = setTimeout(t, 100);
								b && (e = requestAnimationFrame(t));
							}
						)(i)),
					(a = null);
			}),
			(f.options.__c = function (n, e) {
				e.some(function (n) {
					try {
						n.__h.forEach(_),
							(n.__h = n.__h.filter(function (n) {
								return !n.__ || u(n);
							}));
					} catch (t) {
						e.some(function (n) {
							n.__h && (n.__h = []);
						}),
							(e = []),
							f.options.__e(t, n.__v);
					}
				}),
					v && v(n, e);
			}),
			(f.options.unmount = function (n) {
				g && g(n);
				var e,
					t = n.__c;
				t &&
					t.__H &&
					(t.__H.__.forEach(function (n) {
						try {
							_(n);
						} catch (n) {
							e = n;
						}
					}),
					e && f.options.__e(e, t.__v));
			});
		var b = 'function' == typeof requestAnimationFrame;
	},
	QfWi: function (n, e, t) {
		'use strict';
		function o(n) {
			return (
				(o =
					'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
						? function (n) {
								return typeof n;
						  }
						: function (n) {
								return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
						  }),
				o(n)
			);
		}
		t.r(e);
		var r = t('ugae'),
			i = {
				title: 'MY GUI TITLE',
				width: '540',
				components: [
					{
						type: 'slider',
						change: function (n) {
							console.log(n);
						},
						name: 'component name',
						opt: { min: '0', max: '100', step: '5' },
					},
					{
						type: 'slider',
						change: function (n) {
							console.log(n);
						},
						name: 'component name 2',
						opt: { min: '0', max: '100', step: '1' },
					},
					{
						type: 'checkbox',
						name: 'my checkbox',
						change: function (n) {
							console.log('CLICKED CHECKBOX!', n);
						},
					},
					{
						type: 'folder',
						name: 'misc',
						content: [
							{
								type: 'slider',
								change: function (n) {
									console.log(o(n));
								},
								name: 'nested component',
								opt: { min: '0', max: '100', step: '1' },
							},
							{
								type: 'checkbox',
								name: 'my checkbox',
								change: function (n) {
									console.log('CLICKED CHECKBOX!', n);
								},
							},
							{
								type: 'slider',
								change: function (n) {
									console.log(o(n));
								},
								name: 'component name 2',
								opt: { min: '20', max: '80', step: '1' },
							},
						],
					},
				],
			};
		'undefined' != typeof window &&
			(window.EasyGUI = function (n) {
				n.hasOwnProperty('CLI_DATA') ? Object(r.a)(i) : Object(r.a)(n);
			});
	},
	hosL: function (n, e, t) {
		'use strict';
		function o(n, e) {
			for (var t in e) n[t] = e[t];
			return n;
		}
		function r(n) {
			var e = n.parentNode;
			e && e.removeChild(n);
		}
		function i(n, e, t) {
			var o,
				r,
				i,
				u = {};
			for (i in e) 'key' == i ? (o = e[i]) : 'ref' == i ? (r = e[i]) : (u[i] = e[i]);
			if ((arguments.length > 2 && (u.children = arguments.length > 3 ? O.call(arguments, 2) : t), 'function' == typeof n && null != n.defaultProps)) for (i in n.defaultProps) void 0 === u[i] && (u[i] = n.defaultProps[i]);
			return _(n, u, o, r, null);
		}
		function _(n, e, t, o, r) {
			var i = { type: n, props: e, key: t, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r ? ++P : r };
			return null == r && null != N.vnode && N.vnode(i), i;
		}
		function u() {
			return { current: null };
		}
		function l(n) {
			return n.children;
		}
		function c(n, e) {
			(this.props = n), (this.context = e);
		}
		function a(n, e) {
			if (null == e) return n.__ ? a(n.__, n.__.__k.indexOf(n) + 1) : null;
			for (var t; e < n.__k.length; e++) if (null != (t = n.__k[e]) && null != t.__e) return t.__e;
			return 'function' == typeof n.type ? a(n) : null;
		}
		function s(n) {
			var e, t;
			if (null != (n = n.__) && null != n.__c) {
				for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
					if (null != (t = n.__k[e]) && null != t.__e) {
						n.__e = n.__c.base = t.__e;
						break;
					}
				return s(n);
			}
		}
		function f(n) {
			((!n.__d && (n.__d = !0) && H.push(n) && !p.__r++) || M !== N.debounceRendering) && ((M = N.debounceRendering) || j)(p);
		}
		function p() {
			for (var n; (p.__r = H.length); )
				(n = H.sort(function (n, e) {
					return n.__v.__b - e.__v.__b;
				})),
					(H = []),
					n.some(function (n) {
						var e, t, r, i, _, u;
						n.__d && ((_ = (i = (e = n).__v).__e), (u = e.__P) && ((t = []), ((r = o({}, i)).__v = i.__v + 1), x(u, i, r, e.__n, void 0 !== u.ownerSVGElement, null != i.__h ? [_] : null, t, null == _ ? a(i) : _, i.__h), E(t, i), i.__e != _ && s(i)));
					});
		}
		function d(n, e, t, o, r, i, u, c, s, f) {
			var p,
				d,
				m,
				v,
				g,
				b,
				k,
				E = (o && o.__k) || F,
				C = E.length;
			for (t.__k = [], p = 0; p < e.length; p++)
				if (null != (v = t.__k[p] = null == (v = e[p]) || 'boolean' == typeof v ? null : 'string' == typeof v || 'number' == typeof v || 'bigint' == typeof v ? _(null, v, null, null, v) : Array.isArray(v) ? _(l, { children: v }, null, null, null) : v.__b > 0 ? _(v.type, v.props, v.key, null, v.__v) : v)) {
					if (((v.__ = t), (v.__b = t.__b + 1), null === (m = E[p]) || (m && v.key == m.key && v.type === m.type))) E[p] = void 0;
					else
						for (d = 0; d < C; d++) {
							if ((m = E[d]) && v.key == m.key && v.type === m.type) {
								E[d] = void 0;
								break;
							}
							m = null;
						}
					x(n, v, (m = m || R), r, i, u, c, s, f), (g = v.__e), (d = v.ref) && m.ref != d && (k || (k = []), m.ref && k.push(m.ref, null, v), k.push(d, v.__c || g, v)), null != g ? (null == b && (b = g), 'function' == typeof v.type && v.__k === m.__k ? (v.__d = s = h(v, s, n)) : (s = y(n, v, m, E, g, s)), 'function' == typeof t.type && (t.__d = s)) : s && m.__e == s && s.parentNode != n && (s = a(m));
				}
			for (t.__e = b, p = C; p--; ) null != E[p] && ('function' == typeof t.type && null != E[p].__e && E[p].__e == t.__d && (t.__d = a(o, p + 1)), A(E[p], E[p]));
			if (k) for (p = 0; p < k.length; p++) S(k[p], k[++p], k[++p]);
		}
		function h(n, e, t) {
			for (var o, r = n.__k, i = 0; r && i < r.length; i++) (o = r[i]) && ((o.__ = n), (e = 'function' == typeof o.type ? h(o, e, t) : y(t, o, o, r, o.__e, e)));
			return e;
		}
		function m(n, e) {
			return (
				(e = e || []),
				null == n ||
					'boolean' == typeof n ||
					(Array.isArray(n)
						? n.some(function (n) {
								m(n, e);
						  })
						: e.push(n)),
				e
			);
		}
		function y(n, e, t, o, r, i) {
			var _, u, l;
			if (void 0 !== e.__d) (_ = e.__d), (e.__d = void 0);
			else if (null == t || r != i || null == r.parentNode)
				n: if (null == i || i.parentNode !== n) n.appendChild(r), (_ = null);
				else {
					for (u = i, l = 0; (u = u.nextSibling) && l < o.length; l += 2) if (u == r) break n;
					n.insertBefore(r, i), (_ = i);
				}
			return void 0 !== _ ? _ : r.nextSibling;
		}
		function v(n, e, t) {
			'-' === e[0] ? n.setProperty(e, t) : (n[e] = null == t ? '' : 'number' != typeof t || W.test(e) ? t : t + 'px');
		}
		function g(n, e, t, o, r) {
			var i;
			n: if ('style' === e)
				if ('string' == typeof t) n.style.cssText = t;
				else {
					if (('string' == typeof o && (n.style.cssText = o = ''), o)) for (e in o) (t && e in t) || v(n.style, e, '');
					if (t) for (e in t) (o && t[e] === o[e]) || v(n.style, e, t[e]);
				}
			else if ('o' === e[0] && 'n' === e[1]) (i = e !== (e = e.replace(/Capture$/, ''))), (e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2)), n.l || (n.l = {}), (n.l[e + i] = t), t ? o || n.addEventListener(e, i ? k : b, i) : n.removeEventListener(e, i ? k : b, i);
			else if ('dangerouslySetInnerHTML' !== e) {
				if (r) e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
				else if ('href' !== e && 'list' !== e && 'form' !== e && 'tabIndex' !== e && 'download' !== e && e in n)
					try {
						n[e] = null == t ? '' : t;
						break n;
					} catch (n) {}
				'function' == typeof t || (null != t && (!1 !== t || ('a' === e[0] && 'r' === e[1])) ? n.setAttribute(e, t) : n.removeAttribute(e));
			}
		}
		function b(n) {
			this.l[n.type + !1](N.event ? N.event(n) : n);
		}
		function k(n) {
			this.l[n.type + !0](N.event ? N.event(n) : n);
		}
		function x(n, e, t, r, i, _, u, a, s) {
			var f,
				p,
				h,
				m,
				y,
				v,
				g,
				b,
				k,
				x,
				E,
				S = e.type;
			if (void 0 !== e.constructor) return null;
			null != t.__h && ((s = t.__h), (a = e.__e = t.__e), (e.__h = null), (_ = [a])), (f = N.__b) && f(e);
			try {
				n: if ('function' == typeof S) {
					if (((b = e.props), (k = (f = S.contextType) && r[f.__c]), (x = f ? (k ? k.props.value : f.__) : r), t.__c ? (g = (p = e.__c = t.__c).__ = p.__E) : ('prototype' in S && S.prototype.render ? (e.__c = p = new S(b, x)) : ((e.__c = p = new c(b, x)), (p.constructor = S), (p.render = T)), k && k.sub(p), (p.props = b), p.state || (p.state = {}), (p.context = x), (p.__n = r), (h = p.__d = !0), (p.__h = [])), null == p.__s && (p.__s = p.state), null != S.getDerivedStateFromProps && (p.__s == p.state && (p.__s = o({}, p.__s)), o(p.__s, S.getDerivedStateFromProps(b, p.__s))), (m = p.props), (y = p.state), h)) null == S.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
					else {
						if ((null == S.getDerivedStateFromProps && b !== m && null != p.componentWillReceiveProps && p.componentWillReceiveProps(b, x), (!p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(b, p.__s, x)) || e.__v === t.__v)) {
							(p.props = b),
								(p.state = p.__s),
								e.__v !== t.__v && (p.__d = !1),
								(p.__v = e),
								(e.__e = t.__e),
								(e.__k = t.__k),
								e.__k.forEach(function (n) {
									n && (n.__ = e);
								}),
								p.__h.length && u.push(p);
							break n;
						}
						null != p.componentWillUpdate && p.componentWillUpdate(b, p.__s, x),
							null != p.componentDidUpdate &&
								p.__h.push(function () {
									p.componentDidUpdate(m, y, v);
								});
					}
					(p.context = x), (p.props = b), (p.state = p.__s), (f = N.__r) && f(e), (p.__d = !1), (p.__v = e), (p.__P = n), (f = p.render(p.props, p.state, p.context)), (p.state = p.__s), null != p.getChildContext && (r = o(o({}, r), p.getChildContext())), h || null == p.getSnapshotBeforeUpdate || (v = p.getSnapshotBeforeUpdate(m, y)), (E = null != f && f.type === l && null == f.key ? f.props.children : f), d(n, Array.isArray(E) ? E : [E], e, t, r, i, _, u, a, s), (p.base = e.__e), (e.__h = null), p.__h.length && u.push(p), g && (p.__E = p.__ = null), (p.__e = !1);
				} else null == _ && e.__v === t.__v ? ((e.__k = t.__k), (e.__e = t.__e)) : (e.__e = C(t.__e, e, t, r, i, _, u, s));
				(f = N.diffed) && f(e);
			} catch (n) {
				(e.__v = null), (s || null != _) && ((e.__e = a), (e.__h = !!s), (_[_.indexOf(a)] = null)), N.__e(n, e, t);
			}
		}
		function E(n, e) {
			N.__c && N.__c(e, n),
				n.some(function (e) {
					try {
						(n = e.__h),
							(e.__h = []),
							n.some(function (n) {
								n.call(e);
							});
					} catch (n) {
						N.__e(n, e.__v);
					}
				});
		}
		function C(n, e, t, o, i, _, u, l) {
			var c,
				s,
				f,
				p = t.props,
				h = e.props,
				m = e.type,
				y = 0;
			if (('svg' === m && (i = !0), null != _))
				for (; y < _.length; y++)
					if ((c = _[y]) && 'setAttribute' in c == !!m && (m ? c.localName === m : 3 === c.nodeType)) {
						(n = c), (_[y] = null);
						break;
					}
			if (null == n) {
				if (null === m) return document.createTextNode(h);
				(n = i ? document.createElementNS('http://www.w3.org/2000/svg', m) : document.createElement(m, h.is && h)), (_ = null), (l = !1);
			}
			if (null === m) p === h || (l && n.data === h) || (n.data = h);
			else {
				if (((_ = _ && O.call(n.childNodes)), (s = (p = t.props || R).dangerouslySetInnerHTML), (f = h.dangerouslySetInnerHTML), !l)) {
					if (null != _) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
					(f || s) && ((f && ((s && f.__html == s.__html) || f.__html === n.innerHTML)) || (n.innerHTML = (f && f.__html) || ''));
				}
				if (
					((function (n, e, t, o, r) {
						var i;
						for (i in t) 'children' === i || 'key' === i || i in e || g(n, i, null, t[i], o);
						for (i in e) (r && 'function' != typeof e[i]) || 'children' === i || 'key' === i || 'value' === i || 'checked' === i || t[i] === e[i] || g(n, i, e[i], t[i], o);
					})(n, h, p, i, l),
					f)
				)
					e.__k = [];
				else if (((y = e.props.children), d(n, Array.isArray(y) ? y : [y], e, t, o, i && 'foreignObject' !== m, _, u, _ ? _[0] : t.__k && a(t, 0), l), null != _)) for (y = _.length; y--; ) null != _[y] && r(_[y]);
				l || ('value' in h && void 0 !== (y = h.value) && (y !== n.value || ('progress' === m && !y) || ('option' === m && y !== p.value)) && g(n, 'value', y, p.value, !1), 'checked' in h && void 0 !== (y = h.checked) && y !== n.checked && g(n, 'checked', y, p.checked, !1));
			}
			return n;
		}
		function S(n, e, t) {
			try {
				'function' == typeof n ? n(e) : (n.current = e);
			} catch (n) {
				N.__e(n, t);
			}
		}
		function A(n, e, t) {
			var o, i;
			if ((N.unmount && N.unmount(n), (o = n.ref) && ((o.current && o.current !== n.__e) || S(o, null, e)), null != (o = n.__c))) {
				if (o.componentWillUnmount)
					try {
						o.componentWillUnmount();
					} catch (n) {
						N.__e(n, e);
					}
				o.base = o.__P = null;
			}
			if ((o = n.__k)) for (i = 0; i < o.length; i++) o[i] && A(o[i], e, 'function' != typeof n.type);
			t || null == n.__e || r(n.__e), (n.__e = n.__d = void 0);
		}
		function T(n, e, t) {
			return this.constructor(n, t);
		}
		function I(n, e, t) {
			var o, r, _;
			N.__ && N.__(n, e), (r = (o = 'function' == typeof t) ? null : (t && t.__k) || e.__k), (_ = []), x(e, (n = ((!o && t) || e).__k = i(l, null, [n])), r || R, R, void 0 !== e.ownerSVGElement, !o && t ? [t] : r ? null : e.firstChild ? O.call(e.childNodes) : null, _, !o && t ? t : r ? r.__e : e.firstChild, o), E(_, n);
		}
		function w(n, e) {
			I(n, e, w);
		}
		function L(n, e, t) {
			var r,
				i,
				u,
				l = o({}, n.props);
			for (u in e) 'key' == u ? (r = e[u]) : 'ref' == u ? (i = e[u]) : (l[u] = e[u]);
			return arguments.length > 2 && (l.children = arguments.length > 3 ? O.call(arguments, 2) : t), _(n.type, l, r || n.key, i || n.ref, null);
		}
		function U(n, e) {
			var t = {
				__c: (e = '__cC' + G++),
				__: n,
				Consumer: function (n, e) {
					return n.children(e);
				},
				Provider: function (n) {
					var t, o;
					return (
						this.getChildContext ||
							((t = []),
							((o = {})[e] = this),
							(this.getChildContext = function () {
								return o;
							}),
							(this.shouldComponentUpdate = function (n) {
								this.props.value !== n.value && t.some(f);
							}),
							(this.sub = function (n) {
								t.push(n);
								var e = n.componentWillUnmount;
								n.componentWillUnmount = function () {
									t.splice(t.indexOf(n), 1), e && e.call(n);
								};
							})),
						n.children
					);
				},
			};
			return (t.Provider.__ = t.Consumer.contextType = t);
		}
		t.r(e),
			t.d(e, 'render', function () {
				return I;
			}),
			t.d(e, 'hydrate', function () {
				return w;
			}),
			t.d(e, 'createElement', function () {
				return i;
			}),
			t.d(e, 'h', function () {
				return i;
			}),
			t.d(e, 'Fragment', function () {
				return l;
			}),
			t.d(e, 'createRef', function () {
				return u;
			}),
			t.d(e, 'isValidElement', function () {
				return D;
			}),
			t.d(e, 'Component', function () {
				return c;
			}),
			t.d(e, 'cloneElement', function () {
				return L;
			}),
			t.d(e, 'createContext', function () {
				return U;
			}),
			t.d(e, 'toChildArray', function () {
				return m;
			}),
			t.d(e, 'options', function () {
				return N;
			});
		var O,
			N,
			P,
			D,
			H,
			j,
			M,
			G,
			R = {},
			F = [],
			W = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
		(O = F.slice),
			(N = {
				__e: function (n, e, t, o) {
					for (var r, i, _; (e = e.__); )
						if ((r = e.__c) && !r.__)
							try {
								if (((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(n)), (_ = r.__d)), null != r.componentDidCatch && (r.componentDidCatch(n, o || {}), (_ = r.__d)), _)) return (r.__E = r);
							} catch (e) {
								n = e;
							}
					throw n;
				},
			}),
			(P = 0),
			(D = function (n) {
				return null != n && void 0 === n.constructor;
			}),
			(c.prototype.setState = function (n, e) {
				var t;
				(t = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = o({}, this.state))), 'function' == typeof n && (n = n(o({}, t), this.props)), n && o(t, n), null != n && this.__v && (e && this.__h.push(e), f(this));
			}),
			(c.prototype.forceUpdate = function (n) {
				this.__v && ((this.__e = !0), n && this.__h.push(n), f(this));
			}),
			(c.prototype.render = l),
			(H = []),
			(j = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
			(p.__r = 0),
			(G = 0);
	},
	mdyV: function (n, e, t) {
		'use strict';
		t.r(e);
		var o = t('hosL'),
			r = o.h,
			i = o.render,
			_ = o.hydrate,
			u = function (n) {
				return n && n.default ? n.default : n;
			},
			l = function (n) {
				return '/' === n[n.length - 1] ? n : n + '/';
			};
		if (('serviceWorker' in navigator && navigator.serviceWorker.register(l(t.p) + 'sw.js'), 'function' == typeof u(t('QfWi')))) {
			var c = document.getElementById('preact_root') || document.body.firstElementChild;
			0,
				(function () {
					var n = u(t('QfWi')),
						e = {},
						o = document.querySelector('[type="__PREACT_CLI_DATA__"]');
					o && (e = JSON.parse(decodeURI(o.innerHTML)).preRenderData || e);
					var a = { preRenderData: e },
						s = e.url ? l(e.url) : '';
					(_ && s === l(location.pathname) ? _ : i)(r(n, { CLI_DATA: a }), document.body, c);
				})();
		}
	},
	szUT: function (n, e, t) {
		'use strict';
		(function (n) {
			function o(e) {
				return n(
					'div',
					{ class: 'GUI_COMPONENT' },
					n('label', { class: 'GUI_LABEL' }, e.name),
					n('input', {
						onclick: function (n) {
							e.change(n.target.checked);
						},
						class: 'GUI_CHECKBOX',
						type: 'checkbox',
					})
				);
			}
			t.d(e, 'a', function () {
				return o;
			});
			t('QRet');
		}.call(this, t('hosL').h));
	},
	ugae: function (n, e, t) {
		'use strict';
		(function (n) {
			function o(e) {
				var t = [];
				return (
					e.options.components.forEach(function (e) {
						switch (e.type) {
							case 'folder':
								t.push(n(l.a, { name: e.name, content: e.content }));
								break;
							case 'checkbox':
								t.push(
									n(_.a, {
										name: e.name,
										change: function (n) {
											return e.change(n);
										},
									})
								);
								break;
							case 'slider':
								console.log(e.opt.step),
									t.push(
										n(u.a, {
											name: e.name,
											change: function (n) {
												return e.change(n);
											},
											min: e.opt.min,
											max: e.opt.max,
											step: e.opt.step,
										})
									);
						}
					}),
					n('div', { id: 'app' }, n('div', { className: '__GUI__' }, n('div', { className: 'GUI_TITLE' }, 'MY GUI TITLE'), t))
				);
			}
			function r(e) {
				console.log('settings: ', e), null != e && e.components && null != e && e.title && null != e && e.width ? (console.log('rendering'), 'undefined' != typeof window && Object(i.render)(n(o, { options: e }), document.querySelector('body'))) : 'undefined' != typeof window && console.error('You did not pass the right parameters for this gui');
			}
			t.d(e, 'a', function () {
				return r;
			});
			var i = t('hosL'),
				_ = t('szUT'),
				u = t('N446'),
				l = t('GVvd');
		}.call(this, t('hosL').h));
	},
});
//# sourceMappingURL=bundle.330d1.js.map

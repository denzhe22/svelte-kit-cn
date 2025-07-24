const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BYxdZykG.js",app:"_app/immutable/entry/app.C2SZQdRT.js",imports:["_app/immutable/entry/start.BYxdZykG.js","_app/immutable/chunks/BRiF05Oo.js","_app/immutable/chunks/C0Qvghj5.js","_app/immutable/chunks/BCiPhWVJ.js","_app/immutable/chunks/CL6B5mrX.js","_app/immutable/entry/app.C2SZQdRT.js","_app/immutable/chunks/BCiPhWVJ.js","_app/immutable/chunks/C0Qvghj5.js","_app/immutable/chunks/CL6B5mrX.js","_app/immutable/chunks/CWj6FrbW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Coqy3Qen.js')),
			__memo(() => import('./chunks/1-D3srHAJD.js')),
			__memo(() => import('./chunks/2-BuFeDOnm.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

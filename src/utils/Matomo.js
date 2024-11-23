import {useEffect} from "react";

const Matomo = () => {
	useEffect(() => {
		const _paq = (window._paq = window._paq || []);
		_paq.push(["trackPageView"]);
		_paq.push(["enableLinkTracking"]);
		_paq.push(["disableCookies"]);

		const u = "https://delfinowebsite.matomo.cloud/";
		_paq.push(["setTrackerUrl", u + "matomo.php"]);
		_paq.push(["setSiteId", "2"]);

		const d = document;
		const g = d.createElement("script");
		const s = d.getElementsByTagName("script")[0];
		g.async = true;
		g.src = "/matomo.js"; // Load script from the local directory
		s.parentNode.insertBefore(g, s);
	}, []);

	return null;
};

export default Matomo;

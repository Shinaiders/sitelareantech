"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSDK: any;
  }
}

const ChatwootWidget: React.FC = () => {
  useEffect(() => {
    (function (d, t) {
      var BASE_URL = "https://chatwoot.larean.com.br";
      var g = d.createElement(t) as HTMLScriptElement,
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      if (s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "mZorUupEa2t57ErZMUKBzToi",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);

  return null;
};

export default ChatwootWidget;

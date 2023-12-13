import React, { useEffect } from "react";


const TradingGraphc = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
        script.async = true;
        script.text = JSON.stringify({
          "interval": "1m",
          "width": 425,
          "isTransparent": false,
          "height": 450,
          "symbol": "NASDAQ:AAPL",
          "showIntervalTabs": true,
          "locale": "in",
          "colorTheme": "dark"
        });
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <>
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>


      
    </>
  );
};

export default TradingGraphc;

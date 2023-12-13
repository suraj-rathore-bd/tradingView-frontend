import React from "react";
import "./Stockchart.css";

function Stockchart() {
  return (
    <>
      <div className="tv-layout-width-full mx-5 md:mx-10">
        <div className="tv-category__tab-page tv-card-exterior">
          <div className="tv-feed tv-feed--no-hindent tv-feed--tablet-top-indent tv-feed--no-min-height tv-feed--no-vertical-margin">
            {/* <div className="tv-category__content tv-category__content--market-tabs js-category-header">
        <div className="tv-category__market-tabs js-market-category-tabs">
          <div className="elementWrap-mPUPrjQo">
            <div className="wrapOverflow-wXGVFOC9">
              <div className="wrap-wXGVFOC9">
                <div className="scrollWrap-wXGVFOC9 noScrollBar-wXGVFOC9">
                  <div className="tabsOuterWrap-mPUPrjQo">
                    <div className="tabsWrap-mPUPrjQo">
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-all-stocks/"
                      >
                        <div className="tv-category-tab__title">All</div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab tv-category-tab--active"
                        href="/markets/stocks-india/market-movers-large-cap/"
                      >
                        <div className="tv-category-tab__title">Large-cap</div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-small-cap/"
                      >
                        <div className="tv-category-tab__title">Small-cap</div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-largest-employers/"
                      >
                        <div className="tv-category-tab__title">
                          Largest employers
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-high-dividend/"
                      >
                        <div className="tv-category-tab__title">
                          High-dividend
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-highest-net-income/"
                      >
                        <div className="tv-category-tab__title">
                          Highest net income
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-highest-cash/"
                      >
                        <div className="tv-category-tab__title">
                          Highest cash
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-gainers/"
                      >
                        <div className="tv-category-tab__title">
                          Top gainers
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-losers/"
                      >
                        <div className="tv-category-tab__title">
                          Biggest losers
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-active/"
                      >
                        <div className="tv-category-tab__title">
                          Most active
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-unusual-volume/"
                      >
                        <div className="tv-category-tab__title">
                          Unusual volume
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-most-volatile/"
                      >
                        <div className="tv-category-tab__title">
                          Most volatile
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-high-beta/"
                      >
                        <div className="tv-category-tab__title">High beta</div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-best-performing/"
                      >
                        <div className="tv-category-tab__title">
                          Best performing
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-highest-revenue/"
                      >
                        <div className="tv-category-tab__title">
                          Highest revenue
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-most-expensive/"
                      >
                        <div className="tv-category-tab__title">
                          Most expensive
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-penny-stocks/"
                      >
                        <div className="tv-category-tab__title">
                          Penny stocks
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-overbought/"
                      >
                        <div className="tv-category-tab__title">Overbought</div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-oversold/"
                      >
                        <div className="tv-category-tab__title">Oversold</div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-ath/"
                      >
                        <div className="tv-category-tab__title">
                          All-time high
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-atl/"
                      >
                        <div className="tv-category-tab__title">
                          All-time low
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-52wk-high/"
                      >
                        <div className="tv-category-tab__title">
                          52-week high
                        </div>
                      </a>
                      <a
                        title=""
                        className="tv-category-tab"
                        href="/markets/stocks-india/market-movers-52wk-low/"
                      >
                        <div className="tv-category-tab__title">
                          52-week low
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="scrollLeft-EZ52tOqA">
                  <div className="iconWrap-EZ52tOqA">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 10"
                        width={20}
                        height={10}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          d="M2 1l8 8 8-8"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="scrollRight-EZ52tOqA isVisible-EZ52tOqA">
                  <div className="iconWrap-EZ52tOqA">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 10"
                        width={20}
                        height={10}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          d="M2 1l8 8 8-8"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
          </div>
          <div className="tv-category__tab-page tv-card-exterior">
            <div className="tv-category__tab-description">
              <div className="tv-category__tab-description-content">
                <div className="tv-category-description">
                  <h1 className="tv-category-description__title text-lg">
                    Largest companies by market cap — Indian Stock Market
                  </h1>
                  <p className="tv-category-description__text">
                    Market capitalization shows the value of a corporation by
                    multiplying the stock price by the number of stocks
                    outstanding. Here you can see the companies with the largest
                    market cap. Large-cap stocks are usually industry and sector
                    leaders and represent well-known, established companies.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="js-screener-markets-page-init-ssr screener-markets-page-container"
              data-props-id="Yy2REH"
            >
              <div className="root-cFX_j1gd">
                <div className="marketHeader-JDysp0WY">
                  {/* <div className="columnSetWrapper-lplEt7K5">
              <div
                className="scroll-wrap-mf1FlhVw"
                data-name="square-tabs-buttons"
              >
                <div
                  id="id_market-screener-header-columnset-tabs_tablist"
                  role="tablist"
                  aria-orientation="horizontal"
                  className="square-tabs-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw"
                >
                  <button
                    role="tab"
                    tabIndex={0}
                    aria-selected="true"
                    id="overview"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw selected-huvpscfz size-small-huvpscfz size-small-mf1FlhVw"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Overview</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Overview</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="performance"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Performance</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Performance</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="valuation"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Valuation</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Valuation</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="dividends"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Dividends</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Dividends</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="profitability"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Profitability</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Profitability</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="incomeStatement"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Income Statement</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Income Statement</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="balanceSheet"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw fake-huvpscfz"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Balance Sheet</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Balance Sheet</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="cashFlow"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw fake-huvpscfz"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Cash Flow</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Cash Flow</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="oscillators"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw fake-huvpscfz"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Oscillators</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Oscillators</span>
                    </span>
                  </button>
                  <button
                    role="tab"
                    tabIndex={-1}
                    aria-selected="false"
                    id="trendFollowing"
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw fake-huvpscfz"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">Trend-Following</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">Trend-Following</span>
                    </span>
                  </button>
                  <button
                    aria-hidden="true"
                    tabIndex={-1}
                    className="square-tab-button-huvpscfz square-tab-button-mf1FlhVw size-small-huvpscfz size-small-mf1FlhVw"
                  >
                    <span className="tab-content-huvpscfz">
                      <span className="content-mf1FlhVw">
                        More
                        <span className="arrow-icon-nV6fm1zO">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            width={18}
                            height={18}
                          >
                            <path
                              fill="currentColor"
                              d="M5.5 6.44a.75.75 0 1 0-1 1.12l1-1.12zM9 10.5l-.5.56c.29.25.71.25 1 0L9 10.5zm4.5-2.94a.75.75 0 0 0-1-1.12l1 1.12zm-9 0l4 3.5 1-1.12-4-3.5-1 1.12zm5 3.5l4-3.5-1-1.12-4 3.5 1 1.12z"
                            />
                          </svg>
                        </span>
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="tab-hidden-content-huvpscfz"
                    >
                      <span className="content-mf1FlhVw">
                        More
                        <span className="arrow-icon-nV6fm1zO">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            width={18}
                            height={18}
                          >
                            <path
                              fill="currentColor"
                              d="M5.5 6.44a.75.75 0 1 0-1 1.12l1-1.12zM9 10.5l-.5.56c.29.25.71.25 1 0L9 10.5zm4.5-2.94a.75.75 0 0 0-1-1.12l1 1.12zm-9 0l4 3.5 1-1.12-4-3.5-1 1.12zm5 3.5l4-3.5-1-1.12-4 3.5 1 1.12z"
                            />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div> */}
                </div>
                <div className="shadow-zuRb9wy5 screener-container-is-scrolled-to-end">
                  <div className="tableWrapSticky-SfGgNYTG">
                    <div className="scrollWrapSticky-SfGgNYTG">
                      <table className="table-Ngq2xrcG tableSticky-SfGgNYTG">
                        <thead className="tableHead-RHkwFEqU">
                          <tr className="row-RdUXZpkv">
                            <th
                              className="cell-seAzPAHn cell-fixed-RHkwFEqU onscroll-shadow"
                              data-field="Ticker"
                              style={{ width: 328 }}
                            >
                              <div className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip left-RfwJ5pFm">
                                <div className="tickerCellWrap-cfjBjL5J">
                                  <div className="tickerCell-cfjBjL5J">
                                    <div className="tickerCellData-cfjBjL5J withDataMatches-cfjBjL5J">
                                      <div className="headCellTitle-MSg2GmPp">
                                        <div>Symbol</div>
                                      </div>
                                      <span
                                        className="tickerCellMatches-cfjBjL5J tickerCellMatchesPosition-cfjBjL5J"
                                        data-matches={100}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="MarketCap"
                              style={{ width: "107.287px" }}
                            >
                              <div
                                className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                title="Market capitalization"
                              >
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Market cap</div>
                                </div>
                                <div className="sortUnderline-zKy1OXOg" />
                                <span className="sortDirection-zKy1OXOg sortDesc-zKy1OXOg sortIndicatorLeft-RHkwFEqU">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                    width={18}
                                    height={18}
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M8.5 3.84l.34.28 4 3.5-.66.76L9.01 5.6V14H8V5.6L4.84 8.38l-.66-.76 4-3.5.33-.28z"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="Price"
                              style={{ width: "98.55px" }}
                            >
                              <div className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm">
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Price</div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="Change|TimeResolution1D"
                              style={{ width: "98.4625px" }}
                            >
                              <div className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm">
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Change % 1D</div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="Volume|TimeResolution1D"
                              style={{ width: "86.025px" }}
                            >
                              <div className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm">
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Volume 1D</div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="RelativeVolume|TimeResolution1D"
                              style={{ width: "140.975px" }}
                            >
                              <div className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm">
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Relative Volume 1D</div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="PriceToEarnings"
                              style={{ width: "65.85px" }}
                            >
                              <div
                                className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                title="Price to earnings ratio"
                              >
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>P/E</div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="EpsDiluted|ttm"
                              style={{ width: "90.825px" }}
                            >
                              <div
                                className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                title="EPS diluted (TTM)"
                              >
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>EPS diluted</div>
                                  <div className="bottomLine-MSg2GmPp">
                                    <div className="paramTitle-MSg2GmPp">
                                      (TTM)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="EpsDilutedGrowth|YoYTTM"
                              style={{ width: "151.25px" }}
                            >
                              <div
                                className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                title="EPS diluted growth % (TTM YoY)"
                              >
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>EPS diluted growth %</div>
                                  <div className="bottomLine-MSg2GmPp">
                                    <div className="paramTitle-MSg2GmPp">
                                      (TTM YoY)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="DividendsYield|ttm"
                              style={{ width: "121.613px" }}
                            >
                              <div
                                className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                title="Dividend yield % (TTM)"
                              >
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Dividend yield %</div>
                                  <div className="bottomLine-MSg2GmPp">
                                    <div className="paramTitle-MSg2GmPp">
                                      (TTM)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="Sector"
                              style={{ width: "173.275px" }}
                            >
                              <div
                                className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip left-RfwJ5pFm"
                                title="Sector"
                              >
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Sector</div>
                                </div>
                              </div>
                            </th>
                            <th
                              className="cell-seAzPAHn"
                              data-field="AnalystRating"
                              style={{ width: "112.613px" }}
                            >
                              <div
                                className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip left-RfwJ5pFm"
                                title="Analyst Rating"
                              >
                                <div className="headCellTitle-MSg2GmPp">
                                  <div>Analyst Rating</div>
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                  <div className="tableWrap-SfGgNYTG">
                    <div className="scrollWrap-YjTIfjVd">
                      <div className="stretch-gZJAyxim">
                        <table className="table-Ngq2xrcG">
                          <thead className="tableHead-RHkwFEqU">
                            <tr className="row-RdUXZpkv">
                              <th
                                className="cell-seAzPAHn cell-fixed-RHkwFEqU onscroll-shadow"
                                data-field="Ticker"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip left-RfwJ5pFm"
                                  title="Symbol"
                                >
                                  <div className="tickerCellWrap-cfjBjL5J">
                                    <div className="tickerCell-cfjBjL5J">
                                      <div className="tickerCellData-cfjBjL5J withDataMatches-cfjBjL5J">
                                        <div className="headCellTitle-MSg2GmPp">
                                          <div>Symbol</div>
                                        </div>
                                        <span
                                          className="tickerCellMatches-cfjBjL5J tickerCellMatchesPosition-cfjBjL5J"
                                          data-matches={100}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="MarketCap"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="Market capitalization"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Market cap</div>
                                  </div>
                                  <div className="sortUnderline-zKy1OXOg" />
                                  <span className="sortDirection-zKy1OXOg sortDesc-zKy1OXOg sortIndicatorLeft-RHkwFEqU">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M8.5 3.84l.34.28 4 3.5-.66.76L9.01 5.6V14H8V5.6L4.84 8.38l-.66-.76 4-3.5.33-.28z"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </th>
                              <th className="cell-seAzPAHn" data-field="Price">
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="Price"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Price</div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="Change|TimeResolution1D"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="Change % 1D"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Change % 1D</div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="Volume|TimeResolution1D"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="Volume 1D"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Volume 1D</div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="RelativeVolume|TimeResolution1D"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="Relative Volume 1D"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Relative Volume 1D</div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="PriceToEarnings"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="Price to earnings ratio"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>P/E</div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="EpsDiluted|ttm"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="EPS diluted (TTM)"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>EPS diluted</div>
                                    <div className="bottomLine-MSg2GmPp">
                                      <div className="paramTitle-MSg2GmPp">
                                        (TTM)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="EpsDilutedGrowth|YoYTTM"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="EPS diluted growth % (TTM YoY)"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>EPS diluted growth %</div>
                                    <div className="bottomLine-MSg2GmPp">
                                      <div className="paramTitle-MSg2GmPp">
                                        (TTM YoY)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="DividendsYield|ttm"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip right-RfwJ5pFm"
                                  title="Dividend yield % (TTM)"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Dividend yield %</div>
                                    <div className="bottomLine-MSg2GmPp">
                                      <div className="paramTitle-MSg2GmPp">
                                        (TTM)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </th>
                              <th className="cell-seAzPAHn" data-field="Sector">
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip left-RfwJ5pFm"
                                  title="Sector"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Sector</div>
                                  </div>
                                </div>
                              </th>
                              <th
                                className="cell-seAzPAHn"
                                data-field="AnalystRating"
                              >
                                <div
                                  className="cellWrapper-RfwJ5pFm cellContent-seAzPAHn apply-common-tooltip left-RfwJ5pFm"
                                  title="Analyst Rating"
                                >
                                  <div className="headCellTitle-MSg2GmPp">
                                    <div>Analyst Rating</div>
                                  </div>
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody tabIndex={100}>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:RELIANCE"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/reliance-industrial-infrastructure.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="RELIANCE − RELIANCE INDS"
                                    href="/symbols/NSE-RELIANCE/"
                                    target="_blank"
                                  >
                                    RELIANCE
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="RELIANCE INDS"
                                  >
                                    RELIANCE INDS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                15.658T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2318.70
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.20%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.777M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.33
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                24.23
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                95.71
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −3.17%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.39%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Energy Minerals"
                                >
                                  Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TCS"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/tata.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TCS − TATA CONSULTANCY S"
                                    href="/symbols/NSE-TCS/"
                                    target="_blank"
                                  >
                                    TCS
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TATA CONSULTANCY S"
                                  >
                                    TATA CONSULTANCY S
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                12.941T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3586.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.37%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.853M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.04
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                30.00
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                119.55
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  13.66%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.39%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/technology-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Technology Services"
                                >
                                  Technology Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:HDFCBANK"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/hdfc-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="HDFCBANK − HDFC BANK"
                                    href="/symbols/NSE-HDFCBANK/"
                                    target="_blank"
                                  >
                                    HDFCBANK
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="HDFC BANK"
                                  >
                                    HDFC BANK
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                11.606T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1541.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.75%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                18.595M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.69
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                17.69
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                87.10
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  22.33%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.26%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ICICIBANK"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/icici-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ICICIBANK − ICICI BANK"
                                    href="/symbols/NSE-ICICIBANK/"
                                    target="_blank"
                                  >
                                    ICICIBANK
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ICICI BANK"
                                  >
                                    ICICI BANK
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.518T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                940.40
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.11%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.851M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.43
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                17.96
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                52.35
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  33.89%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.85%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:INFY"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/infosys.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="INFY − INFOSYS LTD"
                                    href="/symbols/NSE-INFY/"
                                    target="_blank"
                                  >
                                    INFY
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="INFOSYS LTD"
                                  >
                                    INFOSYS LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.998T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1459.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.06%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.099M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.84
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                24.68
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                59.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  11.63%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.37%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/technology-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Technology Services"
                                >
                                  Technology Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:HINDUNILVR"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/unilever.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="HINDUNILVR − HINDUSTAN UNILEVER"
                                    href="/symbols/NSE-HINDUNILVR/"
                                    target="_blank"
                                  >
                                    HINDUNILVR
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="HINDUSTAN UNILEVER"
                                  >
                                    HINDUSTAN UNILEVER
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.891T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2519.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.45%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                867.805K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.59
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                57.51
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                43.81
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  12.33%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.58%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ITC"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/itc.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ITC − ITC LTD"
                                    href="/symbols/NSE-ITC/"
                                    target="_blank"
                                  >
                                    ITC
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ITC LTD"
                                  >
                                    ITC LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.437T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                437.25
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.26%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.592M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.63
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                27.33
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                16.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  20.56%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.90%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SBIN"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/state-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SBIN − STATE BK OF INDIA"
                                    href="/symbols/NSE-SBIN/"
                                    target="_blank"
                                  >
                                    SBIN
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="STATE BK OF INDIA"
                                  >
                                    STATE BK OF INDIA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.229T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                591.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.81%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                8.723M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.53
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7.89
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                74.92
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  89.30%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.87%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BHARTIARTL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/airtel.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BHARTIARTL − BHARTI AIRTEL LTD"
                                    href="/symbols/NSE-BHARTIARTL/"
                                    target="_blank"
                                  >
                                    BHARTIARTL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BHARTI AIRTEL LTD"
                                  >
                                    BHARTI AIRTEL LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.18T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                927.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.30%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.186M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.40
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                66.17
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                14.01
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  44.55%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.43%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/communications/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Communications"
                                >
                                  Communications
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:AIRTELPP.E1"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/airtel.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="AIRTELPP.E1 − BHARTI RS. 1.25 PPD UP"
                                    href="/symbols/NSE-AIRTELPP.E1/"
                                    target="_blank"
                                  >
                                    AIRTELPP.E1
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BHARTI RS. 1.25 PPD UP"
                                  >
                                    BHARTI RS. 1.25 PPD UP
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.18T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                534.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.20%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                21.653K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.17
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.19%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/communications/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Communications"
                                >
                                  Communications
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BAJFINANCE"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/bajaj-finance.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BAJFINANCE − BAJAJ FINANCE LTD"
                                    href="/symbols/NSE-BAJFINANCE/"
                                    target="_blank"
                                  >
                                    BAJFINANCE
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BAJAJ FINANCE LTD"
                                  >
                                    BAJAJ FINANCE LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.759T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7879.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.32%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                519.204K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.53
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                38.74
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                203.38
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  43.14%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.38%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:LT"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/larsen-and-toubro.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="LT − LARSEN & TOUBRO"
                                    href="/symbols/NSE-LT/"
                                    target="_blank"
                                  >
                                    LT
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="LARSEN & TOUBRO"
                                  >
                                    LARSEN &amp; TOUBRO
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.254T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3074.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.53%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.529M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.64
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                38.39
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                80.08
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  23.75%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.78%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/industrial-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Industrial Services"
                                >
                                  Industrial Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:LICI"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/life-insurance-corporation-of-india.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="LICI − LIFE INSURA CORP OF INDIA"
                                    href="/symbols/NSE-LICI/"
                                    target="_blank"
                                  >
                                    LICI
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="LIFE INSURA CORP OF INDIA"
                                  >
                                    LIFE INSURA CORP OF INDIA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.032T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                639.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.24%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                199.871K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.29
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                8.59
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                74.35
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.46%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:KOTAKBANK"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/kotak-mahindra-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="KOTAKBANK − KOTAK MAHINDRA BAN"
                                    href="/symbols/NSE-KOTAKBANK/"
                                    target="_blank"
                                  >
                                    KOTAKBANK
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="KOTAK MAHINDRA BAN"
                                  >
                                    KOTAK MAHINDRA BAN
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3.424T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1739.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.99%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.944M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.42
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                21.17
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                82.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  25.44%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.09%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:HCLTECH"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/hcl-technologies.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="HCLTECH − HCL TECHNOLOGIES"
                                    href="/symbols/NSE-HCLTECH/"
                                    target="_blank"
                                  >
                                    HCLTECH
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="HCL TECHNOLOGIES"
                                  >
                                    HCL TECHNOLOGIES
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3.363T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1231.80
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.63%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.584M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.83
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                22.11
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                55.71
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  11.25%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">3.88%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/technology-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Technology Services"
                                >
                                  Technology Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:AXISBANK"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/axis-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="AXISBANK − AXIS BANK"
                                    href="/symbols/NSE-AXISBANK/"
                                    target="_blank"
                                  >
                                    AXISBANK
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="AXIS BANK"
                                  >
                                    AXIS BANK
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3.064T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1005.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.95%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.106M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.48
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                24.94
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                40.29
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −23.21%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.10%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:MARUTI"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/maruti-suzuki-india.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="MARUTI − MARUTI SUZUKI IND"
                                    href="/symbols/NSE-MARUTI/"
                                    target="_blank"
                                  >
                                    MARUTI
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="MARUTI SUZUKI IND"
                                  >
                                    MARUTI SUZUKI IND
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3.062T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                10160.30
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.30%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                210.856K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.36
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                31.64
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                321.11
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  118.43%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.87%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Durables"
                                >
                                  Consumer Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ASIANPAINT"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/asian-paints.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ASIANPAINT − ASIAN PAINTS LTD"
                                    href="/symbols/NSE-ASIANPAINT/"
                                    target="_blank"
                                  >
                                    ASIANPAINT
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ASIAN PAINTS LTD"
                                  >
                                    ASIAN PAINTS LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3.04T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3202.70
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.03%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                661.91K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.59
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                66.21
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                48.37
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  33.37%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.81%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/process-industries/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Process Industries"
                                >
                                  Process Industries
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TITAN"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/titan-company.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TITAN − TITAN COMPANY LTD"
                                    href="/symbols/NSE-TITAN/"
                                    target="_blank"
                                  >
                                    TITAN
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TITAN COMPANY LTD"
                                  >
                                    TITAN COMPANY LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.811T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3220.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.68%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                736.091K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.75
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                88.83
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                36.25
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">9.53%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.31%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Durables"
                                >
                                  Consumer Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ADANIENT"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/adani.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ADANIENT − ADANI ENTERPRISES"
                                    href="/symbols/NSE-ADANIENT/"
                                    target="_blank"
                                  >
                                    ADANIENT
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ADANI ENTERPRISES"
                                  >
                                    ADANI ENTERPRISES
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.809T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2459.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.22%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                770.232K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.51
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                104.73
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                23.49
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  167.72%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.05%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/distribution-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Distribution Services"
                                >
                                  Distribution Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SUNPHARMA"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/sun-pharmaceutical.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SUNPHARMA − SUN PHARMACEUTICAL"
                                    href="/symbols/NSE-SUNPHARMA/"
                                    target="_blank"
                                  >
                                    SUNPHARMA
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="SUN PHARMACEUTICAL"
                                  >
                                    SUN PHARMACEUTICAL
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.691T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1117.55
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.56%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.215M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.61
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                31.79
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                35.16
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  116.88%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.01%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/health-technology/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Health Technology"
                                >
                                  Health Technology
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:DMART"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/avenue-supermarts.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="DMART − AVENUE SUPERMARTS"
                                    href="/symbols/NSE-DMART/"
                                    target="_blank"
                                  >
                                    DMART
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="AVENUE SUPERMARTS"
                                  >
                                    AVENUE SUPERMARTS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.519T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3889.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.41%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                423.373K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.06
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                105.94
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                36.71
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  17.47%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/retail-trade/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Retail Trade"
                                >
                                  Retail Trade
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BAJAJFINSV"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <span className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat">
                                    B
                                  </span>
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BAJAJFINSV − BAJAJ FINSERV LTD"
                                    href="/symbols/NSE-BAJAJFINSV/"
                                    target="_blank"
                                  >
                                    BAJAJFINSV
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BAJAJ FINSERV LTD"
                                  >
                                    BAJAJ FINSERV LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.445T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1546.55
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.91%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                753.848K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.50
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                34.99
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                44.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  39.73%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.05%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ULTRACEMCO"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/ultratech-cement.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ULTRACEMCO − ULTRATECH CEMENT"
                                    href="/symbols/NSE-ULTRACEMCO/"
                                    target="_blank"
                                  >
                                    ULTRACEMCO
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ULTRATECH CEMENT"
                                  >
                                    ULTRATECH CEMENT
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.341T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                8152.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.38%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                167.803K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.35
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                45.50
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                179.16
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −28.46%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.46%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ONGC"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/oil-and-natural-gas.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ONGC − OIL & NATURAL GAS"
                                    href="/symbols/NSE-ONGC/"
                                    target="_blank"
                                  >
                                    ONGC
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="OIL & NATURAL GAS"
                                  >
                                    OIL &amp; NATURAL GAS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.299T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                182.25
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.27%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.22M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.57
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.09
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                29.92
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −26.88%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">6.09%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Energy Minerals"
                                >
                                  Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:NTPC"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/ntpc.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="NTPC − NTPC LTD"
                                    href="/symbols/NSE-NTPC/"
                                    target="_blank"
                                  >
                                    NTPC
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="NTPC LTD"
                                  >
                                    NTPC LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.279T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                233.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.70%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                15.69M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.91
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                12.69
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                18.41
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">3.77%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">3.01%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TATAMOTORS"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/tata.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TATAMOTORS − TATA MOTORS LTD."
                                    href="/symbols/NSE-TATAMOTORS/"
                                    target="_blank"
                                  >
                                    TATAMOTORS
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TATA MOTORS LTD."
                                  >
                                    TATA MOTORS LTD.
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.248T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                615.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.26%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.158M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.54
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                22.33
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                27.56
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.32%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Durables"
                                >
                                  Consumer Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:NESTLEIND"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/nestle.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="NESTLEIND − NESTLE INDIA"
                                    href="/symbols/NSE-NESTLEIND/"
                                    target="_blank"
                                  >
                                    NESTLEIND
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="NESTLE INDIA"
                                  >
                                    NESTLE INDIA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.216T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                22992.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.03%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                42.169K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.65
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                81.16
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                283.29
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  29.20%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.99%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:WIPRO"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/wipro.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="WIPRO − WIPRO LTD"
                                    href="/symbols/NSE-WIPRO/"
                                    target="_blank"
                                  >
                                    WIPRO
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="WIPRO LTD"
                                  >
                                    WIPRO LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.11T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                406.75
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.46%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.586M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.50
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                19.24
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                21.14
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.35%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.48%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/technology-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Technology Services"
                                >
                                  Technology Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:M_M"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/mahindra.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="M_M − MAHINDRA &MAHINDRA"
                                    href="/symbols/NSE-M_M/"
                                    target="_blank"
                                  >
                                    M_M
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="MAHINDRA &MAHINDRA"
                                  >
                                    MAHINDRA &amp;MAHINDRA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.894T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1525.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.20%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.01M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.35
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                14.71
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                103.69
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  38.81%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.06%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Durables"
                                >
                                  Consumer Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:POWERGRID"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/power-grid.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="POWERGRID − POWER GRID CORP"
                                    href="/symbols/NSE-POWERGRID/"
                                    target="_blank"
                                  >
                                    POWERGRID
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="POWER GRID CORP"
                                  >
                                    POWER GRID CORP
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.851T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                196.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.51%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7.63M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.40
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                11.98
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                16.36
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">4.01%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">4.61%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:JSWSTEEL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/jsw.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="JSWSTEEL − JSW STEEL LTD"
                                    href="/symbols/NSE-JSWSTEEL/"
                                    target="_blank"
                                  >
                                    JSWSTEEL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="JSW STEEL LTD"
                                  >
                                    JSW STEEL LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.848T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                755.25
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.18%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                724.796K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.32
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                32.38
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                23.33
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −63.90%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.44%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ADANIPORTS"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/adani.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ADANIPORTS − ADANI PORT SPECIAL"
                                    href="/symbols/NSE-ADANIPORTS/"
                                    target="_blank"
                                  >
                                    ADANIPORTS
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ADANI PORT SPECIAL"
                                  >
                                    ADANI PORT SPECIAL
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.781T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                821.90
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.33%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.252M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.39
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                28.16
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                29.19
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  33.90%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.60%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/transportation/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Transportation"
                                >
                                  Transportation
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:COALINDIA"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/coal-india.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="COALINDIA − COAL INDIA LTD"
                                    href="/symbols/NSE-COALINDIA/"
                                    target="_blank"
                                  >
                                    COALINDIA
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="COAL INDIA LTD"
                                  >
                                    COAL INDIA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.774T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                286.90
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.36%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.392M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.41
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.48
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                44.30
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  18.60%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">8.31%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Energy Minerals"
                                >
                                  Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ADANIGREEN"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/adani.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ADANIGREEN − ADANI GREEN ENERGY"
                                    href="/symbols/NSE-ADANIGREEN/"
                                    target="_blank"
                                  >
                                    ADANIGREEN
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ADANI GREEN ENERGY"
                                  >
                                    ADANI GREEN ENERGY
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.539T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                970.95
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.10%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                191.628K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.04
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                142.15
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.83
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  120.73%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw sell-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"
                                      />
                                    </svg>
                                  </span>
                                  Sell
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:LTIM"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/larsen-and-toubro.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="LTIM − LTIMINDTREE LTD"
                                    href="/symbols/NSE-LTIM/"
                                    target="_blank"
                                  >
                                    LTIM
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="LTIMINDTREE LTD"
                                  >
                                    LTIMINDTREE LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.534T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5227.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.79%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                147.128K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.53
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                35.10
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                148.90
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">6.42%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.15%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/commercial-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Commercial Services"
                                >
                                  Commercial Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TATASTEEL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/tata.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TATASTEEL − TATA STEEL LTD"
                                    href="/symbols/NSE-TATASTEEL/"
                                    target="_blank"
                                  >
                                    TATASTEEL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TATA STEEL LTD"
                                  >
                                    TATA STEEL LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.531T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                125.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.16%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                16.767M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.52
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                94.04
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.33
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −95.82%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.81%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:JIOFIN"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <span className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat">
                                    J
                                  </span>
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="JIOFIN − JIO FIN SERVICES LTD"
                                    href="/symbols/NSE-JIOFIN/"
                                    target="_blank"
                                  >
                                    JIOFIN
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="JIO FIN SERVICES LTD"
                                  >
                                    JIO FIN SERVICES LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.47T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                226.25
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.71%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                8.408M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.47
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ADANIPOWER"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/adani-power.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ADANIPOWER − ADANI POWER LTD"
                                    href="/symbols/NSE-ADANIPOWER/"
                                    target="_blank"
                                  >
                                    ADANIPOWER
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ADANI POWER LTD"
                                  >
                                    ADANI POWER LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.434T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                369.40
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.71%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.284M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.08
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                9.69
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                38.13
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  56.23%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BAJAJ_AUTO"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/bajaj-auto.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BAJAJ_AUTO − BAJAJ AUTO LTD"
                                    href="/symbols/NSE-BAJAJ_AUTO/"
                                    target="_blank"
                                  >
                                    BAJAJ_AUTO
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BAJAJ AUTO LTD"
                                  >
                                    BAJAJ AUTO LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.39T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4955.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.74%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                422.831K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.93
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                21.49
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                230.63
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">8.32%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.80%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Durables"
                                >
                                  Consumer Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:HDFCLIFE"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/hdfc-life.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="HDFCLIFE − HDFC LIFE INSURANC"
                                    href="/symbols/NSE-HDFCLIFE/"
                                    target="_blank"
                                  >
                                    HDFCLIFE
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="HDFC LIFE INSURANC"
                                  >
                                    HDFC LIFE INSURANC
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.344T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                621.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.62%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.837M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.85
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                93.58
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.64
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.59%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.30%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:DLF"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/dlf.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="DLF − DLF LTD"
                                    href="/symbols/NSE-DLF/"
                                    target="_blank"
                                  >
                                    DLF
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="DLF LTD"
                                  >
                                    DLF LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.302T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                528.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.43%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.457M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.52
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                62.44
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                8.46
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  28.16%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.74%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:HINDZINC"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/hindustan-zinc.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="HINDZINC − HINDUSTAN ZINC"
                                    href="/symbols/NSE-HINDZINC/"
                                    target="_blank"
                                  >
                                    HINDZINC
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="HINDUSTAN ZINC"
                                  >
                                    HINDUSTAN ZINC
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.302T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                305.90
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.73%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                174.498K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.29
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                13.78
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                22.21
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −12.62%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  20.04%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw sell-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"
                                      />
                                    </svg>
                                  </span>
                                  Sell
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SBILIFE"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/sbi-life-insurance.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SBILIFE − SBI LIFE INSURANCE"
                                    href="/symbols/NSE-SBILIFE/"
                                    target="_blank"
                                  >
                                    SBILIFE
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="SBI LIFE INSURANCE"
                                  >
                                    SBI LIFE INSURANCE
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.272T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1271.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.05%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                567.788K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.60
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                69.20
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                18.37
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  19.00%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.19%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:IOC"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/indian-oil.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="IOC − INDIAN OIL CORP"
                                    href="/symbols/NSE-IOC/"
                                    target="_blank"
                                  >
                                    IOC
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="INDIAN OIL CORP"
                                  >
                                    INDIAN OIL CORP
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.258T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                89.45
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.39%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.6M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.43
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.16
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                17.34
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  27.60%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">3.33%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Energy Minerals"
                                >
                                  Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SIEMENS"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/siemens.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SIEMENS − SIEMENS INDIA LTD"
                                    href="/symbols/NSE-SIEMENS/"
                                    target="_blank"
                                  >
                                    SIEMENS
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="SIEMENS INDIA LTD"
                                  >
                                    SIEMENS INDIA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.247T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3535.30
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.97%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                184.951K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.58
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                74.67
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                47.34
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  38.99%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.28%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/producer-manufacturing/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Producer Manufacturing"
                                >
                                  Producer Manufacturing
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:GRASIM"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/grasim.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="GRASIM − GRASIM INDUSTRIES"
                                    href="/symbols/NSE-GRASIM/"
                                    target="_blank"
                                  >
                                    GRASIM
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="GRASIM INDUSTRIES"
                                  >
                                    GRASIM INDUSTRIES
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.246T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1886.65
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.49%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                267.78K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.38
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                19.17
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                98.44
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −17.18%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.52%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:PIDILITIND"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/pidilite.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="PIDILITIND − PIDILITE INDUSTRIE"
                                    href="/symbols/NSE-PIDILITIND/"
                                    target="_blank"
                                  >
                                    PIDILITIND
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="PIDILITE INDUSTRIE"
                                  >
                                    PIDILITE INDUSTRIE
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.225T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2432.65
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.09%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                131.811K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.46
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                89.16
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                27.28
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">3.40%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.45%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/process-industries/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Process Industries"
                                >
                                  Process Industries
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw sell-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"
                                      />
                                    </svg>
                                  </span>
                                  Sell
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:VBL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <span className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat">
                                    V
                                  </span>
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="VBL − VARUN BEVERAGES"
                                    href="/symbols/NSE-VBL/"
                                    target="_blank"
                                  >
                                    VBL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="VARUN BEVERAGES"
                                  >
                                    VARUN BEVERAGES
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.195T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                921.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.08%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.458M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.72
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                63.71
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                14.46
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  44.68%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.19%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TECHM"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/mahindra-tech.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TECHM − TECH MAHINDRA"
                                    href="/symbols/NSE-TECHM/"
                                    target="_blank"
                                  >
                                    TECHM
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TECH MAHINDRA"
                                  >
                                    TECH MAHINDRA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.175T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1202.70
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.19%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.456M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.53
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                24.25
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                49.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −17.77%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.63%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/technology-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Technology Services"
                                >
                                  Technology Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BANKBARODA"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/bank-of-baroda.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BANKBARODA − BK OF BARODA"
                                    href="/symbols/NSE-BANKBARODA/"
                                    target="_blank"
                                  >
                                    BANKBARODA
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BK OF BARODA"
                                  >
                                    BK OF BARODA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.099T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                212.30
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.05%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7.85M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.38
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.30
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                33.67
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  102.38%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.52%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BRITANNIA"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/britannia.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BRITANNIA − BRITANNIA INDS"
                                    href="/symbols/NSE-BRITANNIA/"
                                    target="_blank"
                                  >
                                    BRITANNIA
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BRITANNIA INDS"
                                  >
                                    BRITANNIA INDS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.092T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4513.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.43%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                94.518K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.26
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                44.52
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                101.38
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  65.81%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.86%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:INDUSINDBK"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/indusind-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="INDUSINDBK − INDUSIND BANK LTD"
                                    href="/symbols/NSE-INDUSINDBK/"
                                    target="_blank"
                                  >
                                    INDUSINDBK
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="INDUSIND BANK LTD"
                                  >
                                    INDUSIND BANK LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.089T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1396.10
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.37%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.051M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.30
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                13.66
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                102.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  46.23%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.98%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:HINDALCO"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/hindalco.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="HINDALCO − HINDALCO INDS"
                                    href="/symbols/NSE-HINDALCO/"
                                    target="_blank"
                                  >
                                    HINDALCO
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="HINDALCO INDS"
                                  >
                                    HINDALCO INDS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.063T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                470.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.61%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.74M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.49
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                12.42
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                37.90
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −43.98%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.63%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BEL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/bharat-electronics.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BEL − BHARAT ELECTRONICS"
                                    href="/symbols/NSE-BEL/"
                                    target="_blank"
                                  >
                                    BEL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BHARAT ELECTRONICS"
                                  >
                                    BHARAT ELECTRONICS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.014T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                139.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.11%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                9.689M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.68
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                32.18
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.32
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  15.22%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.29%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/electronic-technology/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Electronic Technology"
                                >
                                  Electronic Technology
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:GODREJCP"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/godrej.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="GODREJCP − GODREJ CONSUMER PR"
                                    href="/symbols/NSE-GODREJCP/"
                                    target="_blank"
                                  >
                                    GODREJCP
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="GODREJ CONSUMER PR"
                                  >
                                    GODREJ CONSUMER PR
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.013T
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                977.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.36%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                751.151K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.79
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                59.61
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                16.39
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −2.26%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:CHOLAFIN"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/cholamandalam.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="CHOLAFIN − CHOLAMANDALAM INV"
                                    href="/symbols/NSE-CHOLAFIN/"
                                    target="_blank"
                                  >
                                    CHOLAFIN
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="CHOLAMANDALAM INV"
                                  >
                                    CHOLAMANDALAM INV
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                994.901B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1187.30
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.85%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.311M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.00
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                34.75
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                34.17
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  17.71%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.16%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:DABUR"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/dabur.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="DABUR − DABUR INDIA LTD"
                                    href="/symbols/NSE-DABUR/"
                                    target="_blank"
                                  >
                                    DABUR
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="DABUR INDIA LTD"
                                  >
                                    DABUR INDIA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                984.099B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                551.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.68%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                814.387K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.52
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                56.63
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                9.74
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.99%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.94%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:DIVISLAB"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/divis.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="DIVISLAB − DIVI'S LABORATORIE"
                                    href="/symbols/NSE-DIVISLAB/"
                                    target="_blank"
                                  >
                                    DIVISLAB
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="DIVI'S LABORATORIE"
                                  >
                                    DIVI'S LABORATORIE
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                983.933B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3678.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.79%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                204.025K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.68
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                66.10
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                55.65
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −52.43%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.81%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/health-technology/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Health Technology"
                                >
                                  Health Technology
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:IRFC"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/indian-railway-finance-corporation.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="IRFC − INDIAN RAILWAY FIN CORP L"
                                    href="/symbols/NSE-IRFC/"
                                    target="_blank"
                                  >
                                    IRFC
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="INDIAN RAILWAY FIN CORP L"
                                  >
                                    INDIAN RAILWAY FIN CORP L
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                980.922B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                74.35
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.93%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                14.131M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.28
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                15.59
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.77
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.28%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.96%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:CIPLA"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/cipla.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="CIPLA − CIPLA LTD"
                                    href="/symbols/NSE-CIPLA/"
                                    target="_blank"
                                  >
                                    CIPLA
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="CIPLA LTD"
                                  >
                                    CIPLA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                942.22B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1161.65
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.46%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.60
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                30.14
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                38.54
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  25.12%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.72%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/health-technology/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Health Technology"
                                >
                                  Health Technology
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:EICHERMOT"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/eicher-motors.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="EICHERMOT − EICHER MOTORS"
                                    href="/symbols/NSE-EICHERMOT/"
                                    target="_blank"
                                  >
                                    EICHERMOT
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="EICHER MOTORS"
                                  >
                                    EICHER MOTORS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                930.94B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3435.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                218.915K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.29
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                29.21
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                117.58
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  57.02%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.10%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Durables"
                                >
                                  Consumer Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:INDIGO"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/interglobe-aviatio.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="INDIGO − INTERGLOBE AVIATIO"
                                    href="/symbols/NSE-INDIGO/"
                                    target="_blank"
                                  >
                                    INDIGO
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="INTERGLOBE AVIATIO"
                                  >
                                    INTERGLOBE AVIATIO
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                919.65B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2453.45
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.87%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                750.248K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.99
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                24.63
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                99.61
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/transportation/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Transportation"
                                >
                                  Transportation
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SHREECEM"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/shree-cement.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SHREECEM − SHREE CEMENT LTD"
                                    href="/symbols/NSE-SHREECEM/"
                                    target="_blank"
                                  >
                                    SHREECEM
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="SHREE CEMENT LTD"
                                  >
                                    SHREE CEMENT LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                918.008B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                25829.65
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.42%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                13.131K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.49
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                59.61
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                433.33
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −21.10%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.39%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ADANIENSOL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/adani-transmiss-in.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ADANIENSOL − ADANI ENERGY SOLUTION LTD"
                                    href="/symbols/NSE-ADANIENSOL/"
                                    target="_blank"
                                  >
                                    ADANIENSOL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ADANI ENERGY SOLUTION LTD"
                                  >
                                    ADANI ENERGY SOLUTION LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                902.601B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                809.55
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.18%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                136.942K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.13
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                72.51
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                11.16
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  28.90%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:DRREDDY"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/dr-reddys.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="DRREDDY − DR REDDYS LABS"
                                    href="/symbols/NSE-DRREDDY/"
                                    target="_blank"
                                  >
                                    DRREDDY
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="DR REDDYS LABS"
                                  >
                                    DR REDDYS LABS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                900.839B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5414.55
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.06%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                201.186K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.46
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                19.09
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                283.66
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  58.66%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.73%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/health-technology/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Health Technology"
                                >
                                  Health Technology
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:IOB"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/indian-overseas-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="IOB − INDIAN OVERSEAS BK"
                                    href="/symbols/NSE-IOB/"
                                    target="_blank"
                                  >
                                    IOB
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="INDIAN OVERSEAS BK"
                                  >
                                    INDIAN OVERSEAS BK
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                895.407B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                47.10
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.63%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                81.397M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.48
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                40.19
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.17
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  24.78%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:PNB"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/punjab-natl-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="PNB − PUNJAB NATL BANK"
                                    href="/symbols/NSE-PNB/"
                                    target="_blank"
                                  >
                                    PNB
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="PUNJAB NATL BANK"
                                  >
                                    PUNJAB NATL BANK
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                878.679B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                76.70
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −3.82%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                95.514M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.01
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                19.16
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  48.24%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.78%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:HAVELLS"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/havells.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="HAVELLS − HAVELLS INDIA"
                                    href="/symbols/NSE-HAVELLS/"
                                    target="_blank"
                                  >
                                    HAVELLS
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="HAVELLS INDIA"
                                  >
                                    HAVELLS INDIA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                872.926B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1411.75
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.30%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                409.052K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.78
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                79.28
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                17.81
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −7.36%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.54%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/producer-manufacturing/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Producer Manufacturing"
                                >
                                  Producer Manufacturing
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ZOMATO"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/zomato.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ZOMATO − ZOMATO LTD"
                                    href="/symbols/NSE-ZOMATO/"
                                    target="_blank"
                                  >
                                    ZOMATO
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ZOMATO LTD"
                                  >
                                    ZOMATO LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                866.898B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                104.90
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">4.12%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                65.799M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.27
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                −0.94
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  31.96%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/transportation/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Transportation"
                                >
                                  Transportation
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:AMBUJACEM"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/ambuja-cements.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="AMBUJACEM − AMBUJA CEMENTS LTD"
                                    href="/symbols/NSE-AMBUJACEM/"
                                    target="_blank"
                                  >
                                    AMBUJACEM
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="AMBUJA CEMENTS LTD"
                                  >
                                    AMBUJA CEMENTS LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                853.232B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                432.75
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.72%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                671.38K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.21
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                43.80
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                9.88
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −28.05%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.58%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ABB"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/abb.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ABB − ABB INDIA LTD"
                                    href="/symbols/NSE-ABB/"
                                    target="_blank"
                                  >
                                    ABB
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ABB INDIA LTD"
                                  >
                                    ABB INDIA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                847.008B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4061.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.59%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                215.437K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.82
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                82.48
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                49.24
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  95.59%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.13%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/producer-manufacturing/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Producer Manufacturing"
                                >
                                  Producer Manufacturing
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:VEDL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/steel-dynamics.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="VEDL − VEDANTA LTD"
                                    href="/symbols/NSE-VEDL/"
                                    target="_blank"
                                  >
                                    VEDL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="VEDANTA LTD"
                                  >
                                    VEDANTA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                830.422B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                223.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.09%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7.298M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.40
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                9.48
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                23.55
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −53.78%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  38.34%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TATAPOWER"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/tata.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TATAPOWER − TATA POWER CO LTD"
                                    href="/symbols/NSE-TATAPOWER/"
                                    target="_blank"
                                  >
                                    TATAPOWER
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TATA POWER CO LTD"
                                  >
                                    TATA POWER CO LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                820.084B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                257.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.37%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.29M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.50
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                23.43
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                10.99
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  63.84%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.76%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:PFC"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/power-finance.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="PFC − POWER FINANCE CORP"
                                    href="/symbols/NSE-PFC/"
                                    target="_blank"
                                  >
                                    PFC
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="POWER FINANCE CORP"
                                  >
                                    POWER FINANCE CORP
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                804.895B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                240.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.54%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.816M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.25
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.65
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                51.66
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  22.20%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">4.22%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:UNIONBANK"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/union-bank-of-india.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="UNIONBANK − UNION BK OF INDIA"
                                    href="/symbols/NSE-UNIONBANK/"
                                    target="_blank"
                                  >
                                    UNIONBANK
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="UNION BK OF INDIA"
                                  >
                                    UNION BK OF INDIA
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                803.88B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                105.35
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −2.86%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                30.767M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.57
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7.06
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                14.92
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  78.03%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">2.68%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TATACONSUM"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/tata.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TATACONSUM − TATA CONSUMER PRODUCT LTD"
                                    href="/symbols/NSE-TATACONSUM/"
                                    target="_blank"
                                  >
                                    TATACONSUM
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TATA CONSUMER PRODUCT LTD"
                                  >
                                    TATA CONSUMER PRODUCT LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                803.084B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                862.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.31%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                390.022K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.28
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                63.16
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                13.65
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  25.01%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.97%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ICICIPRULI"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/icici-prudential-life-insurance.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ICICIPRULI − ICICI PRUDENTIAL L"
                                    href="/symbols/NSE-ICICIPRULI/"
                                    target="_blank"
                                  >
                                    ICICIPRULI
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ICICI PRUDENTIAL L"
                                  >
                                    ICICI PRUDENTIAL L
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                802.227B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                551.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.09%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                266.4K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.17
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                91.99
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −21.32%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.11%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:GAIL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/gail.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="GAIL − GAIL INDIA LTD"
                                    href="/symbols/NSE-GAIL/"
                                    target="_blank"
                                  >
                                    GAIL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="GAIL INDIA LTD"
                                  >
                                    GAIL INDIA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                798.217B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                122.80
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.19%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                8.189M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.73
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                19.43
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.32
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −68.54%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">3.76%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:POLYCAB"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/polycab.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="POLYCAB − POLYCAB INDIA LTD"
                                    href="/symbols/NSE-POLYCAB/"
                                    target="_blank"
                                  >
                                    POLYCAB
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="POLYCAB INDIA LTD"
                                  >
                                    POLYCAB INDIA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                796.881B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5276.70
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.69%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                153.895K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.23
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                54.63
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                96.59
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  48.87%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.37%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/producer-manufacturing/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Producer Manufacturing"
                                >
                                  Producer Manufacturing
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BAJAJHLDNG"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/bajaj-holdings-and-investment-lt.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BAJAJHLDNG − BAJAJ HLDG & INVES"
                                    href="/symbols/NSE-BAJAJHLDNG/"
                                    target="_blank"
                                  >
                                    BAJAJHLDNG
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BAJAJ HLDG & INVES"
                                  >
                                    BAJAJ HLDG &amp; INVES
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                758.71B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6728.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.34%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                22.574K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.40
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                14.14
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                475.92
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  24.73%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.75%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SBICARD"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/sbi-cards-and-paymen.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SBICARD − SBI CARDS & PAYMEN"
                                    href="/symbols/NSE-SBICARD/"
                                    target="_blank"
                                  >
                                    SBICARD
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="SBI CARDS & PAYMEN"
                                  >
                                    SBI CARDS &amp; PAYMEN
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                750.146B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                785.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.92%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                443.312K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.27
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                33.53
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                23.41
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  14.70%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.31%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:IDBI"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/idbi-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="IDBI − IDBI BANK LTD"
                                    href="/symbols/NSE-IDBI/"
                                    target="_blank"
                                  >
                                    IDBI
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="IDBI BANK LTD"
                                  >
                                    IDBI BANK LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                747.4B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                68.80
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.08%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.438M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.41
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                17.75
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3.88
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  54.09%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.42%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:RECLTD"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/rec.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="RECLTD − REC LTD"
                                    href="/symbols/NSE-RECLTD/"
                                    target="_blank"
                                  >
                                    RECLTD
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="REC LTD"
                                  >
                                    REC LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                745.597B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                278.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.80%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7.398M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.32
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.27
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                44.36
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  14.28%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">4.32%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BPCL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/bharat-petroleum.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BPCL − BHARAT PETROL CORP"
                                    href="/symbols/NSE-BPCL/"
                                    target="_blank"
                                  >
                                    BPCL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BHARAT PETROL CORP"
                                  >
                                    BHARAT PETROL CORP
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                740.691B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                343.75
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.70%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.574M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.68
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                3.93
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                87.51
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  587.18%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">4.69%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Energy Minerals"
                                >
                                  Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:MARICO"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/marico.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="MARICO − MARICO LTD"
                                    href="/symbols/NSE-MARICO/"
                                    target="_blank"
                                  >
                                    MARICO
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="MARICO LTD"
                                  >
                                    MARICO LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                737.997B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                545.75
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −4.40%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2.681M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.43
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                51.96
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                10.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">9.35%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.78%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:APOLLOHOSP"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/apollo-hospitals.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="APOLLOHOSP − APOLLO HOSPITALS."
                                    href="/symbols/NSE-APOLLOHOSP/"
                                    target="_blank"
                                  >
                                    APOLLOHOSP
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="APOLLO HOSPITALS."
                                  >
                                    APOLLO HOSPITALS.
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                725.89B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5064.15
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.33%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                161.576K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.41
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                108.91
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                46.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −24.32%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.29%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/health-services/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Health Services"
                                >
                                  Health Services
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:LODHA"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/macrotech-developers.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="LODHA − MACROTECH DEVELOPERS LTD"
                                    href="/symbols/NSE-LODHA/"
                                    target="_blank"
                                  >
                                    LODHA
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="MACROTECH DEVELOPERS LTD"
                                  >
                                    MACROTECH DEVELOPERS LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                723.181B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                756.95
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.91%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                673.391K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.55
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                184.22
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                4.11
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −70.20%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.13%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:MANKIND"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <span className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat">
                                    M
                                  </span>
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="MANKIND − MANKIND PHARMA LTD"
                                    href="/symbols/NSE-MANKIND/"
                                    target="_blank"
                                  >
                                    MANKIND
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="MANKIND PHARMA LTD"
                                  >
                                    MANKIND PHARMA LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                720.799B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1776.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.77%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                50.054K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.28
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                —
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/health-technology/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Health Technology"
                                >
                                  Health Technology
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TRENT"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/trent.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TRENT − TRENT LTD"
                                    href="/symbols/NSE-TRENT/"
                                    target="_blank"
                                  >
                                    TRENT
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TRENT LTD"
                                  >
                                    TRENT LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                718.902B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2050.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.37%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                253.341K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.24
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                149.44
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                13.72
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  34.37%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.11%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/retail-trade/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Retail Trade"
                                >
                                  Retail Trade
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:MCDOWELL_N"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/united-spirits.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="MCDOWELL_N − UNITED SPIRITS"
                                    href="/symbols/NSE-MCDOWELL_N/"
                                    target="_blank"
                                  >
                                    MCDOWELL_N
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="UNITED SPIRITS"
                                  >
                                    UNITED SPIRITS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                716.986B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1004.05
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.86%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                354.6K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.56
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                52.92
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                18.97
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  29.51%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="neutral-p_QIAEOQ">0.00%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-non-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Non-Durables"
                                >
                                  Consumer Non-Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:TVSMOTOR"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/tvs.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="TVSMOTOR − TVS MOTOR CO"
                                    href="/symbols/NSE-TVSMOTOR/"
                                    target="_blank"
                                  >
                                    TVSMOTOR
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="TVS MOTOR CO"
                                  >
                                    TVS MOTOR CO
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                710.992B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1490.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.39%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                351.139K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.27
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                48.57
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                30.68
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  35.88%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.57%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/consumer-durables/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Consumer Durables"
                                >
                                  Consumer Durables
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SHRIRAMFIN"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/shriram.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SHRIRAMFIN − SHRIRAM FINANCE LTD"
                                    href="/symbols/NSE-SHRIRAMFIN/"
                                    target="_blank"
                                  >
                                    SHRIRAMFIN
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="SHRIRAM FINANCE LTD"
                                  >
                                    SHRIRAM FINANCE LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                694.617B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1830.00
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.11%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                736.114K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.49
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                10.97
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                166.76
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  28.04%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.82%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw strong_buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M9 3.3 13.7 8l-.7.7-4-4-4 4-.7-.7L9 3.3Zm0 6 4.7 4.7-.7.7-4-4-4 4-.7-.7L9 9.3Z"
                                      />
                                    </svg>
                                  </span>
                                  Strong Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:JINDALSTEL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/jindal.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="JINDALSTEL − JINDAL STEEL & PWR"
                                    href="/symbols/NSE-JINDALSTEL/"
                                    target="_blank"
                                  >
                                    JINDALSTEL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="JINDAL STEEL & PWR"
                                  >
                                    JINDAL STEEL &amp; PWR
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                692.232B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                679.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.12%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                553.776K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.35
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                23.82
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                28.54
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −62.32%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.29%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/non-energy-minerals/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Non-Energy Minerals"
                                >
                                  Non-Energy Minerals
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:JSWENERGY"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/jsw-energy.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="JSWENERGY − JSW ENERGY LTD"
                                    href="/symbols/NSE-JSWENERGY/"
                                    target="_blank"
                                  >
                                    JSWENERGY
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="JSW ENERGY LTD"
                                  >
                                    JSW ENERGY LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                689.366B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                417.20
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.41%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                1.85M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.27
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                56.74
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                7.35
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −41.87%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.45%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw neutral-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M5 9h9v1H5V9Z"
                                      />
                                    </svg>
                                  </span>
                                  Neutral
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:CANBK"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/canara-bank.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="CANBK − CANARA BANK"
                                    href="/symbols/NSE-CANBK/"
                                    target="_blank"
                                  >
                                    CANBK
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="CANARA BANK"
                                  >
                                    CANARA BANK
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                676.852B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                371.60
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.43%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.439M
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.40
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.26
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                70.63
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  79.33%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">3.12%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/finance/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Finance"
                                >
                                  Finance
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:ATGL"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/adani.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="ATGL − ADANI TOTAL GAS LTD"
                                    href="/symbols/NSE-ATGL/"
                                    target="_blank"
                                  >
                                    ATGL
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="ADANI TOTAL GAS LTD"
                                  >
                                    ADANI TOTAL GAS LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                671.984B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                606.50
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −0.69%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                377.411K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.72
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                119.47
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                5.08
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">
                                  10.52%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.04%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/utilities/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Utilities"
                                >
                                  Utilities
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">—</td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:SRF"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/srf.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="SRF − SRF LTD"
                                    href="/symbols/NSE-SRF/"
                                    target="_blank"
                                  >
                                    SRF
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="SRF LTD"
                                  >
                                    SRF LTD
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                665.133B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                2258.85
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.52%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                104.587K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.23
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                34.99
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                64.56
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −8.96%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.32%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/process-industries/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Process Industries"
                                >
                                  Process Industries
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:CGPOWER"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/cg-power-and-industrial-solutions.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="CGPOWER − CG POWER AND INDUS"
                                    href="/symbols/NSE-CGPOWER/"
                                    target="_blank"
                                  >
                                    CGPOWER
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="CG POWER AND INDUS"
                                  >
                                    CG POWER AND INDUS
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                659.622B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                427.45
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="negative-p_QIAEOQ">
                                  −1.05%
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                408.077K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.34
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                62.96
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                6.79
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">4.93%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.34%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/producer-manufacturing/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Producer Manufacturing"
                                >
                                  Producer Manufacturing
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw buy-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z"
                                      />
                                    </svg>
                                  </span>
                                  Buy
                                </div>
                              </td>
                            </tr>
                            <tr
                              className="row-RdUXZpkv listRow"
                              data-rowkey="NSE:BERGEPAINT"
                            >
                              <td className="cell-RLhfr_y4 left-RLhfr_y4 cell-fixed-ZtyEm8a1 onscroll-shadow">
                                <span className="tickerCell-GrtoTeat">
                                  <span>
                                    <div className="uiMarker-erqqoDve flag-t3Qyc4SH">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 14 12"
                                        width={14}
                                        height={12}
                                        fill="currentColor"
                                        focusable="false"
                                        preserveAspectRatio="none"
                                      >
                                        <path d="M14 12l-4-6 4-6H0v12z" />
                                      </svg>
                                    </div>
                                  </span>
                                  <img
                                    className="tv-circle-logo tv-circle-logo--xsmall tickerLogo-GrtoTeat"
                                    src="https://s3-symbol-logo.tradingview.com/berger-paints.svg"
                                    alt=""
                                  />
                                  <a
                                    className="apply-common-tooltip tickerNameBox-GrtoTeat tickerName-GrtoTeat"
                                    title="BERGEPAINT − BERGER PAINTS IND"
                                    href="/symbols/NSE-BERGEPAINT/"
                                    target="_blank"
                                  >
                                    BERGEPAINT
                                  </a>
                                  <sup
                                    className="apply-common-tooltip tickerDescription-GrtoTeat"
                                    title="BERGER PAINTS IND"
                                  >
                                    BERGER PAINTS IND
                                  </sup>
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                653.321B
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                564.35
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.73%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                366.92K
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                0.14
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                68.50
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                8.24
                                <span className="currency-WyLKdeog">
                                  {" "}
                                  {/* */}INR
                                </span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">1.54%</span>
                              </td>
                              <td className="cell-RLhfr_y4 right-RLhfr_y4">
                                <span className="positive-p_QIAEOQ">0.48%</span>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <a
                                  href="/markets/stocks-india/sectorandindustry-sector/process-industries/"
                                  className="link-KcaOqbQP apply-common-tooltip"
                                  target="_blank"
                                  title="Process Industries"
                                >
                                  Process Industries
                                </a>
                              </td>
                              <td className="cell-RLhfr_y4 left-RLhfr_y4">
                                <div className="container-ibwgrGVw sell-ibwgrGVw">
                                  <span className="ratingIcon-ibwgrGVw">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 18 18"
                                      width={18}
                                      height={18}
                                    >
                                      <path
                                        fill="currentColor"
                                        d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"
                                      />
                                    </svg>
                                  </span>
                                  Sell
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stockchart;

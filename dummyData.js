const topLoserArray = [
  {
    company: "AT&T",
    shortForm: "T",
    currentValue: 123.45,
    percentageChange: -2.34,
    valueChange: -2.89,
    label: "Top Loser",
  },
  {
    company: "Verizon",
    shortForm: "VZ",
    currentValue: 230.56,
    percentageChange: -1.23,
    valueChange: -2.84,
    label: "Top Loser",
  },
  {
    company: "T-Mobile",
    shortForm: "TMUS",
    currentValue: 345.67,
    percentageChange: -3.45,
    valueChange: -11.92,
    label: "Top Loser",
  },
  {
    company: "Sprint",
    shortForm: "S",
    currentValue: 456.78,
    percentageChange: -2.56,
    valueChange: -11.71,
    label: "Top Loser",
  },
  {
    company: "Lowe's",
    shortForm: "LOW",
    currentValue: 567.89,
    percentageChange: -4.67,
    valueChange: -26.54,
    label: "Top Loser",
  },
  {
    company: "Home Depot",
    shortForm: "HD",
    currentValue: 678.9,
    percentageChange: -3.78,
    valueChange: -25.66,
    label: "Top Loser",
  },
  {
    company: "Kroger",
    shortForm: "KR",
    currentValue: 789.01,
    percentageChange: -5.89,
    valueChange: -46.46,
    label: "Top Loser",
  },
  {
    company: "Walgreens",
    shortForm: "WBA",
    currentValue: 890.12,
    percentageChange: -4.9,
    valueChange: -43.61,
    label: "Top Loser",
  },
  {
    company: "CVS Health",
    shortForm: "CVS",
    currentValue: 901.23,
    percentageChange: -6.01,
    valueChange: -54.16,
    label: "Top Loser",
  },
  {
    company: "General Electric",
    shortForm: "GE",
    currentValue: 101.34,
    percentageChange: -5.12,
    valueChange: -5.18,
    label: "Top Loser",
  },
  {
    company: "3M",
    shortForm: "MMM",
    currentValue: 212.45,
    percentageChange: -7.23,
    valueChange: -15.35,
    label: "Top Loser",
  },
  {
    company: "Honeywell",
    shortForm: "HON",
    currentValue: 323.56,
    percentageChange: -6.34,
    valueChange: -20.53,
    label: "Top Loser",
  },
  {
    company: "Lockheed Martin",
    shortForm: "LMT",
    currentValue: 434.67,
    percentageChange: -8.45,
    valueChange: -36.73,
    label: "Top Loser",
  },
  {
    company: "Northrop Grumman",
    shortForm: "NOC",
    currentValue: 545.78,
    percentageChange: -7.56,
    valueChange: -41.26,
    label: "Top Loser",
  },
  {
    company: "Raytheon",
    shortForm: "RTX",
    currentValue: 656.89,
    percentageChange: -9.67,
    valueChange: -63.52,
    label: "Top Loser",
  },
  {
    company: "SpaceX",
    shortForm: "SPX",
    currentValue: 767.9,
    percentageChange: -8.78,
    valueChange: -67.46,
    label: "Top Loser",
  },
  {
    company: "Blue Origin",
    shortForm: "BO",
    currentValue: 878.01,
    percentageChange: -10.89,
    valueChange: -95.56,
    label: "Top Loser",
  },
  {
    company: "Baidu",
    shortForm: "BIDU",
    currentValue: 989.12,
    percentageChange: -9.9,
    valueChange: -97.92,
    label: "Top Loser",
  },
  {
    company: "Tencent",
    shortForm: "TCEHY",
    currentValue: 109.23,
    percentageChange: -11.01,
    valueChange: -12.02,
    label: "Top Loser",
  },
  {
    company: "Shoprite",
    shortForm: "SHPFY",
    currentValue: 219.34,
    percentageChange: -10.12,
    valueChange: -22.19,
    label: "Top Loser",
  },
  {
    company: "Ikea",
    shortForm: "IKEAM",
    currentValue: 329.45,
    percentageChange: -12.23,
    valueChange: -40.28,
    label: "Top Loser",
  },
  {
    company: "Heineken",
    shortForm: "HEINY",
    currentValue: 439.56,
    percentageChange: -11.34,
    valueChange: -49.83,
    label: "Top Loser",
  },
  {
    company: "Diageo",
    shortForm: "DEO",
    currentValue: 549.67,
    percentageChange: -13.45,
    valueChange: -73.92,
    label: "Top Loser",
  },
  {
    company: "Anheuser-Busch",
    shortForm: "BUD",
    currentValue: 659.78,
    percentageChange: -12.56,
    valueChange: -82.88,
    label: "Top Loser",
  },
  {
    company: "LVMH",
    shortForm: "LVMUY",
    currentValue: 769.89,
    percentageChange: -14.67,
    valueChange: -112.91,
    label: "Top Loser",
  },
];

const topGainerArray = [
  {
    company: "Airbnb",
    shortForm: "ABNB",
    currentValue: 150.23,
    percentageChange: 2.34,
    valueChange: 3.51,
    label: "Top Gainer",
  },
  {
    company: "Alibaba",
    shortForm: "BABA",
    currentValue: 265.45,
    percentageChange: 1.78,
    valueChange: 4.72,
    label: "Top Gainer",
  },
  {
    company: "Berkshire Hathaway",
    shortForm: "BRK.A",
    currentValue: 480.67,
    percentageChange: 3.12,
    valueChange: 14.99,
    label: "Top Gainer",
  },
  {
    company: "Visa",
    shortForm: "V",
    currentValue: 210.89,
    percentageChange: 4.56,
    valueChange: 9.61,
    label: "Top Gainer",
  },
  {
    company: "Mastercard",
    shortForm: "MA",
    currentValue: 365.12,
    percentageChange: 2.45,
    valueChange: 8.95,
    label: "Top Gainer",
  },
  {
    company: "American Express",
    shortForm: "AXP",
    currentValue: 185.34,
    percentageChange: 1.34,
    valueChange: 2.48,
    label: "Top Gainer",
  },
  {
    company: "JP Morgan Chase",
    shortForm: "JPM",
    currentValue: 150.78,
    percentageChange: 3.67,
    valueChange: 5.53,
    label: "Top Gainer",
  },
  {
    company: "Bank of America",
    shortForm: "BAC",
    currentValue: 125.9,
    percentageChange: 2.56,
    valueChange: 3.22,
    label: "Top Gainer",
  },
  {
    company: "Wells Fargo",
    shortForm: "WFC",
    currentValue: 145.23,
    percentageChange: 4.12,
    valueChange: 5.98,
    label: "Top Gainer",
  },
  {
    company: "Citigroup",
    shortForm: "C",
    currentValue: 160.34,
    percentageChange: 2.78,
    valueChange: 4.46,
    label: "Top Gainer",
  },
  {
    company: "Morgan Stanley",
    shortForm: "MS",
    currentValue: 170.45,
    percentageChange: 3.89,
    valueChange: 6.63,
    label: "Top Gainer",
  },
  {
    company: "Goldman Sachs",
    shortForm: "GS",
    currentValue: 295.56,
    percentageChange: 2.67,
    valueChange: 7.88,
    label: "Top Gainer",
  },
  {
    company: "BlackRock",
    shortForm: "BLK",
    currentValue: 315.67,
    percentageChange: 1.98,
    valueChange: 6.25,
    label: "Top Gainer",
  },
  {
    company: "Qualcomm",
    shortForm: "QCOM",
    currentValue: 180.78,
    percentageChange: 3.23,
    valueChange: 5.84,
    label: "Top Gainer",
  },
  {
    company: "Texas Instruments",
    shortForm: "TXN",
    currentValue: 155.89,
    percentageChange: 2.34,
    valueChange: 3.64,
    label: "Top Gainer",
  },
  {
    company: "AMD",
    shortForm: "AMD",
    currentValue: 135.9,
    percentageChange: 4.45,
    valueChange: 6.04,
    label: "Top Gainer",
  },
  {
    company: "Micron Technology",
    shortForm: "MU",
    currentValue: 125.23,
    percentageChange: 1.56,
    valueChange: 1.95,
    label: "Top Gainer",
  },
  {
    company: "eBay",
    shortForm: "EBAY",
    currentValue: 145.34,
    percentageChange: 2.67,
    valueChange: 3.88,
    label: "Top Gainer",
  },
  {
    company: "Etsy",
    shortForm: "ETSY",
    currentValue: 160.45,
    percentageChange: 3.78,
    valueChange: 6.06,
    label: "Top Gainer",
  },
  {
    company: "Zillow",
    shortForm: "ZG",
    currentValue: 170.56,
    percentageChange: 2.89,
    valueChange: 4.93,
    label: "Top Gainer",
  },
  {
    company: "Dropbox",
    shortForm: "DBX",
    currentValue: 185.67,
    percentageChange: 1.12,
    valueChange: 2.08,
    label: "Top Gainer",
  },
  {
    company: "Slack",
    shortForm: "WORK",
    currentValue: 150.78,
    percentageChange: 2.45,
    valueChange: 3.69,
    label: "Top Gainer",
  },
  {
    company: "Palantir",
    shortForm: "PLTR",
    currentValue: 165.89,
    percentageChange: 3.56,
    valueChange: 5.91,
    label: "Top Gainer",
  },
  {
    company: "Roku",
    shortForm: "ROKU",
    currentValue: 175.9,
    percentageChange: 2.67,
    valueChange: 4.69,
    label: "Top Gainer",
  },
  {
    company: "Peloton",
    shortForm: "PTON",
    currentValue: 190.01,
    percentageChange: 4.78,
    valueChange: 9.09,
    label: "Top Gainer",
  },
];

const topValueArray = [
  {
    company: "Infosys",
    shortForm: "Infy",
    currentValue: 100.23,
    percentageChange: 1.23,
    valueChange: 1.23,
    label: "Top Value",
  },
  {
    company: "Microsoft",
    shortForm: "MSFT",
    currentValue: 200.45,
    percentageChange: 2.34,
    valueChange: 4.69,
    label: "Top Value",
  },
  {
    company: "Apple",
    shortForm: "AAPL",
    currentValue: 300.67,
    percentageChange: 3.45,
    valueChange: 10.37,
    label: "Top Value",
  },
  {
    company: "Amazon",
    shortForm: "AMZN",
    currentValue: 400.89,
    percentageChange: 1.56,
    valueChange: 6.26,
    label: "Top Value",
  },
  {
    company: "Google",
    shortForm: "GOOGL",
    currentValue: 500.12,
    percentageChange: 2.67,
    valueChange: 13.35,
    label: "Top Value",
  },
  {
    company: "Facebook",
    shortForm: "META",
    currentValue: 600.34,
    percentageChange: 3.78,
    valueChange: 22.67,
    label: "Top Value",
  },
  {
    company: "Tesla",
    shortForm: "TSLA",
    currentValue: 700.56,
    percentageChange: 1.89,
    valueChange: 13.25,
    label: "Top Value",
  },
  {
    company: "Netflix",
    shortForm: "NFLX",
    currentValue: 800.78,
    percentageChange: 2.45,
    valueChange: 19.62,
    label: "Top Value",
  },
  {
    company: "NVIDIA",
    shortForm: "NVDA",
    currentValue: 900.9,
    percentageChange: 3.12,
    valueChange: 28.11,
    label: "Top Value",
  },
  {
    company: "Samsung",
    shortForm: "SSNLF",
    currentValue: 110.23,
    percentageChange: 1.34,
    valueChange: 1.48,
    label: "Top Value",
  },
  {
    company: "Intel",
    shortForm: "INTC",
    currentValue: 210.45,
    percentageChange: 2.56,
    valueChange: 5.38,
    label: "Top Value",
  },
  {
    company: "IBM",
    shortForm: "IBM",
    currentValue: 310.67,
    percentageChange: 3.67,
    valueChange: 11.39,
    label: "Top Value",
  },
  {
    company: "Cisco",
    shortForm: "CSCO",
    currentValue: 410.89,
    percentageChange: 1.78,
    valueChange: 7.31,
    label: "Top Value",
  },
  {
    company: "Oracle",
    shortForm: "ORCL",
    currentValue: 510.12,
    percentageChange: 2.89,
    valueChange: 14.74,
    label: "Top Value",
  },
  {
    company: "Adobe",
    shortForm: "ADBE",
    currentValue: 610.34,
    percentageChange: 3.23,
    valueChange: 19.71,
    label: "Top Value",
  },
  {
    company: "Salesforce",
    shortForm: "CRM",
    currentValue: 710.56,
    percentageChange: 1.45,
    valueChange: 10.3,
    label: "Top Value",
  },
  {
    company: "Uber",
    shortForm: "UBER",
    currentValue: 810.78,
    percentageChange: 2.67,
    valueChange: 21.65,
    label: "Top Value",
  },
  {
    company: "Lyft",
    shortForm: "LYFT",
    currentValue: 910.9,
    percentageChange: 3.89,
    valueChange: 35.44,
    label: "Top Value",
  },
  {
    company: "Zoom",
    shortForm: "ZM",
    currentValue: 120.23,
    percentageChange: 1.56,
    valueChange: 1.88,
    label: "Top Value",
  },
  {
    company: "Spotify",
    shortForm: "SPOT",
    currentValue: 220.45,
    percentageChange: 2.78,
    valueChange: 6.13,
    label: "Top Value",
  },
  {
    company: "Twitter",
    shortForm: "TWTR",
    currentValue: 320.67,
    percentageChange: 3.45,
    valueChange: 11.06,
    label: "Top Value",
  },
  {
    company: "Snapchat",
    shortForm: "SNAP",
    currentValue: 420.89,
    percentageChange: 1.67,
    valueChange: 7.03,
    label: "Top Value",
  },
  {
    company: "PayPal",
    shortForm: "PYPL",
    currentValue: 520.12,
    percentageChange: 2.34,
    valueChange: 12.17,
    label: "Top Value",
  },
  {
    company: "Square",
    shortForm: "SQ",
    currentValue: 620.34,
    percentageChange: 3.12,
    valueChange: 19.36,
    label: "Top Value",
  },
  {
    company: "Shopify",
    shortForm: "SHOP",
    currentValue: 720.56,
    percentageChange: 1.89,
    valueChange: 13.62,
    label: "Top Value",
  },
];

const weekHighArray = [
  {
    company: "PepsiCo",
    shortForm: "PEP",
    currentValue: 150.12,
    percentageChange: 2.45,
    valueChange: 3.68,
    label: "52 Week High",
  },
  {
    company: "Coca-Cola",
    shortForm: "KO",
    currentValue: 60.45,
    percentageChange: 1.78,
    valueChange: 1.07,
    label: "52 Week High",
  },
  {
    company: "Procter & Gamble",
    shortForm: "PG",
    currentValue: 140.67,
    percentageChange: 3.23,
    valueChange: 4.54,
    label: "52 Week High",
  },
  {
    company: "Johnson & Johnson",
    shortForm: "JNJ",
    currentValue: 170.89,
    percentageChange: 2.89,
    valueChange: 4.94,
    label: "52 Week High",
  },
  {
    company: "Pfizer",
    shortForm: "PFE",
    currentValue: 50.12,
    percentageChange: 1.56,
    valueChange: 0.78,
    label: "52 Week High",
  },
  {
    company: "Boeing",
    shortForm: "BA",
    currentValue: 230.34,
    percentageChange: 2.34,
    valueChange: 5.39,
    label: "52 Week High",
  },
  {
    company: "McDonald's",
    shortForm: "MCD",
    currentValue: 250.56,
    percentageChange: 3.12,
    valueChange: 7.81,
    label: "52 Week High",
  },
  {
    company: "Walmart",
    shortForm: "WMT",
    currentValue: 140.78,
    percentageChange: 1.45,
    valueChange: 2.04,
    label: "52 Week High",
  },
  {
    company: "Costco",
    shortForm: "COST",
    currentValue: 470.9,
    percentageChange: 2.67,
    valueChange: 12.57,
    label: "52 Week High",
  },
  {
    company: "Target",
    shortForm: "TGT",
    currentValue: 220.23,
    percentageChange: 3.45,
    valueChange: 7.59,
    label: "52 Week High",
  },
  {
    company: "Nike",
    shortForm: "NKE",
    currentValue: 150.45,
    percentageChange: 1.89,
    valueChange: 2.84,
    label: "52 Week High",
  },
  {
    company: "Adidas",
    shortForm: "ADDYY",
    currentValue: 160.67,
    percentageChange: 2.78,
    valueChange: 4.46,
    label: "52 Week High",
  },
  {
    company: "Starbucks",
    shortForm: "SBUX",
    currentValue: 120.89,
    percentageChange: 3.67,
    valueChange: 4.43,
    label: "52 Week High",
  },
  {
    company: "Ford",
    shortForm: "F",
    currentValue: 20.12,
    percentageChange: 2.12,
    valueChange: 0.43,
    label: "52 Week High",
  },
  {
    company: "General Motors",
    shortForm: "GM",
    currentValue: 60.34,
    percentageChange: 1.56,
    valueChange: 0.94,
    label: "52 Week High",
  },
  {
    company: "ExxonMobil",
    shortForm: "XOM",
    currentValue: 90.56,
    percentageChange: 2.45,
    valueChange: 2.22,
    label: "52 Week High",
  },
  {
    company: "Chevron",
    shortForm: "CVX",
    currentValue: 100.78,
    percentageChange: 3.23,
    valueChange: 3.26,
    label: "52 Week High",
  },
  {
    company: "BP",
    shortForm: "BP",
    currentValue: 25.9,
    percentageChange: 1.34,
    valueChange: 0.35,
    label: "52 Week High",
  },
  {
    company: "Shell",
    shortForm: "RDS.A",
    currentValue: 60.23,
    percentageChange: 2.89,
    valueChange: 1.74,
    label: "52 Week High",
  },
  {
    company: "Toyota",
    shortForm: "TM",
    currentValue: 160.45,
    percentageChange: 3.45,
    valueChange: 5.53,
    label: "52 Week High",
  },
  {
    company: "Volkswagen",
    shortForm: "VWAGY",
    currentValue: 30.67,
    percentageChange: 1.78,
    valueChange: 0.55,
    label: "52 Week High",
  },
  {
    company: "Daimler",
    shortForm: "DDAIF",
    currentValue: 80.89,
    percentageChange: 2.56,
    valueChange: 2.07,
    label: "52 Week High",
  },
  {
    company: "Honda",
    shortForm: "HMC",
    currentValue: 35.12,
    percentageChange: 3.12,
    valueChange: 1.09,
    label: "52 Week High",
  },
  {
    company: "Hyundai",
    shortForm: "HYMTF",
    currentValue: 50.34,
    percentageChange: 2.34,
    valueChange: 1.18,
    label: "52 Week High",
  },
  {
    company: "Sony",
    shortForm: "SONY",
    currentValue: 90.56,
    percentageChange: 1.45,
    valueChange: 1.31,
    label: "52 Week High",
  },
];

module.exports = {
  topGainerArray,
  topLoserArray,
  topValueArray,
  weekHighArray,
};

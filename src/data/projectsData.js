// src/data/projectsData.js

export const projectsData = [
  {
    slug: "budget-ownership-operating-plan",
    title: "Budget Ownership & Operating Plan Management",
    shortDescription:
      "Built and maintained operating plan models to support budget planning, approvals, and monthly performance reviews.",
    imageKey: "chatify", // map to your existing image imports in Projects.js
    projects: [
      "Built and maintained operating plan models supporting annual budgeting, approvals, and monthly reviews.",
      "Structured model drivers and assumptions to improve transparency of cost movements and accountability.",
      "Standardized templates and cadence to align stakeholders on forecast updates and variance commentary.",
    ],
    impact: [
      "Managed $1.2B annual operating budget ownership and reporting.",
      "Improved forecast precision by approximately ~10% through stronger drivers and assumptions discipline.",
      "Reduced planning iteration time by improving model structure and stakeholder alignment.",
    ],
    tools: [
      "Advanced Excel (models, scenario planning, variance analysis)",
      "SAP FICO (cost center tracking, actuals extraction)",
      "Standard FP&A frameworks (budgeting, forecasting, KPI packs)",
    ],
  },

  {
    slug: "forecast-accuracy-scenario-modeling",
    title: "Forecast Accuracy Improvement & Scenario Modeling",
    shortDescription:
      "Designed a scenario-based forecasting framework to improve accuracy and strengthen decision-making.",
    imageKey: "bitsOfCode",
    projects: [
      "Developed forecast model with standardized assumptions and scenario toggles for key drivers.",
      "Built sensitivity analysis to quantify upside/downside risks and isolate variance contributors.",
      "Created monthly forecasting workflow to tighten controls and improve consistency across cycles.",
    ],
    impact: [
      "Reduced forecast variance by improving assumptions governance and driver-level visibility.",
      "Enabled leadership to compare scenarios quickly and make risk-aware planning decisions.",
      "Improved forecast process reliability through repeatable workflow and documentation.",
    ],
    tools: [
      "Advanced Excel (forecast models, sensitivity tables)",
      "SQL (driver extraction and reconciliation support)",
      "Power BI (trend views and forecast vs actual reporting)",
    ],
  },

  {
    slug: "sql-finance-metrics-pipeline",
    title: "SQL Finance Metrics Pipeline",
    shortDescription:
      "Built SQL-based transformations to standardize finance KPIs and feed dashboards and reporting packs.",
    imageKey: "editor",
    projects: [
      "Designed SQL queries to extract and transform finance metrics into standardized tables.",
      "Implemented reconciliation checks to reduce manual errors and improve data integrity.",
      "Delivered clean datasets for reporting packs and dashboard consumption.",
    ],
    impact: [
      "Reduced manual reconciliation time through automated transformations and validation checks.",
      "Improved reporting consistency by standardizing metric definitions and output formats.",
      "Accelerated monthly reporting cycle by providing ready-to-use datasets.",
    ],
    tools: [
      "SQL (CTEs, joins, transformations)",
      "Excel (validation, reconciliation, pivots)",
      "Power BI (semantic layer + KPI dashboards)",
    ],
  },

  {
    slug: "interest-rate-liquidity-simulator",
    title: "Interest Rate & Liquidity Scenario Simulator",
    shortDescription:
      "Built multi-scenario simulator for rate movements and liquidity planning to support strategic decisions.",
    imageKey: "leaf",
    projects: [
      "Created scenario simulator to test interest-rate movements against portfolio and funding assumptions.",
      "Modeled liquidity outcomes under deposit growth and runoff scenarios.",
      "Packaged results into leadership-ready summaries with key sensitivities highlighted.",
    ],
    impact: [
      "Improved visibility into rate sensitivity and liquidity outcomes across scenarios.",
      "Supported risk-aware budgeting and strategic planning discussions.",
      "Standardized scenario reporting for faster stakeholder reviews.",
    ],
    tools: [
      "Advanced Excel (scenario modeling, sensitivity)",
      "FP&A frameworks (drivers, assumptions control)",
      "PowerPoint-style reporting outputs (executive summaries)",
    ],
  },

  {
    slug: "automated-reporting-pack",
    title: "Automated Reporting Pack",
    shortDescription:
      "Automated recurring management reporting to reduce manual effort and improve data quality.",
    imageKey: "suicide",
    projects: [
      "Built repeatable reporting templates for monthly and quarterly reporting packs.",
      "Automated data refresh steps to minimize manual intervention and errors.",
      "Created commentary structure to align KPIs, variance explanations, and actions.",
    ],
    impact: [
      "Reduced manual reporting effort and improved timeliness of leadership updates.",
      "Improved reporting accuracy through consistent refresh and validation steps.",
      "Enabled faster month-end performance review preparation.",
    ],
    tools: [
      "Excel (Power Query concepts, automation patterns)",
      "SQL (data pulls and metric tables)",
      "Power BI (dashboarding and distribution views)",
    ],
  },

  {
    slug: "executive-kpi-storyboard",
    title: "Executive KPI Storyboard",
    shortDescription:
      "Built an executive KPI pack combining trends and narrative for leadership performance reviews.",
    imageKey: "emotion",
    projects: [
      "Designed KPI storyboard with trends, variance drivers, and performance narrative.",
      "Built consistent definitions and visuals to reduce interpretation effort for stakeholders.",
      "Established review-ready layout for weekly/monthly leadership discussions.",
    ],
    impact: [
      "Improved stakeholder clarity by pairing KPIs with concise variance commentary.",
      "Increased consistency of leadership reviews through standardized storytelling format.",
      "Accelerated decision cycles by making insights easier to consume and act on.",
    ],
    tools: [
      "Power BI (KPI visuals, trends)",
      "Excel (supporting analysis, validation)",
      "FP&A KPI frameworks (definitions, governance)",
    ],
  },
];

import type {Project} from "../types/project";

export const projects: Project[] = [
        {
            title: "Cookie Cats A/B Testing",
            problem: "Cookie Cats is a mobile puzzle game that uses progression gates to control when players can advance. This project evaluates whether moving a gate from level 30 to level 40 affects player retention and engagement using a randomized A/B test of 90,189 players.",
            methods: "Used SQL and Python to analyze player retention, explore game-round distributions, investigate outliers, conduct hypothesis tests, and construct confidence intervals.",
            results: "Gate 30 achieved 19.02% seven-day retention compared with 18.20% for Gate 40. A two-proportion z-test found a statistically significant difference (p ≈ 0.00155), favoring Gate 30. Engagement tests did not identify a statistically significant difference in game rounds played.",
            technologies: [
                "SQL",
                "Python",
                "Pandas",
                "SciPy",
                "Statsmodels",
                "Matplotlib"
            ],
            image: "/images/retention_comparison.png",
            visualizations: [{
                src: "/images/distribution_gamerounds.png",
                alt: "Distribution of the Gate gamerounds",
                caption: "Distribution of Gamerounds Comparison"
            },
            {
                src: "/images/confidence_interval.png",
                alt: "95% Confidence Interval of Retention Percentages",
                caption: "95% Confidence Interval"
            }],
            slug: "cookie-cats-analysis",
            github: "https://github.com/RobDu121/cookie-cats-ab-testing",

            metrics: [
                {
                    label: "Players Analyzed",
                    value: "90,189"
                },
                {
                    label: "Gate 30 Retention",
                    value: "19.02%"
                },
                {
                    label: "Gate 40 Retention",
                    value: "18.20%"
                },
                {
                    label: "Retention Difference",
                    value: "+0.82 pp"
                },
                {
                    label: "Statistical Significance",
                    value: "p ≈ 0.00155"
                }
            ],

            methodologySteps: [
                "Explored the dataset of 90,189 players using SQL to examine experimental groups, player activity, and retention outcomes.",
                "Calculated Day 1 and Day 7 retention rates for both the Gate 30 and Gate 40 groups.",
                "Performed a two-proportion z-test to evaluate whether the difference in seven-day retention rates was statistically significant.",
                "Constructed a 95% confidence interval to estimate the difference in retention between the experimental groups.",
                "Analyzed game-round distributions using descriptive statistics and Python visualizations, identifying an extreme observation that influenced the mean.",
                "Conducted Welch's t-tests and sensitivity analyses to investigate differences in player engagement.",
                "Compared trimmed means using Yuen's t-test to evaluate engagement differences while reducing the influence of extreme observations."
            ],

            keyFindings: [
                "The experiment included 44,700 players in Gate 30 and 45,489 players in Gate 40.",
                "Seven-day retention was 19.02% for Gate 30 and 18.20% for Gate 40, representing a 0.82 percentage-point advantage for Gate 30.",
                "The two-proportion z-test produced a p-value of approximately 0.00155, indicating a statistically significant difference in seven-day retention.",
                "The 95% confidence interval for the retention difference was approximately 0.31 to 1.33 percentage points, excluding zero and supporting the conclusion that Gate 30 had higher retention.",
                "Game-round distributions were strongly right-skewed, and one extreme observation substantially influenced the ordinary mean.",
                "Welch's t-tests and trimmed-mean analysis did not detect a statistically significant difference in game-round engagement between the experimental groups."
            ],

            conclusion: "The analysis provides statistically significant evidence that keeping the progression gate at level 30 produces higher seven-day player retention than moving it to level 40. Although retention improved under Gate 30, the engagement analyses did not identify a statistically significant difference in total game rounds played. Based on these findings, I recommend retaining the progression gate at level 30 while continuing to evaluate longer-term engagement and business outcomes.",

            nextSteps: [
                "Investigate whether the retention advantage persists beyond seven days.",
                "Analyze player behavior across different engagement segments to determine which players are most affected by gate placement.",
                "Evaluate monetization metrics to understand whether the higher retention rate translates into improved business outcomes.",
                "Examine additional player engagement metrics, such as session frequency and progression rates.",
                "Monitor retention and engagement over time to validate the recommendation across future player cohorts."
            ],
    },
    {
        title: "Music Store Dashboard",
        problem: "Analyze sales transactions from a digital music store to understand revenue performance, customer purchasing behavior, music preferences, and sales support employee performance. The goal was to transform relational database records into actionable business insights using SQL and Power BI.",
        methods: "Used SQL to join relational tables, calculate revenue metrics, analyze monthly and geographic sales, rank top-performing artists and genres, and examine customer spending and employee performance. Developed a Power BI dashboard to present the analysis.",
        results: "Created SQL queries and a Power BI reporting project covering total revenue, geographic and monthly sales, genre and artist performance, top-spending customers, and revenue attributed to sales support employees.",
        technologies: ["SQL", "SQLite", "Power BI"],
        image: "/images/music-dashboard.png",
        visualizations: [{
                src: "/images/music-analysis.png",
                alt: "Dashboard of Music Analysis.",
                caption: "Dashboard of Music Metrics."
            },
            {
                src: "/images/customer_employee-analysis.png",
                alt: "Dashboard of Customer and Employee metrics.",
                caption: "Dashboard of Employee Performance and Customer statistics."
            }
        ],
        slug: "music-store-analysis",
        github: "https://github.com/RobDu121/music-store-analysis",
        metrics: [
            {
                label: "Total Revenue",
                value: "$2,328.6"
            },
            {
                label: "Total Invoices",
                value: "412"
            },
            {
                label: "Quantity Sold",
                value: "2,240"
            },
            {
                label: "Top Genre",
                value: "Rock"
            }
        ],
        methodologySteps: [
            "Explored the music store's relational database to understand the relationships between invoices, customers, tracks, albums, artists, genres, and employees.",

            "Used SQL aggregation functions, including SUM, COUNT, and ROUND, to calculate total revenue and other key sales metrics.",

            "Analyzed revenue by billing country and month to investigate geographic differences and sales trends over time.",

            "Joined invoice line records with track, genre, album, and artist tables to evaluate music genre performance and identify top-selling artists.",

            "Ranked the ten highest-spending customers using total purchase amounts and invoice counts.",

            "Evaluated sales support employee performance by calculating attributed revenue, customer counts, and total invoices.",

            "Developed a Power BI reporting project to communicate sales performance and support business analysis."
        ],

        keyFindings: [
            "The analysis provides revenue comparisons across billing countries and months, enabling geographic and time-based performance evaluation.",

            "Genre-level revenue and quantity calculations allow music categories to be compared by both revenue generated and tracks sold.",

            "Artist-level aggregation identifies the ten highest-revenue artists and their associated track sales.",

            "Customer spending rankings highlight the ten highest-spending customers and their purchasing activity.",

            "Employee-level analysis compares sales support representatives using revenue, customer counts, and invoice volume."
        ],

        conclusion: "The Music Store Sales Analysis demonstrates how SQL and Power BI can be used to convert relational transaction data into meaningful business reporting. By connecting sales records with customer, product, and employee information, the project provides a framework for understanding revenue performance, customer behavior, product popularity, and sales support activity. These insights can help businesses identify areas for further investigation and make more informed decisions.",

        nextSteps: [
            "Analyze revenue growth rates over time to identify periods of increasing or declining sales performance.",

            "Segment customers by purchasing frequency, total spending, and recency to better understand customer behavior.",

            "Investigate whether purchasing preferences differ across countries and geographic regions.",

            "Analyze repeat purchases and customer retention to better understand long-term customer value.",

            "Expand the Power BI dashboard with additional interactive filters and performance measures."
        ]
    },
       {
        title: "Online Retail Sales Analysis",
        problem: "Identify sales trends and understand which products and periods contribute most to revenue.",
        methods: "Python for cleaning, Excel for analysis, and Power BI for visualization.",
        results: "There was $10.67 million in total revenue, with over 20,000 orders. The average order was $534 and there were 4,339 unique customers. November 2011 was the month that generated the most revenue of $1,509,496.33. DOTCOM POSTAGE was the product that generated the most revenue of $206,248.77.",
        technologies: ["Excel", "Python", "Power BI"],
        image: "/images/online-retail-analysis.png",
        visualizations: [
            {
                src: "/images/online-customer-analysis.png",
                alt: "Dashboard of Customer Analysis.",
                caption: "Customer Analysis"
            },
            {
                src: "/images/online-cancellation-analysis.png",
                alt: "Dashboard of Cancellation Analysis.",
                caption: "Cancellation Analysis"
            }
        ],
    
        slug: "online-retail-analysis",
        github: "https://github.com/RobDu121/online-retail-sales-analysis",
        metrics: [
            {
                label: "Total Revenue",
                value: "$10.67M"
            },
            {
                label: "Total Orders",
                value: "20,000+"
            },
            {
                label: "Unique Customers",
                value: "4,339"
            }        
        ],
        methodologySteps: [
            "Imported and explored the Online Retail dataset using Python and Pandas to understand its structure, variables, and data quality.",
            "Cleaned and prepared the dataset by identifying missing values, reviewing invalid transactions, and separating canceled orders from completed purchases.",
            "Used Excel PivotTables to analyze monthly revenue, product performance, customer activity, and overall sales trends.",
            "Developed an interactive Power BI dashboard to visualize key performance indicators, revenue patterns, and top-performing products.",
            "Interpreted the results to identify important sales trends, revenue drivers, and opportunities for further business analysis."
        ],
        keyFindings: [
           "The dataset generated approximately $10.67 million in revenue across more than 20,000 orders from 4,339 unique customers.",
            "November 2011 recorded the highest monthly revenue at approximately $1.51 million, indicating a significant increase in sales activity during that period.",
            "DOTCOM POSTAGE was the highest revenue-generating line item, contributing approximately $206,249 in recorded revenue.",
            "Revenue varied substantially across months, highlighting the importance of analyzing seasonal patterns and changes in customer purchasing behavior.",
            "The analysis demonstrated how transaction-level data can be transformed into meaningful business insights through data cleaning, aggregation, and visualization." 
        ],
        conclusion: "The Online Retail Sales Analysis identified important patterns in revenue generation, customer activity, and product performance. With approximately $10.67 million in recorded revenue, the analysis demonstrated the value of combining Python, Excel, and Power BI to transform transaction-level data into business insights. November 2011 generated the highest monthly revenue, while substantial differences in item-level revenue contributions highlighted the importance of understanding sales drivers. These findings can support more informed decisions regarding sales planning, customer behavior, and business performance.",

        nextSteps: [
            "Investigate seasonal revenue patterns across additional years to determine whether the November sales increase reflects a recurring trend.",
            "Perform customer segmentation using purchasing frequency, monetary value, and recency to identify valuable customer groups.",
            "Analyze product sales volume alongside revenue to distinguish high-demand products from high-revenue items and non-product charges.",
            "Investigate canceled transactions and returns to understand their impact on net revenue and operational performance.",
            "Develop additional Power BI visualizations to monitor customer retention, product trends, and revenue performance over time."
        ]
    },
       {
        title: "Sales Performance Dashboard",
        problem: "Understand sales performance across countries, products, and discount levels.",
        methods: "Excel, Power BI, and DAX measures.",
        results: "Across five countries, total sales reached $118.73 million, generating $16.89 million in profit. France generated the highest profit at $3.78 million, while the United States recorded approximately $25 million in sales.",
        technologies: ["Excel", "DAX", "Power BI"],
        image: "/images/sales-dashboard.png",
        visualizations: [
            {
                src: "/images/sales-by-country.png",
                alt: "Sales by Country",
                caption: "Sales by Country Dashboard"
            },
            {
                src: "/images/sales-by-product.png",
                alt: "Sales by Product",
                caption: "Sales by Product Dashboard"
            }
        ],
        slug: "salesperformance-dashboard",
        github: "https://github.com/RobDu121/sales-performance-dashboard",
        metrics: [
            {
                label: "Total Sales",
                value: "$118.73M"
            },
            {
                label: "Total Profit",
                value: "$16.89M"
            },
            {
                label: "Countries",
                value: "5"
            }
        ],
        methodologySteps: [
            "Imported and examined the sales dataset to understand key variables, including sales revenue, profit, discounts, and geographic information.",
            "Prepared the data for analysis by reviewing its structure and identifying the measures needed to evaluate business performance.",
            "Used Power BI and DAX to calculate key performance indicators, including total sales and total profit.",
            "Developed an interactive Power BI dashboard to compare sales and profitability across five countries.",
            "Analyzed geographic differences in sales and profit to identify high-performing markets and communicate the results through visualizations."
        ],

        keyFindings: [
            "The dataset contained approximately $118.73 million in total sales and $16.89 million in total profit across five countries.",
            "France generated the highest total profit at approximately $3.78 million, making it the most profitable country in the analysis.",
            "The United States generated approximately $25 million in sales, representing a substantial portion of the overall revenue.",
            "Sales and profitability differed across countries, demonstrating the importance of evaluating geographic markets individually.",
            "The dashboard provided a consolidated view of business performance, making it easier to compare markets and identify areas for further investigation."
        ],
        conclusion: "The Sales Performance Dashboard provided an overview of revenue and profitability across five countries, revealing approximately $118.73 million in total sales and $16.89 million in total profit. France emerged as the most profitable country, generating approximately $3.78 million in profit, while the United States contributed approximately $25 million in sales. The dashboard demonstrates how Power BI, Excel, and DAX can be used to consolidate business data, evaluate performance indicators, and communicate insights that support strategic business decisions.",

        nextSteps: [
            "Calculate and compare profit margins across countries to identify which markets convert sales into profit most efficiently.",
            "Analyze the relationship between discounts, sales revenue, and profitability to identify potential pricing opportunities.",
            "Examine sales and profit trends over time to identify patterns in business performance.",
            "Investigate differences in product performance across geographic markets to identify opportunities for growth.",
            "Expand the Power BI dashboard with additional measures and interactive visualizations to support more detailed business analysis."
        ]
    }
];

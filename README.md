> This application was created for Accounting Innovation Challenge 2021

## Our Solution - *Art-Counting*

> *Art-Counting* - 
> An **automated data extraction and data matching platform**, to help **track supporting documents in vouchering**, especially in the process of **test of details**

Our product provides services from **scanning and extracting** relevant information from documents such as **authentic source documents** (e.g., **vendor invoice in .pdf / .jpg** format), **bank statements (.pdf / .csv / .xlsx) and accounting entries (.xlsx / .csv)** to **matching** them with **transactions**, and even report the output in the form of **dashboards** - with **alerts** to save auditors' time in searching for relevant documents. 

Art-Counting provides a **secure** location and **reduces manual** **effort at the same time, allowing professional auditors to focus more on crucial and advanced work.**

## Tech Stack
- Scanning Invoice and Receipts: AWS Textract
- Cloud functions: AWS Lambda in Python
  - parsing CSV and store as transactions
  - extracting invoice files uploaded to S3 and pass to scanning service
- Website: React + Redux, React-Bootstrap
- Database: AWS AppSync + AWS DynamoDB in **GraphQL**
- File Storage: AWS S3

---

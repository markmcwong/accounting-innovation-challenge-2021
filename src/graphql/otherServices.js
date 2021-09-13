import axios from "axios";
import { trackPromise } from "react-promise-tracker";
export const generateAccountTransactionsFromURL = async (
  projectId,
  fileName,
  userId
) => {
  var data = JSON.stringify({
    projectId,
    fileName,
    userId,
  });

  var config = {
    method: "post",
    url: process.env.REACT_APP_LAMBDA_GJ_URL,
    headers: {
      "X-API-Key": process.env.REACT_APP_LAMBDA_GJ_API_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const importInvoices = async (
  projectId,
  accountName,
  fileName,
  accountId
) => {
  var data = JSON.stringify({
    projectId,
    accountName,
    fileName,
    accountId,
  });

  var config = {
    method: "post",
    url: process.env.REACT_APP_LAMBDA_IMPORT_INVOICE_URL,
    headers: {
      "x-api-key": process.env.REACT_APP_LAMBDA_IMPORT_INVOICE_API_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const parseDayBook = async (
  projectId,
  particular,
  fileName,
  accountId
) => {
  var data = JSON.stringify({
    projectId,
    particular,
    fileName,
    accountId,
  });

  var config = {
    method: "post",
    url: process.env.REACT_APP_LAMBDA_PARSE_BOOK_URL,
    headers: {
      "x-api-key": process.env.REACT_APP_LAMBDA_PARSE_BOOK_API_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);
  console.log(response.data);
  return response.data;
};

export const parseCashBook = async (
  projectId,
  fileName,
  cashId,
  bankId,
  particular
) => {
  var data = JSON.stringify({
    projectId,
    fileName,
    cashId,
    bankId,
    particular,
  });

  var config = {
    method: "post",
    url: process.env.REACT_APP_LAMBDA_PARSE_CASH_BOOK_URL,
    headers: {
      "x-api-key": process.env.REACT_APP_LAMBDA_PARSE_BOOK_API_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);
  console.log(response.data);
  return response.data;
};

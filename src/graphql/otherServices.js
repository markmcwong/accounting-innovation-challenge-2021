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
    url: "https://lqxt8edds5.execute-api.ap-southeast-1.amazonaws.com/default/matchAccountToTransaction",
    headers: {
      "X-API-Key": "nz2ycKNN0SikeU2PKU4VaviPAkuTjvL7IhG2jXQ0",
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
    url: "https://ovrqkrq7p6.execute-api.ap-southeast-1.amazonaws.com/default/Textract",
    headers: {
      "x-api-key": "Uk5PYdzwW43SiHJg8VJVu3wCAJeFhfdvaiADqM55",
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
    url: "https://zf58vmxzqa.execute-api.ap-southeast-1.amazonaws.com/default/parseBook",
    headers: {
      "x-api-key": "26ZQjV7pOm7GIOrkC2ExI45nv7Zsdowx4z4rGR9d",
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
    url: "https://zf58vmxzqa.execute-api.ap-southeast-1.amazonaws.com/default/parseCashBook",
    headers: {
      "x-api-key": "26ZQjV7pOm7GIOrkC2ExI45nv7Zsdowx4z4rGR9d",
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios(config);
  console.log(response.data);
  return response.data;
};

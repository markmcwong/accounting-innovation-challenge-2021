import axios from "axios";

export const generateAccountTransactionsFromURL = async (
  projectId,
  fileName
) => {
  var data = JSON.stringify({
    projectId,
    fileName,
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

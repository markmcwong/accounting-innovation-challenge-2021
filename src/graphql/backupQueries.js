export const getAccountTransactions = `
  query GetAccount ($id: ID!) {
    getAccount(id: $id) {
      AccountTransactions {
        items {
          transaction {
            id
            amountInGJ
            date
            createdAt
            particular
            amountInInvoice
          }
        }
      }
    }
  }
`;

export const getTransactiionInvoices = `
  query GetAccount ($id: ID!) {
    getTransaction(id: $id) {
      Invoices {
        items {
          date
          amount
          invoiceNumber
        }
      }
    }
  }
`;

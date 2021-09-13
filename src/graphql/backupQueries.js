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
            isDebit
            customer
            amountInBook
            contractNumber
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
          downloadURL
        }
      }
    }
  }
`;

export const userNotification = /* GraphQL */ `
  subscription UserNotification($user: String!) {
    userNotification(user: $user) {
      id
      user
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

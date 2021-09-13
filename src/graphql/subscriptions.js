/* eslint-disable */
// this is an auto generated file. This will be overwritten
export const userNotification = /* GraphQL */ `
  subscription UserNotification($user: String!) {
    userNotification(user: $user) {
      user
      message
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      projectName
      entriesURL
      owner
      bookIncomplete
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        items {
          id
          date
          amountInGJ
          amountInInvoice
          amountInBook
          particular
          contract
          contractNumber
          projectID
          isDebit
          customer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Accounts {
        items {
          id
          endBalance
          category
          specialBook
          name
          projectID
          isUploaded
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      projectName
      entriesURL
      owner
      bookIncomplete
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        items {
          id
          date
          amountInGJ
          amountInInvoice
          amountInBook
          particular
          contract
          contractNumber
          projectID
          isDebit
          customer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Accounts {
        items {
          id
          endBalance
          category
          specialBook
          name
          projectID
          isUploaded
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      projectName
      entriesURL
      owner
      bookIncomplete
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        items {
          id
          date
          amountInGJ
          amountInInvoice
          amountInBook
          particular
          contract
          contractNumber
          projectID
          isDebit
          customer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Accounts {
        items {
          id
          endBalance
          category
          specialBook
          name
          projectID
          isUploaded
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
      id
      date
      amountInGJ
      amountInInvoice
      amountInBook
      particular
      contract
      contractNumber
      projectID
      isDebit
      customer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Invoices {
        items {
          id
          invoiceNumber
          date
          amount
          transactionID
          downloadURL
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      accounts {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
      id
      date
      amountInGJ
      amountInInvoice
      amountInBook
      particular
      contract
      contractNumber
      projectID
      isDebit
      customer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Invoices {
        items {
          id
          invoiceNumber
          date
          amount
          transactionID
          downloadURL
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      accounts {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
      id
      date
      amountInGJ
      amountInInvoice
      amountInBook
      particular
      contract
      contractNumber
      projectID
      isDebit
      customer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Invoices {
        items {
          id
          invoiceNumber
          date
          amount
          transactionID
          downloadURL
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      accounts {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice {
    onCreateInvoice {
      id
      invoiceNumber
      date
      amount
      transactionID
      downloadURL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice {
    onUpdateInvoice {
      id
      invoiceNumber
      date
      amount
      transactionID
      downloadURL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice {
    onDeleteInvoice {
      id
      invoiceNumber
      date
      amount
      transactionID
      downloadURL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
      id
      endBalance
      category
      specialBook
      name
      projectID
      isUploaded
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AccountTransactions {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      id
      endBalance
      category
      specialBook
      name
      projectID
      isUploaded
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AccountTransactions {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      id
      endBalance
      category
      specialBook
      name
      projectID
      isUploaded
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AccountTransactions {
        items {
          id
          accountID
          transactionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateAccountTransaction = /* GraphQL */ `
  subscription OnCreateAccountTransaction {
    onCreateAccountTransaction {
      id
      accountID
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      transaction {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        projectID
        isDebit
        customer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Invoices {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
      }
      account {
        id
        endBalance
        category
        specialBook
        name
        projectID
        isUploaded
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AccountTransactions {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdateAccountTransaction = /* GraphQL */ `
  subscription OnUpdateAccountTransaction {
    onUpdateAccountTransaction {
      id
      accountID
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      transaction {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        projectID
        isDebit
        customer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Invoices {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
      }
      account {
        id
        endBalance
        category
        specialBook
        name
        projectID
        isUploaded
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AccountTransactions {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeleteAccountTransaction = /* GraphQL */ `
  subscription OnDeleteAccountTransaction {
    onDeleteAccountTransaction {
      id
      accountID
      transactionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      transaction {
        id
        date
        amountInGJ
        amountInInvoice
        amountInBook
        particular
        contract
        contractNumber
        projectID
        isDebit
        customer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Invoices {
          nextToken
          startedAt
        }
        accounts {
          nextToken
          startedAt
        }
      }
      account {
        id
        endBalance
        category
        specialBook
        name
        projectID
        isUploaded
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        AccountTransactions {
          nextToken
          startedAt
        }
      }
    }
  }
`;

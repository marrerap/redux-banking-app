// 2. Actions
export function actionDeposit(amount, account) {
  return {
    type: "DEPOSIT",
    amount: amount,
    account: account
  };
}

export function actionWithdrawal(amount, account) {
  return {
    type: "WITHDRAWAL",
    amount: amount,
    account: account
  };
}

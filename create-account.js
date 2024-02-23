function createAccount(pin, amount) {
    let balance = amount;
    return {
        checkBalance: function (inputPin) {
            if (inputPin === pin) {
                return balance;
            }
            else return "Invalid PIN"
        },
        deposit: function (inputPin, depAmount) {
            if (inputPin === pin) {
                balance += depAmount
                return `Successfully deposited $${depAmount}. Current balance: $${balance}.`;
            }
            else {
                return "Invalid PIN";
            }
        },
        withdraw: function (inputPin, withdrawAmount) {
            if (inputPin === pin) {
                if (balance >= withdrawAmount) {
                    balance -= withdrawAmount;
                    return `Successfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
                } else {
                    return "Withdrawal amount exceeds balance";
                }
            } else {
                return "Invalid PIN";
            }
        },
        changePin: function (inputPin, newPin) {
            if (inputPin === pin) {
                pin = newPin;
                return "PIN successfully changed";
            } else {
                return "Invalid PIN";
            }
        }
    };
}

module.exports = { createAccount };

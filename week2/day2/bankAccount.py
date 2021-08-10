class BankAccount:
    def __init__ (self, balance, account_number):
        self.balance = balance
        self.account_number = account_number
    def deposit(self, add_funds):
        self.balance += add_funds
    def withdraw(self, remove_funds):
        self.balance -= remove_funds
    def transfer_funds(self, balance, account_number, from_checking_account, to_savings_account):
        super().__init__(balance, account_number)
        self.balance -= from_checking_account
        self.balance += to_savings_account

checking_account = BankAccount(1000, "298502387")
checking_account.deposit(5000)
print(checking_account.balance)

checking_account = BankAccount(1000, "1234848")
checking_account.transfer_funds(1000, "123456", 500, 500)
print(checking_account.balance)
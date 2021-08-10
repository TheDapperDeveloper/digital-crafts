class BankAccount:
    def __init__ (self, balance, account_number):
        self.balance = balance
        self.account_number = account_number
    def deposit(self, add_funds):
        self.balance += add_funds
    def withdraw(self, remove_funds):
        self.balance -= remove_funds
    def transfer_funds(self, from_account, to_account):
        self.balance -= from_account
        self.balance += to_account

checking_account = BankAccount(1000, 298502387)
print(checking_account)
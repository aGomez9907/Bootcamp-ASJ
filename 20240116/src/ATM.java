import java.util.ArrayList;

public class ATM {
private double totalBalance;
private ArrayList<String> history = new ArrayList();
	
public ATM(int totalBalance){
	this.totalBalance=totalBalance;
}

public double withdraw(double amount) {
	if(amount>this.totalBalance) {
		return -1;
	}else {
		this.totalBalance -= amount;
		return this.totalBalance;
	}

}
public double deposit(double amount) {
	this.totalBalance += amount;
	return this.totalBalance;
}

public double getTotalBalance() {
	return this.totalBalance;
}
public void setHistory(String newEntry) {
	this.history.add(newEntry);
}
public ArrayList<String> getHistory(){
	return this.history;
}
}

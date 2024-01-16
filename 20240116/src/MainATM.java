import java.util.Scanner;

public class MainATM {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ATM atm = new ATM(10000);
		boolean salir = false;
		while(!salir) {
			menu();
			int opc = scanner.nextInt();
			switch(opc) {
			case 1:
				optionWithdraw(scanner, atm);
				break;
			case 2:
				optionDeposit(scanner, atm);
				break;
			case 3:
				optionCheckBalance(atm);
				break;
			case 4:optionCheckLatestOperations(atm);
				break;
			case 5: 
				salir= true;
				break;
			default:
				System.out.println("La opcion ingresada no es correcta.");
			}
			
		}
		scanner.close();
		
	}
	
	
	public static void menu() {
		System.out.println("Ingrese una opcion para continuar:");
		System.out.println("1. Extraer");
		System.out.println("2. Depositar");
		System.out.println("3. Consultar saldo");
		System.out.println("4. Ver ultimos movimientos");
		System.out.println("5. Salir");
		
	}
	
	public static void optionWithdraw(Scanner scanner, ATM atm) {
		System.out.println("Ingrese el monto a extraer: ");
		double amount = scanner.nextDouble();
		double result = atm.withdraw(amount);
		if(result<0) {
			System.out.println("El monto ingresado supera la cantidad de dinero disponible.");
		}else {
			atm.setHistory("Extraido: $"+ amount);
			System.out.println("Se extrajeron $"+amount);
		}
	}
	
	public static void optionDeposit(Scanner scanner, ATM atm) {
		System.out.println("Ingrese el monto a depositar: ");
		double amount = scanner.nextDouble();
		atm.deposit(amount);
		atm.setHistory("Depositado: $"+ amount);
		System.out.println("Se depositaron $"+amount);
	}
	
	public static void optionCheckBalance(ATM atm) {
		System.out.println("El saldo actual es de: $"+ atm.getTotalBalance());
		atm.setHistory("Consultado saldo: $"+ atm.getTotalBalance());
	}
	
	public static void optionCheckLatestOperations(ATM atm) {
		System.out.println("Listado de los ultimos movimientos: ");
		atm.getHistory().forEach((entry)->{
			System.out.println(entry.toString());
		});
	}
}

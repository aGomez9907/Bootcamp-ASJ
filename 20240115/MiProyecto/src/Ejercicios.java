import java.util.Scanner;

public class Ejercicios {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		//IsTriangle(scanner);
		//LetraONumero(scanner);
		//SumaDePares(scanner);
		//NumeroPerfecto(scanner);
		Dibujo(scanner);
	}

	public static boolean IsTriangle( Scanner scanner) {
		System.out.println("Ingrese el primer angulo en grados sexagesimales: ");
		int ang1 = scanner.nextInt();
		System.out.println("Ingrese el segundo angulo grados sexagesimales: ");
		int ang2= scanner.nextInt();
		System.out.println("Ingrese el tercer angulo grados sexagesimales: ");
		int ang3= scanner.nextInt();
		if(ang1+ang2+ang3 == 180) {
			System.out.println("El triangulo es válido");
			return true;
		}else {
			System.out.println("El triangulo no es válido");
			return false;
		}
	}
	
	public static void LetraONumero(Scanner scanner) {
		System.out.println("Ingrese una palabra: ");
		String myWord = scanner.next();
		if(Character.isAlphabetic(myWord.charAt(0))) {
			System.out.println("El primer caracter es una letra.");
			
		}else if(Character.isDigit(myWord.charAt(0))) {
			System.out.println("El primer caracter es un numero");
		}else {
			System.out.println("El primer caracter no es ni una letra ni un numero.");
		}
	}
	
	public static void SumaDePares(Scanner scanner) {
		System.out.println("Ingrese un numero: ");
		int myN = scanner.nextInt();
		System.out.println("Ingrese otro numero (mayor a "+myN+"): ");
		int myM = scanner.nextInt();
		int sum = 0;
		if(myN<myM) {
			for(int i=myN+1; i<myM;i++) {
				if(i%2==0) {
					sum += i;
				}
			}
			System.out.println("El resultado de la suma es: "+sum);
		}else {
			System.out.println("El segundo numero es erroneo.");
			SumaDePares(scanner);
		}
		
	}
	
	public static void NumeroPerfecto(Scanner scanner) {
		System.out.println("Ingrese un numero: ");
		int myN = scanner.nextInt();
		int sum = 0;
		for(int i=1; i<=(myN/2);i++) {
			if(myN % i == 0) {
				sum += i;
			}
		}
		
		if(sum == myN) {
			System.out.println("El numero es perfecto");
		}else {
			System.out.println("El numero no es perfecto");
		}
	}
	
	public static void Dibujo(Scanner scanner) {
		System.out.println("Ingrese un numero: ");
		int myN = scanner.nextInt();
		for(int i=0; i<myN;i++) {
			String asteriscos = "";
			if(i % 2 == 0) {			
				for(int j=0; j<myN;j++) {
					asteriscos += " *";
					}
			}else {
				for(int j=0; j<myN-1;j++) {
					if(j==0) {
						asteriscos+= "  *";
					}else {
						asteriscos += " *";
					}
					
					}
			}
			System.out.println(asteriscos);

		}
	}
}

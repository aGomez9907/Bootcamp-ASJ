package prueba_proyecto;
import java.util.ArrayList;
import java.util.Scanner;
public class MiClase {

	public static void main(String[] args) {
		
//		System.out.println("hola");
//		int edad = 25;
//		char letra;
//		double precio;
//		float otroPrecio = 123.33f;
//		String pepe;
//		
//		letra = 'a';
//		precio = 123.123;
//		pepe = "jajajaja";
//		
//		System.out.println(edad+" "+letra+" "+precio+" "+otroPrecio+" "+pepe);
		

		Scanner scanner = new Scanner(System.in);
//		int count = 0;
//		while(count < 3) {
//			System.out.println("Ingrese un numero entero:");
//			int myInt = scanner.nextInt();
//			System.out.println("El numero ingresado fue: "+ myInt);
//			count++;
//		}
		
		
		
//		System.out.println("Ingrese un Int:");
//		int myInt = scanner.nextInt();
//		scanner.nextLine();
//		System.out.println("Ingrese un Double:");
//		double myDouble = scanner.nextDouble();
//		scanner.nextLine();
//		System.out.println("Ingrese un String:");
//		String myString = scanner.nextLine();
//	
//		
//		System.out.println("String: "+myString);
//		System.out.println("Double: "+myDouble);
//		System.out.println("Int: "+myInt);
		
		
//		while(true) {
//		System.out.println("Ingrese un Int:");
//		int myInt = scanner.nextInt();
//		scanner.nextLine();
//		if(myInt>=6 && myInt <= 20) {
//			System.out.println("Weird");
//		}else if (myInt>=2 && myInt <= 5) {
//			System.out.println("Not weird");
//		}else if (myInt % 2 !=0) {
//			System.out.println("Weird");
//		}else if (myInt>=100 || myInt<= 0){
//			break;
//		}else {
//			System.out.println("Not weird");
//			
//		}
//		}
		
//	System.out.println("Ingrese un Int:");
//	int myInt = scanner.nextInt();
//	scanner.nextLine();
//	if(myInt >= 2 && myInt <= 20) {
//	for(int i = 1; i<11; i++) {
//		System.out.println(myInt+" x "+ i + " = "+ myInt*i);
//	}
//	}else {
//		System.out.println("El numero ingresado no es válido.");
//	}
		
		
		System.out.println("Ingrese la cantidad de consultas:");
		int q = scanner.nextInt();
		scanner.nextLine();
		for(int j = 0; j<q ; j++) {
			System.out.println("Ingrese el entero a:");
			int a = scanner.nextInt();
			scanner.nextLine();
			System.out.println("Ingrese el entero b:");
			int b = scanner.nextInt();
			scanner.nextLine();
			System.out.println("Ingrese el entero n:");
			int n = scanner.nextInt();
			scanner.nextLine();
			
			for(int k = 0; k<n; k++) {
				
				a+=  Math.pow(2,k)* b;
				System.out.print(a+ " ");
			}
			
			System.out.println();
		}
	
		

		
		scanner.close();
	}


		
	
	
}

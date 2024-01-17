import java.util.Scanner;

public class PersonaMain {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese el nombre de la persona 1: ");
		String nombre1 = scanner.nextLine();
		
		System.out.println("Ingrese la edad de la persona 1: ");
		int edad1 = scanner.nextInt();
		scanner.nextLine();
		System.out.println("Ingrese el sexo de la persona 1: ");
		char sexo1 = scanner.next().charAt(0);
		scanner.nextLine();
		System.out.println("Ingrese el peso de la persona 1: ");
		double peso1 = scanner.nextDouble();
		scanner.nextLine();
		System.out.println("Ingrese la altura de la persona 1: ");
		double altura1 = scanner.nextDouble();
		scanner.nextLine();
		
		Persona p1 = new Persona(nombre1,edad1,sexo1,peso1,altura1);
		
		System.out.println("Ingrese el nombre de la persona 2: ");
		String nombre2 = scanner.nextLine();
		
		System.out.println("Ingrese la edad de la persona 2: ");
		int edad2 = scanner.nextInt();
		scanner.nextLine();
		System.out.println("Ingrese el sexo de la persona 2: ");
		char sexo2 = scanner.next().charAt(0);
		scanner.nextLine();
		
		Persona p2 = new Persona(nombre2,edad2,sexo2);
		Persona p3 = new Persona();
		
		comprobarIMC(p1);
		comprobarIMC(p2);
		comprobarIMC(p3);
		comprobarEdad(p1);
		comprobarEdad(p2);
		comprobarEdad(p3);
		
		System.out.println(p1.toString());
		System.out.println(p2.toString());
		System.out.println(p3.toString());
	}
	
	public static void comprobarIMC(Persona p) {
		int imc = p.calcularIMC();
		if(imc == -1) {
			System.out.println("La persona "+p.getNombre()+" tiene bajo peso.");
		}else if(imc == 0) {
			System.out.println("La persona "+p.getNombre()+" tiene un peso ideal.");
		}else if(imc == 1) {
			System.out.println("La persona "+p.getNombre()+" tiene sobrepeso.");
		}else {
			return;
		}
	}
	
	public static void comprobarEdad(Persona p) {
		if(p.esMayorDeEdad()) {
			System.out.println("La persona "+p.getNombre()+" es mayor de edad");
		}else {
			System.out.println("La persona "+p.getNombre()+" NO es mayor de edad");
		}
	}

}

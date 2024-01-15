import java.util.Scanner;

public class Estructuras {

	public static void main(String[] args) {
		//pedrir al user que ingerse ¿Cuantas notas quiere ingresar?
		//Segun eso pedir el valor de cada una (1 al 10)
		//Sacar el promedio
		//PD: hacerlo con for, while y do-while
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese cuantas notas quiere ingresar: ");
		int cantidadNotas = scanner.nextInt();
		//PromedioConFor(cantidadNotas, scanner);
		//PromedioConWhile(cantidadNotas, scanner);
		//PromedioConDoWhile(cantidadNotas, scanner);

	}

	
	public static void PromedioConFor(int notas, Scanner scanner) {
		double prom = 0;
		for(int i=0; i<notas;i++) {
		System.out.println("Ingrese la nota N°"+(i+1)+": ");
		int nota = scanner.nextInt();
		prom += nota;
		}
		System.out.println("El promedio es: "+(prom/notas));
	}
	
	
	public static void PromedioConWhile(int notas, Scanner scanner) {
		double prom = 0;
		int i=0;
		while(i<notas) {
		System.out.println("Ingrese la nota N°"+(i+1)+": ");
		int nota = scanner.nextInt();
		prom += nota;
		i++;
		}
		System.out.println("El promedio es: "+(prom/notas));
	}
	
	public static void PromedioConDoWhile(int notas, Scanner scanner) {
		double prom = 0;
		int i=0;
		do{
		System.out.println("Ingrese la nota N°"+(i+1)+": ");
		int nota = scanner.nextInt();
		prom += nota;
		i++;
		}while(i<notas);
		System.out.println("El promedio es: "+(prom/notas));
	}
}

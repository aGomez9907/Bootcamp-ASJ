import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class MatrizConOpciones {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int [][] matrix = generateMatrix(4);
		//int [][] matrix = generateRandomMatrix(4);
 		boolean isFull = false;
		boolean salir = false;
		while(!salir) {
			menu(isFull);
			int opc;
			if(!isFull) {
				opc=1;
			}else {
				opc = scanner.nextInt();
			}
			switch(opc) {
			case 1:
				isFull=fillMatrix(scanner, matrix);
				break;
			case 2:
				sumRowOrCol(scanner, matrix, 1);
				break;
			case 3:
				sumRowOrCol(scanner, matrix, 2);
				
				break;
			case 4:
				sumDiag(matrix, true);				
				break;
			case 5: 
				sumDiag(matrix, false);
				break;
			case 6:
				media(matrix);
				break;
			case 7:
				salir= true;
				break;
			default:
				System.out.println("La opcion ingresada no es correcta.");
			}
			
		}
		scanner.close();
	}
	
	public static void menu(boolean isFull) {
		
		if(isFull) {
			System.out.println("Ingrese una opcion para continuar:");
			System.out.println("1. Rellenar matriz");
			System.out.println("2. Sumar una fila");
			System.out.println("3. Sumar una columna");
			System.out.println("4. Sumar diagonal principal");
			System.out.println("5. Sumar diagonal inversa");
			System.out.println("6. Media de todos los valores");
			System.out.println("7. Salir");
		}else {
			System.out.println("Debe rellenar la matriz para comenzar.");
		}
	
		
	}
	
	
	public static int[][] generateMatrix(int rowCol) {
		int [] []matrix = new int [rowCol][rowCol];
		return matrix;
	}
	
	
	public static boolean fillMatrix(Scanner scanner, int[][]matrix) {
		for(int i=0 ; i<matrix.length; i++) {
			for (int j=0; j<matrix.length; j++) {
				System.out.println("Ingrese un valor para la posicion ["+i+"]["+j+"]:");
				matrix[i][j]= scanner.nextInt();
			}
		}
		return true;
	}
	
	public static void sumRowOrCol(Scanner scanner, int[][] originalMatrix, int opt) {
		int [] []auxMatrix = new int [originalMatrix.length+1][originalMatrix.length+1];
		int sum = 0;
		int row = -1;
		int col = -1;
		scanner.nextLine();
		switch(opt){
		case 1:
			System.out.println("Ingrese cual fila desea sumar (1 al "+ originalMatrix.length+")");
			row = scanner.nextInt()-1;
			for(int i=0; i<originalMatrix.length; i++) {
				sum += originalMatrix[row][i];
			}
			break;
		case 2:
			System.out.println("Ingrese cual columna desea sumar (1 al "+ originalMatrix.length+")");
			col = scanner.nextInt()-1;
			for(int i=0; i<originalMatrix.length; i++) {
				sum += originalMatrix[i][col];
			}
			break;
		default:
			System.out.println("La opcion ingresada no es correcta.");
			sumRowOrCol(scanner, originalMatrix, opt);
			break;
		}
		
		
		
		for(int i=0 ; i<originalMatrix.length; i++) {
			for (int j=0; j<originalMatrix.length; j++) {
				auxMatrix[i][j]= originalMatrix[i][j];
			}
		}
		
		if(col>=0) {
			auxMatrix[auxMatrix.length-1][col] = sum;
		}else if(row>=0) {
			auxMatrix[row][auxMatrix.length-1] = sum;
		}
		
		for(int i=0; i<auxMatrix.length; i++) {
			for(int j=0; j<auxMatrix.length; j++) {
				System.out.print(auxMatrix[i][j]+" ");
			}
			System.out.println("");
		}	
	}
	
	public static void sumDiag(int[][] matrix, boolean isMain) {
		int sum = 0;
		String diagonal = "";
		if(isMain) {
			for(int i=0; i<matrix.length; i++) {
				sum += matrix [i][i];
			}	
		}else {
			for(int i=0; i<matrix.length; i++) {
				sum += matrix [i][matrix.length - 1 -i];
			}
		}
		if(isMain) {
			diagonal = "principal";
		}else {
			diagonal = "inversa";
		}
		System.out.println("La suma de la diagonal "+ diagonal+ " es: "+ sum);

		
	}
	
	public static int[][] generateRandomMatrix(int rowCol) {
		int [] []matrix = new int [rowCol][rowCol];
		Set<Integer> completeSet = new HashSet<Integer>();
		do {
			
			completeSet.add((int)(Math.random() * 1000));
		}while(completeSet.size() <  Math.pow(rowCol,2));
		ArrayList<Integer> auxArray = new ArrayList<>(completeSet);
		
		for(int i=0 ; i<rowCol; i++) {
			for (int j=0; j<rowCol; j++) {
				matrix[i][j]= auxArray.remove(0);
			}
		}
		for(int i=0; i<rowCol; i++) {
			for(int j=0; j<rowCol; j++) {
				System.out.print(matrix[i][j]+" ");
			}
			System.out.println("");
		}
		return matrix;
	}
	
	public static double media(int [][] matrix) {
		double sum = 0;
		for(int i=0; i<matrix.length; i++) {
			for(int j=0; j<matrix.length; j++) {
				sum += matrix[i][j];
			}
		}
		System.out.println("La media de toda la matriz es: "+(sum / (Math.pow(matrix.length, 2))));
		return sum / (Math.pow(matrix.length, 2));
	}
}

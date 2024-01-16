
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class MatrizSinRepetir {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		sumRowOrCol(scanner, generateMatrix(3)); 
		scanner.close();
	}
	
	public static int[][] generateMatrix(int rowCol) {
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
	
	public static void sumRowOrCol(Scanner scanner, int[][] originalMatrix) {
			int [] []auxMatrix = new int [originalMatrix.length+1][originalMatrix.length+1];
			int sum = 0;
			int row = -1;
			int col = -1;
			System.out.println("Ingrese una opcion: ");
			System.out.println("1. Sumar una fila");
			System.out.println("2. Sumar una columna");
			int opt = scanner.nextInt();
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
				sumRowOrCol(scanner, originalMatrix);
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

}

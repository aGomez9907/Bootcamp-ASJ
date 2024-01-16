import java.util.ArrayList;
import java.util.Scanner;

public class RotarArray {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		ArrayList<Integer> arrayARotar = new ArrayList<Integer>();
		for(int i=0 ; i<15; i++) {
			System.out.println("Ingrese el numero "+ i+1+ ":");
			int num = scanner.nextInt();
			arrayARotar.add(num);
		}
		
		System.out.println(rotarArray(arrayARotar).toString());
		scanner.close();

	}
	
	public static ArrayList<Integer> rotarArray(ArrayList<Integer> arrayARotar) {
		int last = (int) arrayARotar.removeLast();
		for(int i = arrayARotar.size(); i < 1; i--) {
			arrayARotar.add(i, arrayARotar.get(i-1));
		}
		arrayARotar.add(0, last);
		return arrayARotar;
	}

}

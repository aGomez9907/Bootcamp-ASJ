import java.util.ArrayList;

public class VeinteNumerosRandom {

	public static void main(String[] args) {
		System.out.println(generateRandomAndSort(20).toString());

	}
	
	public static ArrayList<Integer> generateRandomAndSort(int max) {
		ArrayList<Integer> intArray = new ArrayList<Integer>();
		ArrayList<Integer> auxArray = new ArrayList<Integer>();
		for(int i=0; i<max; i++) {
			intArray.add((int) (Math.random() * 100));
		}
		System.out.println(intArray);
		for (int i=0; i<intArray.size(); i++){
			if(intArray.get(i) % 2 == 0) {
				auxArray.addFirst(intArray.get(i));
			}else {
				auxArray.addLast(intArray.get(i));
			}
		}
		return auxArray;
	}

}

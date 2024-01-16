import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PhoneWords {

	public static void main(String[] args) {
		
		decode("2 4 88 2 66 8 33 66 0 555 666 7777 0 7777 444 6 7 7777 666 66 7777");
	}

	public static void decode(String codigo) {
		final Map<Integer, List<Character>> digits = new HashMap<>();
		
		
		digits.put(2, Arrays.asList('a', 'b', 'c'));
		digits.put(3, Arrays.asList('d', 'e', 'f'));
		digits.put(4, Arrays.asList('g', 'h', 'i'));
		digits.put(5, Arrays.asList('j', 'k', 'l'));
		digits.put(6, Arrays.asList('m', 'n', 'o'));
        digits.put(7, Arrays.asList('p', 'q', 'r', 's'));
        digits.put(8, Arrays.asList('t', 'u', 'v'));
        digits.put(9, Arrays.asList('w', 'x', 'y', 'z'));
		
		ArrayList<String> splitNumbers = new ArrayList<String>(Arrays.asList(codigo.split(" ")));
		String palabra = "";
		for(String word: splitNumbers) {
			String currentDigit = String.valueOf(word.charAt(0)); 
			if(currentDigit.equals("0")) {
				palabra += " ";
			}else{
				palabra += digits.get(Integer.parseInt(currentDigit)).get((int)(word.length()-1));
			}
			//System.out.println(Integer.parseInt(currentDigit));
			//System.out.println(palabra);
			//System.out.println(word.length());
			//System.out.println(word);
			
			
			
		}
		System.out.println(palabra);
		
	}
}

import java.io.UnsupportedEncodingException;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) throws UnsupportedEncodingException {
		int inte;
		double doub;
		float flo;
		char cha;
		byte byt;
		long lon;
		short sho;
//		System.out.println("Integer:"+ Integer.MIN_VALUE + " "+ Integer.MAX_VALUE);
//		System.out.println("Double:"+ Double.MIN_VALUE + " "+ Double.MAX_VALUE);
//		System.out.println("Cloat:"+ Float.MIN_VALUE + " "+ Float.MAX_VALUE);
//		System.out.println("Char:"+ Character.MIN_VALUE + " "+ Character.MAX_VALUE);
//		System.out.println("Byte:"+ Byte.MIN_VALUE + " "+ Byte.MAX_VALUE);
//		System.out.println("Long:"+ Long.MIN_VALUE + " "+ Long.MAX_VALUE);
//		System.out.println("Short:"+ Short.MIN_VALUE + " "+ Short.MAX_VALUE);
		
		//casting
		inte = 40;
		doub = 12.5;
		
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese una palabra: ");
		String st = scanner.next();
		String aa = "";
		
		for(int i=0; i<st.toCharArray().length;i++) {
			if(i==0) {
				aa += (int)st.toCharArray()[i];
				continue;
			}
			aa += " "+(int)st.toCharArray()[i];
		
		}
		System.out.println(aa);
	}

}

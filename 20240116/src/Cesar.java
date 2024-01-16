
public class Cesar {

	public static void main(String[] args) {
		String palabra = "klmnñopqrst";
		System.out.println(code(palabra));
		

	}
	
	public static String code(String word) {
		String codedString = "";
		word = word.toLowerCase();
		for(char character: word.toCharArray()) {

			//esto anda pero no cifra la ñ
//			if((int)character == 121){
//				codedString += 'a';
//			}else if((int)character == 122) {
//				codedString += 'b';
//			}else if((int) character >=97 && (int)character <= 120) {
//				codedString += (char)((int)character+2);
//			}else if((int) character == 32) {
//				codedString += " ";
//			}else {
//				codedString += character;
//			}
			
			//esto anda pero está horrible, seguro se puede optimizar
			if((int)character == 121){
				codedString += 'a';
			}else if((int)character == 122) {
				codedString += 'b';
			}else if((int) character >=97 && (int)character < 109) {
				codedString += (char)((int)character+2);
			}else if((int) character >110 && (int)character <= 120) {
				codedString += (char)((int)character+2);
			}else if(character == 'ñ') {
				codedString += 'p';
			}else if(character == 'm') {
				codedString += 'ñ';
			}else if (character == 'n') {
				codedString += 'o';
			}else if((int) character == 32) {
				codedString += " ";
			}else {
				codedString += character;
			}
		}
		return codedString;
	}

}

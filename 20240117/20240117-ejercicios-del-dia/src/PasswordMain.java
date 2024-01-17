import java.util.ArrayList;
import java.util.Scanner;

public class PasswordMain {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Password password = new Password();
		for (String currentPass :obtenerContraseñas(3,scanner)) {
			password.setLongitud(currentPass.length());
			password.setContrasenia(currentPass);
			if(password.esFuerte()) {
				System.out.println("La contraseña "+currentPass+" es fuerte.");
			}else {
				System.out.println("La contraseña "+currentPass+" es débil.");
			}
			
			
		}
		
	}
	
	public static ArrayList<String> obtenerContraseñas(int cantidad,Scanner scanner){
		ArrayList<String> pwArr = new ArrayList<String>();
		for(int i=0; i<cantidad;i++) {
			System.out.println("Ingrese la contraseña "+(i+1)+": ");
			String pass = scanner.nextLine();
			pwArr.add(pass);
			
		}
		return pwArr;
	}
	
	

	


}

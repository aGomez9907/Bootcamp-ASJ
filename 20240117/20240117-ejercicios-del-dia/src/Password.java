
public class Password {
	private int longitud;
	private String contrasenia;
	
	public Password() {
		this.longitud = 8;
	}
	public Password(int longitud) {
		this.longitud = longitud;
		this.contrasenia = generarPassword(longitud);
	}
	
	
	private String generarPassword(int longitud) {
		String pw= "";
		for (int i=0;i<longitud; i++) {
			pw += (char)((Math.random() * 93)+33);
		}
		return pw;
	}
	
	public boolean esFuerte() {
		int mayusculas = 0;
		int minusculas = 0;
		int numeros = 0;
		
		for(char character: contrasenia.toCharArray()) {
			switch(character) {
			case 'a','b','c','d','e','f','g','h','i','j','k','l','n','m','o','p','q','r','s','t','u','v','w','x','y','z':
				minusculas++;
			break;
			case 'A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z':
				mayusculas++;
			break;
			case '0','1','2','3','4','5','6','7','8','9':
				numeros++;
			break;
			default:
				continue;
			}
		}
		
		if(mayusculas>2 && minusculas>1 && numeros>5) {
			return true;
		}else return false;
	}
	
	public int getLongitud() {
		return longitud;
	}
	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}
	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
	
	
}

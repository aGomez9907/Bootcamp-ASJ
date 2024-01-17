
public class Persona {
	private String nombre;
	private int edad;
	private int dni;
	private char sexo;
	private double peso;
	private double altura;
	
	public Persona() {
		this.nombre = "";
		this.edad = 0;
		this.sexo = 'H';
		this.dni = generarDNI();
		this.peso = 0;
		this.altura =0;
	}
	public Persona(String nombre, int edad, char sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = comprobarSexo(sexo);
		this.dni = generarDNI();
		this.peso = 0;
		this.altura =0;
	}

	public Persona(String nombre, int edad, char sexo, double peso, double altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generarDNI();
		this.sexo = comprobarSexo(sexo);
		this.peso = peso;
		this.altura = altura;
	}
	
	public int calcularIMC() {
		double imc;
		if(this.altura !=0 && this.peso!=0) {
			imc = this.peso/(Math.pow(this.altura, 2));
			if(imc<20) {
				return -1;
			}else if(imc>=20 && imc<=25) {
				return 0;
			}else {
				return 1;
			}
		}else {
			System.out.println("Debe ingresar altura y peso.");
			return -69;
		}
		
	}
	
	private char comprobarSexo(char sexo) {
		if(sexo == 'H' || sexo == 'M') {
			return sexo;
		}else return 'H';
	}
	
	public boolean esMayorDeEdad() {
		return (this.edad>=18);
	}
	
	private int generarDNI() {
		String dni= "";
		for (int i=0;i<8; i++) {
			dni += (int) (Math.random() * 9);
		}
		return Integer.valueOf(dni);
	}
	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", edad=" + edad + ", dni=" + dni + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	public int getDni() {
		return dni;
	}
	public void setDni(int dni) {
		this.dni = dni;
	}
	public char getSexo() {
		return sexo;
	}
	public void setSexo(char sexo) {
		this.sexo = sexo;
	}
	public double getPeso() {
		return peso;
	}
	public void setPeso(double peso) {
		this.peso = peso;
	}
	public double getAltura() {
		return altura;
	}
	public void setAltura(double altura) {
		this.altura = altura;
	}
	
	
	
	
	
}

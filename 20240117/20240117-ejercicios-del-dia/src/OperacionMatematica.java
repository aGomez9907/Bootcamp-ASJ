
public class OperacionMatematica {
	private double primerNum;
	private double segundoNum;
	private char operacion;
	
	public OperacionMatematica(double primerNum, double segundoNum, char operacion) {
		this.primerNum = primerNum;
		this.segundoNum = segundoNum;
		this.operacion = operacion;
	}
	
	
	public double operar() {
		switch(operacion) {
		case '+':
			return (double)primerNum+segundoNum;
		case'-':
			return (double)primerNum-segundoNum;
		case'*':
			return (double)primerNum*segundoNum;
		case'/':
			if(segundoNum!=0) {
				return (double)primerNum/segundoNum;
			}else {
				System.out.println("La operacion no puede ser realizada.");
				return (double)0;
			}
		default:
			System.out.println("Debe definir un operador válido.");
			return 0;
			
		}	
	}


	public double getPrimerNum() {
		return primerNum;
	}


	public void setPrimerNum(double primerNum) {
		this.primerNum = primerNum;
	}


	public double getSegundoNum() {
		return segundoNum;
	}


	public void setSegundoNum(double segundoNum) {
		this.segundoNum = segundoNum;
	}


	public char getOperacion() {
		return operacion;
	}


	public void setOperacion(char operacion) {
		this.operacion = operacion;
	}
	
	
	
	
	
}

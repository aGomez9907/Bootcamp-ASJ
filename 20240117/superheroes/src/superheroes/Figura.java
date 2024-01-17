package superheroes;

public class Figura {
	
	private String codigo;
	private Double precioDouble;
	private Superheroe superheroe;
	private Dimension dimension;
	
	
	
	//VER CONSTRUCTOR
	public Figura(String codigo, Double precioDouble) {
		super();
		this.codigo = codigo;
		this.precioDouble = precioDouble;
		this.superheroe = new Superheroe();
		this.dimension = new Dimension();
	}
	
	
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public Double getPrecioDouble() {
		return precioDouble;
	}
	public void setPrecioDouble(Double precioDouble) {
		this.precioDouble = precioDouble;
	}


	
	public Superheroe getSuperheroe() {
		return superheroe;
	}


	public void setSuperheroe(Superheroe superheroe) {
		this.superheroe = superheroe;
	}


	public Dimension getDimension() {
		return dimension;
	}


	public void setDimension(Dimension dimension) {
		this.dimension = dimension;
	}


	@Override
	public String toString() {
		return "Figura [codigo=" + codigo + ", precioDouble=" + precioDouble + ", superheroe=" + superheroe
				+ ", dimension=" + dimension + "]";
	}


	
	public void subirPrecio(Double cantidad) {
		
		this.precioDouble += cantidad;
		
	}

	
	
	

	
	
	

}

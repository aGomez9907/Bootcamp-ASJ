package superheroes;

import java.security.PublicKey;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Coleccion {
	
	private String nombreColeccion;
	
	private List<Figura> listaFiguras;

	public Coleccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
		this.listaFiguras = new ArrayList<Figura>();
	}

	public String getNombreColeccion() {
		return nombreColeccion;
	}

	public void setNombreColeccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
	}

	@Override
	public String toString() {
		return "Coleccion [nombreColeccion=" + nombreColeccion + ", listaFiguras=" + listaFiguras + "]";
	}


	public void aniadirFigura(Figura figura) {
		
		this.listaFiguras.add(figura);
		
	}
	
	
	public void subirPrecio(Double cantidad, String codigo) {
		
		
		this.listaFiguras.forEach((fig)->{
			
			if(fig.getCodigo().equals(codigo)) {
				
				fig.subirPrecio(cantidad);
										
			}
		} );
	
	}

	public List<Figura> conCapa() {
		
		return this.listaFiguras.stream().filter(capa->
			
			capa.getSuperheroe().isCapa()
			
		).collect(Collectors.toList());

		
	}
	
	public Figura masValioso() {
		
		double precioMax = 0;
		Figura codigoFiguraMax = null;
		
		for (Figura figura : listaFiguras) {
			
			if(figura.getPrecioDouble() > precioMax) {
				precioMax = figura.getPrecioDouble();
				codigoFiguraMax = figura;
			}
			
			
			
		}
		
		return codigoFiguraMax;

		
		
	}
	
	
	public void getValorColeccion(){
		
		double acumulador = 0.0;
		
		for (Figura figura : listaFiguras) {
			
		
			acumulador += figura.getPrecioDouble();
			
			
		}
		
	}		
	
	public void getVolumenColeccion() {
		
		double volumenTotal = 0.0;
		
		for (Figura figura : listaFiguras) {
			
			volumenTotal += figura.getDimension().getVolumen();
			
		}
		}
		
		
	}
	
	

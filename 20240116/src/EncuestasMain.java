import java.util.ArrayList;

public class EncuestasMain {

	public static void main(String[] args) {
		Encuestas primero = new Encuestas(1,1,600);
		ArrayList<Encuestas> data = new ArrayList<Encuestas>();
		generateData(data, 10);
		System.out.println("Datos:\n"+data.toString());
		System.out.println("Porcentaje de hombres: "+sex(data, 1)+"%");
		System.out.println("Porcentaje de mujeres: "+sex(data, 2)+"%");
		System.out.println("Porcentaje de hombres que trabajan: "+work(data, 1,1)+"%");
		System.out.println("Porcentaje de mujeres que trabajan: "+work(data, 2,1)+"%");
		System.out.println("Promedio de sueldo hombres: $"+wage(data, 1));
		System.out.println("Promedio de sueldo mujeres: $"+wage(data, 2));
	}
	
	public static ArrayList<Encuestas> generateData(ArrayList<Encuestas> data, int len) {
		for(int i=0; i<len; i++) {
			int sex;
			int work;
			int wage;
			if(((int)(Math.random() * 100)) % 2 == 0) {
				sex = 1;
			}else {
				sex = 2;
			}
			if(((int)(Math.random() * 100)) % 2 == 0) {
				work = 1;
				wage = (int)((Math.random() * 1400)+600);
			}else {
				work = 2;
				wage = 0;
			}

			data.add(new Encuestas(sex,work, wage));
		}
		return data;
	}
	
	public static double sex(ArrayList<Encuestas> data, int select) {
		int count = 0;
		
		for(Encuestas index: data) {
			if(index.getSex()==select) {
				count++;
			}
		}

		double perc = ((double)count/(double)data.size())*100;
		return perc;
	}
	public static double work(ArrayList<Encuestas> data, int selectSex, int selectWork) {
		int count = 0;
		int countSex=0;
		
		for(Encuestas index: data) {
			if(index.getSex()==selectSex) {
				countSex++;
			}
			if(index.getSex()==selectSex && index.getWork()==selectWork) {
				count++;
			}
		}

		double perc = ((double)count/(double)countSex)*100;
		return perc;
	}
	
	public static double wage(ArrayList<Encuestas> data, int selectSex) {
		int sum = 0;
		int count = 0;
		
		for(Encuestas index: data) {
			if(index.getSex()==selectSex && index.getWork()==1) {
				sum+=index.getWage();
				count++;
			}
		}

		double perc = ((double)sum/(double)count);
		return perc;
	}
	
}

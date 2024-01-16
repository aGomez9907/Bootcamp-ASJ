
public class Encuestas {
	private int sex;
	private int work;
	private int wage;
	
	public Encuestas(int sex, int work, int wage) {
		this.sex = sex;
		this.work = work;
		this.wage = wage;
	}

	public int getSex() {
		return sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

	public int getWork() {
		return work;
	}

	public void setWork(int work) {
		this.work = work;
	}

	public int getWage() {
		return wage;
	}

	public void setWage(int wage) {
		this.wage = wage;
	}

	@Override
	public String toString() {
		return "[sex=" + sex + ", work=" + work + ", wage=" + wage + "]\n";
	}
	
	
	


}

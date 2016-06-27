package test.com;

import java.io.Serializable;

public abstract class Base<E, PK extends Serializable> {
	
	private void show(PK id) {
		System.out.println("这是输出:" + id);
	}
}

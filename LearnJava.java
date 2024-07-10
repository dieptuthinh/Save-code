String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.println(i);
}
System.out.println(cars[0]);
//-----------------------
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
System.out.println(myNumbers[1][2]); // Outputs 7

for (int i = 0; i < myNumbers.length; ++i) {
  for (int j = 0; j < myNumbers[i].length; ++j) {
    System.out.println(myNumbers[i][j]);
  }
}
for (int[] row : myNumbers) {
  for (int i : row) {
    System.out.println(i);
  }
}
//----------------------
public class Main {
  static void myMethod(String fname, int age) {
    System.out.println(fname + " is " + age);
  }

  public static void main(String[] args) {
    myMethod("Liam", 5);
    myMethod("Jenny", 8);
    myMethod("Anja", 31);
  }
}
//------------------
//Method Overloading
static int plusMethod(int x, int y) {
  return x + y;
}

static double plusMethod(double x, double y) {
  return x + y;
}

public static void main(String[] args) {
  int myNum1 = plusMethod(8, 5);
  double myNum2 = plusMethod(4.3, 6.26);
  System.out.println("int: " + myNum1);
  System.out.println("double: " + myNum2);
}
//----------------------------
import package.name.Class;   // Import a single class
import package.name.*;   // Import the whole package
//---------------------------
//Using the Scanner class to get user input:
Scanner myObj = new Scanner(System.in);
System.out.println("Enter username");

String userName = myObj.nextLine();
System.out.println("Username is: " + userName);
//------------------------------
// Inner Classes
OuterClass myOuter = new OuterClass();
OuterClass.InnerClass myInner = myOuter.new InnerClass();
System.out.println(myInner.y + myOuter.x);
//----------------------------
LocalDate myObj = LocalDate.now(); // Create a date object
System.out.println(myObj); // Display the current date
//--------------------------
ArrayList<String> cars = new ArrayList<String>(); // Create an ArrayList object

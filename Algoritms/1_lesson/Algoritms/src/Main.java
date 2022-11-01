import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

//        Scanner scanner = new Scanner(System.in);
//
//        int x = scanner.nextInt();
//        int y = scanner.nextInt();
//
//
//
//        long start = System.nanoTime();
//        System.out.println(gcd(x, y));
//        long timeResult = System.nanoTime() - start;
////        System.out.println(((double) timeResult) / 1_000_000);
//        System.out.println(timeResult);

        System.out.println("=============================================");



        int[] arr = new int[] {1,2,3,4,5,6,7,8,9};
        int[] arr2 = new int[] {1,1,2,2,3,3,4,5,5,6,6};

//        System.out.println(task1(arr,5));
        System.out.println(task2(arr2));





    }

    public static int gcd(int x, int y){
        int a = Math.max(x, y);
        int b = Math.max(x, y);


        while(b!=0){
            int c = a%b;
            a=b;
            b=c;
        }
        return a;
    }


    public static int task1(int[] arr, int value){

        for(int i = 0; i < arr.length;i++){
            if(arr[i] == value){
                return i;
            }
        }

        return -1;

    }


    public static int task2(int[] arr){

        for(int i = 0; i < arr.length;i+=2){
            if(arr[i]!= arr[i+1]){
                return arr[i];
            }
        }

        return -1;

    }











}








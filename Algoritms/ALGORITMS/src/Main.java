public class Main {
    public static void main(String[] args) {
        (new Thread(() -> {
            try {Thread.sleep(20_000); System.out.println("Over 20 seconds!"); }
            catch (InterruptedException e) { throw new RuntimeException(e); } })).start();
        System.out.println(fib(49)); } public static long fib(int n) { if (n < 2) { return 1;
            } return fib(n - 1) + fib(n - 2);
    }
}